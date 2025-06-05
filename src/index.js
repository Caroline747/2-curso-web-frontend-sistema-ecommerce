

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
  const produto = produtosDisponiveis.find(p => p.nome === nomeProduto);
  if (produto) {
    carrinho.push(produto);
    alert(`${produto.nome} adicionado ao carrinho.`);
  } else {
    alert("Produto não encontrado.");
  }
}

// Função para remover um produto do carrinho
function removerDoCarrinho(nomeProduto) {
  const index = carrinho.findIndex(p => p.nome === nomeProduto);
  if (index !== -1) {
    const produtoRemovido = carrinho.splice(index, 1);
    console.log(`${produtoRemovido[0].nome} removido do carrinho.`);
  } else {
    console.log("Produto não encontrado no carrinho.");
  }
}

// Função para calcular o total do carrinho
function calcularTotal() {
  const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
  console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
  return total;
}



