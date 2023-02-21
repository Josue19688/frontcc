import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/interface/user.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit,OnDestroy{

  users:Usuario[]=[];

  dtOptions:any = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(
    private fb: FormBuilder,
    private userService:UsuarioService
  ){}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
      ]
    };
    this.getUsuarios();
  }

  getUsuarios(){
    this.userService.getUser()
    .subscribe(resp=>{
      this.users=resp.usuarios;
      console.log(this.users);
      this.dtTrigger.next(this.users);
    })
  }
}
