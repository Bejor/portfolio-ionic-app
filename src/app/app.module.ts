import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutMePage } from '../pages/about-me/about-me';
import { KnowledgePage } from '../pages/knowledge/knowledge';
import { WorksPage } from '../pages/works/works';
import { ContactPage } from '../pages/contact/contact';
import { WebsitePage } from '../pages/website/website';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParticlesModule } from 'angular-particle';
import { ApiProvider } from '../providers/api/api';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutMePage,
    KnowledgePage,
    WorksPage,
    ContactPage,
    WebsitePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios',
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabbarPlacement: 'bottom',
      pageTransition: 'ios',
    }),
    ParticlesModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutMePage,
    KnowledgePage,
    WorksPage,
    ContactPage,
    WebsitePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ParticlesModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
