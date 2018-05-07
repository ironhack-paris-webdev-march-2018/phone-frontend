import { Component, OnInit } from '@angular/core';

import { PhoneService, Phone } from '../api/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Phone[] = [];

  constructor(
    public apiTruc: PhoneService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
    .then((result: Phone[]) => {
        this.phones = result;
      })
      .catch((err) => {
        console.log("Phone list error");
        console.log(err);
      });
  }

}
