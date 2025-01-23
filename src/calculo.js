/**
 * Calcula o montante final usando a fórmula de juros compostos.
 * Fórmula: M = C * (1 + i)^t
 * 
 * @param {number} capital - O valor inicial (capital).
 * @param {number} taxa - A taxa de juros (em decimal, ex.: 0.05 para 5%).
 * @param {number} tempo - O tempo em períodos.
 * @returns {number} - O montante final.
 */
function calcularJurosCompostos(capital, taxa, tempo) {
    if (capital < 0 || taxa < 0 || tempo < 0) {
        throw new Error("Os valores de capital, taxa e tempo devem ser positivos.");
    }
    return capital * Math.pow(1 + taxa, tempo);
}

// Exporta a função para ser usada em outros arquivos
module.exports = calcularJurosCompostos; 
