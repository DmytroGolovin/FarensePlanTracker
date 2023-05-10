import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import YoutubeHelper from 'src/app/shared/helpers/youtube.helper';
import { ClientModel } from 'src/app/shared/models/entities/client.model';
import { PlanModel } from 'src/app/shared/models/entities/plan.model';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.scss']
})
export class PlanOverviewComponent {
  public plan: PlanModel | undefined;
  public apiLoaded: boolean = false;

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route.parent?.parent?.data.subscribe((res: any) => {
      const clientData = res.clientData;

      if(!clientData || clientData.error){
       return;
      }

      const currentClient: ClientModel = clientData.data['client'];
      this.plan = currentClient?.plan;
      console.log(this.plan)
    });

    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  public getVideoId(){
    return YoutubeHelper.getVideoId(this.plan?.videoUrl);
  }
}
