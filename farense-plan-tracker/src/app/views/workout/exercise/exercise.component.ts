import { Component, OnInit } from '@angular/core';
import { SetModel } from 'src/app/shared/models/entities/set.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  public completedSetList: Array<SetModel> = [{
    order: 0
  }];

  ngOnInit(): void {
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
