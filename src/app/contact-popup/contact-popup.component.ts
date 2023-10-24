import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-popup',
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.scss']
})
export class ContactPopupComponent {
  @Input() message!:string;
}
