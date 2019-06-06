const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let roles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not role valid'
};

let Schema = mongoose.Schema;
let userShema = new Schema({
    name:{
        type: String,
        required: [true, 'The name field is required']
    },
    email:{
        type: String,
        unique: true,
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
        type: String,
        default: 'USER_ROLE',
        enum: roles
    },
    status:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});
userShema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

userShema.plugin( uniqueValidator, { message: '{PATH} should be unique'} )
module.exports = mongoose.model('User', userShema);
