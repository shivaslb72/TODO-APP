const express = require("express")
const setupDB = require("./config/database")
const router = require("./config/routes")
const port = 4000
const app = express()
const cors = require('cors')

setupDB()
app.use(express.json())
app.use(cors())
app.use("/", router)

app.listen(port, () => {
    console.log("Listing on port", port)
})