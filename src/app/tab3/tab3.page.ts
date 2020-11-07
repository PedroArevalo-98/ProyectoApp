import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertCtrl: AlertController) {
    
  }

  
    async showAlert() { 
      const alert = await this.alertCtrl.create({ 
      header: 'Alert', 
      subHeader: 'Alert para la clase de acceso a datos', 
      message: 'Programa con tres tabs con diversas funciones', 
      buttons: ['OK'] 
      });  await alert.present(); 
      const result = await alert.onDidDismiss();  
      console.log(result); 
  }
}
