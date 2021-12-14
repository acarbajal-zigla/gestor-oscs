$('#registrar-donativo').click(function () {
    $('#registro-donativo').toggle();
    //Escondo los demas
    $('#div-login').hide()
    $("#div-tabla-datos").hide();
});

$('#login-button').click(function () {
    $('#div-login').toggle();
});

$('#ver-donativos').click(function () {
    $("#div-tabla-datos").toggle();
    //Escondo los demas
    $('#div-login').hide()
    $('#ingreso-persona').hide();
    //renderDonativosTable();
});

if ($('#registro-donativo').length) {
    $('#form-donativo').submit(function (event) {
        event.preventDefault();
        const donativo = Donativo($('#input-destinatario').val(), $('#input-concepto').val(), $('#input-monto').val(), $('#input-fecha').val());
        postDonativo(donativo);
    });
}


// Escuchar el evento submit del formulario de ramocion de personas
$('#form-eliminar-persona').submit(function (event) {
    event.preventDefault();
    const dni = $('#input-eliminar-dni').val();
    remove(dni);
    $('#form-eliminar-persona').trigger('reset');
    renderPersonasTable();
});


$('#form-login').submit(function (event) {
    event.preventDefault();
    if (login($('#input-login-username').val(), $('#input-login-password').val()) !== false) {
        $('#form-login').trigger('reset');
        $('#div-login').hide();
    }
});
//login();