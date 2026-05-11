import { calculateFizzBuzz } from './fizzBuzzLogic.js';

export const initFizzBuzzUI = () => {
    const inputNumero = document.getElementById('numeroInput');
    const btnProcesar = document.getElementById('btnProcesar');
    const contenedorError = document.getElementById('contenedorError');
    const listaHistorial = document.getElementById('listaHistorial');

    const historial = [];

    const renderEntrada = (entrada) => {
        const li = document.createElement('li');
        li.textContent = `${entrada.number}: ${entrada.result}`;
        listaHistorial.appendChild(li);
    };

    const mostrarError = (mensaje) => {
        contenedorError.textContent = mensaje;
    };

    const limpiarError = () => {
        contenedorError.textContent = "";
    };

    btnProcesar.addEventListener('click', () => {
        const resultado = calculateFizzBuzz(inputNumero.value);

        if (resultado.status === "success") {
            historial.push(resultado.data);
            renderEntrada(resultado.data);
            limpiarError();
            inputNumero.value = "";
        } else {
            mostrarError(resultado.message);
        }
    });

    inputNumero.addEventListener('input', limpiarError);

    return { historial };
};
