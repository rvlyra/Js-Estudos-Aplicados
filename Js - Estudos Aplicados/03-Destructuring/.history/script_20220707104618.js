// Destructuring consiste em desestruturar um evento ou resposta de servidor, buscando apenas o dado necessário para um objetivo específico.
/** 
function handleMouseMove(event){
    // pegando apenas as coordenadas do movento do mouse
    
        // const clientX = event.clientX;
        // const clientY = event.clientY;
        // console.log(clientX, clientY);
    
    // a mesma operação de uma maneira mais otimizada
    const {clientX, clientY, target} = event;
    console.log(clientX, clientY, target)  
}
*/
/**
function handleMouseMove  ({clientX, clientY})  {
    console.log(clientX, clientY)
}

document.documentElement.addEventListener('mousemove', handleMouseMove);
*/

// Operando com arrays

const clubes = ['Corinthians', 'Palmeiras', 'São Paulos', 'Santos', 'Flamento', 'Fuminense', 'Botafogo', 'Vasco'];

const [clube1, clube2, clube3] = clubes;

console.log();
