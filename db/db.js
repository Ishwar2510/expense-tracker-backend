const mongoose = require('mongoose');
const db = async () => {
    
    console.log(process.env.MONGO_URL)
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        
        console.log(error);
    }
}

module.exports = {db}