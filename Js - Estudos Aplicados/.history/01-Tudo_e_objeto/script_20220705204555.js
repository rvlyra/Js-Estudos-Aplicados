// const menu = {
    
//     class:  ".principal", // string

//     ativar() {
//         const menuElement = document.querySelector(this.class);
//         console.log(menuElement);
//     }

// };
// menu.ativar();


const menu = {
    // propriedades
    class: ".nav-menu",
    // métodos ou funções
    ativar() {   // também poderia ser incocar 
        const el = document.querySelector(this.class);
    } 
}


/**
 *  Não possuem propriedades ou métodos nativos:
 *  
 *  undefined
 *  null 
 * 
 */