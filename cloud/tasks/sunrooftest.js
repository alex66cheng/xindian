

var mqtt = require('mqtt');

var opt = {
  port:1833,
  clientId: 'kasoxxyy'
}

var client = mqtt.connect('mqtt://localhost', opt );

client.on('connect', function() {
  console.log('(Web-Exp-Sub) Connect to Server ' );
  client.subscribe('kss2100', {qos:1} );
});

client.on('message', function(topic, msg) {
    
  console.log('Receive ' + topic + ' msg=' + msg.toString() );
 
    
});

var valle = 999;

var iii = 0;

var strNNSF = ['NNSF', 'SESF', 'SWSF', 'NSWN', 'SSWN'];


setInterval( function() {   
    
    
  if( iii == 5 ) {
    if( valle == 100 ) valle = 999;
    else valle = 100;
      iii = 0;
  }
    
    console.log('Send Sunroof ' + strNNSF[iii] + ' command');
    
  var NNSF = '{"gwid":"KASO03HM","sfid":"' + strNNSF[iii] + '","sfvalue":"' + valle + '"}';
//var NNSF = '{"gwid":"KASO03HM","sfid":"NNSF","sfvalue":"'+ valle + '"}';
//  var SESF = '{"gwid":"KASO03HM","sfid":"SESF","sfvalue":"'+ valle + '"}';
//  var SWSF = '{"gwid":"KASO03HM","sfid":"SWSF","sfvalue":"'+ valle + '"}';
//  var NSWN = '{"gwid":"KASO03HM","sfid":"NSWN","sfvalue":"'+ valle + '"}';
//  var SSWN = '{"gwid":"KASO03HM","sfid":"SSWN","sfvalue":"'+ valle + '"}';
  
 // console.log( JSON.stringify(onstsObj) );
  client.publish('kss1000',NNSF );
    
    iii++;
    
  //  client.publish('kss1000',SESF );
    
//    client.publish('kss1000',SWSF );
    
//    client.publish('kss1000',NSWN );
    
//    client.publish('kss1000',SSWN );

}, 1000 );







