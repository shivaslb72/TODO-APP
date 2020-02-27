const mongoose = require("mongoose")

setupDB = () => {
    mongoose.connect("mongodb://localhost:27017/oct-todoapp", { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            console.log("connected to db")
        })
}

module.exports = setupDB