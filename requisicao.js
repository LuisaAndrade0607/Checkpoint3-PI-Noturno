const produtos = require('./produtos'); //requisição dos dados



let carrinho = produtos.filter((estoque) => {
    let valor = estoque.valor;
    let qualidade = estoque.qualidade;
    let status = estoque.status;
    return (
        valor >= 482 && valor <= 1600 && qualidade > 6 && status === true 
    )
});//método .filter() responsável por filtrar os dados necessários

console.log(carrinho);//exibição dos dados filtrados (variável carrinho)

let carrinhoTotal = carrinho.reduce((valor1, valor2) =>
    valor1.valor + valor2.valor 
);//somatória dos valores

console.log(`O valor total de seu carrinho é de: R$${carrinhoTotal}`);//exibição total dos valores do carrinho










