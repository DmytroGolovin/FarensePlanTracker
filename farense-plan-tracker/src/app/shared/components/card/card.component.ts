import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public image: string = "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  @Input() public title: string = "Core exercise";
  @Input() public category: string = "Core exercise";
  @Input() public description: string = "Core exercise description";

  @Output() onCardClick = new EventEmitter();
}
