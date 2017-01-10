// demo

const express = require("express");
const bodyParser = require("body-parser");

let port = process.env.PORT || 8888;

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));

app.get('/hi', (req, res) => {
  res.send({message:"🐼", remark:"hi 🌍"});
})

app.listen(port)
console.log(`🌍 Web Server is started - listening on ${port}`)
