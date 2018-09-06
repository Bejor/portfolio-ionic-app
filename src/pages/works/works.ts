import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the WorksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-works',
  templateUrl: 'works.html',
})
export class WorksPage {

	public openLgx: boolean = false;

	public image: any;

	public works: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
		this.works = [];
		this.api.getDataFromServer('reference')
	    .then(data => {
	    	this.works = data;
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WorksPage');
	}

	closeLightbox() {
		this.openLgx = false;
	}

	openLightbox(item) {
		this.image = item; 

		this.openLgx = true;
	}

}
