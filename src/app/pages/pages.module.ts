import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ArchivoComponent } from './archivo/archivo.component';
import { VisitasComponent } from './visitas/visitas.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

// import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';

@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent,
    NovedadesComponent,
    ArchivoComponent,
    VisitasComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    DataTablesModule
    
  ]
})
export class PagesModule { }
