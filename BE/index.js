const Book = require('./models/book.model.js')
const express = require('express')

const app = express()

const fs = require('fs')
app.use(express.json())

const { initializeDatabase } = require('./db/db.connect.js')

initializeDatabase()

const PORT = 3001

app.listen(PORT, () => {
    console.log('Server is running on this', PORT)
})