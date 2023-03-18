import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { SpinnerService } from "../services/utils/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(public _spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this._spinnerService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.totalRequests--;
        if(this.totalRequests === 0){
          this._spinnerService.hide();
        }
      })
    );
  }
}
