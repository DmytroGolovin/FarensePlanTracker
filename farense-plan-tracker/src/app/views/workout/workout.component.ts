import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutExerciseModel } from 'src/app/shared/models/entities/workout-exercise.model';

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
    this._route.data.subscribe( data => {
      const res = data['workoutData'];
      if(!res.data.error) {
        this.exercises = res.data?.workout?.workoutExercises;
      } else {
        console.log(res.data.error);
      }
    });
  }
}
