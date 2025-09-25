import Cl_controlador from "./Cl_controlador.js";
export default class Cl_vClases{
    public controlador: Cl_controlador | null = null;
    private inNombre: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inEdad: HTMLInputElement;
    public btProcesar: HTMLElement;

    constructor(){
        this.inNombre = document.getElementById("salonDeClasesForm_inNombre") as HTMLInputElement;
        this.inSexo = document.getElementById("salonDeClasesForm_inSexo") as HTMLInputElement;
        this.inEdad = document.getElementById("salonDeClasesForm_inEdad") as HTMLInputElement;
        this.btProcesar = document.getElementById("salonDeClasesForm_btnAgregar") as HTMLElement;
        if(!this.btProcesar || !this.inEdad || !this.inNombre || !this.inSexo)
             throw new Error("elementos del DOM no encontrados  en la vista salon de clases");
        this.btProcesar.onclick = () => {
            if(!this.controlador) throw new Error("Controlador no encontrado");
            this.controlador.procesarEstudiantes();
        }
    };
    get nombre(): string {
        if(!this.inNombre) throw new Error("elemento inNobre no encontrado");
        return this.inNombre.value;
    } 
    get sexo(): string {
        if(!this.inSexo) throw new Error("elemento inSexo no encontrado");
        return this.inSexo.value;
    }
    get edad(): number {
        if(!this.inEdad) throw new Error("elemento inEdad no encontrado");
        return +this.inEdad.value;
    }
}