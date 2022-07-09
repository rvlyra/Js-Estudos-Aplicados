const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

// Reduce

const precosFiltro = precos.filter((preco) => preco.includes("R$"));

const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);

const total = precosNumeros.reduce((acc, item) => acc + item);

console.log(total);

/**
// Map

const precosFiltro = precos.filter((preco) => preco.includes("R$"));

const precosNumeros = precosFiltro.map((preco) => {
  console.log(preco);
  //return preco.replace("R$ ", "");

  //Para transformar uma string em um número, basta adicionar o sinal de soma (+) à frente da variável. 
  // Podemos optar por escrever Number e o resultado é mesmo
  return Number(preco.replace("R$ ", ""));
});

console.log(precosNumeros);
*/
// Filter

/**
const precosFiltro = precos.filter((preco) => {
  console.log(preco.includes("R$"));
  preco === "R$" ? true : false;
  return true;
});

// Quando há apenas 1 elemento, podemos usar a seguinte estrutura?
const precosFiltro = precos.filter((preco) => preco.includes("R$"));

console.log(precosFiltro);
*/
/**

 const precos = [
   "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

// Retorna uma array nova, que contem os items em
// que o retorno da função for verdadeiro
const precosFiltro = precos.filter((preco) => preco.includes("R$"));

// Retorna uma nova array, modificada com o
// retorno de cada item da função
const precoNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);

// Retorna um valor um único, o valor retornado
// fica disponível na próxima iteração através do
// primeiro argumento, por isso o nome acumulador
const total = precoNumeros.reduce((acc, item) => acc + item);

console.log(total);

*/
