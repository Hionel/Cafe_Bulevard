import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/imenu';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() openCategory: Category | undefined;
  @Output() closedMenu: EventEmitter<boolean> = new EventEmitter();
  closeCategory = () => {
    this.closedMenu.emit(true);
  };
}
