import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitasResponse } from '../interface/visitas.interface';
import { WesocketsService } from './wesockets.service';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  constructor(
    private http:HttpClient,
    private wsService:WesocketsService
    ) { }



   


    /**
     * 
     * @param nombre 
     * @param dpi 
     * @param personaVista 
     * @param empresa 
     * @param horaEntrada 
     * @param horaSalida 
     * @param descripcion 
     * @returns Nos retornara una respuesta via sockets
     */
    sendVisita(
      nombre:string, 
      dpi:string, 
      personaVista:string,
      empresa:string,
      horaEntrada:string,
      horaSalida:string,
      descripcion:string
    ){
      const payload ={
        nombre:nombre,
        dpi:dpi,
        personaVista:personaVista,
        empresa:empresa,
        horaEntrada:horaEntrada,
        horaSalida:horaSalida,
        descripcion:descripcion
      }

      this.wsService.emit('mensaje',payload);
    }
    
    /**
     * Nos devolvera el mensaje de respuesta que enviamos via socket
     */

    getVisitasSocket(){
      return this.wsService.listen('mensaje-nuevo');
    }

    


/**
 * 
 * @param nombre 
 * @param dpi 
 * @param personaVista 
 * @param empresa 
 * @param horaEntrada 
 * @param horaSalida 
 * @param descripcion 
 * @returns Creacion de items de visitaas
 */

  postVisitas(
    nombre:string, 
    dpi:string, 
    personaVista:string,
    empresa:string,
    horaEntrada:string,
    horaSalida:string,
    descripcion:string
    ){

    const url ='http://localhost:5000/visita';
    const body={nombre, dpi, personaVista,empresa,horaEntrada,horaSalida,descripcion};
    return this.http.post<VisitasResponse>(url,body);
  }

  /**
   * 
   * @returns Lista de visitas creadas a las cuales se agregaran los socket items creados 
   */

  getVisitasDentro():Observable<VisitasResponse>{
    const url ='http://localhost:5000/visita?proceso=DENTRO';
    return this.http.get<VisitasResponse>(url);
  }

  /**
   * 
   * @returns Listado de visitas en proceso o dentro de las 
   * instalaciones
   */

  getVisitasProceso():Observable<VisitasResponse>{
    const url ='http://localhost:5000/visita?proceso=PROCESO';
    return this.http.get<VisitasResponse>(url);
  }

  /**
   * 
   * @returns Listado de visitas finalizadas historial 
   */

  getVisitasFinalizadas():Observable<VisitasResponse>{
    const url ='http://localhost:5000/visita?proceso=FINALIZADO';
    return this.http.get<VisitasResponse>(url);
  }

}
