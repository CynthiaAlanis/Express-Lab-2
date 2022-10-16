const express = require('express')

const app = express()


//-----99 Bottles-------

//----HOME----
app.get('/', (req, res) => {
  res.send("99 Bottles of beer on the wall");
});


//----
app.get("/:number_of_bottles", (req, res) => {
  let bottles= req.params.number_of_bottles;
  if (bottles > 0) {
    res.send(`<h2>${bottles} Bottles of beer on the wall</h2>
        <a href ="/${bottles - 1}">Take one down, pass it around</a>`);
  } else {
    res.send(`No more beers! <a href ="/">Start over</a>`);
  }
});



app.listen(3000, () => {
  console.log(`You are listening on port 3000...`) 
 })