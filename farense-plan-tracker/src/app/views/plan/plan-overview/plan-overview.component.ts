import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from 'src/app/shared/models/entities/client.model';
import { PlanModel } from 'src/app/shared/models/entities/plan.model';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.scss']
})
export class PlanOverviewComponent {
  public plan: PlanModel | undefined;

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
  }
}
