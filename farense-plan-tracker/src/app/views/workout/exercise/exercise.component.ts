import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetModel } from 'src/app/shared/models/entities/set.model';
import { WorkoutExerciseModel } from 'src/app/shared/models/entities/workout-exercise.model';
import { UserBarService } from 'src/app/shared/services/utils/user-bar.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  public completedSetList: Array<SetModel> = [{
    order: 0
  }];
  public currentExercise: WorkoutExerciseModel | undefined = undefined;

  constructor(private _route: ActivatedRoute, private _userBarService: UserBarService){}

  ngOnInit(): void {
    this._route.data.subscribe( (res: any) => {

      const exerciseData = res.exerciseData;

      if(!exerciseData || exerciseData.error){
       return;
      }

      this.currentExercise = exerciseData.data['workoutExercise'];

      if(this.currentExercise?.exercise?.name){
        this._userBarService.setRouteTitle(this.currentExercise?.exercise?.name);
      }
    });
  }

  public addNewSet(){
    this.completedSetList.push({
      order: this.completedSetList.length
    });
  }

  public removeSet(index: number){
    this.completedSetList.splice(index, 1);
  }
}
