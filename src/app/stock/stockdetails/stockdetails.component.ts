import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.scss']
})
export class StockdetailsComponent implements OnInit {
company;
category;
subCategory;
email;
phone;


  constructor(private commserv:CommonService) { }

  ngOnInit() {
    this.commserv.getStockData();
    //this.sumbit();
  }

  sumbit(){
    //console.log("data", datas)
    let data = 
      {
        'company':this.company,
        'category':this.category,
        'subcategory':this.subCategory,
        'email':this.email,
        'phone':this.phone
      }
    
      let datas = 
      {
        'company':"dadf",
        'category':"adsfas",
        'subcategory':"adfa",
        'email':"dasf",
        'phone':"asdfa"
      }

    console.log("val", data);

    this.commserv.postList(data);
  }


}
