import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WesocketsService {

  public socketStatus=false;
  public usuario = Usuario;

  constructor(private socket:Socket ) {
    this.checkStatus();
   }

  checkStatus(){
    this.socket.on('connect',()=>{
      console.log('conectado al servidor de socket');
      this.socketStatus=true;
    });


    this.socket.on('disconnect',()=>{
      console.log('Desconectado del servidor de socket');
      this.socketStatus=false;
    });
  }

  
  /**
   * Evento que se encargara de emitir todos
   * los eventos
   */

  emit(evento:string, payload?:any, callback?:any){
    //console.log('Emitiendo evento',payload);

    //con esto emitimos el evento al backend
    this.socket.emit(evento,payload,callback);
  }

  /*
 *ESTE METODO SE ENCARGARA DE ESCUCHAR TODOS LOS EVENTOS DEL SERVER
  */
 listen(evento:string){

  return this.socket.fromEvent(evento);

  }

  
  

  loginWS(nombre:string){
    return new Promise((resolve:any, reject:any)=>{
      this.emit('configurar-usuario',{nombre},(resp:any)=>{

        // this.usuario=new Usuario(nombre);
        // this.guardarStorage();
        //validar la respuesta que obtengamos del servidor

        resolve();
      })
    })
  }

  getUsuario(){
    return this.usuario;
  }

}
