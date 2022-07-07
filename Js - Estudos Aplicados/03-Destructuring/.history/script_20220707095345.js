// Destructuring consiste em desestruturar um evento ou resposta de servidor, buscando apenas o dado necessário para um objetivo específico.
function handleMouseMove(event){
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
}

document.documentElement.addEventListener('mousemove', handleMouseMove);