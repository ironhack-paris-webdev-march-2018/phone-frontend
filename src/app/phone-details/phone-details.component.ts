import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhoneService, Phone } from '../api/phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneId: string;
  phone: Phone;

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: PhoneService,
    private resTruc: Router
  ) { }

  ngOnInit() {
    // get the URL parameters for this route
    this.reqTruc.paramMap
      .subscribe((myParams) => {
                  // { path: 'phone/:blahId', ... }
        this.phoneId = myParams.get('blahId');
                      // req.params.blahId

        this.fetchPhoneData();
      });
  }

  fetchPhoneData() {
    // connect to the service method
    this.apiTruc.getDetails(this.phoneId)
      .then((result: Phone) => {
        this.phone = result;
      })
      .catch((err) => {
        console.log('Phone details error');
        console.log(err);
      });
  }

  deleteClick() {
    const { name } = this.phone;
    const isOkay = confirm(`Are you sure you want to delete ${name}?`);

    if (!isOkay) {
      return;
    }

    this.apiTruc.delete(this.phoneId)
      .then(() => {
        this.resTruc.navigateByUrl('/phones');
      })           // res.redirect('/phones')
      .catch((err) => {
        console.log('Phone delete error');
        console.log(err);
      });
  }

}
