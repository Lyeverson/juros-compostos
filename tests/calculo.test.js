const calcularJurosCompostos = require('../src/calculo');

describe("Teste de cálculo de juros compostos", () => {
    test("Cenário 1: Valores positivos", () => {
        const montante = calcularJurosCompostos(1000, 0.05, 12);
        expect(montante).toBeCloseTo(1795.85, 2);
    });

    test("Cenário 2: Valores negativos (deve lançar erro)", () => {
        expect(() => calcularJurosCompostos(-1000, 0.05, 12)).toThrow("Os valores de capital, taxa e tempo devem ser positivos.");
        expect(() => calcularJurosCompostos(1000, -0.05, 12)).toThrow("Os valores de capital, taxa e tempo devem ser positivos.");
        expect(() => calcularJurosCompostos(1000, 0.05, -12)).toThrow("Os valores de capital, taxa e tempo devem ser positivos.");
    });
});
