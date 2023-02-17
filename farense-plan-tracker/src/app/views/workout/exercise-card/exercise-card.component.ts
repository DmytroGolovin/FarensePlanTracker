import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/services/constants';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent {
  @Input() public image: string = "assets/icons/dumbbell.png";
  @Input() public title: string = "Core exercise";
  @Input() public sets: number = 5;
  @Input() public reps: number = 10;
  @Input() public route: string = "exercise";

  constructor(private _router: Router) {}

  public onCardClick() {
    this._router.navigateByUrl(Constants.clientRoutes.dashboard.root + {id: this.title })
  }
}
