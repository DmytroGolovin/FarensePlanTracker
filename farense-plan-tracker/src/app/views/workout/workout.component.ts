import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/shared/services/hygraph/exercises/exercises.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  constructor(private _exercisesService: ExercisesService,){
  }
  ngOnInit(): void {
    this._exercisesService.getExercises().subscribe(({ data, error }: any) => {
      console.log(data);
      // this.exercises = data.exercises;
      console.log(error);
    });
  }
}
