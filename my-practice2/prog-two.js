const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory database
let books = [
  {
    bookId: 1,
    title: 'Node.js',
    author: {
      authorId: 303,
      firstname: 'Edward',
      lastname: 'Jack',
    },
  },
  {
    bookId: 2,
    title: 'Angular',
    author: {
      authorId: 308,
      firstname: 'John',
      lastname: 'Smith',
    },
  },
];

app.use(bodyParser.json());

// API 1: Get a single book by bookId
app.get('/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((book) => book.bookId === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// API 2: Save a single book into the database
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.bookId = books.length + 1;
  books.push(newBook);
  res.json(newBook);
});

// API 3: Get books by author's firstname (case-insensitive)
app.get('/books', (req, res) => {
  const firstname = req.query.firstname.toLowerCase();
  const filteredBooks = books.filter(
    (book) => book.author.firstname.toLowerCase().includes(firstname)
  );
  res.json(filteredBooks);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
