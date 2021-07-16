import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Type:any="Bakery";
  PickUp:any="8.880656902280966,76.79238521831513";
  Address:any="Demo Address";
  NewOrder:boolean=true;
  Delivery:boolean=false;
  Item:any="Demo Item";

  DeliveryLocation:any="9.880656902280966,74.79238521831513";
  COD:boolean=false;
  AmountCollect:any=0;
  DeliveryAdd:any="Demo Add";

  AmountCollected:any=0;

  constructor() { }

  ngOnInit(): void {
  }

  CollectItem(){
    this.Delivery=true;
  }
  DeliveryComplete(){

  }

}
