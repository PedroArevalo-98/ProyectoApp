import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../tab1/contacto.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  data:any;
  constructor(private activatedRoute: ActivatedRoute,private contactoService:ContactoService) {
    
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      const recipeId = paramMap.get('tabId')
      this.data=this.contactoService.getContacto(recipeId);
      console.log(this.data)
    })
  }

}
