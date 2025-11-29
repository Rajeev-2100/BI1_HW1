const Book = require('./models/book.model.js')
const express = require('express')

const app = express()

const fs = require('fs')
app.use(express.json())

const { initializeDatabase } = require('./db/db.connect.js')

initializeDatabase()

const PORT = 3001


async function getAllBook(){
    try {
        const book = await Book.find()
        return book
    } catch (error) {
        throw error
    }
}

app.get('/books', async (req,res) => {
    try {
        const book = await getAllBook()
        res.status(201).json({message: 'Book Data: ', data: book}) 
    } catch (error) {
        res.status(500).json({error: 'Failed to Fetch movie details'})
    }
})



app.listen(PORT, () => {
    console.log('Server is running on this', PORT)
})