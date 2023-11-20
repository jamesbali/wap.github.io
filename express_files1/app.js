


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
//In the app.use path -> /product  is the same as -> /product/*


app.use ('/add-product', (req, res) => {

const html = 
`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action = "/save -product " method = "post" >

        <p>Title: <input name = "title "></p>
        <p> Price: <input type = "number" min = "1" name = "price"> </p>
        <button>Add</button>

    </form>
    
</body>
</html>

`

res.send(html);

});



//5. Routing 

//6. Error Handling

//7.Bootup
app.listen(3000, () => {

    console.log ('Your server is running at 3000/] Listening on 3000');
});