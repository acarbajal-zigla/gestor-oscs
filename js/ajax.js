// Usando Name de 'https://random-data-api.com/' y Math.random()
// para obtener los datos
const PORT = 3000;

function setDatos() {
    for (let i = 0; i < 20; i++) {
        $.get("https://random-data-api.com/api/name/random_name", function (response, status) {
            if (status !== 'success') {
                throw new Error("Error al solicitar informacion");
            }
            const persona = new Persona(parseInt(Math.random() * 100000000), response.first_name, response.last_name, Math.random() * 10000, Math.random() * 1000);
            create(persona);
        });
    }
}

function postDonativo(donativo, token) {
    $.ajax({
        type: "POST",
        url: `http://localhost:${PORT}/donativos/registro`,
        data: {username:token, data:JSON.stringify(donativo)},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert(msg.d);
        },
        error: function (msg) {
            alert('Error al cargar el donativo.');
        }
    })
}

function getDonativos() {
    $.get(`http://localhost:${PORT}/donativos`, function (response, status) {
        if (status !== 'success') {
            throw new Error("Error al solicitar informacion");
        }
        for (donativo in response)
            create(donativo);
    });
}

function eliminarDonativo() {
    $.get(`http://localhost:${PORT}/donativos/delete`, {
        data: { deleteId: id },
        success: function (response, status) {
            if (status !== 'success') {
                throw new Error("Error al eliminar informacion");
            }
        }
    });
}
function login(username, password) {
    $.ajax({
        type: "POST",
        url: `http://localhost:${PORT}/users/login`,
        data: { username: username, password: password },
        contentType: "application/json",
        dataType: "json",
        success: function (msg) {
            alert(msg.d);
            return msg;
        },
        error: function (msg) {
            alert('error');
            return false;
        }
    })
}