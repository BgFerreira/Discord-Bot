const express = require("express");
const app = express();
const port = 8080;

app.get("/", 
    function (request, response)
    {
        response.send("Hello World!")
    });

app.listen(port,
    function() 
    {
        console.log(`App is listening at http://localhost:${port}`);
    })