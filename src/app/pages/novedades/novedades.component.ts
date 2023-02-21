import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Post } from 'src/app/interface/post.interface';
import { NovedadesService } from 'src/app/services/novedades.service';


@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit,OnDestroy  {


  miFormulario: FormGroup = this.fb.group({
    tipo:['',[Validators.required]],
    fecha:['',[Validators.required]],
    descripcion:['',[Validators.required]],
  });



  novedades:Post[]=[];

  dtOptions:any = {};
  dtTrigger: Subject<any> = new Subject<any>();

 

  constructor(
    private fb: FormBuilder,
    private novedadesService:NovedadesService
  ) {}


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
    this.getNovedades();
  }

 


  getNovedades(){
    this.novedadesService.getPost()
    .subscribe((resp:any)=>{
      this.novedades=resp.post;
      this.dtTrigger.next(this.novedades);
    })
  }
  
  agregar(){
    //this.novedades.push(this.miFormulario.value);
  }
  // dtOptions:

 
}
