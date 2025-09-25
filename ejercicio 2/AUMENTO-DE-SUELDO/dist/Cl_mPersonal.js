export default class Cl_mPersonal {
    constructor(cedula, tipo, sueldoActual) {
        this._cedula = "";
        this._tipo = 0;
        this._sueldoActual = 0;
        this.cedula = cedula;
        this.tipo = tipo;
        this.sueldoActual = sueldoActual;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set sueldoActual(sueldoActual) {
        this._sueldoActual = sueldoActual;
    }
    get sueldoActual() {
        return this._sueldoActual;
    }
    aumento() {
        if (this.tipo == 1) {
            return this.sueldoActual * 0.2;
        }
        else if (this.tipo == 2) {
            return this.sueldoActual * 0.10;
        }
        else {
            return 0;
        }
    }
    nuevosSueldos() {
        return this.sueldoActual + this.aumento();
    }
}
