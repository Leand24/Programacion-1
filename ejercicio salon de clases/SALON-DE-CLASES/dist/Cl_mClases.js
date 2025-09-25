export default class Cl_mClases {
    constructor(nombre, sexo, edad) {
        this._nombre = "";
        this._sexo = "";
        this._edad = 0;
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get nombre() {
        return this._nombre;
    }
    get sexo() {
        return this._sexo;
    }
    get edad() {
        return +this._edad;
    }
}
