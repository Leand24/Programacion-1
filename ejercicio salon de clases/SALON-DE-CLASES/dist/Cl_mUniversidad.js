export default class Cl_mUniversidad {
    constructor() {
        this.acEdad = 0;
        this.cntEdades = 0;
        this.cntChicas = 0;
        this.cntChicasMayores = 0;
        this.edadMayor = 0;
        this.nombreEdadMayor = "";
    }
    procesarEstudiantes(s) {
        this.cntEdades++;
        this.acEdad += s.edad;
        if (this.edadMayor < s.edad) {
            this.edadMayor = s.edad;
            this.nombreEdadMayor = s.nombre;
        }
        if (s.sexo == "Mujer") {
            this.cntChicas++;
        }
        if (s.sexo == "Mujer" && s.edad >= 18) {
            this.cntChicasMayores++;
        }
    }
    edadPromedio() {
        if (this.cntEdades === 0)
            return 0;
        return this.acEdad / this.cntEdades;
    }
    eMayorEdad() {
        return this.nombreEdadMayor;
    }
    porcChicaMayorEdad() {
        if (this.cntChicas === 0)
            return 0;
        return (this.cntChicasMayores / this.cntChicas) * 100;
    }
}
