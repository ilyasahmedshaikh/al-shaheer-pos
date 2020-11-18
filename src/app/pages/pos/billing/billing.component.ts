import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  dateToday: any = new Date();
  today: any = new Date(this.dateToday).toLocaleString();

  constructor() { }

  ngOnInit(): void {
  }

}
