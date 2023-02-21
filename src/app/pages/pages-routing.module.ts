import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivoComponent } from './archivo/archivo.component';
import { HomeComponent } from './home/home.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VisitasComponent } from './visitas/visitas.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'novedades',component:NovedadesComponent
      },
      {
        path:'usuarios',component:UsuariosComponent
      },
      {
        path:'visitas',component:VisitasComponent
      },
      {
        path:'archivo',component:ArchivoComponent
      },
      {
        path:'**',redirectTo:'novedades'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
