var lista_maquina = ["piedra", "papel", "tijera"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var opcion_jugador = prompt("Cual es tu jugada? digita el numero de tu eleccion: 1) piedra  2) papel  3) tijera");
var opcion_maquina = lista_maquina[getRandomInt(2)];
if (opcion_jugador == 1){
    opcion_jugador = "piedra"
}else if (opcion_jugador == 2){
    opcion_jugador = "papel"
}
else if (opcion_jugador == 3){
    opcion_jugador = "tijera"
}
document.write(opcion_jugador + " - ")
document.write(opcion_maquina  + " - ");

if (opcion_jugador == opcion_maquina){
    document.write("Es un empate");
}else if ((opcion_jugador === "piedra" && opcion_maquina === "tijera") || (opcion_jugador === "papel" && opcion_maquina === "piedra") 
|| (opcion_jugador === "tijera" && opcion_maquina === "papel")){
    document.write("Ganaste");
}else if ((opcion_jugador === "papel" && opcion_maquina === "tijera") || (opcion_jugador === "tijera" && opcion_maquina === "piedra") || (opcion_jugador === "piedra" && opcion_maquina === "papel")){
    document.write("Perdiste");
}