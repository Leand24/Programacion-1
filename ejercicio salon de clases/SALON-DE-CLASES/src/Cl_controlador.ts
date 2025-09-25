import Cl_mUniversidad from "./Cl_mUniversidad.js";
import Cl_vUniversidad from "./Cl_vUniversidad.js";
export default class Cl_controlador{
public modelo : Cl_mUniversidad;
public vista : Cl_vUniversidad;
constructor(vista : Cl_vUniversidad, modelo : Cl_mUniversidad){
    this.modelo = modelo;
    this.vista = vista;
}
procesarEstudiantes(){
this.modelo.procesarEstudiantes(this.vista.procesarEstudiantes());
this.vista.reportarEstudiantes({
    edPromedio: this.modelo.edadPromedio(),
    eMayorEdad: this.modelo.eMayorEdad(),
    porcChicaMayorEdad: this.modelo.porcChicaMayorEdad()
});
}
}