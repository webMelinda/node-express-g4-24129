// contador inverso de fecha

const dias = document.getElementById("dias")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")


//CAMBIAR FECHA SEGUN EVENTO EN FORMATO DATE
const fechaEvento = "24 Aug 2024";



function contadorFecha(){
    const diaFechaEvento = new Date(fechaEvento)
    const diaActual = new Date()

    const totalSegundos = (diaFechaEvento - diaActual) / 1000;
    const calcularDias = Math.floor(totalSegundos / 3600 / 24);
    const calcularHoras = Math.floor(totalSegundos / 3600) % 24;
    const calcularMinutos = Math.floor(totalSegundos / 60) % 60;
    const calcularSegundos = Math.floor(totalSegundos % 60);


    dias.innerHTML = calcularDias;
    horas.innerHTML = calcularHoras;
    minutos.innerHTML = calcularMinutos;
    segundos.innerHTML = calcularSegundos;


}

contadorFecha()

setInterval(contadorFecha, 1000)




