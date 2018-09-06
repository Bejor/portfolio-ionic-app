import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the KnowledgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-knowledge',
  templateUrl: 'knowledge.html',
})
export class KnowledgePage {

	public icon: any;
	public name: any;
	public knowlevel: any;

	public openLgx: boolean = false;

	public expitems: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
		this.expitems = [];

		this.api.getDataFromServer('exp')
	    .then(data => {
	    	this.expitems = data;
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad KnowledgePage');
	}

	openLightbox(icon, name, knowlvl) {
		this.icon = icon; 
		this.name = name;
		this.knowlevel = knowlvl;

		this.openLgx = true;
	}

	closeLightbox() {
		this.openLgx = false;
	}

}
