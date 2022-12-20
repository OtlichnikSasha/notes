require('dotenv').config()
const express = require("express")
const sequelize = require("./dbConnection")
const cors = require('cors')
const router = require("./apiRoutes/index")
const app = express()

const corsOptions ={
    origin: ['http://localhost:3000', 'https://otlichniksasha.github.io/Severstal-Notes-Test-App/'],
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json({extends: true}))
app.use("/api", router)

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Port: ${PORT}`))
    } catch (e) {
        console.log('Server Error', e)
    }
}

start()