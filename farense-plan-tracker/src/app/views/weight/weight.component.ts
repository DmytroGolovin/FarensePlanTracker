import { Component, ViewChild } from '@angular/core';
import { WeightInputModalComponent } from './weight-input-modal/weight-input-modal.component';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent {
  @ViewChild('weightInputModal') weightInputModal: WeightInputModalComponent | any;

  public openWeightModal() {
    (this.weightInputModal as WeightInputModalComponent).openModal();
  }
}
