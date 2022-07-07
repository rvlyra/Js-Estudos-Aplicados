// função escrita da maniera tradicional
/**
 * function uppName(name) {
 *  return name.toUpperCase();
 * }
 * 
 */


// função escrita com flecha
// Se eu tiver apenas um argumentos, os parênteses não serão necessários
// const upperName = name => {
//     return name.toUpperCase();
// }

// Caso haja mais de um argumento, é necessário o uso de parênteses
// 

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu);
    }

    addActiveEvent() {
        this.menuElement.addEventListener("click", function(event) {
            event.target.classList.add("active");
        })
    }
}

const menu = new Menu(".nav-menu");  // instanciando o elemento

console.log(menu)
// vair retornar o objeto criado e pela classe e instanciado pelo método Menu