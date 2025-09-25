import Cl_vClases from "./Cl_vClases.js";
import Cl_mClases from "./Cl_mClases.js";
export default class Cl_vUniversidad {
    constructor() {
        this._controlador = null;
        this.mSalon = null;
        this.salida = document.getElementById("mainForm_salida");
        if (!this.salida)
            throw new Error("elemento salida no encontrado en la vista universidad");
        this.vSalon = new Cl_vClases();
    }
    set controlador(controlador) {
        this._controlador = controlador;
        this.vSalon.controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    procesarEstudiantes() {
        this.mSalon = new Cl_mClases(this.vSalon.nombre, this.vSalon.sexo, this.vSalon.edad);
        return this.mSalon;
    }
    reportarEstudiantes({ edPromedio = 0, eMayorEdad = "", porcChicaMayorEdad = 0 }) {
        if (!this.mSalon)
            throw new Error("no hay datos procesados");
        this.salida.innerHTML += `           
    <h4>Reporte de Estudiantes</h4>
            <table>
              <tr>
                    <th>Edad Promedio</th>
                    <th>Estudiante Mayor de Edad</th>
                    <th>Porcentaje de Chicas Mayores de Edad</th>
                </tr>
                <tr>
                    <td>${edPromedio}</td>
                    <td>${eMayorEdad}</td>
                    <td>${porcChicaMayorEdad}</td>
                </tr>
            </table>`;
    }
}
