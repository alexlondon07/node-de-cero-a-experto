// setTimeout( () =>  {
//     console.log('Hello');
// }, 300);

let getUserById = (id, callback ) => {
    let user = {
        name: 'Alexander',
        id
    }

    if(id === 20){
        callback(`The user with id: ${id} is not found in database`)
    }else{
        callback(null, user);
    }
    
}

getUserById(10, (err, user) =>{
    if(err){
        return console.log(err);
    }
    console.log('User the database', user);
})