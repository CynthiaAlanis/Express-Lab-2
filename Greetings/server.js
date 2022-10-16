const express = require('express')
const app = express()

//-----Greeting-------
app.get('/greeting', (req, res) => {
  console.log(req)
  res.send("Hello, stranger");
});

//--------------NAME--------------------
//  http://localhost:3000/greeting/Jimmy-boy
app.get('/greeting/:name', (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}`);
})


app.listen(3000, () => {
  console.log(`You are listening on port 3000...`) 
 })