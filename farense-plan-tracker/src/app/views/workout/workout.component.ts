import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutExerciseModel } from 'src/app/shared/models/entities/workout-exercise.model';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';
import { UserBarService } from 'src/app/shared/services/helpers/user-bar.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  public exercises: Array<WorkoutExerciseModel> = [];

  constructor(private _route: ActivatedRoute, private _userBarService: UserBarService){
  }

  ngOnInit(): void {
    this._route.data.subscribe( (res: any) => {

      const workoutData = res.workoutData;

      if(!workoutData || workoutData.error){
       return;
      }

      const currentWorkout: WorkoutModel = workoutData.data['workout'];

      if(currentWorkout) {
        this.exercises = currentWorkout.workoutExercises;

        this._userBarService.setRouteTitle(currentWorkout.title);
      }
    });
  }
}
