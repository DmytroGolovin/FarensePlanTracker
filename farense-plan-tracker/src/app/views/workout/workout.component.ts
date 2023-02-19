import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseModel } from 'src/app/shared/models/entities/exercise.model';
import { ExercisesService } from 'src/app/shared/services/hygraph/exercises/exercises.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  public exercises: Array<ExerciseModel> = [];

  constructor(private _route: ActivatedRoute){
  }
  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['workoutData'];
      if(!res.data.error) {
        this.exercises = res.data.exercises;
      } else {
        console.log(res.data.error);
      }
    });
  }
}
