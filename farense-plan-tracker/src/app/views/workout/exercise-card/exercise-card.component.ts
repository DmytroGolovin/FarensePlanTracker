import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/services/constants';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent {
  @Input() public exerciseId: string = "1";
  @Input() public image: string = "assets/icons/dumbbell.svg";
  @Input() public title: string = "Core exercise";
  @Input() public sets: string = "5";
  @Input() public reps: string = "10";

  constructor(private _router: Router) {}

  public navigateToExercise() {
    this._router.navigateByUrl('app/exercise/' + this.exerciseId);
  }
}
