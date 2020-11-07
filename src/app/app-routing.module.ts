import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'tab1',
    children:[{
      path:"",
      loadChildren:()=>import('./tab1/tab1.module').then(m=>m.Tab1PageModule)
    },{
      path:":tabId",
      loadChildren:()=>import('./contacto/contacto.module').then(m=>m.ContactoPageModule)
    }
      
    ]
  },

  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
