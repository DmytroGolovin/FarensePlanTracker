import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SetModel } from 'src/app/shared/models/entities/set.model';
import { WorkoutExerciseModel } from 'src/app/shared/models/entities/workout-exercise.model';

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

  constructor(private _route: ActivatedRoute, private _sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this._route.data.subscribe( (res: any) => {

      const exerciseData = res.exerciseData;

      if(!exerciseData || exerciseData.error){
       return;
      }

      this.currentExercise = exerciseData.data['workoutExercise'];
    });
  }

  public getVideoUrl(){
    const videoUrl = this.currentExercise?.exercise?.videoUrl;
    if(videoUrl) {
      return this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }

    return null;
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
