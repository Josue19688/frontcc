import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Visita } from 'src/app/interface/visitas.interface';
import { VisitasService } from 'src/app/services/visitas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit, OnDestroy{

  visitaSubscription:Subscription | undefined;
  visitas:Visita[]=[];
  visitasProceso:Visita[]=[];
  visitasFinalizadas:Visita[]=[];

  dtOptions:any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  element:boolean=true;
  proceso:boolean=false;
  finalizada:boolean=false;

  miFormulario: FormGroup= this.fb.group({
    nombre:['',[Validators.required]],
    dpi:['2072510882206',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(13),Validators.maxLength(13)]],
    personaVista:['',[Validators.required]],
    empresa:['',[Validators.required]],
    horaEntrada:['',[Validators.required]],
    horaSalida:[''],
    descripcion:['',[Validators.required]]
  });


  constructor(
    private fb:FormBuilder,
    private visitaService:VisitasService
  ){}
  
  ngOnInit(): void {


    this.visitaSubscription=this.visitaService.getVisitasSocket().subscribe((msg:any)=>{
     
      this.visitas.push(msg);
      
    })

   

    this.getVisitasDentro();
    this.getVisitasProceso();
    this.getVisitasFinalizadas();


  }

  ngOnDestroy(): void {
    this.visitaSubscription?.unsubscribe();
    this.dtTrigger.unsubscribe();
  }


  showNuevas() {
    this.proceso=false;
    this.finalizada=false;
    return (this.element = true);
  }


  showProceso() {
    this.element=false;
    this.finalizada=false;
    return (this.proceso = true);
  }

  showFinalizadas() {
    this.proceso=false;
    this.element=false;
    return (this.finalizada = true);
  }
  


  enviar(){

    const {nombre, dpi, personaVista,empresa,horaEntrada,horaSalida,descripcion} = this.miFormulario.value;
    
    this.visitaService.sendVisita(nombre, dpi, personaVista,empresa,horaEntrada,horaSalida,descripcion);


    
    // this.visitaService.postVisitas(nombre, dpi, personaVista,empresa,horaEntrada,horaSalida,descripcion)
    // .subscribe((resp)=>{
      
    //   if(resp.ok){
    //     Swal.fire('Buen Trabajo!!1','Registro creado exitosamente','success');
    //     this.miFormulario.reset;
    //   }else{
    //     Swal.fire('Error','El registro  no se creo!!','error');
    //   }
    // })
  }

  getVisitasDentro(){
    this.visitaService.getVisitasDentro().subscribe((resp)=>{
      this.visitas=resp.visitas;
      //this.dtTrigger.next(this.visitas);
    })
  }
  getVisitasProceso(){
    this.visitaService.getVisitasProceso().subscribe((resp)=>{
      this.visitasProceso=resp.visitas;
      //this.dtTrigger.next(this.visitas);
    })
  }

  getVisitasFinalizadas(){
    this.visitaService.getVisitasFinalizadas().subscribe((resp)=>{
      this.visitasFinalizadas=resp.visitas;
      
    })
  }
}
