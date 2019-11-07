import { MiCaptchaModule } from './mi-captcha/mi-captcha.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [],
  exports: [ MiCaptchaModule ],
  imports: [
    CommonModule, MiCaptchaModule
  ]
})
export class UtilsModule { }
