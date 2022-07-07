const menu = {
    
    class:  ".principal", // string

    ativar() {
        const menuElement = document.querySelector(this.class);
        console.log(menuElement);
    }

};
menu.ativar();