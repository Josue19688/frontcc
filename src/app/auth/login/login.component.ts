import { Component } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WesocketsService } from 'src/app/services/wesockets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  miFormulario: FormGroup= this.fb.group({
    correo:['advin@gmail.com',[Validators.required, Validators.email]],
    contrasena:['123456',[Validators.required, Validators.minLength(6)]]
  });



  constructor(private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private wsService:WesocketsService
  ) { }

login (){

  const {correo, contrasena}=this.miFormulario.value;

  

  this.authService.getLogin(correo,contrasena)
  .subscribe((resp)=>{
    console.log(resp);

    if(resp.ok){

      localStorage.setItem('token',resp.token);
      Swal.fire('Bienvenido','Usuario logeado correctamente','success');
      setTimeout(()=>{
        this.router.navigateByUrl('home');
        this.wsService.loginWS(resp.usuario.nombre);
      },1000);

    }else{
      Swal.fire('Error','Usuario invalido','error');
    }

  })
 

}




}
