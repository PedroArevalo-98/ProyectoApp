import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContactoService } from "./contacto.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

   
  
  
  private Contactos=[]
    
  
  constructor(private contactoService:ContactoService) {}
  ngOnInit() {
    this.Contactos = this.contactoService.getContactos()
  }
  

  
  }
