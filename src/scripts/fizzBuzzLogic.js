export const calculateFizzBuzz = (input) => {
    try {
        if (typeof input === "string" && input.trim() === "") {
            throw new Error("Por favor, introduce un número válido.");
        }

        const number = Number(input);

        if (isNaN(number)) {
            throw new Error("Por favor, introduce un número válido.");
        }

        // Lógica FizzBuzz
        let result = "";
        
        if (number % 3 === 0 && number % 5 === 0) {
            result = "FizzBuzz";
        } else if (number % 3 === 0) {
            result = "Fizz";
        } else if (number % 5 === 0) {
            result = "Buzz";
        } else {
            result = number.toString();
        }

        return {
            status: "success",
            message: "Procesado correctamente",
            data: { number: number, result: result }
        };

    } catch (error) {
        // Captura el error para que tu UI pueda mostrarlo
        return {
            status: "error",
            message: error.message,
            data: { number: input, result: null }
        };
    }
};