import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class PhoneService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // POST /api/phones

  // GET /api/phones
  getList() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/phones`)
      .toPromise();
  }

  // GET /api/phone/:phoneId
  getDetails(phoneId) {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/phone/${phoneId}`)
      .toPromise();
  }

  // PUT /api/phone/:phoneId

  // DELETE /api/phone/:phoneId
  delete(phoneId) {
    return this.ajaxTruc
      .delete(`${environment.backUrl}/api/phone/${phoneId}`)
      .toPromise();
  }

}

export class Phone {
  _id: string;
  brand: string;
  name: string;
  image: string;
  specs: string[];
  createdAt?: Date; // "?" makes this property optional
  updatedAt?: Date; // "?" makes this property optional
}
