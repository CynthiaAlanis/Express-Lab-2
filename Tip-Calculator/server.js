const express = require('express')
const app = express()

//http://localhost:3000/tip/100/20
app.get('/tip/:total/:tipPercentage', (req, res) => {
  let total = parseInt(req.params.total)
  let tipPercentage = parseInt(req.params.tipPercentage)
  res.send(`${total * (tipPercentage/100)}`)
});

app.listen(3000, () => {
  console.log(`You are listening on port 3000...`) 
 })