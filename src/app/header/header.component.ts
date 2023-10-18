import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLink: string = '';
  menuIsOpen: boolean = false;

  toggleMenu() {
    if (!this.menuIsOpen) {
      this.menuIsOpen = true;
    } else if (this.menuIsOpen) {
      this.menuIsOpen = false;
    }
  }

  closeMenu() {
    this.menuIsOpen = false;
  }

  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }
}
