class Transporte {
  constructor() {
    this.terrestre = true;
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro = new Carro("Lilás", 4);

console.log(carro);
/**
const carro = { cor: "Cinza", portas: 4, ano: 2022 };

const cloneCarro2 = carro;
const cloneCarro = { ...carro };
const cloneCarro1 = { ...carro, turbo: true };
*/

// mostrar lista de empresas

// .. --> Rest (o que tiver depois dos três pontos, atribuir a um array)
/** 
function showList(empresa, ...clientes){
    console.log(empresa);
    console.log(clientes);
}
showList("rvlyra", "Google Cloud", "Amazon", "Facebook", 35)
*/

// Spread --> espalhar os itens da lista
/** 
const numeros = [1, 2, 3, 45, 32, 102, 42];

console.log(Math.max(...numeros));
 */

// NodeList se parece com um array, mas possui características difeentes.
// transformando NodeList em Arrays

// const items = document.querySelectorAll("li");
// [...items].map((item) => {
//   console.log(item);
// });
// console.log(items);
