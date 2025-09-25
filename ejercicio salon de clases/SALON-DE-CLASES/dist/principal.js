import Cl_vUniversidad from "./Cl_vUniversidad.js";
import Cl_mUniversidad from "./Cl_mUniversidad.js";
import Cl_controlador from "./Cl_controlador.js";
export default class principal {
    constructor() {
        let modelo = new Cl_mUniversidad();
        let vista = new Cl_vUniversidad();
        let controlador = new Cl_controlador(vista, modelo);
        vista.controlador = controlador;
    }
}
