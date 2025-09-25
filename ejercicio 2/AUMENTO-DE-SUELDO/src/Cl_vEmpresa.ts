import Cl_mPersonal from "./Cl_mPersonal.js";
import Cl_vPersonal from "./Cl_vPersonal.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vEmpresa{
private _controlador : Cl_controlador | null = null;
private vPersonal : Cl_vPersonal;
private salida : HTMLElement;
private mPersonal : Cl_mPersonal | null = null;
constructor(){
    this.salida = document.getElementById("mainForm_salida") as HTMLElement;
    if(!this.salida) throw new Error("elemento salida no encontrado");
    this.vPersonal = new Cl_vPersonal();
}
set controlador (controlador : Cl_controlador | null){
    this._controlador = controlador;
    if (controlador !== null) {
        this.vPersonal.controlador = controlador;
    }
}
get controlador() : Cl_controlador | null{
    return this._controlador;
}
procesarPersonal(): Cl_mPersonal {
this.mPersonal = new Cl_mPersonal(
    this.vPersonal.cedula,
    this.vPersonal.tipo,
    this.vPersonal.ingresoActual
);
    return this.mPersonal;
}
reportarEmpleado({
    totalIncrementoDeSueldo = 0, 
    porcentajeObreros = 0,
}) : void{
if (!this.mPersonal) throw new Error("no se procesa el personal");
this.salida.innerHTML = `
<br> el nuevo sueldo de la cedula ${this.mPersonal.cedula} es de ${this.mPersonal.nuevosSueldos()}</br>
<br> el total del incremento de sueldo es de ${totalIncrementoDeSueldo}</br>
<br> el porcentaje de obreros es de ${porcentajeObreros}%</br>
`; 
}
}