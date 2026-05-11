import { expect, describe, test } from "@jest/globals";
import { calculateFizzBuzz } from "../src/scripts/fizzBuzzLogic.js";

describe("FizzBuzz - reglas de divisibilidad", () => {
    test("devuelve 'Fizz' cuando el número es múltiplo de 3", () => {
        const resultado = calculateFizzBuzz(9);

        expect(resultado).toEqual({
            status: "success",
            message: "Procesado correctamente",
            data: { number: 9, result: "Fizz" }
        });
    });

    test("devuelve 'Buzz' cuando el número es múltiplo de 5", () => {
        const resultado = calculateFizzBuzz(10);

        expect(resultado).toEqual({
            status: "success",
            message: "Procesado correctamente",
            data: { number: 10, result: "Buzz" }
        });
    });

    test("devuelve 'FizzBuzz' cuando el número es múltiplo de 3 y 5", () => {
        const resultado = calculateFizzBuzz(15);

        expect(resultado).toEqual({
            status: "success",
            message: "Procesado correctamente",
            data: { number: 15, result: "FizzBuzz" }
        });
    });

    test("devuelve el número como string cuando no es múltiplo de 3 ni de 5", () => {
        const resultado = calculateFizzBuzz(7);

        expect(resultado.status).toBe("success");
        expect(resultado.data).toEqual({ number: 7, result: "7" });
    });

    test("acepta el número en formato string numérico", () => {
        const resultado = calculateFizzBuzz("15");

        expect(resultado.status).toBe("success");
        expect(resultado.data.result).toBe("FizzBuzz");
    });
});

describe("FizzBuzz - manejo de errores", () => {
    test("devuelve error cuando la entrada no es numérica", () => {
        const resultado = calculateFizzBuzz("Hola");

        expect(resultado.status).toBe("error");
        expect(resultado.message).toMatch(/número válido/i);
        expect(resultado.data.result).toBeNull();
    });

    test("devuelve error cuando la entrada está vacía", () => {
        const resultado = calculateFizzBuzz("");

        expect(resultado.status).toBe("error");
        expect(resultado.data.result).toBeNull();
    });

    test("devuelve error cuando la entrada es solo espacios en blanco", () => {
        const resultado = calculateFizzBuzz("   ");

        expect(resultado.status).toBe("error");
        expect(resultado.data.result).toBeNull();
    });
});
