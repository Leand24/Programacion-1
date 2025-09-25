import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";

export default class Cl_controlador{
public modelo : Cl_mEmpresa;
public vista : Cl_vEmpresa;
constructor(modelo : Cl_mEmpresa, vista : Cl_vEmpresa){
this.modelo = modelo;
this.vista = vista;
}
procesarPersonal(){
    this.modelo.procesarEmpleado(this.vista.procesarPersonal());
    this.vista.reportarEmpleado({
        totalIncrementoDeSueldo: this.modelo.totalIncrementoDeSueldo(),
        porcentajeObreros: this.modelo.porcentajeObreros()
    });
}
}