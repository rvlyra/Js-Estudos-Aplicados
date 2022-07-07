// Destructuring consiste em desestruturar um evento ou resposta de servidor, buscando apenas o dado necessário para um objetivo específico.
function handleMouseMove(event){
    // pegando apenas as coordenadas do movento do mouse
    /** 
        const clientX = event.clientX;
        const clientY = event.clientY;
        console.log(clientX, clientY);
    */
    // a mesma operação de uma maneira mais otimizada
    const {clientX, clientY, target} = event;
    console.log(clientX, clientY, target)  
}

document.documentElement.addEventListener('mousemove', handleMouseMove);