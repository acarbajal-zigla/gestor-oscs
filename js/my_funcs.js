function renderDonativosTable() {
    $('#tabla-personas').html('');

    let tableBody = document.createElement("tbody");
    let header = ['Destinatario', 'Concepto', 'Monto', 'Fecha'];
    let fila_titulos = document.createElement("tr");

    for (let element of header) {
        let celda = document.createElement("th");
        celda.setAttribute("scope", "col");
        celda.appendChild(document.createTextNode(element));
        fila_titulos.appendChild(celda);
    }
    tableBody.appendChild(fila_titulos);

    for (let persona of personas) {
        let fila = document.createElement("tr");
        let presupuesto = new Presupuesto(persona.presupuesto.montoInicial, persona.presupuesto.gastos)

        for (let element of [persona.nombre, persona.apellido, presupuesto.getMontoInicial(), presupuesto.getGastos(), presupuesto.getRestoNeto(), presupuesto.getRestoDiario()]) {
            let celda = document.createElement("td");
            celda.setAttribute("scope", "row");
            celda.appendChild(document.createTextNode(element));
            fila.appendChild(celda);
        }
        tableBody.appendChild(fila);
    }
    $('#tabla-personas').append(tableBody);
}