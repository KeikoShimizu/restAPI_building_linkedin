import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstname: {
        type:String,
        required: 'Enter a first name'
    },
    lastname: {
        type:String,
        required: 'Enter a first name'
    },
    email: {
        type:String,
    },
    conpany: {
        type:String,
        
    },
    phone: {
        type:Number,
       
    },
    created_date: {
        type:Date,
        default:Date.now
    } 

})
