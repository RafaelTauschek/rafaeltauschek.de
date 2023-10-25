import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';


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

  @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;




  async sendMail() {
    let fd = new FormData();
    fd.append('name', this.user.name);
    fd.append('message', this.user.message);
    fd.append('email', this.user.email)
    this.sendButton.nativeElement.disabled = true;

    await fetch('https://rafael-tauschek.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    setTimeout(() => {
      this.myForm.resetForm();
      this.sendButton.nativeElement.disabled = false;
    }, 3000);
  }
}



