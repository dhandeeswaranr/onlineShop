import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private firebase:AngularFireDatabase) { }
  stock:AngularFireList<any>;
  postfire:AngularFireList<any>;

  getStockData(){
    
    this.stock = this.firebase.list('onlinecart')
    console.log(this.stock.snapshotChanges())
    return this.stock.snapshotChanges();
    
  }
mock = {
company:"microsoft"
}

  postList(recivedData:any){
console.log("dada", recivedData)
      this.stock.push(
        recivedData
      );   
        
  // console.log("dadas", m[b].company);
}
}

