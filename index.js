// index.js
import { calculateFizzBuzz } from './src/scripts/fizzBuzzLogic.js';

// 1. Definimos los selectores (esto es lo que faltaba en tu snippet)
const inputNumero = document.getElementById('numeroInput');
const btnProcesar = document.getElementById('btnProcesar');
const contenedorError = document.getElementById('contenedorError');
const listaHistorial = document.getElementById('listaHistorial');

// 2. El evento que ya tenías bien escrito
btnProcesar.addEventListener('click', () => {
    const valor = inputNumero.value;
    const resultado = calculateFizzBuzz(valor);

    if (resultado.status === "success") {
        // Tu código para añadir el <li> al <ul>
        const li = document.createElement('li');
        li.textContent = `${resultado.data.number}: ${resultado.data.result}`;
        listaHistorial.appendChild(li);
        
        contenedorError.textContent = ""; // Limpiar errores previos
        inputNumero.value = ""; // Limpiar el input
    } else {
        // Tu código para mostrar el error
        contenedorError.textContent = resultado.message;
    }
});