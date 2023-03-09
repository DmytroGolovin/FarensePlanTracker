import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutExerciseModel } from 'src/app/shared/models/entities/workout-exercise.model';
import { WorkoutModel } from 'src/app/shared/models/entities/workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  public exercises: Array<WorkoutExerciseModel> = [];

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    this._route.data.subscribe( (res: any) => {

      const dashData = res.workoutData;

      if(!dashData || dashData.error){
       return;
      }

      const currentWorkout: WorkoutModel = dashData.data['workout'];

      if(currentWorkout) {
        this.exercises = currentWorkout.exercises;
      }
    });
  }
}
