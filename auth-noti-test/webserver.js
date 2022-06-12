var express = require('express');
const path = require('path');
var app = express();
var cors = require('cors')
const history = require('connect-history-api-fallback');

app.use(express.json())


app.use(cors({
  origin: ['http://localhost:7542', 'http://localhost:8081']
}))

app.use('/kaso-agri',express.static(path.join(__dirname, '../webui/kaso-agri')));
// app.get('/web', (req,res) => {
//    res.sendFile(path.join(__dirname, '../webui/dist/index.html'));
// });

// app.use(history({
//   disableDotRule: true,
//   verbose: true,
//   index: '/kaso-agri'

// }));

//app.use(express.static(path.join(__dirname, '../webui/kaso-agri')));
// app.get('/web', (req,res) => {
//    res.sendFile(path.join(__dirname, '../webui/dist/index.html'));
// });

// app.get('/kaso-agri', (req,res) => {
//    res.render(path.join(__dirname, '../webui/kaso-agri/index.html'));
// });

//app.use('/kaso-agri',express.static(path.join(__dirname, '../webui/kaso-agri')));

app.listen(8080, function() {
  console.log(' Http Express Server run in 8080');
});
