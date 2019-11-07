import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiCaptchaComponent } from './mi-captcha.component';


@NgModule({
  declarations: [MiCaptchaComponent],
  exports: [MiCaptchaComponent],
  imports: [
    CommonModule, MiCaptchaComponent
  ]
})
export class MiCaptchaModule { }
