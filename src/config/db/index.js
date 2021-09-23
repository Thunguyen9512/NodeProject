const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Thunguyen_nodejs_demo');
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect}  //export a object with connect method
