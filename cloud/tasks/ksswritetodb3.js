function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  hours = hours < 10 ? '0'+hours : hours;
    
  var strTime =  hours + ':' + minutes + ':' + seconds;
  var mm = date.getMonth();
  mm = mm+1;
  
  mm = mm < 10 ? '0'+mm : mm;
    
  var dd = date.getDate();
  dd = dd < 10 ? '0'+dd : dd;
  
  return date.getFullYear() + '-' + mm + '-' + dd + ' ' + strTime;
}

var writetodb03HM = {};

var writetodb05SO = {};

var joborder = 0; // 0: HM 1:SO


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
  
    // var dd = new Date();
    // console.log( formatDate(dd) );
    
    // var dbname = msgObj.mhid;

    // MongoClient.connect('mongodb://localhost:27017/' + dbname, {useNewUrlParser: true}, function( err, client) { 
    //   if(err) throw err;
    //   console.log('Connect to ' + dbname + ' DB');
  
    //   var jObj = new Object();
    //   jObj.datetime = formatDate(dd);
  //jObj.message = JSON.parse(msg.toString() );
  //console.log(JSON.stringify(jObj));

 //      var db = client.db(dbname);
         
       if( msgObj.LTMP ) {
           
           if( msgObj.LTMP != 'NaN'){
               
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.LTMP = msgObj.LTMP;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.LTMP = msgObj.LTMP;
               }
           }
       }
         
       if( msgObj.LHM) {
           
           if( msgObj.LHM != 'NaN'){
           
           if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.LHM = msgObj.LHM;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.LHM = msgObj.LHM;
               }
           }
       }
         
       if( msgObj.CO2) {
           
           if( msgObj.CO2 != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.CO2 = msgObj.CO2;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.CO2 = msgObj.CO2;
               }
           }
       }
         
       if( msgObj.STMP) {
           
            if( msgObj.STMP != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.STMP = msgObj.STMP;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.STMP = msgObj.STMP;
               }
           }
           
       }
         
       if( msgObj.WDIR) {
           
           if( msgObj.WDIR != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.WDIR = msgObj.WDIR;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.WDIR = msgObj.WDIR;
               }
           }
       }
         
       if( msgObj.OTMP) {
           
          if( msgObj.WDIR != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.OTMP = msgObj.OTMP;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.OTMP = msgObj.OTMP;
               }
           }
       }
         
       if( msgObj.OHM) {
            if( msgObj.OHM != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.OHM = msgObj.OHM;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.OHM = msgObj.OHM;
               }
           }
       }
         
       if( msgObj.WIND) {
           
            if( msgObj.OHM != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.WIND = msgObj.WIND;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.WIND = msgObj.WIND;
               }
           }
       }
         
       if( msgObj.QWIND) {
           
           if( msgObj.QWIND != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.QWIND = msgObj.QWIND;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.QWIND = msgObj.QWIND;
               }
           }
       }
         
       if( msgObj.RAIN) {
           
            if( msgObj.RAIN != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.RAIN = msgObj.RAIN;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.RAIN = msgObj.RAIN;
               }
           }
       }
         
       if( msgObj.RAIN1) {
           
            if( msgObj.RAIN1 != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.RAIN1 = msgObj.RAIN1;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.RAIN1 = msgObj.RAIN1;
               }
           }
       }
         
       if( msgObj.RAIN2) {
           
           if( msgObj.RAIN2 != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.RAIN2 = msgObj.RAIN2;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.RAIN2 = msgObj.RAIN2;
               }
           }
       }
         
       if( msgObj.UVI) {
           
           if( msgObj.UVI != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.UVI = msgObj.UVI;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.UVI = msgObj.UVI;
               }
           } 
       }
         
       if( msgObj.LIGHT) {
           
           if( msgObj.LIGHT != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.LIGHT = msgObj.LIGHT;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.LIGHT = msgObj.LIGHT;
               }
           }
       }
         
       if( msgObj.LIGHT10) {
           
           if( msgObj.LIGHT10 != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.LIGHT10 = msgObj.LIGHT10;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.LIGHT10 = msgObj.LIGHT10;
               }
           }
       }
         
       if( msgObj.LIGHT2) {
           
           if( msgObj.LIGHT2 != 'NaN'){
               if( msgObj.mhid == 'KASO03HM' ) {
                   writetodb03HM.LIGHT2 = msgObj.LIGHT2;
               }
               if( msgObj.mhid == 'KASO05SO' ) {
                   writetodb05SO.LIGHT2 = msgObj.LIGHT2;
               }
           }
       }
      
  }
  
});

