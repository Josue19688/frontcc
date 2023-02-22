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

  loginWS(nombre:string){
    this.socket.emit('configurar-usuario',{nombre:nombre},(resp:any)=>{
      console.log(resp)
    })
  }


}
