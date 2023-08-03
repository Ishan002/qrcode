const mongoose = require("mongoose");

uri = "mongodb+srv://ishan4343shah:ekWNVKvTTG0YElz4@qrcode.ibhsbde.mongodb.net/"

const connectDB = () => {
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

module.exports = connectDB