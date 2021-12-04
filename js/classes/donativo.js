class Donativo {
    constructor(destinatario, concepto, monto, fecha) {
        this.destinatario = destinatario;
        this.concepto = concepto;
        this.monto = parseFloat(monto);
        this.fecha = fecha;

        if (concepto.length > 255) {
            throw "El límite para concepto son 255 caracteres"
        }

        if (destinatario.length > 255) {
            throw "El límite para destinatario son 255 caracteres"
        }
    }
}