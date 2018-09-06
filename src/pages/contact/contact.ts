import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

	private formctrl : FormGroup;
	public emailmsg: any;

	public msgType: any = 0; //1 error //2 success

	constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider,  private formBuilder: FormBuilder) {
		this.emailmsg = {};

		this.formctrl = this.formBuilder.group({
	      firstname: ['', Validators.required],
	      lastname: ['', Validators.required],
	      email: ['', Validators.required],
	      telephone: [''],
	      text: ['', Validators.required],
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ContactPage');
	}

	sendContact() {
		this.api.getDataFromServer('contact&firstname='+this.emailmsg.firstname+'&lastname='+this.emailmsg.lastname+'&email='+this.emailmsg.email+'&telephone='+this.emailmsg.telephone+'&text='+this.emailmsg.text).then(data => {
	    	this.msgType = 2;
	    });
	}

}
