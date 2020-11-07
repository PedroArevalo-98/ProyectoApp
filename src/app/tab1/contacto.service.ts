import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private Contactos=[
    {
      id:'1',
      nombre:'Han solo',
      titulo:'Cazarrecompensas',
      img:'https://as.com/betech/imagenes/2018/10/17/portada/1539810840_574933_1539811038_noticia_normal.jpg'

    },
    {
      id:'2',
      nombre:'Rey',
      titulo:'Recolectora',
      img:'https://static.posters.cz/image/750/pinturas-sobre-lienzo-star-wars-episodio-viii-los-ultimos-jedi-rey-engage-i50121.jpg'
    },
    {
      id:'3',
      nombre:'Fin ',
      titulo:'Piloto',
      img:'https://upload.wikimedia.org/wikipedia/en/2/2a/Finn-Force_Awakens_%282015%29.png'
    },
    {
      id:'4',
      nombre:'Leia',
      titulo:'Princesa',
      img:'https://i.pinimg.com/originals/59/68/c1/5968c14368989b765bd018146df95e1f.jpg'
    }

  ]
  constructor() { }

  getContactos(){
    return[...this.Contactos]
  }
  getContacto(ContactosId:string){
    return{...this.Contactos.find(Contacto => {
      return Contacto.id === ContactosId
    })}
  }
  
  
}
