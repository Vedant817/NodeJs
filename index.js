//! Node is single threaded which means can run only one command at a time.
const https=require('http'); //* This module handles the request and response of the server.

function dataControl(req,res){
    res.write("<h1>Hello World!!</h1>");
    res.end()
}
https.createServer(dataControl).listen(4500)

// https.createServer((req,res)=>{
//     res.write("<h1>Hello!</h1>");
//     res.end()
// }).listen(4500); //! createServer takes function as parameter.
