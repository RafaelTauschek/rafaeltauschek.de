import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLink: string = '';
  images = [
    './assets/img/icons/burger-menu.png',
    './assets/img/icons/hamburger-menu-transition.png',
    './assets/img/icons/close-menu-transition.png',
    './assets/img/icons/close-menu.png'
  ];
  menuIsOpen:boolean = false;

  toggleMenu() {
    if (!this.menuIsOpen) {
      this.menuIsOpen = true;
      console.log('menu was opend');
 
    } else if (this.menuIsOpen) {
      this.menuIsOpen = false;
      console.log('menu was closed');
    }
  }


  
  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }
}
