import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from 'src/app/shared/models/entities/client.model';
import { PlanWorkoutModel } from 'src/app/shared/models/entities/plan-workout.model';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  public workouts: Array<PlanWorkoutModel> | undefined = [];

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route.parent?.data.subscribe((res: any) => {
      const clientData = res.clientData;

      if(!clientData || clientData.error){
       return;
      }

      const currentClient: ClientModel = clientData.data['client'];
      console.log(currentClient);
      this.workouts = currentClient?.plan?.workouts;
    });
  }
}
