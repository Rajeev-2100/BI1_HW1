const Book = require('./models/book.model.js')
const express = require('express')

const app = express()

const fs = require('fs')
app.use(express.json())

const { initializeDatabase } = require('./db/db.connect.js')

initializeDatabase()



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

async function getAllBookByTitle(bookTitle){
    try {
        const book = await Book.findOne({title: bookTitle})
        return book
    } catch (error) {
        throw error
    }
}


app.get('/books/title/:bookTitle', async (req,res) => {
    try {
        const book = await getAllBookByTitle(req.params.bookTitle)
        if(book){
            res.status(201).json({message: 'Book Data: ',data: book}) 
        }else{
            res.status(404).json({error: 'Movie API not found'})
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to Fetch movie details'})
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('Server is running on this', PORT)
})