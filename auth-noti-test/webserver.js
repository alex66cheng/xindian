var express = require('express');
const path = require('path');
var app = express();
var cors = require('cors')

app.use(express.json())


app.use(cors({
  origin: ['http://localhost:7542', 'http://localhost:8081']
}))

app.use(express.static(path.join(__dirname, '../webui/dist')));
app.get('/web', (req,res) => {
   res.sendFile(path.join(__dirname, '../webui/dist/index.html'));
});

app.listen(8080, function() {
  console.log(' Http Express Server run in 8080');
});
