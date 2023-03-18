import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from '../../services/utils/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  public isLoading: Subject<boolean> = this._spinnerService.isLoading;

  constructor(private _spinnerService: SpinnerService) {}

  ngOnInit(): void {
  }
}
