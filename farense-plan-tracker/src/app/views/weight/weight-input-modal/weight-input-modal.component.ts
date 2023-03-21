import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-input-modal',
  templateUrl: './weight-input-modal.component.html',
  styleUrls: ['./weight-input-modal.component.scss']
})
export class WeightInputModalComponent {
  public modalOpened : boolean = false;

  public openModal(){
    this.modalOpened = true;
  }

  public closeModal(){
    this.modalOpened = false;
  }
}
