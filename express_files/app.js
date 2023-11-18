

const express = require ('express');

//2. Instantiation 

const app = express ();

//3. Connfiguration

//app.set('case sensitive routing', true);
app.disable('case sensitive routing');

app.set('port', process.env.PORT || 3000);
console.log (app.get('port'));
console.log (process.env.NODE_ENV);


//4. Middleware

// If the path is not povided for, then the request in not specific the a given URL.

app.use ('/product', (req, res, next) => {

    console.log ('inside/product .....');
    res.end('product');
});

app.use (function(req, res, next){

    console.log('1....')

    res.end('Hi!!!!');

});



app.use ('/user',(req, res) => {
    res.end('Hi');
});





//4. Middleware

//5. Routing 

//6. Error Handling

//7.Bootup
app.listen(3000, () => {

    console.log ('Your server is running at 3000/] Listening on 3000');
});