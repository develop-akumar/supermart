import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CatNavigationComponent } from "../cat-navigation/cat-navigation.component";
import { SideNavigationComponent } from "../side-navigation/side-navigation.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CatNavigationComponent, SideNavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
