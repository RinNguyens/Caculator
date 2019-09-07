import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {Location} from '@angular/common';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(public navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions, 
    private _location: Location, 
    public storage: Storage ) {}

  ngOnInit() {
  }

  goBack(){
    let options : NativeTransitionOptions = {
      direction : 'down',
      duration: 400,
    }
    this.nativePageTransitions.curl(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
    this.nativePageTransitions.slide(options);
    this._location.back();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  groupNumber: any = [10,15,50];
  numbers : number;
  percent : number ;
  tipNumber : number;
  rong : string = '' ;
  result : number;

  ionViewDidLoad(){
   this.getFromStorageStandard().then((call) => {
     this.groupNumber['0,1,2'] = call;
   });
   this.groupNumber['0'] = this.getFromStorageAsync();
  }
  onButtonHandle(symbol) {

    this.storage.set(this.groupNumber['0'], this.groupNumber['0']);


    if(symbol == '10') {
      if(this.numbers == null) {
        this.tipNumber = 0;
        this.percent= parseInt(this.groupNumber['0']) / 100;
        this.result = 0;
      } else {
        this.tipNumber = (this.numbers / 100) * 10;
        this.percent= parseInt(this.groupNumber['0']) / 100;
        this.result = this.numbers + this.tipNumber;
      }
    } 
    else if(symbol == '15') {
      if(this.numbers == null) {
        this.tipNumber = 0;
        this.percent= parseInt(this.groupNumber['1']) / 100;
        this.result = 0;
      } else {
        this.tipNumber = (this.numbers / 100) * 15;
        this.percent= parseInt(this.groupNumber['1']) / 100;
        this.result = this.numbers + this.tipNumber;
      }
    }
    else if(symbol == '50') {
      if(this.numbers == null) {
        this.tipNumber = 0;
        this.percent= parseInt(this.groupNumber['2']) / 100;
        this.result = 0;
      } else {
        this.tipNumber = (this.numbers / 100) * 50;
        this.percent= parseInt(this.groupNumber['2']) / 100;
        this.result = this.numbers + this.tipNumber;
      }
    }
  }
    getFromStorageStandard(){

        return this.storage.get(this.groupNumber['0']);
       
    }

    async getFromStorageAsync(){

        return await this.storage.get(this.groupNumber['0']);
    }
}
