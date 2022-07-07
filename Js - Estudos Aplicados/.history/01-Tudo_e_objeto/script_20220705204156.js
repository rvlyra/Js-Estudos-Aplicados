const menu = {
    
    class:  ".principal", // string

    ativar() {
        const menuElement = document.querySelector(this.class);
        console.log(menuElement);
    }

};
menu.ativar();

/**
 *  Não possuem propriedades ou métodos nativos:
 *  
 *  undefined
 *  null 
 * 
 */