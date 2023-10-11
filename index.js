// // const  math = require('./module.js')
// // console.log( 'value is', math.add(5,6),math.sub(4,19));
// // console.log('hello');

// const express = require("express");

// // const { error } = require('console')
// // const fs=require ('fs')

// // fs.writeFileSync('./word.html','hello my name is saeed')

// // fs.cpSync('./word.txt', 'copy.txt')
// // fs.mkdirSync('folder-3/hello.html' , error)
// // fs.writeFileSync('./folder-3/text/index.py', 'that is styling file')
// // fs.unlinkSync('./folder-3/text/index.py')
// // fs.readFileSync('copy.txt')
// // fs.appendFileSync('copy.txt' , 'this is updated')
// // fs.renameSync('copy.txt', 'rename.html')

// // console.log(fs);

// // express work
// const express = require("express")

// const port= 4240

// const app =express()

// app.get("/",(req, res)=>{
//     res.send("this is home page")
// })
// app.get("/about",(req, res)=>{
//     res.send("this is about page")
// })
// app.get("/login",(req, res)=>{
//     res.send("this is login page")
// })
// app.listen(port, ()=>{
//     console.log('welcome to server of express');
// } )

const express = require("express");

const data = require("./MOCK_DATA.json");
const app = express();

// app.get('/users', (req , res)=>{
// // const html = `
// // {
// //  <ul>
// //  ${data.map((user)=>{
// // return (
// //    ` <li>${user.first_name}</li>`
// // )
// //  })}
// //  </ul>
// // }
// // `
// // return res.send(html)

// })

app.get("/api/users", (req, res) => {
  return res.send(data);
});


app.route('/api/users/:id')
.get( (req, res) => {
    const id = Number(req.params.id);
    const users = data.find((users) => users.id === id);
    return res.json(users)
  })

.put( ()=>{})
.delete ( ()=>{})
.post ( ()=>{})
app.listen(800, () => {
  console.log("work completed");
});
