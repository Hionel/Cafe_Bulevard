import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/imenu';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() openCategory: Category | undefined;
  @Output() closedMenu: EventEmitter<boolean> = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private router: Router
  ) {
    this.openCategory = data;
  }
  closeCategory = () => {
    this.router.navigate(['/home/menu']);
  };
}
