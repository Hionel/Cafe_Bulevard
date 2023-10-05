import { Component, OnInit, Output } from '@angular/core';
import { providers } from 'src/app/imageMockup/providers';
import { Category, Menu } from 'src/app/interfaces/imenu';
import { MenuService } from 'src/app/service/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu!: Menu;
  closedMenuMessage: string =
    'Click on a Category to Display Products and Prices';
  providers = providers;
  @Output() renderedCategory: Category | undefined;
  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuService.getData().subscribe((data) => {
      this.menu = data;
    });
  }

  openCategory = (event: Event) => {
    const button = event.target as HTMLElement;
    const categoryToBeDisplayed = button.innerText;
    this.renderedCategory = this.menu.categories.find(
      (category) => category.categoryName === categoryToBeDisplayed
    );
  };
  closeCategory = (emitter: boolean) => {
    if (emitter) {
      return (this.renderedCategory = undefined);
    } else return;
  };
}
