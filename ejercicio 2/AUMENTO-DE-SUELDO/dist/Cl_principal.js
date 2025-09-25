import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_controlador from "./Cl_controlador.js";
export default class Cl_principal {
    constructor() {
        let vista = new Cl_vEmpresa();
        let modelo = new Cl_mEmpresa();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
