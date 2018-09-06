import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutMePage } from '../pages/about-me/about-me';
import { KnowledgePage } from '../pages/knowledge/knowledge';
import { WorksPage } from '../pages/works/works';
import { ContactPage } from '../pages/contact/contact';
import { WebsitePage } from '../pages/website/website';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  public style: object = {};
  public params: object = {};
  public width: any;
  public height: any;

  pages: Array<{icon: any, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'person', title: 'Über mich', component: AboutMePage},
      { icon: 'code', title: 'Kenntnisse', component: KnowledgePage},
      { icon: 'brush', title: 'Arbeiten', component: WorksPage},
      { icon: 'mail', title: 'Contact Me', component: ContactPage},
    ];

    this.width = this.platform.width();
    this.height = this.platform.height();

    this.params = {
        particles: {
            number: {
                value: 80,
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'point',
            },
    }
  };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
