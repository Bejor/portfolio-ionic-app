import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AboutMePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-me',
  templateUrl: 'about-me.html',
})
export class AboutMePage {

	public aboutMe: any;
	public lifeCareer: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
		this.api.getDataFromServer('aboutme')
		.then( data => {
	       this.aboutMe = data;
	    });

	    this.api.getDataFromServer('lifecareer')
	    .then(data => {
	    	this.lifeCareer = data;
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AboutMePage');
	}

}
