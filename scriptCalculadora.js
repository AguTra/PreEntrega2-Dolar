fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(responseData => {
        data = responseData;
        console.log(data);
        dolaresHoy(data);
    })
    .catch(error => {
        console.log(error);
    });



function dolaresHoy(data) {
    const Dolars = {
        oficial: data[0].casa.venta,
        blue: data[1].casa.venta,
        turista: data[6].casa.venta,
        tarjeta: data[4].casa.venta,
        mayoristia: data[7].casa.venta,
        euro: data[3].casa.venta,

    }
    console.log(Dolars)
    let oficial = [document.getElementById('formularioDolarOficial').placeholder = (Dolars.oficial), document.getElementById('formularioDolarOficial2').placeholder = (Dolars.oficial), document.getElementById('oficial2').innerHTML = (Dolars.oficial), document.getElementById('oficial').innerHTML = (Dolars.oficial)]
    let blue = [document.getElementById('formularioDolarBlue').placeholder = (Dolars.blue), document.getElementById('formularioDolarBlue2').placeholder = (Dolars.blue), document.getElementById('blue2').innerHTML = (Dolars.blue), document.getElementById('blue').innerHTML = (Dolars.blue)]
    let tarjeta = [document.getElementById('formularioDolarTarjeta').placeholder = (Dolars.tarjeta), document.getElementById('formularioDolarTarjeta2').placeholder = (Dolars.tarjeta), document.getElementById('tarjeta2').innerHTML = (Dolars.tarjeta), document.getElementById('tarjeta').innerHTML = (Dolars.tarjeta)]
    let turista = [document.getElementById('formularioDolarTurista').placeholder = (Dolars.turista), document.getElementById('formularioDolarTurista2').placeholder = (Dolars.turista), document.getElementById('turista2').innerHTML = (Dolars.turista), document.getElementById('turista').innerHTML = (Dolars.turista)]
    let mayorista = [document.getElementById('formularioDolarMayorista').placeholder = (Dolars.mayoristia), document.getElementById('formularioDolarMayorista2').placeholder = (Dolars.mayoristia), document.getElementById('mayorista2').innerHTML = (Dolars.mayoristia), document.getElementById('mayorista').innerHTML = (Dolars.mayoristia)]
    let euro = [document.getElementById('formularioEuroOficial').placeholder = (Dolars.euro), document.getElementById('formularioEuroOficial2').placeholder = (Dolars.euro), document.getElementById('liqui2').innerHTML = (Dolars.euro), document.getElementById('liqui').innerHTML = (Dolars.euro)]


}


///////////////////////////////////

function blue() {
    let dolarBlueInput = parseInt(document.getElementById('formularioDolarBlue').value);
    if (isNaN(dolarBlueInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let blue = document.getElementById('formularioDolarBlue').placeholder
        document.getElementById('resultadoDolarBlue').innerHTML = ((dolarBlueInput * parseInt(blue)) + '$')
    }
}
function oficial() {
    let dolarOficialInput = parseInt(document.getElementById('formularioDolarOficial').value);
    if (isNaN(dolarOficialInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let oficial = document.getElementById('formularioDolarOficial').placeholder
        document.getElementById('resultadoDolarOficial').innerHTML = (dolarOficialInput * parseInt(oficial)) + '$'
    }
}

function tarjeta() {
    let dolarTarjetaInput = parseInt(document.getElementById('formularioDolarTarjeta').value);
    if (isNaN(dolarTarjetaInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let tarjeta = document.getElementById("formularioDolarTarjeta").placeholder
        document.getElementById('resultadoDolarTarjeta').innerHTML = (dolarTarjetaInput * parseInt(tarjeta)) + "$"
    } 
}

function turista() {
    let dolarTuristaInput = parseInt(document.getElementById('formularioDolarTurista').value);
    if (isNaN(dolarTuristaInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let turista = document.getElementById("formularioDolarTurista").placeholder
        document.getElementById('resultadoDolarTurista').innerHTML = (dolarTuristaInput * parseInt(turista)) + "$"
    }
}

function mayorista() {
    let dolarMayoristaInput = parseInt(document.getElementById('formularioDolarMayorista').value);
    if (isNaN(dolarMayoristaInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let mayorista = document.getElementById("formularioDolarMayorista").placeholder
        document.getElementById('resultadoDolarMayorista').innerHTML = (dolarMayoristaInput * parseInt(mayorista)) + "$"
    }
}

function euro() {
    let EuroInput = parseInt(document.getElementById('formularioEuroOficial').value);
    if (isNaN(EuroInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let euro = document.getElementById("formularioEuroOficial").placeholder
        document.getElementById('resultadoEuro').innerHTML = (EuroInput * parseInt(euro)) + "$"
    }
}


///////////////////////////////

function blue2() {
    let dolarBlueInput = parseInt(document.getElementById('formularioDolarBlue2').value);
    if (isNaN(dolarBlueInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let blue = document.getElementById('formularioDolarBlue2').placeholder
        document.getElementById('resultadoDolarBlue2').innerHTML = ((dolarBlueInput / parseInt(blue)).toFixed(2) + '$')
    }
}
function oficial2() {
    let dolarOficialInput = parseInt(document.getElementById('formularioDolarOficial2').value);
    if (isNaN(dolarOficialInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let oficial = document.getElementById('formularioDolarOficial2').placeholder
        document.getElementById('resultadoDolarOficial2').innerHTML = ((dolarOficialInput / parseInt(oficial))).toFixed(2) + '$'
    }
}

function tarjeta2() {
    let dolarTarjetaInput = parseInt(document.getElementById('formularioDolarTarjeta2').value);
    if (isNaN(dolarTarjetaInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let tarjeta = document.getElementById("formularioDolarTarjeta2").placeholder
        document.getElementById('resultadoDolarTarjeta2').innerHTML = ((dolarTarjetaInput / parseInt(tarjeta))).toFixed(2) + "$"
    }
}

function turista2() {
    let dolarTuristaInput = parseInt(document.getElementById('formularioDolarTurista2').value);
    if (isNaN(dolarTuristaInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let turista = document.getElementById("formularioDolarTurista2").placeholder
        document.getElementById('resultadoDolarTurista2').innerHTML = ((dolarTuristaInput / parseInt(turista))).toFixed(2) + "$"
    }
}

function mayorista2() {
    let dolarMayoristaInput = parseInt(document.getElementById('formularioDolarMayorista2').value);
    if (isNaN(dolarMayoristaInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let mayorista = document.getElementById("formularioDolarMayorista2").placeholder
        document.getElementById('resultadoDolarMayorista2').innerHTML = ((dolarMayoristaInput / parseInt(mayorista))).toFixed(2) + "$"
    }
}

function euro2() {
    let EuroInput = parseInt(document.getElementById('formularioEuroOficial2').value);
    if (isNaN(EuroInput)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Se produjo un error en la operación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        let euro = document.getElementById("formularioEuroOficial2").placeholder
        document.getElementById('resultadoEuro2').innerHTML = ((EuroInput / parseInt(euro))).toFixed(2) + "$"
    }
}