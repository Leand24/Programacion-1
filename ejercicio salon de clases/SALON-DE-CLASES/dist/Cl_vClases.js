export default class Cl_vClases {
    constructor() {
        this.controlador = null;
        this.inNombre = document.getElementById("salonDeClasesForm_inNombre");
        this.inSexo = document.getElementById("salonDeClasesForm_inSexo");
        this.inEdad = document.getElementById("salonDeClasesForm_inEdad");
        this.btProcesar = document.getElementById("salonDeClasesForm_btnAgregar");
        if (!this.btProcesar || !this.inEdad || !this.inNombre || !this.inSexo)
            throw new Error("elementos del DOM no encontrados  en la vista salon de clases");
        this.btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("Controlador no encontrado");
            this.controlador.procesarEstudiantes();
        };
    }
    ;
    get nombre() {
        if (!this.inNombre)
            throw new Error("elemento inNobre no encontrado");
        return this.inNombre.value;
    }
    get sexo() {
        if (!this.inSexo)
            throw new Error("elemento inSexo no encontrado");
        return this.inSexo.value;
    }
    get edad() {
        if (!this.inEdad)
            throw new Error("elemento inEdad no encontrado");
        return +this.inEdad.value;
    }
}
