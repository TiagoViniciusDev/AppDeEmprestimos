export const CalcularValorParcela = (valorDoEmprestimo, numeroDeParcelas) => {
    return Math.round(Math.round((valorDoEmprestimo/numeroDeParcelas)+(valorDoEmprestimo*0.2)))
}