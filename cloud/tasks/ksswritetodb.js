function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  var strTime = hours + ':' + minutes + ':' + seconds;
  var mm = date.getMonth();
  mm = mm+1;
  return date.getFullYear() + '-' + mm + '-' + date.getDate() + ' ' + strTime;
}

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/kasoagridb', {useNewUrlParser: true}, function( err, db) {  if(err) throw err;
  console.log('mongdb is running!');
  db.close();
});

var mqtt = require('mqtt');

var opt = {
  port:1833,
  clientId: 'kssdb88'
};

var client = mqtt.connect('mqtt://localhost', opt );

client.on( 'connect', function() {
  console.log('(sub) Connect yo Server' );
  client.subscribe( 'kss6000', {qos:1} );
});

client.on('message', function(topic, msg) {
  console.log( 'Receive ' + topic + ' msg= ' + msg.toString() );
    
  var msgObj = JSON.parse(msg.toString());
    
  if( msgObj.mhid){ 
      
      if( msgObj.FAN || msgObj.NNSF ) return;
  
     var dd = new Date();
     console.log( formatDate(dd) );
    
     var dbname = msgObj.mhid;

     MongoClient.connect('mongodb://localhost:27017/' + dbname, {useNewUrlParser: true}, function( err, client) { 
       if(err) throw err;
       console.log('Connect to ' + dbname + ' DB');
  
    //   var jObj = new Object();
    //   jObj.datetime = formatDate(dd);
  //jObj.message = JSON.parse(msg.toString() );
  //console.log(JSON.stringify(jObj));

       var db = client.db(dbname);
         
       if( msgObj.LTMP ) {
           
           if( msgObj.LTMP != 'NaN'){
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.LTMP;
           
           db.collection("LTMP").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted LTMP');
             }
           }); 
           
           }
       }
         
       if( msgObj.LHM) {
           
           if( msgObj.LHM != 'NaN'){
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.LHM;
           
           db.collection("LHM").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted LHM');
             }
           }); 
           }
       }
         
       if( msgObj.CO2) {
           
           if( msgObj.CO2 != 'NaN'){
          var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.CO2;
           
           db.collection("CO2").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted CO2');
             }
           }); 
           }
       }
         
       if( msgObj.STMP) {
           
           if( msgObj.STMP != 'NaN'){
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.STMP;
           
           db.collection("STMP").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted STMP');
             }
           }); 
           }
           
       }
         
       if( msgObj.WDIR) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.WDIR;
           
           db.collection("WDIR").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted WDIR');
             }
           }); 
       }
         
       if( msgObj.OTMP) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.OTMP;
           
           db.collection("OTMP").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted OTMP');
             }
           }); 
       }
         
       if( msgObj.OHM) {
            var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.OHM;
           
           db.collection("OHM").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted OHM');
             }
           }); 
       }
         
       if( msgObj.WIND) {
           
            var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.WIND;
           
           db.collection("WIND").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted WIND');
             }
           }); 
       }
         
       if( msgObj.QWIND) {
           
            var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.QWIND;
           
           db.collection("QWIND").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted QWIND');
             }
           }); 
       }
         
       if( msgObj.RAIN) {
           
            var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.RAIN;
           
           db.collection("RAIN").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted RAIN');
             }
           }); 
       }
         
       if( msgObj.RAIN1) {
           
            var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.RAIN1;
           
           db.collection("RAIN1").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted RAIN1');
             }
           }); 
       }
         
       if( msgObj.RAIN2) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.RAIN2;
           
           db.collection("RAIN2").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted RAIN2');
             }
           }); 
       }
         
       if( msgObj.UVI) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.UVI;
           
           db.collection("UVI").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted UVI');
             }
           }); 
       }
         
       if( msgObj.LIGHT) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.LIGHT;
           
           db.collection("LIGHT").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted LIGHT');
             }
           }); 
       }
         
       if( msgObj.LIGHT10) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.LIGHT10;
           
           db.collection("LIGHT10").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted LIGHT10');
             }
           }); 
       }
         
       if( msgObj.LIGHT2) {
           
           var jObj = new Object();
           jObj.datetime = formatDate(dd);
           jObj.value = msgObj.LIGHT2;
           
           db.collection("LIGHT2").insert(jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted LIGHT2');
             }
           }); 
       }

       
  
    });
      
  }
  
});



