import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientWeight } from 'src/app/shared/models/entities/client-weight.model';

@Component({
  selector: 'app-weight-input-modal',
  templateUrl: './weight-input-modal.component.html',
  styleUrls: ['./weight-input-modal.component.scss']
})
export class WeightInputModalComponent {
  @ViewChild('datePicker') datePicker: ElementRef | any;

  private readonly todaysDate = new Date();

  public modalOpened : boolean = false;
  public clientWeight : ClientWeight = {
    date: `${this.todaysDate.getFullYear()}-${this.todaysDate.getMonth()}-${this.todaysDate.getDay()}`,
    weight: undefined
  };

  ngOnInit() {
    console.log(this.clientWeight)
  }

  public openModal(){
    this.modalOpened = true;
  }

  public closeModal(){
    this.modalOpened = false;
  }

  public test() {
    console.log(this.clientWeight)
  }
}
