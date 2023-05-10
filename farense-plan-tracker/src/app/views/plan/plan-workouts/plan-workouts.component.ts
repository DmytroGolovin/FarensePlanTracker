import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from 'src/app/shared/models/entities/client.model';
import { PlanWorkoutModel } from 'src/app/shared/models/entities/plan-workout.model';

@Component({
  selector: 'app-plan-workouts',
  templateUrl: './plan-workouts.component.html',
  styleUrls: ['./plan-workouts.component.scss']
})
export class PlanWorkoutsComponent {
  public workouts: Array<PlanWorkoutModel> | undefined = [];

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route.parent?.parent?.data.subscribe((res: any) => {
      const clientData = res.clientData;

      if(!clientData || clientData.error){
       return;
      }

      const currentClient: ClientModel = clientData.data['client'];
      this.workouts = currentClient?.plan?.workouts;
    });
  }
}
