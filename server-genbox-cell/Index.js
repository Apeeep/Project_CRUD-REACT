const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const dataRoutes = require('./Router')
const app = express()
const port = process.env.PORT || 6287

app.use(cors())
app.use(bodyParser.json())
app.use(multer().single('none'))

app.use('/genbox', dataRoutes)

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500
    const message = error.message
    const data = error.data

    res.status(status).json({
        message,
        data
    })
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})