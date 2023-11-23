
const express = require ('express');

const app = express();
app.use(express.json());



const bookRouter = require('./routes/book-router')

app.use('/books', bookRouter)


app.use ((err, req, res, next)=> {

    res.status(500).send ('Server Error ${err.message}');

})

app.listen (3000, () => {

    console.log ('Listen on 3000');
})