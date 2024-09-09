import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email(): AbstractControl {
    return this.resetPasswordForm.get('email')!;
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.value.email;
      console.log('Enviar solicitud de restablecimiento de contraseña para:', email);
    }
  }
}
