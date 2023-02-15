import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserBarComponent } from './components/user-bar/user-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    FooterComponent,
    UserBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    CardComponent,
    FooterComponent,
    UserBarComponent
  ]
})
export class SharedModule { }
