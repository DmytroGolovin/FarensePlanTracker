import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  public completedSetList: Array<any> = [{}]

  public addNewSet(){
    this.completedSetList.push({});
  }
}
