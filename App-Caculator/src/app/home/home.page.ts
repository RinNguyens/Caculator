import { Component } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { IonicRouteStrategy,NavController,NavParams  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions ) {}
  ionViewDidLeave(){
    
  }
  // function click
  slideLeft(){
    let options : NativeTransitionOptions = {
      direction : 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  slideRight(){
    let options : NativeTransitionOptions = {
      direction : 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  slideUp(){
    let options : NativeTransitionOptions = {
      direction : 'up',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  slideDown(){
    let options : NativeTransitionOptions = {
      direction : 'down',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  flip(){
    let options : NativeTransitionOptions = {
      duration: 600,
      slowdownfactor: 1,
    }
    this.nativePageTransitions.flip(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  flipLeft(){
    let options : NativeTransitionOptions = {
      direction : 'left',
      duration: 600,
      slowdownfactor: 1,
    }
    this.nativePageTransitions.flip(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  flipRight(){
    let options : NativeTransitionOptions = {
      direction : 'right',
      duration: 600,
      slowdownfactor: 1,
    }
    this.nativePageTransitions.flip(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  fade(){
    let options : NativeTransitionOptions = {
      direction : 'up',
      duration: 400,
      slowdownfactor: -1,
    }
    this.nativePageTransitions.fade(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  fadeDown(){
    let options : NativeTransitionOptions = {
      direction : 'down',
      duration: 600,
      slowdownfactor: -1,
    }
    this.nativePageTransitions.fade(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  fadeUp(){
    let options : NativeTransitionOptions = {
      direction : 'up',
      duration: 600,
      slowdownfactor: -1,
    }
    this.nativePageTransitions.fade(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  drawer(){
    let options : NativeTransitionOptions = {
      duration: 600,
      slowdownfactor: -1,
    }
    this.nativePageTransitions.fade(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  drawerLeft(){
    let options : NativeTransitionOptions = {
      direction : 'left',
      duration: 600,
      slowdownfactor: -1,
    }
    this.nativePageTransitions.fade(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  drawerRight(){
    let options : NativeTransitionOptions = {
      direction : 'right',
      duration: 600,
      slowdownfactor: -1,
    }
    this.nativePageTransitions.fade(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
  curl(){
    let options : NativeTransitionOptions = {
      duration: 600,
      iosdelay: 100
    }
    this.nativePageTransitions.curl(options)
      .then(onSuccess => {
        console.log('Successfuly')
      })
      .catch(error => {
        console.log('error');
      });
  }
}
