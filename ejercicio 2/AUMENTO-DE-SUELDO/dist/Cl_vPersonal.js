export default class Cl_vPersonal {
    constructor() {
        this.inCedula = document.getElementById("personalForm_inCedula");
        this.inIngresoActual = document.getElementById("personalForm_inIngresoActual");
        this.inTipo = document.getElementById("personalForm_inTipo");
        this.btProcesar = document.getElementById("personalForm_btProcesar");
        if (!this.inCedula || !this.inIngresoActual || !this.inTipo || !this.btProcesar) {
            throw new Error("elemento del DOM no encontrado");
        }
        this.btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("no hay controlador");
            this.controlador.procesarPersonal();
        };
    }
    get cedula() {
        if (!this.inCedula)
            throw new Error("elemento cedula no encontrado");
        return this.inCedula.value;
    }
    get ingresoActual() {
        if (!this.inIngresoActual)
            throw new Error("elemento ingreso Actual no encontrado");
        return parseFloat(this.inIngresoActual.value);
    }
    get tipo() {
        if (!this.inTipo)
            throw new Error("elemento tipo no encontrado");
        return parseInt(this.inTipo.value);
    }
}
