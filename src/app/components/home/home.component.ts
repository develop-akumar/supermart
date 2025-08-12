import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CatNavigationComponent } from '../cat-navigation/cat-navigation.component';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CatNavigationComponent,
    SideNavigationComponent,
    ProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
