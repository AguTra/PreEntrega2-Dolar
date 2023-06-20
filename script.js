let data;

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
    let oficial = [document.getElementById('formularioDolarOficial').placeholder = (Dolars.oficial), document.getElementById('formularioDolarOficial2').placeholder = (Dolars.oficial)]
    let blue = [document.getElementById('formularioDolarBlue').placeholder = (Dolars.blue), document.getElementById('formularioDolarBlue2').placeholder = (Dolars.blue)]
    let tarjeta = [document.getElementById('formularioDolarTarjeta').placeholder = (Dolars.tarjeta), document.getElementById('formularioDolarTarjeta2').placeholder = (Dolars.tarjeta)]
    let turista = [document.getElementById('formularioDolarTurista').placeholder = (Dolars.turista), document.getElementById('formularioDolarTurista2').placeholder = (Dolars.turista)]
    let mayorista = [document.getElementById('formularioDolarMayorista').placeholder = (Dolars.mayoristia), document.getElementById('formularioDolarMayorista2').placeholder = (Dolars.mayoristia)]
    let euro = [document.getElementById('formularioEuroOficial').placeholder = (Dolars.euro), document.getElementById('formularioEuroOficial2').placeholder = (Dolars.euro)]

}


///////////////////////////////////



function blue() {
    let dolarBlueInput = parseInt(document.getElementById('formularioDolarBlue').value);
    if (isNaN(dolarBlueInput)) {
        alert("Error de formato")
    } else {
        let blue = document.getElementById('formularioDolarBlue').placeholder
        document.getElementById('resultadoDolarBlue').innerHTML = ((dolarBlueInput * parseInt(blue)) + '$')
    }
}
function oficial() {
    let dolarOficialInput = parseInt(document.getElementById('formularioDolarOficial').value);
    if (isNaN(dolarOficialInput)) {
        alert("Error de formato")
    } else {
        let oficial = document.getElementById('formularioDolarOficial').placeholder
        document.getElementById('resultadoDolarOficial').innerHTML = (dolarOficialInput * parseInt(oficial)) + '$'
    }
}

function tarjeta() {
    let dolarTarjetaInput = parseInt(document.getElementById('formularioDolarTarjeta').value);
    if (isNaN(dolarTarjetaInput)) {
        alert("Error de formato")
    } else {
        let tarjeta = document.getElementById("formularioDolarTarjeta").placeholder
        document.getElementById('resultadoDolarTarjeta').innerHTML = (dolarTarjetaInput * parseInt(tarjeta)) + "$"
    }
}

function turista() {
    let dolarTuristaInput = parseInt(document.getElementById('formularioDolarTurista').value);
    if (isNaN(dolarTuristaInput)) {
        alert("Error de formato")
    } else {
        let turista = document.getElementById("formularioDolarTurista").placeholder
        document.getElementById('resultadoDolarTurista').innerHTML = (dolarTuristaInput * parseInt(turista)) + "$"
    }
}

function mayorista() {
    let dolarMayoristaInput = parseInt(document.getElementById('formularioDolarMayorista').value);
    if (isNaN(dolarMayoristaInput)) {
        alert('Error de formato')
    } else {
        let mayorista = document.getElementById("formularioDolarMayorista").placeholder
        document.getElementById('resultadoDolarMayorista').innerHTML = (dolarMayoristaInput * parseInt(mayorista)) + "$"
    }
}

function euro() {
    let EuroInput = parseInt(document.getElementById('formularioEuroOficial').value);
    if (isNaN(EuroInput)) {
        alert('Error de formato')
    } else {
        let euro = document.getElementById("formularioEuroOficial").placeholder
        document.getElementById('resultadoEuro').innerHTML = (EuroInput * parseInt(euro)) + "$"
    }
}


///////////////////////////////

function blue2() {
    let dolarBlueInput = parseInt(document.getElementById('formularioDolarBlue2').value);
    if (isNaN(dolarBlueInput)) {
        alert("Error de formato")
    } else {
        let blue = document.getElementById('formularioDolarBlue2').placeholder
        document.getElementById('resultadoDolarBlue2').innerHTML = (Math.floor(dolarBlueInput / parseInt(blue)) + '$')
    }
}
function oficial2() {
    let dolarOficialInput = parseInt(document.getElementById('formularioDolarOficial2').value);
    if (isNaN(dolarOficialInput)) {
        alert("Error de formato")
    } else {
        let oficial = document.getElementById('formularioDolarOficial2').placeholder
        document.getElementById('resultadoDolarOficial2').innerHTML = Math.floor((dolarOficialInput / parseInt(oficial))) + '$'
    }
}

function tarjeta2() {
    let dolarTarjetaInput = parseInt(document.getElementById('formularioDolarTarjeta2').value);
    if (isNaN(dolarTarjetaInput)) {
        alert("Error de formato")
    } else {
        let tarjeta = document.getElementById("formularioDolarTarjeta2").placeholder
        document.getElementById('resultadoDolarTarjeta2').innerHTML = Math.floor((dolarTarjetaInput / parseInt(tarjeta))) + "$"
    }
}

function turista2() {
    let dolarTuristaInput = parseInt(document.getElementById('formularioDolarTurista2').value);
    if (isNaN(dolarTuristaInput)) {
        alert("Error de formato")
    } else {
        let turista = document.getElementById("formularioDolarTurista2").placeholder
        document.getElementById('resultadoDolarTurista2').innerHTML = Math.floor((dolarTuristaInput / parseInt(turista))) + "$"
    }
}

function mayorista2() {
    let dolarMayoristaInput = parseInt(document.getElementById('formularioDolarMayorista2').value);
    if (isNaN(dolarMayoristaInput)) {
        alert('Error de formato')
    } else {
        let mayorista = document.getElementById("formularioDolarMayorista2").placeholder
        document.getElementById('resultadoDolarMayorista2').innerHTML = Math.floor((dolarMayoristaInput / parseInt(mayorista))) + "$"
    }
}

function euro2() {
    let EuroInput = parseInt(document.getElementById('formularioEuroOficial2').value);
    if (isNaN(EuroInput)) {
        alert('Error de formato')
    } else {
        let euro = document.getElementById("formularioEuroOficial2").placeholder
        document.getElementById('resultadoEuro2').innerHTML = Math.floor((EuroInput / parseInt(euro))) + "$"
    }
}