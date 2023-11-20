const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const books = [
  {
    bookId: 1,
    title: 'Node.js',
    author: {
      authorId: 303,
      firstname: 'Edward',
      lastname: 'Jack'
    }
  },
  {
    bookId: 2,
    title: 'Angular',
    author: {
      authorId: 308,
      firstname: 'John',
      lastname: 'Smith'
    }
  }
];

// API 1: GET a single book by bookId
app.get('/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.bookId === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

// API 2: POST a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.bookId = books.length + 1;
  books.push(newBook);

  res.status(201).json(newBook);
});

// API 3: GET books by author's firstname
app.get('/books', (req, res) => {
  const firstname = req.query.firstname;
  const filteredBooks = books.filter(
    book => book.author.firstname.toLowerCase().includes(firstname.toLowerCase())
  );

  res.json(filteredBooks);
});

// API 4: GET books by author's firstname containing letter 'E'
app.get('/books/e', (req, res) => {
  const filteredBooks = books.filter(book =>
    book.author.firstname.toLowerCase().includes('e')
  );

  res.json(filteredBooks);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
