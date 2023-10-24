import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category, Menu } from 'src/app/interfaces/imenu';
import { CategoryComponent } from '../category/category.component';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu!: Menu;
  menuTitle: string = 'The Menu';
  @Output() renderedCategory: Category | undefined;
  constructor(
    private dataService: DataService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.dataService.getMenuData().subscribe((data) => (this.menu = data));
    this.dataService.languageCode$.subscribe((code) => {
      code === 'en'
        ? (this.menuTitle = 'The Menu')
        : (this.menuTitle = 'Meniul');
    });
  }

  openCategory = (category: string) => {
    const categoryToBeDisplayed = category;
    this.renderedCategory = this.menu.categories.find(
      (category) => category.categoryName === categoryToBeDisplayed
    );
    this.router.navigate([`/menu/${categoryToBeDisplayed.toLowerCase()}`]);
    this.dialog.open(CategoryComponent, {
      data: this.renderedCategory,
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      hasBackdrop: true,
    });
  };
}
