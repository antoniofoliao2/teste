import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes:Routes = 
[
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  } ,

  { path: 'usuario', 
    loadChildren: () =>  import('./usuario/usuario.module').then(m => m.UsuarioModule)
  } ,

  { path: '', pathMatch: 'full' , redirectTo: './app'}

]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  /*  RouterModule.forRoot(routes, {useHash:true})
  */
  ] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
