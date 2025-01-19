let secretNumber = 0;
let contador = 0;
let sortedList = [];
let maximoDeNumeros = 10
let maximoIntentos = 3

function asignarTextos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intento() {
    let numeroUsuario = parseInt(document.getElementById('numUsuario').value);
    console.log(contador);
    if (numeroUsuario === secretNumber){
        asignarTextos('h1', '¡Ganaste!')
        asignarTextos('p',`¡Acertaste el número secreto en ${contador} ${(contador === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if(contador == maximoIntentos){
            asignarTextos('p', `Has llegado al máximo de ${maximoIntentos} intentos`);
        } else{
        if(numeroUsuario > secretNumber) {
            asignarTextos('p','El número secreto es menor');
        }
        else{
            asignarTextos('p','El número secreto es mayor');
        }
        contador++;
        limpiar();
}
    }
    return;    
}

    function limpiar() {
        document.querySelector('#numUsuario').value='';
    }

function numeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*maximoDeNumeros)+1;
    console.log(numeroGenerado);
    console.log(sortedList);

    if(sortedList.length == maximoDeNumeros){
        asignarTextos('p', 'Has llegado al máximo de números posibles');
    } else{

    if(sortedList.includes(numeroGenerado)){
        return numeroAleatorio();
    } else {
        sortedList.push(numeroGenerado);
        return numeroGenerado;
    }
}
    }

    function condicionInicio(){
        asignarTextos('h1', 'Juego del número secreto');
        asignarTextos('p', `Por favor indica un número del 1 al ${maximoDeNumeros}`);
        limpiar();
        contador = 1
        secretNumber = numeroAleatorio();
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }
    function reinicio() {
        condicionInicio();
    }

condicionInicio();