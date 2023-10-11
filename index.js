
// const  math = require('./module.js')
// console.log( 'value is', math.add(5,6),math.sub(4,19));
// console.log('hello');



// const { error } = require('console')
// const fs=require ('fs')

// fs.writeFileSync('./word.html','hello my name is saeed')

// fs.cpSync('./word.txt', 'copy.txt')
// fs.mkdirSync('folder-3/hello.html' , error)
// fs.writeFileSync('./folder-3/text/index.py', 'that is styling file')
// fs.unlinkSync('./folder-3/text/index.py')
// fs.readFileSync('copy.txt')
// fs.appendFileSync('copy.txt' , 'this is updated')
// fs.renameSync('copy.txt', 'rename.html')

// console.log(fs);




// express work 
const express = require("express")

const port= 4240

const app =express()

app.get("/",(req, res)=>{
    res.end("this is home page")
})
app.get("/about",(req, res)=>{
    res.end("this is about page")
})
app.get("/login",(req, res)=>{
    res.end("this is login page")
})
app.listen(port, ()=>{
    console.log('welcome to server of express');
} )