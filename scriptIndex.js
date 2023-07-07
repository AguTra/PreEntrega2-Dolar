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
        oficialV: data[0].casa.venta, 
        oficialC: data[0].casa.compra, 
        blueV: data[1].casa.venta,
        blueC: data[1].casa.compra,
        turistaV: data[6].casa.venta,
        turistaC: data[6].casa.compra,
        tarjetaV: data[4].casa.venta,
        tarjetaC: data[4].casa.compra,
        mayoristiaV: data[7].casa.venta,
        mayosristaC: data[7].casa.compra,
        euroV: data[3].casa.venta,
        euroC: data[3].casa.compra,
//         oficial es oficial
//         blue es blue
//         turista es turista
//         tarjeta es bolsa
//         mayorista es 'Dolar promedio?'
//         euro es soja
    }
    console.log(Dolars)

let cardBlueV = document.getElementById("CardBlueVenta").innerHTML = (Dolars.blueV + ' ' + 'Venta')
let cardBlueC = document.getElementById("CardBlueCompra").innerHTML = (Dolars.blueC + ' ' + "Compra")

let cardOficialV = document.getElementById("CardOficialV").innerHTML = (Dolars.oficialV + ' '+ "Venta")
let cardOficialC = document.getElementById("CardOficialC").innerHTML = (Dolars.oficialC + ' '+ "Compra")

let cardTuristaV = document.getElementById("CardTuristaV").innerHTML = (Dolars.turistaV + ' '+ "Venta")
let cardTuristaC = document.getElementById("CardTuristaC").innerHTML = (Dolars.turistaC + ' ')

let cardTarjetaV = document.getElementById("CardTarjetaV").innerHTML = (Dolars.tarjetaV + ' '+ "Venta")
let cardTarjetaC = document.getElementById("CardTarjetaC").innerHTML = (Dolars.tarjetaC + ' ' + "Compra")

let cardPromedioV = document.getElementById("CardPromedioV").innerHTML = (Dolars.mayoristiaV + ' '+ "Venta")
let cardPromedioC = document.getElementById("CardPromedioC").innerHTML = (Dolars.mayosristaC + ' '+ "Compra")

let cardSojaV = document.getElementById("CardSojaV").innerHTML = (Dolars.euroV + ' '+ "Venta")
let cardSojaC = document.getElementById("CardSojaC").innerHTML = (Dolars.euroC + ' '+ "Compra")
}

//        <nav class="navbar navbar-expand-lg p-3 mb-2 bg-success bg-gradient text-white">