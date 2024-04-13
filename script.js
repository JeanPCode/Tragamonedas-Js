let girar = false; //Variable que si la maquina esta girando
let status = document.getElementById("status"); //Se selecciona el elemento HTML donde se mostrará el estado del juego

// Función para iniciar el proceso de girar la máquina tragamonedas
function maquina(){
	if (girar){return null;}
    girar = true; 
    let numChanges = numeroAleatorio(1,4)*7; // Número de cambios aleatorios para determinar cuántas veces girarán los slots
    let numeberSlot1 = numChanges+numeroAleatorio(1,9); // Número de giros para el slot 1
    let numeberSlot2 = numChanges+2*7+numeroAleatorio(1,9); // Número de giros para el slot 2
    let numeberSlot3 = numChanges+4*7+numeroAleatorio(1,9); // Número de giros para el slot 3

    let i1 = 0; // Contador para el slot 1
    let i2 = 0; // Contador para el slot 2
    let i3 = 0; // Contador para el slot 3
    status.innerHTML = "CARGANDO..." // Muestra un mensaje de carga
    slot1 = setInterval(spin1, 50); // Establece un intervalo para el slot 1
    slot2 = setInterval(spin2, 50); // Establece un intervalo para el slot 2
    slot3 = setInterval(spin3, 50); // Establece un intervalo para el slot 3

    // Función para el giro del slot 1
	function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			clearInterval(slot1);
			return null;
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}

    // Función para el giro del slot 2
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}

    // Función para el giro del slot 3
	function spin3(){
		i3++;
		if (i3>=numeberSlot3){
			clearInterval(slot3);
			pruebaGanador();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a9"){
			slotTile.className = "a0";
		}
        slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}

// Función para verificar si el jugador ha ganado
function pruebaGanador(){
	let slot1 = document.getElementById("slot1").className
	let slot2 = document.getElementById("slot2").className
	let slot3 = document.getElementById("slot3").className

    // condicional para determinar cuando se gana y se pierde
	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a9") ||
		(slot1 == slot3 && slot2 == "a9") ||
		(slot2 == slot3 && slot1 == "a9") ||
		(slot1 == slot2 && slot1 == "a9") ||
		(slot1 == slot3 && slot1 == "a9") ||
		(slot2 == slot3 && slot2 == "a9") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a9")){
		status.innerHTML = "GANASTE! FELICIDADES";
	}else{
		status.innerHTML = "PERDISTE! SIGUE INTENTANDO"
	}
	girar = false;
}

//Funcion para crear numero aleatorio
function numeroAleatorio(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}