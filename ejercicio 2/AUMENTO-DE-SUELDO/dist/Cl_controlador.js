export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPersonal() {
        this.modelo.procesarEmpleado(this.vista.procesarPersonal());
        this.vista.reportarEmpleado({
            totalIncrementoDeSueldo: this.modelo.totalIncrementoDeSueldo(),
            porcentajeObreros: this.modelo.porcentajeObreros()
        });
    }
}
