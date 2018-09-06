import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

	constructor(public http: Http) {
		
	}

	getDataFromServer(action) {
		return new Promise(resolve => { 
			this.http.get('http://www.bernhard-waitz.at/api/request.php?action='+action)
			.map(res => res.json())
			.subscribe(data => {
		       resolve(data);
		    });
		});	
	}

	

}
