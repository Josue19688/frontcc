import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WesocketsService {

  public socketStatus=false;

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
}
