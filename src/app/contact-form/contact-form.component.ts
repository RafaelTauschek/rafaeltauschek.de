import { Component, ViewChild, ElementRef } from '@angular/core';

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

  async sendMail() {

    console.log(this.user.name, this.user.email, this.user.message, this.user.privacyPolicy);
    

    // console.log('Sending mail', this.myForm);
    // let nameField =  this.nameField.nativeElement
    // let messageField = this.messageField.nativeElement
    // let emailField = this.emailField.nativeElement
    // let sendButton = this.sendButton.nativeElement
    // nameField.disabled = true;
    // messageField.disabled = true;
    // emailField.disabled = true;
    // sendButton.disabled = true;
    //ANIMATION anzeigen

    // let fd = new FormData();
    // fd.append('name', nameField.value);
    // fd.append('message', messageField.value);
    // await fetch('https://rafael-tauschek.de/send_mail/send_mail.php',
    //  {
    //   method: 'POST',
    //   body: fd
    //  }
    // ),

    // //Text anzeigen, Nachricht gesendet!
    // nameField.disabled = false;
    // messageField.disabled = false;
    // emailField.disabled = false;
    // sendButton.disabled = false;
  }



}



