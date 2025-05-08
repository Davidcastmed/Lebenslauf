import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  getDate = new Date().getFullYear();
  emailToAds = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  confirmationEmail = false; // es verdadero después de enviar el email

  constructor() {}

  ngOnInit(): void {}
  sendEmailToAds() {
    const email = this.emailToAds.value;
    this.emailToAds.get('email')?.setValue('');
    this.confirmationEmail = true;
  }
}
