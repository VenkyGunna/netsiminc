import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, FormsModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  constructor(public fb: FormBuilder, public sb: MatSnackBar) {
    this.contactForm = fb.group({
      to_name: ["", [Validators.required, Validators.minLength(6)]],
      from_name: ["Netsim Inc", Validators.required],
      to_email: ['', [Validators.required, Validators.email]],  // Async validator in the third argument
      from_email: ["venky.it232530@gmail.com", Validators.required],
      subject: ["", [Validators.required]],
      message: ["", [Validators.minLength(30)]],
    })
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    emailjs.init('G-ufuvni0nxMTq765');
    emailjs
      .send('service_zje5z6a', 'template_prw1ndh', {
        to_name: this.contactForm.value['to_name'],
        to_email: this.contactForm.value['to_email'],
        subject: this.contactForm.value['subject'],
        message: this.contactForm.value['message'],
      })
      .then(
        () => {
          this.isSubmitting = false;
          this.openSnackBar('Form submitted successfully!');
          this.contactForm.reset();
        },
        (error) => {
          this.openSnackBar('Form Failed!');
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
  openSnackBar(message: string) {
    this.sb.open(message, "X");
  }
  get to_name() {
    return this.contactForm.get('to_name');
  }
  get to_email() {
    return this.contactForm.get('to_email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

}
