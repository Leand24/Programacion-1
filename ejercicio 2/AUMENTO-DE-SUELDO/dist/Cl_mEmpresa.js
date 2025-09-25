export default class Cl_mEmpresa {
    constructor() {
        this.cnObreros = 0;
        this.cnPersonal = 0;
        this.acAumento = 0;
        this.cnObreros = 0;
        this.cnPersonal = 0;
        this.acAumento = 0;
    }
    procesarEmpleado(e) {
        this.acAumento += e.aumento();
        this.cnPersonal++;
        if (e.tipo == 1) {
            this.cnObreros++;
        }
    }
    totalIncrementoDeSueldo() {
        return this.acAumento;
    }
    porcentajeObreros() {
        return parseFloat(((this.cnObreros / this.cnPersonal) * 100).toFixed(2));
    }
}
