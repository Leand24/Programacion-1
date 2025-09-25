export default class Cl_mPersonal{
    private _cedula : string = ""; 
    private _tipo :  number =0;
    private _sueldoActual : number = 0;
constructor(cedula:string, tipo:number, sueldoActual:number){
    this.cedula = cedula;
    this.tipo = tipo;
    this.sueldoActual = sueldoActual;
}
set cedula(cedula:string){
    this._cedula = cedula;
}
get cedula(){
    return this._cedula;
}
set tipo(tipo:number){
    this._tipo = tipo;
}
get tipo(){
    return this._tipo;
}
set sueldoActual(sueldoActual:number){
    this._sueldoActual = sueldoActual;
}
get sueldoActual(){
    return this._sueldoActual;
}
aumento(): number{
    if(this.tipo == 1){
         return this.sueldoActual * 0.2;
    }else if(this.tipo == 2){
        return this.sueldoActual * 0.10;
    }else{
        return 0;
    }
}
nuevosSueldos(): number {
    return this.sueldoActual + this.aumento();
}

}