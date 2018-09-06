var Typewriter;

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {
		var app = document.getElementById('typing');


	 //  	var typewriter = new Typewriter(app, {
	 //      loop: true
	 //  	});

		// var pauseTimer = 1000;

		// typewriter.typeString('Webseiten')
		// .pauseFor(pauseTimer)
		// .deleteAll()
		// .typeString('User Experience')
		// .pauseFor(pauseTimer)
		// .deleteChars(10)
		// .typeString('Interfaces')
		// .pauseFor(pauseTimer)
		// .deleteAll()
		// .typeString('Hybrid Mobile Apps')
		// .pauseFor(pauseTimer)
		// .deleteAll()
		// .typeString('Backend')
		// .pauseFor(pauseTimer)
		// .deleteAll()
		// .typeString('Content Managment Systeme')
		// .start();
	}

}
