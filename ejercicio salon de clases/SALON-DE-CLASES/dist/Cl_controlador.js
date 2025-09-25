export default class Cl_controlador {
    constructor(vista, modelo) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEstudiantes() {
        this.modelo.procesarEstudiantes(this.vista.procesarEstudiantes());
        this.vista.reportarEstudiantes({
            edPromedio: this.modelo.edadPromedio(),
            eMayorEdad: this.modelo.eMayorEdad(),
            porcChicaMayorEdad: this.modelo.porcChicaMayorEdad()
        });
    }
}
