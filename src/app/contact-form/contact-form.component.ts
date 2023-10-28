import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

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


  constructor(private snackBar: MatSnackBar) { }

  async sendMail() {
    let fd = new FormData();
    fd.append('name', this.user.name);
    fd.append('message', this.user.message);
    fd.append('email', this.user.email)
    this.sendButton.nativeElement.disabled = true;

    try {
      const response = await fetch('https://rafael-tauschek.de/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });

      if (response.ok) {
        this.snackBar.open('Email sent successfully!', 'Close', { duration: 3000 });
        this.myForm.resetForm();
      } else {
        this.snackBar.open('Email sending failed. Please try again.', 'Close', { duration: 3000 });
      }
    } catch (error) {
      this.snackBar.open('An error occurred. Please try again later.', 'Close', { duration: 3000 });
    } finally {
      this.sendButton.nativeElement.disabled = false;
    }
  }
}





