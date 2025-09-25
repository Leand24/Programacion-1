import Cl_mPersonal from "./Cl_mPersonal.js";
export default class Cl_mEmpresa{
    private cnObreros : number = 0;
    private cnPersonal : number = 0;
    private acAumento : number =0;
constructor(){
    this.cnObreros = 0;
    this.cnPersonal = 0;
    this.acAumento = 0;
}
procesarEmpleado(e :Cl_mPersonal) : void{
    this.acAumento += e.aumento();
    this.cnPersonal++;
    if (e.tipo == 1){
        this.cnObreros++;
    }
}

totalIncrementoDeSueldo(): number {
    return this.acAumento;
}
porcentajeObreros() : number {
    return parseFloat(((this.cnObreros / this.cnPersonal) * 100).toFixed(2));
}











}