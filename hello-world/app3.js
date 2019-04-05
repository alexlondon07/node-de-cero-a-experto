console.log('Inicio del programa');

setTimeout(() => {
    console.log('Timeout 1');
}, 3000);

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

setTimeout(() => {
    console.log('Timeout 3');
}, 0);

console.log('Fin del programa');