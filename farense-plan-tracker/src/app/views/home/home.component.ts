import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public clientExists = true;

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route?.data.subscribe((res: any) => {
      const clientData = res.clientData;
      console.log(clientData)

      if(!clientData || clientData.error || !clientData.data?.client){
        this.clientExists = false;
        return;
      }
    });
  }
}
