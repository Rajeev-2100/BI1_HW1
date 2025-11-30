const Book = require("./models/book.model.js");
const express = require("express");
const cors = require("cors");

const app = express();

const fs = require("fs");
app.use(express.json());

const { initializeDatabase } = require("./db/db.connect.js");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

initializeDatabase();

async function saveNewBook(createNewBook) {
  try {
    const book = await Book(createNewBook);
    return book.save();
  } catch (error) {
    throw error;
  }
}

app.post("/books", async (req, res) => {
  try {
    const book = await saveNewBook(req.body);
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ eror: "Failed to fetch book detail" });
  }
});

async function getAllBook() {
  try {
    const book = await Book.find();
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books", async (req, res) => {
  try {
    const book = await getAllBook();
    res.status(201).json({ message: "Book Data: ", data: book });
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch movie details" });
  }
});

async function getAllBookByTitle(bookTitle) {
  try {
    const book = await Book.findOne({ title: bookTitle });
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books/title/:bookTitle", async (req, res) => {
  try {
    const book = await getAllBookByTitle(req.params.bookTitle);
    if (book) {
      res.status(201).json({ message: "Book Data: ", data: book });
    } else {
      res.status(404).json({ error: "Movie API not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch movie details" });
  }
});

async function getAllBookByAuthor(bookAuthor) {
  try {
    const book = await Book.findOne({ author: bookAuthor });
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books/author/:bookAuthor", async (req, res) => {
  try {
    const book = await getAllBookByAuthor(req.params.bookAuthor);
    if (book) {
      res.status(201).json({ message: "Book Data: ", data: book });
    } else {
      res.status(404).json({ error: "Book API not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch movie details" });
  }
});

async function bookDeleteById(bookId) {
  try {
    const book = await Book.findByIdAndDelete(bookId)
    return book;
  } catch (error) {
    throw error;
  }
}

app.delete("/books/:bookId", async (req, res) => {
  try {
    const book = await bookDeleteById(req.params.bookId);
    if (book) {
      res.status(201).json({ message: "Book Data deleted successfully: ", data: book });
    } else {
      res.status(404).json({ error: "Book API not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch movie details" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on this", PORT);
});
