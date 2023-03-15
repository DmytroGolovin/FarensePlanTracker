import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss']
})
export class WorkoutCardComponent {
  @Input() public workoutId: string = "1";
  @Input() public image: string = "assets/icons/plan.png";
  @Input() public title: string = "Core exercise";
  @Input() public subtitle: string = "5";

  constructor(private _router: Router) {}

  public navigateToWorkout() {
    this._router.navigateByUrl('app/workout/' + this.workoutId);
  }
}
