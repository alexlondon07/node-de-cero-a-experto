const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let userShema = new Schema({
    name:{
        type: String,
        required: [true, 'The name field is required']
    },
    email:{
        type: String,
        required: [true, 'The email field is required']
    },
    password:{
        type: String,
        required: [true, 'The email password is required']
    },
    img:{
        type: String
    },
    role:{
        default: 'USER_ROLE'
    },
    status:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
})