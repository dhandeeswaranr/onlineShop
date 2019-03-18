import { Component, OnInit, ViewChild } from '@angular/core';
import {CommonService} from '../../service/common.service'
import { IonInfiniteScroll, IonHeader } from '@ionic/angular';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  searchText;
  datafill = [];

  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];
  constructor(private commonserv:CommonService) { }


  ngOnInit() {
    this.loadPage();
    this.commonserv.getStockData().subscribe(
      liststep => {
          this.datafill = liststep.map(
            listview =>{
              console.log("my", listview.payload.val());
              return{
                $Key:listview.key,
                ...listview.payload.val()
              }
            }
          )
      }
    )
    
  }
mydata = []

  loadPage(){
    this.commonserv.getStockData().subscribe(data => {
      this.mydata = data.map(dataval =>{
        return {
          $Key:dataval.key,
          ...dataval.payload.val()
        }
      })
      
    })
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.datafill.length == 4) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  slideOpts = {
    effect: 'flip'
  };
}
