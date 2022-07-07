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
const upperName = (name, lastName) => {
    return name.toUpperCase();
    return lastName.toUpperCase();
}
