const query = require('./db/query.js')
const utils = require('./utils.js')


// ===== mqtt =====
var mqtt = require('mqtt');

var opt = {
   port:1883,
   clientId: "Client1234567",
   username: 'techware',
   password: 'temppwd'
};

//var client = mqtt.connect('mqtt://40.78.123.28', opt );
var client = mqtt.connect('mqtt://localhost', opt);

client.on('connect', () => {
  console.log('(Sub) Connect to Server' );
  client.subscribe( 'Pig/Pig00001/#', {qos:1} );
  //client.subscribe( 'Pig/#', {qos:1} );
});

var sensorDataBuffer = {}


client.on('message', (topic, data, packets) => {
  
  let dataobj = JSON.parse(data.toString())
  let ids = Object.keys(dataobj)
  let dataArr = []
  //console.log(ids)
 	utils.genDataWithId(ids, dataobj)
 		.then((dataArr) => {
 			sensorDataBuffer = {factory: topic.split('/')[1], params: dataArr}
 		})
  
})


// ===== restful api =====

const admin = require('firebase-admin');
const serviceAccount = require('./Mark_admin.json');

// The Firebase Admin SDK is used here to verify the ID token.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const validateFirebaseIdToken = require('./validateFirebaseIdToken.js')(admin)


var express = require('express');
var app = express();
var cors = require('cors')

app.use(express.json())

app.use(cors({
  origin: ['http://localhost:7542', 'http://localhost:8081']
}))

app.use(validateFirebaseIdToken)


app.get('/Pig/Pig00001', (req, res, next) => {
  console.log('connected')
	res.json(sensorDataBuffer)
  
})


app.get('/history', async (req, res, next) => {
  console.log('history connected')
  const result = await query.getHistoryWithTimeRange(req.query.fromTime, req.query.toTime, req.query.key)
  res.json(result)
  
})

app.post('/FCM/subscribeTopic', async (req, res) => {
  let {registrationTokens, topic} = JSON.parse(JSON.stringify(req.body))
  console.log(registrationTokens, topic)

  try{
    let response = await admin.messaging().subscribeToTopic(registrationTokens, topic || 'test')
    res.json({success: true})
    console.log('Successfully subscribed to topic:', response);

    // 直接秒send message
    const message = {
      notification: {
        title: 'test notification',
        body: 'this is test notification from server'
      },
      topic: 'test',
    }
    admin.messaging().send(message).then((resp)=>{
      console.log(resp)
      console.log('success')
    })
  }
  catch(errer){
    res.json({success: false})
    console.log('Error subscribing to topic:', error);
  }

})



app.listen(8080, function() {
  console.log(' Http Express Server run in 8080');
});



