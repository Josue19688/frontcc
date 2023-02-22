


export class Usuario{
    
    public id:number;
    public nombre:string;
    public email:string;
    public rol:string;
    public estado:boolean;

    constructor(
        id:number, 
        nombre:string, 
        email:string, 
        rol:string,
        estado:boolean
        ){
        this.id=id;
        this.nombre=nombre
        this.email=email
        this.rol=rol;
        this.estado=estado;
    }
}