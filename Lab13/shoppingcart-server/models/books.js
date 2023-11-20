let books = [

    { id : 1, title : 'React Book', ISBN: '987474123', publishedDate: '2023 - 11- 14', author: 'John Smith'},
    { id : 2, title : 'Node.Js Book', ISBN: '678889432', publishedDate: '2022 - 10- 26', author: 'Peter Edward'},
    { id : 3, title : 'Angular Book', ISBN: '768123692', publishedDate: '2021 - 07- 16', author: 'Ruth Carson' },
];

let counter = 4;


module.exports = class Book {

    constructor( id, title, ISBN, publishedDate, author){

        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author

    }


   static getAllBooks() {

        return books;
    }

   static getBookById(id) {

    return books.find(b => b.id == id);

    }

    save() {

        this.id = counter++;

        books.push(this);

    }

    updateById (id) {

        const index = books.findIndex(k=> k.id == id);

        if (index > -1) {
            books[index] = this;
        }
        else {
            throw new Error ('Books with ID: ${id} cannot be found in DB' );
        }
    }

   static deleteById(id) {

       const index = books.findIndex(b => b.id ==id);

       if(index > -1) {
        books.splice (index, 1);

       } 
       else {
        throw new Error ('Book with ID: ${id} cannot be found in DB' );
        }

    }


}