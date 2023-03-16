const mongoose = require('mongoose');

const connect =()=>{
    return mongoose.connect('mongodb+srv://efron:8138834116@cluster0.6ax7suw.mongodb.net/hitchHiker?retryWrites=true&w=majority')
}
module.exports = connect;