setInterval( function() {
    
     var dd = new Date();
     console.log( formatDate(dd) );
    
     var dbname = 'KASO03HM';
    
     if( joborder == 0 ) { // HM
         
         joborder = 1;
         
         dbname = 'KASO03HM';
         
         writetodb03HM.showdate = formatDate(dd);
         
         writetodb03HM.datetime = dd;
         
         if( writetodb03HM.LTMP &&  writetodb03HM.OTMP ){
         
         MongoClient.connect('mongodb://localhost:27017/' + dbname, {useNewUrlParser: true}, function( err, client) { 
           if(err) throw err;
           console.log('Connect to ' + dbname + ' DB');
             
             var db = client.db(dbname);
             
        console.log(writetodb03HM);
             
           var jObj = new Object();
           jObj.datetime = writetodb03HM.datetime;
             jObj.showdate = writetodb03HM.showdate;
             
           jObj.LTMP    = writetodb03HM.LTMP;
           jObj.LHM     = writetodb03HM.LHM;
           jObj.CO2     = writetodb03HM.CO2;
           jObj.STMP    = writetodb03HM.STMP;
           jObj.WDIR    = writetodb03HM.WDIR;
           jObj.OTMP    = writetodb03HM.OTMP;
           jObj.OHM     = writetodb03HM.OHM;
           jObj.WIND    = writetodb03HM.WIND;
           jObj.QWIND   = writetodb03HM.QWIND;
           jObj.RAIN    = writetodb03HM.RAIN;
           jObj.RAIN1   = writetodb03HM.RAIN1;
           jObj.RAIN2   = writetodb03HM.RAIN2;
           jObj.UVI     = writetodb03HM.UVI;
           jObj.LIGHT   = writetodb03HM.LIGHT;
           jObj.LIGHT10 = writetodb03HM.LIGHT10;
           jObj.LIGHT2  = writetodb03HM.LIGHT2;
         
           db.collection("sensors").insert( jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted writetodb03HM');
             }
           });  
         });
             
         }
         
         return;
     }
    
     if( joborder == 1 ) { // SO
         
         joborder = 0;
         
         dbname = 'KASO05SO';
    
         writetodb05SO.showdate = formatDate(dd);
         
         writetodb05SO.datetime = dd;

         if( writetodb05SO.LTMP &&  writetodb05SO.OTMP ){
             
         MongoClient.connect('mongodb://localhost:27017/' + dbname, {useNewUrlParser: true}, function( err, client) { 
           if(err) throw err;
           console.log('Connect to ' + dbname + ' DB');
             
             var db = client.db(dbname);
             
             console.log(writetodb05SO);
             
              var jObj = new Object();
           jObj.datetime = writetodb05SO.datetime;
           jObj.showdate = writetodb05SO.showdate;
             
           jObj.LTMP    = writetodb05SO.LTMP;
           jObj.LHM     = writetodb05SO.LHM;
           jObj.CO2     = writetodb05SO.CO2;
           jObj.STMP    = writetodb05SO.STMP;
           jObj.WDIR    = writetodb05SO.WDIR;
           jObj.OTMP    = writetodb05SO.OTMP;
           jObj.OHM     = writetodb05SO.OHM;
           jObj.WIND    = writetodb05SO.WIND;
           jObj.QWIND   = writetodb05SO.QWIND;
           jObj.RAIN    = writetodb05SO.RAIN;
           jObj.RAIN1   = writetodb05SO.RAIN1;
           jObj.RAIN2   = writetodb05SO.RAIN2;
           jObj.UVI     = writetodb05SO.UVI;
           jObj.LIGHT   = writetodb05SO.LIGHT;
           jObj.LIGHT10 = writetodb05SO.LIGHT10;
           jObj.LIGHT2  = writetodb05SO.LIGHT2;
         
           db.collection("sensors").insert( jObj, function(error, inserted) {
           
             if(error) {
               console.error(error);
             }else {
               console.log('Succeddfully inserted writetodb05SO');
             }
           });  
         });
             
         }  
         
         return;
     }

}, 60000 );



