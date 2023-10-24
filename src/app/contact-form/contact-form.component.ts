import { Component, ViewChild, ElementRef } from '@angular/core';
import { ContactPopupComponent } from '../contact-popup/contact-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  isFormValid = false;
  user = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  };

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor(private dialog: MatDialog) {}

  async sendMail() {
    console.log('Sending mail', this.myForm);


    // Animation anzeigen

    let fd = new FormData();
    fd.append('name', this.user.name);
    fd.append('message', this.user.message);
    fd.append('email', this.user.email)

    
    // SENDEN
    // await fetch('https://rafael-tauschek.de/send_mail/send_mail.php',
    //  {
    //   method: 'POST',
    //   body: fd
    //  }
    // );

    // Text anzeigen: Nachricht gesendet
     this.sendButton.nativeElement.disabled = true;
     
     const dialogRef = this.dialog.open(ContactPopupComponent, {
      data: { message: 'Email sent successfully!' }
     });

     setTimeout(() => {
      dialogRef.close();
     }, 3000);
     this.sendButton.nativeElement.disabled = false;

     this.user.email = '';
     this.user.message = '';
     this.user.name = '';

  }
}



