// Obtener elmentos del DOM
let donativos = JSON.parse(localStorage.getItem('donativos')) || [];

function getAll() {
    return JSON.parse(localStorage.getItem('personas'));
}

// Agrego una persona a la lista
function create(donativo) {
    if (Object.keys(donativo).length === 0) {
        console.log('Revise que los datos sean correctos');
    }
    else {
        donativos.push(donativo);
        localStorage.setItem('donativos', JSON.stringify(donativos));
    }
}

// Encontrar persona por nombre y apellido
function findDonativo(id) {
    return donativos.find(donativo => (donativo.id === id));
}

const remove = (id) => {
    eliminarDonativo(id);
}




