const { initializeDatabase } = require('./db/db.connect')
const fs = require('fs')
const Book = require('./models/book.model')
initializeDatabase()

const jsonData = fs.readFileSync('books.json', 'utf-8')
const BooksData = JSON.parse(jsonData)


async function seedData(){
    try {
        for(const BookData of BooksData){
            const newBook = new Book({
                title: BookData.title,
                author: BookData.author,
                publishedYear: BookData.publishedYear,
                genre: BookData.genre,
                language: BookData.language,
                country: BookData.country,
                rating: BookData.rating,
                summary: BookData.summary,
                coverImgUrl: BookData.coverImgUrl,
            })
            console.log(newBook.genre)
            await newBook.save()
        }
    }catch(error){
        console.log('Error seeding the data', error)
    }
}

seedData()