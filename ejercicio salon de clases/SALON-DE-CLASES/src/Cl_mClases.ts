export default class Cl_mClases {
    private _nombre : string = "";
    private _sexo : string = "";
    private _edad : number = 0;
    constructor(nombre : string, sexo : string, edad : number) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }
    set nombre(nombre : string) {
        this._nombre = nombre;
    }
    set sexo(sexo : string) {
        this._sexo = sexo;
    }
    set edad(edad : number) {
        this._edad = +edad;
    }       
    get nombre() : string {
        return this._nombre;
    }
    get sexo() : string {
        return this._sexo;
    }
    get edad() : number {
        return +this._edad;
    }
}