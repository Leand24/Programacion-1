import Cl_controlador from "./Cl_controlador.js";
export default class Cl_vPersonal{
public controlador!: Cl_controlador;
private inCedula : HTMLInputElement;
private inIngresoActual : HTMLInputElement
private inTipo: HTMLInputElement;
private btProcesar : HTMLElement;

constructor(){
    this.inCedula = document.getElementById("personalForm_inCedula") as HTMLInputElement;
    this.inIngresoActual = document.getElementById("personalForm_inIngresoActual") as HTMLInputElement;
    this.inTipo = document.getElementById("personalForm_inTipo") as HTMLInputElement;
    this.btProcesar = document.getElementById("personalForm_btProcesar") as HTMLElement;
    if (!this.inCedula || !this.inIngresoActual || !this.inTipo || !this.btProcesar){
        throw new Error("elemento del DOM no encontrado");
    }
    this.btProcesar.onclick = () => {
        if(!this.controlador) throw new Error("no hay controlador");
        this.controlador.procesarPersonal();
    };
}
get cedula() : string {
    if(!this.inCedula) throw new Error("elemento cedula no encontrado");
    return this.inCedula.value;
}
get ingresoActual() : number {
    if(!this.inIngresoActual) throw new Error("elemento ingreso Actual no encontrado");
    return parseFloat(this.inIngresoActual.value);
}
get tipo() : number {
    if(!this.inTipo) throw new Error("elemento tipo no encontrado");
    return parseInt(this.inTipo.value);
}
}