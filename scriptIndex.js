fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(responseData => {
        data2 = responseData;
        console.log(data2)
        dolaresHoy2(data2);


    })
    .catch(error => {
        console.log(error);
    });

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

    function dolaresHoy2(data2){
        const Dolares = {
            oficialV: data2["oficial"].value_sell ,
            oficialC: data2["oficial"].value_buy,
            blueV: data2["blue"].value_sell,
            blueC: data2["blue"].value_buy,
        }
    let cardBlueV = document.getElementById("CardBlueVenta").innerHTML = (Dolares.blueV + ' ' + 'Venta')
    let cardBlueC = document.getElementById("CardBlueCompra").innerHTML = (Dolares.blueC + ' ' + "Compra")

    let cardOficialV = document.getElementById("CardOficialV").innerHTML = (Dolares.oficialV + ' ' + "Venta")
    let cardOficialC = document.getElementById("CardOficialC").innerHTML = (Dolares.oficialC + ' ' + "Compra")
    
    }



function dolaresHoy(data) {
    
    const Dolars = {
        // oficialV: data2["blue"],
        // oficialC: data2["blue"],
        // blueV: data[1].casa.venta,
        // blueC: data[1].casa.compra,
        turistaV: data[6].casa.venta,
        turistaC: data[6].casa.compra,
        tarjetaV: data[4].casa.venta,
        tarjetaC: data[4].casa.compra,
        mayoristiaV: data[7].casa.venta,
        mayosristaC: data[7].casa.compra,
        euroV: data[3].casa.venta,
        euroC: data[3].casa.compra,
        // oficial es oficial
        // blue es blue
        // turista es turista
        // tarjeta es bolsa
        // mayorista es 'Dolar promedio?'
        // euro es soja
    }
    console.log(Dolars)


    let cardTuristaV = document.getElementById("CardTuristaV").innerHTML = (Dolars.turistaV + ' ' + "Venta")
    let cardTuristaC = document.getElementById("CardTuristaC").innerHTML = (Dolars.turistaC + ' ')

    let cardTarjetaV = document.getElementById("CardTarjetaV").innerHTML = (Dolars.tarjetaV + ' ' + "Venta")
    let cardTarjetaC = document.getElementById("CardTarjetaC").innerHTML = (Dolars.tarjetaC + ' ' + "Compra")

    let cardPromedioV = document.getElementById("CardPromedioV").innerHTML = (Dolars.mayoristiaV + ' ' + "Venta")
    let cardPromedioC = document.getElementById("CardPromedioC").innerHTML = (Dolars.mayosristaC + ' ' + "Compra")

    let cardSojaV = document.getElementById("CardSojaV").innerHTML = (Dolars.euroV + ' ' + "Venta")
    let cardSojaC = document.getElementById("CardSojaC").innerHTML = (Dolars.euroC + ' ' + "Compra")
}



//      <nav class="navbar navbar-expand-lg p-3 mb-2 bg-success bg-gradient text-white">


am4core.ready(function () {
    // Crea una instancia del gráfico
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    fetch("https://api.bluelytics.com.ar/v2/evolution.json", requestOptions)
        .then(response => response.json())
        .then(datos => mostrar(datos))
        .catch(e => console.log(e))

    const mostrar = (articulos) => {
        articulos.forEach(element => {
            chart.data.push(element.descripcion)
        });
        chart.data = articulos
        console.log(chart.data)
    }




    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value_sell";

    series.strokeWidth = 1;
    series.minBulletDistance = 1;
    series.tooltipText = "Blue: [bold]{valueY}[/]";

    chart.cursor = new am4charts.XYCursor();


    dateAxis.dateFormats.setKey("day", "MMM dd");
    dateAxis.periodChangeDateFormats.setKey("day", "MMM dd");

    chart.scrollbarX = new am4core.Scrollbar();

    chart.legend = new am4charts.Legend();

    chart.theme = am4themes_animated;




});
