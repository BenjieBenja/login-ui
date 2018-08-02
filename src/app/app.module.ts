import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { PasswordVerifyComponent } from './password-verify/password-verify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:no-unused-expression
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    EmailVerifyComponent,
    PasswordVerifyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule

  ],
  // tslint:disable-next-line:max-line-length
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
