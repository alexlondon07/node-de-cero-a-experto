//Promise

let getNamePromise = () => {
    return new Promise ( ( resolve, reject) => {

        setTimeout(() => {
            resolve('EMILIANA LONDOÑO');
        }, 3000);

    });
}

let greeting = async() => {
    let name = await getNamePromise();
    return `hola ${name}`;
}

/*let getName = async() => {
    //throw new Error('No existe un nombre para ese usuario');
    return 'ALEXANDER ANDRES LONDONO ESPEJO';
};
console.log(getName());*/

