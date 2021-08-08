var express = require('express');
var app = express();


app.locals.outtempdiv = '  '; 
app.locals.outtempscript = ' ';

app.locals.outhumidiv = '  '; 
app.locals.outhumiscript = ' ';

app.use( '/images', express.static('/home/ec2-user/kaso/images') );
app.use( '/kaso-agri', express.static('/home/ec2-user/kaso/kaso-agri'));
app.use( '/monitor', express.static('/home/ec2-user/kaso/kaso-agri'));


var ohgaobj = {} ;

var mqtt = require('mqtt');

var opt = {
   port:1833,
   clientId: 'kaso996688',
   username: 'techware',
   password: 'temppwd'
};

var client = mqtt.connect('http://localhost', opt );

client.on('connect', function() {
  console.log('Connect to kaso mqtt broker');
  client.subscribe('ohga/#', {qos:1} );
});

client.on('message', function(topic, msg) {
    console.log('kaso Receive ' + topic + ' mgr= ' + msg.toString() );
    ohgaobj = JSON.parse(msg.toString());
});

app.locals.title = "KASO IOT system";
app.locals.posts = {};

app.all('*', function( req, res, next) {
 // console.log('app.all(*)' );
    
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    
  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
      
          next();
     
  }
});

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/sensordata', function(req, res) {
    
    res.end(JSON.stringify(ohgaobj));
});

app.listen(8080, function() {
  console.log(' Http Express Server run in 8080');
});
