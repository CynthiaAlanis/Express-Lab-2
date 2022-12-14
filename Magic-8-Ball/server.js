
const express = require("express")
const app = express()

const responses = [
  "It is certain", 
  "It is decidedly so", 
  "Without a doubt", 
  "Yes definitely",
  "You may rely on it", 
  "As I see it yes", 
  "Most likely", 
  "Outlook good",
  "Yes", 
  "Signs point to yes",
  "Reply hazy try again", 
  "Ask again later",
  "Better not tell you now", 
  "Cannot predict now", 
  "Concentrate and ask again",
  "Don't count on it", 
  "My reply is no", 
  "My sources say no",
  "Outlook not so good", 
  "Very doubtful",
 ];

 //asking a question
app.get('/magic/:text', (req, res) => {
  let ask= req.params.text;
    res.send(`<h2>${ask} is the question</h2> 
    ${responses[Math.floor(Math.random() * responses.length)]}`)
});

  app.listen(3000, () => {
    console.log(`You are listening on port 3000...`) 
   })
