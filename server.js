/**
 * Created by Sharpshooter on 2017-01-28.
 */

// link to connect
let connect = require('connect');
let url = require('url');

// create a new connect object
let app = new connect();

// Basic Calculator
let calc = function(req, res, next)
{
    // get the querystring like ?method=multiply&x=12&y=2
    let qstring = url.parse(req.url, true).query;

    // get the values
    let method = qstring.method;
    let x = qstring.x;
    let y = qstring.y;

    // Calculate according to selected method
    var result = 0;
    if (method == "multiply"){
        result = x * y;
    }
    else if (method == "divide"){
        result = x / y;
    }
    else if (method == "subtract"){
        result = x - y;
    }
    else if (method == "add"){
        result = parseFloat(x) + parseFloat(y);
}
    else
    {
        result = "Invalid Method. Please use only arithmetic operators!"
    }

    // show the result
    res.end('<h1>Basic Calculator</h1><br/>' + 'Method: ' + method + '<br/>' +
    'x: ' + x + '<br/>' + 'y: ' + y + '<br/>' + 'Calculation: ' + result);
};


// map the url's to the correct virtual pages
app.use('/calc', calc);

// Run on http server
let port = process.env.PORT || 3000;
app.listen(port);
console.log('Connect server running on any port');