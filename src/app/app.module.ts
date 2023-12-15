import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBgkm7TCj6vW3DSOuvhnFojUV660nj3iyE",
      authDomain: "dacia-unita.firebaseapp.com",
      projectId: "dacia-unita",
      storageBucket: "dacia-unita.appspot.com",
      messagingSenderId: "703196251487",
      appId: "1:703196251487:web:d4b49624cbebf98620a2ea",
      measurementId: "G-V0DGRTC6BE"
    }),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
