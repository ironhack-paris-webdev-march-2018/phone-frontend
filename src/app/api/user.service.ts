import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  currentUser: User;

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // GET /checklogin
  check() {
    return this.ajaxTruc            // "withCredentials" means send the cookies
      .get(`${environment.backUrl}/api/checklogin`, { withCredentials: true })
      .toPromise()
      .then((apiResponse: any) => {
        // set our logged in user state
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // POST /signup

  // POST /login
  postLogin(creds: LoginCredentials) {
    return this.ajaxTruc
      .post(
        `${environment.backUrl}/api/login`,
        creds,
        { withCredentials: true } // "withCredentials" means send the cookies
      )
      .toPromise()
      .then((apiResponse: any) => {
        // set our logged in user state
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // GET /logout
  logout() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/logout`, { withCredentials: true })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

}

export class User {
  _id: string;
  username: string;
  updated_at: Date;
  created_at: Date;
}

export class LoginCredentials {
  username: string;
  password: string;
}
