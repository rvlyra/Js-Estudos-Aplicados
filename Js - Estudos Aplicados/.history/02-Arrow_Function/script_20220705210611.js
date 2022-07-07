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
        this.menuElement = document.querySelector(menu)
    }
}

const menu = Menu(".nav-menu"); // instanciando o menu