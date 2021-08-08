const mongo2 = require('mongodb').MongoClient;
const mongourl2 = "mongodb://localhost:27017/agridb"

const fs = require('fs');

const json2csvParser = require('json2csv').Parser;


//const json2csv = require('json2csv').parse;

var express = require('express');
var app = express();

var session = require('express-session');


var querySensorStatusArray = [];

var querySensorStatus = {} ;
var querySensorStatus2 = {} ;
var querySensorStatus3 = {} ;
var querySensorStatus4 = "" ; // Techware Azure

querySensorStatusArray.push(querySensorStatus);
querySensorStatusArray.push(querySensorStatus2);
querySensorStatusArray.push(querySensorStatus3);

var clientRuleArray = [];

var clientRule = {} ;
var clientRule2 = {} ;
var clientRule3 = {} ;

clientRuleArray.push(clientRule);
clientRuleArray.push(clientRule2);
clientRuleArray.push(clientRule3);

var clientScheduleArray = [];

var clientSchedule = {} ;
var clientSchedule2 = {} ;
var clientSchedule3 = {} ;

clientScheduleArray.push(clientSchedule);
clientScheduleArray.push(clientSchedule2);
clientScheduleArray.push(clientSchedule3);


app.locals.outtempdiv = '  '; 
app.locals.outtempscript = ' ';

app.locals.outhumidiv = '  '; 
app.locals.outhumiscript = ' ';

var mqtt = require('mqtt');

// Techware AZure mqtt 
var opt2 = {
    port:1883,
    clientId: 'kaso29'
}

var client2 = mqtt.connect('mqtt://40.78.123.28', opt2 );

client2.on('connect', function() {
  console.log('(Azure) Connect to Server ' );
//  client2.subscribe('techware', {qos:1} );
    client2.subscribe('GreenWave_Demo', {qos:1} );
});


client2.on('message', function(topic, msg) {
  console.log('Receive ' + topic + ' msg=' + msg.toString() );
    
  try{
    
  var techobj = JSON.parse(msg.toString());
  var imatime = new Date();
    
  var yyyy = imatime.getFullYear();
  var mon = imatime.getMonth(); mon++;
  var dd = imatime.getDate();
    
  var strYYYY = yyyy.toString();
  var strMon = mon.toString(); if( strMon < 10 ) strMon = '0' + strMon;
  var strDD = dd.toString(); if( strDD < 10 ) strDD = '0' + strDD;
    
  var hh = imatime.getHours();
  var hhstr = hh.toString();
  if( hh < 10 ) hhstr = '0' + hhstr;
       
  var min = imatime.getMinutes();
  var minstr = min.toString();
  if( min < 10 ) minstr = '0' + minstr;

  var sec = imatime.getSeconds();
  var secstr = sec.toString();
  if( sec < 10 ) secstr = '0' + secstr;
       
    var timestr = hhstr + ':' + minstr + ':' + secstr
    var datestr = strYYYY + strMon + strDD;
    
    var dtstr = datestr + ' ' + timestr;
    
  techobj.datetime = dtstr;
    
  querySensorStatusArray[1].LTMP = techobj.TEMP;
  querySensorStatusArray[1].LHM = techobj.HUM;
 // querySensorStatusArray[1].CO2 = techobj.CO2;
//  querySensorStatusArray[1].Light = techobj.LUX;
    
  querySensorStatus4 = JSON.stringify(techobj);
      
  } catch(e) {
      
  }
    
});

//-----------------------------


var opt = {
  port:1833,
  clientId: 'kaso29',
  username: 'techware',
  password: 'temppwd'
}

var client = mqtt.connect('mqtt://localhost', opt );

client.on('connect', function() {
  console.log('(Web-Exp-Sub) Connect to Server ' );
  client.subscribe('kss6000', {qos:1} );
    client.subscribe('kss2000', {qos:1} );
    client.subscribe('kss6002', {qos:1} );
    client.subscribe('kss6005', {qos:1} );
    client.subscribe('kss7002', {qos:1} );
    client.subscribe('kss7005', {qos:1} );
});

client.on('message', function(topic, msg) {
  console.log('Receive ' + topic + ' msg=' + msg.toString() );
    
    if( topic == 'kss2000') return;
    
    if( topic == 'kss6002') {
        
        clientRuleArray[0] = JSON.parse(msg.toString()); //KASO05SO
        
        return;
    }
    
    if( topic == 'kss6005') {
        
        clientRuleArray[1] = JSON.parse(msg.toString()); //KASO03HM
        
        return;
    }
    
    if( topic == 'kss7002') {
        
        clientScheduleArray[0] = JSON.parse(msg.toString()); //KASO05SO
        
        return;
    }
    
    if( topic == 'kss7005') {
        
        clientScheduleArray[1] = JSON.parse(msg.toString()); //KASO03HM
        
        return;
    }
    
    
    var ii = 0;
    
    var objmsg = JSON.parse(msg.toString());
    if( objmsg.mhid == 'KASO07DM') ii = 2;
    if( objmsg.mhid == 'KASO03HM') ii = 1;
    if( objmsg.mhid == 'KASO05SO') ii = 0;
    
  if( objmsg.WDIR )
  {
       querySensorStatusArray[ii].WDIR = objmsg.WDIR;
       querySensorStatusArray[ii].OTMP = objmsg.OTMP;
       querySensorStatusArray[ii].OHM = objmsg.OHM;
       querySensorStatusArray[ii].WIND = objmsg.WIND;
       querySensorStatusArray[ii].QWIND = objmsg.QWIND;
       querySensorStatusArray[ii].RAIN = objmsg.RAIN;
       querySensorStatusArray[ii].RAIN1 = objmsg.RAIN1;
       querySensorStatusArray[ii].RAIN2 = objmsg.RAIN2;
      
       querySensorStatusArray[ii].UVI = objmsg.UVI;
       querySensorStatusArray[ii].LIGHT = objmsg.LIGHT;
       querySensorStatusArray[ii].LIGHT2 = objmsg.LIGHT2;
       querySensorStatusArray[ii].LIGHT10 = objmsg.LIGHT10;
      
  }else if( objmsg.FAN ) {
      
       console.log('FAN');
      
       querySensorStatusArray[ii].FAN = objmsg.FAN;
       querySensorStatusArray[ii].LIGHTING = objmsg.LIGHT;
       querySensorStatusArray[ii].WATER = objmsg.WATER;
      
  }else if( objmsg.NNSF ) {
      
       console.log('NNSF');
      
       querySensorStatusArray[ii].NNSF = objmsg.NNSF;
       querySensorStatusArray[ii].SESF = objmsg.SESF;
       querySensorStatusArray[ii].SWSF = objmsg.SWSF;   
       querySensorStatusArray[ii].NSWN = objmsg.NSWN; 
       querySensorStatusArray[ii].SSWN = objmsg.SSWN; 
      
       if( objmsg.SUNV ) { querySensorStatusArray[ii].SUNV = objmsg.SUNV; }
      
  }else {
      
      if( objmsg.LTMP != "NaN")
      {
         querySensorStatusArray[ii].LTMP = objmsg.LTMP;
         querySensorStatusArray[ii].LHM = objmsg.LHM;
         querySensorStatusArray[ii].CO2 = objmsg.CO2;
         querySensorStatusArray[ii].STMP = objmsg.STMP;
      }
  }
    
   //console.log('querySensorStatus= ' + JSON.stringify(querySensorStatus) ); 
    
  app.locals.outtempdiv = '<div  class=\"three wide column"><div id="gre11" class="ui yellow segment"  ><div class="ui static"><div class="value">29.7℃ </div><div class="label">Tempature</div><div class="js-gauge grt1 gauge"></div></div></div></div> '; 
 
  app.locals.outtempscript = '<script>$(\'.grt1\').kumaGauge({ value : 80,radius : 60,  paddingX : 5,  paddingY : 20,  gaugeWidth : 20,  showNeedle : false, animationSpeed : 500});</script>';

  app.locals.outhumidiv = '<div  class=\"three wide column"><div class="ui olive  segment"  ><div class="ui static"><div class="value">60% </div><div class="label">Humidity</div><div class="js-gauge grt2 gauge"></div></div></div></div> '; 

  app.locals.outhumiscript = '<script>$(\'.grt2\').kasoGauge({ value : 60,radius : 49,  paddingX : 15,  paddingY : 1,  gaugeWidth : 20,  showNeedle : false });</script>';
});


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var outTempSchema = new Schema({
  mindex : Date,
  mValue : Number
});

var outTemp = mongoose.model('outTemp', outTempSchema );
mongoose.connect( 'mongodb://localhost:27017/kasoagridb', {useNewUrlParser:true});

console.log('Mongoose connect to MongoDB');

//outTemp.find( function(err, outtemps ) {
//  if( err) return console.error(err);
//  console.log(JSON.stringify(outtemps));
//});

//var express = require('express');

//var app = express();

var session = require('express-session');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const MongoStore = require('connect-mongo')(session);

var identifyKey = 'kasoagrisession12345';

var userSchema = new Schema({
      uname : String,
      password : String,
      status: String
});
var userModel = mongoose.model('User', userSchema );

function findUser(name, password, callback ) {
    
    mongoose.connect( 'mongodb://localhost:27017/kasoagridb', {useNewUrlParser:true});
  
    var objfind = {'uname' : name, 'password' : password, 'status': 1 };
    console.log( JSON.stringify(objfind) );
    
 
    userModel.find( {'uname':name, 'password': password} , function(err, docs) {
      if(err) return console.error(err);
      docs.forEach( function(item, index, array) {
//        console.log( item.uname );
//        console.log( item.password );
        callback( item );

      });
    });

};

var mongoose2 = require('mongoose');
var Schema2 = mongoose2.Schema;

//mongoose2.connect( 'mongodb://localhost:27017/KASO05SO', {useNewUrlParser:true});

var sensorSchema = new Schema2({
      datetime : Date,
     showdate : String,
      LTMP : String,
      OTMP : String,
      LHM : String,
      OHM : String,
      WDIR : String,
      WIND : String,
      QWIND : String,
      RAIN1 : String,
      RAIN2 : String,
      UVI : String,
      LIGHT : String,
      LIGHT10 : String,
      LIGHT2 : String,
      STMP : String
});

var mongoose3 = require('mongoose');
var Schema3 = mongoose3.Schema;

var devhistorySchema = new Schema3({
      mhid : String,
      datetime : Date,  
      devid : String,
      value : String,
      text : String,
      upload : Date 
    
  //  datetime : Date,
//     showdate : String,
//      LTMP : String,
//      OTMP : String,
//      LHM : String,
//      OHM : String,
//      WDIR : String,
//      WIND : String,
//      QWIND : String,
//      RAIN1 : String,
//      RAIN2 : String,
//      UVI : String,
//      LIGHT : String,
//      LIGHT10 : String,
//      LIGHT2 : String,
//      STMP : String
});

function getImageList( db_name, start, end, callback) {
    
    var startDay = new Date(start);
    var endDay = new Date(end);
    
   // console.log( 'endDay=' + endDay.toString() );
    
    var thisDay = startDay;

    var isend = false;
    
    var retobjs = [];
    
    var idx = 0;
    
    while ( !isend ){
    
        var yyyy = thisDay.getFullYear();
        var mon = thisDay.getMonth(); mon++;
        var dd = thisDay.getDate();
    
        var strYYYY = yyyy.toString();
        var strMon = mon.toString(); if( strMon < 10 ) strMon = '0' + strMon;
        var strDD = dd.toString(); if( strDD < 10 ) strDD = '0' + strDD;
     
        var dirname = strYYYY + strMon + strDD;
    
        console.log( dirname );

        fs.readdirSync( '/root/kaso/images/' + db_name + '/' + dirname).forEach(file => {
            var hhmmss = file.substr(3,6);
            var hh = hhmmss.substr(0,2);
            var mm = hhmmss.substr(2,2);
            var ss = hhmmss.substr(4,2);
        
            var strpDay = strYYYY + '-' + strMon + '-' + strDD + ' ' + hh + ':' + mm + ':' + ss;
            var pDay = new Date( strpDay );
           // console.log( 'pDay=' + pDay.toString() );
            
            if( pDay < endDay ) {
                var retobj = {};
                retobj.idx = idx; idx++;
                retobj.url = 'http://47.74.5.223:7542/images/' + db_name + '/' + dirname + '/' + file
                //console.log( 'http://47.74.5.223:7542/images/KASO03HM/' + dirname + '/' + file);
                retobjs.push( retobj );
            } else {
                isend = true;
            }
        })
        
        thisDay.setTime( thisDay.getTime() + 86400000 );
        
        if( thisDay > endDay ) isend = true;
    }
    
    callback( retobjs );
}

function getDeviceList( db_name, start, end, callback) {
    mongoose3.connect( 'mongodb://localhost:27017/' + db_name, {useNewUrlParser:true});
    
    var devhistoryModel = mongoose3.model( 'Devhistory', devhistorySchema, 'devhistorys' );
    
   // var devhistoryModel = mongoose3.model( 'Sensor', devhistorySchema, 'sensors' );
    
    var smobj = {'datetime':{$gt:'2018-11-6 13:47:49', $lt:'2018-11-6 16:15:30'}};
    
    var sdd = new Date(start);
    var edd = new Date(end);
    
    console.log(db_name);
    console.log(sdd.toISOString());
    console.log(edd.toISOString());
    
    smobj.datetime.$gt = sdd;
    smobj.datetime.$lt = edd;
    
    console.log('BB' + JSON.stringify(smobj));
    
    devhistoryModel.find( smobj , function(err, docs) {
        if(err) return console.error(err);
        console.log('AA' + JSON.stringify(docs));
        callback( docs );
    });
}

const Cryptr = require('cryptr');
const cryptr = new Cryptr('greenwavekey');

const shortid = require('shortid');

var nodemailer = require('nodemailer');

var mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'alex@ka-so.net',
    pass: 'iloveeva'
  }
});

const mongox = require('mongodb').MongoClient;
const urlx = "mongodb://localhost:27017/agridb";
const urlm = "mongodb://localhost:27017/mgrdb";

function AuthKeyGen() {
    var ran = Math.random();
    var ran6 = ran * 100000;
    var ran6i = parseInt(ran6);
    var ran6is = ran6i.toString();
    
    return ran6is;
}

function SendAuthKeyByEMail(email, auth) {
    
    var options = {};
    options.from = 'alex@ka-so.net';
    options.to = email;
    options.subject = 'Green Wave Message';
    options.html = '<h1>Green Wave Auth Key</h1><p>' + auth + '</p>';
    
    mailTransport.sendMail(options, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('訊息發送: ' + info.response);
    }
});
    
}

function BindDevice( email, devid) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('users'); 
        
    var filter = {};
        
    var filterItem = {};
    filterItem.$eq = email;
        
    filter.email = filterItem;
        
     collection.find(filter).toArray((err, items) => {
       if( err ) throw err;
         
        items.forEach( function(item, index, array) {
            var devices = [];
            if( item.devices ) devices = item.devices;
            
            console.log( email + '--' + devid);
            
            var deviceItem = {};
            deviceItem.devid = devid;
            deviceItem.members = [];
            deviceItem.black = [];
            
            devices.push(deviceItem);
            
          //  item.devices = devices;
            
            // update to database
            var condquery = {};
            condquery.email = email;
            
            var newvalue = {};
            newvalue.$set = {};
            newvalue.$set.devices = devices;
            
            console.log( JSON.stringify(devices));
            
             collection.updateOne(condquery, newvalue, function(err, res) {
              if(err) throw err;
              db.close();
             });
            
        }); 
                     
        //callback( items );
        //db.close();
    });
        
  });    
              
}

function ActivateUser( email ) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('users'); 
        
    var condquery = {};
    condquery.email = email;
        
    var newvalue = {};
    newvalue.$set = {};
    newvalue.$set.status = '1';
        
    collection.updateOne(condquery, newvalue, function(err, res) {
        if(err) throw err;
        db.close();
    });
        
    });
}

function RegisterANewUser( email, pass1 ) {
    
     mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('users'); 
         
    var userdata = {};
    userdata.uid = 'GW' + shortid.generate();
    userdata.email = email;
    userdata.password = cryptr.encrypt(pass1);
    //userdata.pass1 = pass1;
    //userdata.pass2 = cryptr.decrypt(userdata.password);
    userdata.status = '0'; // wait for active
    userdata.type = 'personal';
    userdata.role = '0001';
         
    //Auth key
    userdata.auth = AuthKeyGen();
         
         
    collection.insert( userdata );
         
    db.close();
         
    //Send EMail
    SendAuthKeyByEMail(email, userdata.auth);
    
     });
}

function findUserX( email, callback) {
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('users');   
        
    var filter = {};
        
    var filterItem = {};
    filterItem.$eq = email;
        
    filter.email = filterItem;
     
    collection.find(filter).toArray((err, items) => {
       if( err ) throw err;
                     
        callback( items );
        db.close();
    });
        
        });
        
}

function findUserY( email, auth, callback ) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('users');
        
     var filter = {};
        
    var filterItemEMail = {};
    filterItemEMail.$eq = email;   
    filter.email = filterItemEMail; 
        
    var filterItemAuth = {};
    filterItemAuth.$eq = auth;   
    filter.auth = filterItemAuth; 
        
    collection.find(filter).toArray((err, items) => {
       if( err ) throw err;
                 
        callback( items );
        db.close();
    });
        
  });
    
};

function findUserZ(email, password, callback ) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('users');
        
    var filter = {};
        
    var filterItemEMail = {};
    filterItemEMail.$eq = email;   
    filter.email = filterItemEMail; 
        
   // var filterItemPass = {};
    //filterItemPass.$eq = cryptr.encrypt(password);   
    //filter.password = filterItemPass;
        
    var filterItemStatus = {};
    filterItemStatus.$eq = "1";
    filter.status = filterItemStatus;
        
        console.log( JSON.stringify(filter));
            
    collection.find(filter).toArray((err, items) => {
       if( err ) throw err;
       
                     
        callback( items );
        db.close();
    });
        
  });
    
};

function SetMqttTopic( device, uptopic, dwtopic, callback ) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('devices');
        
    var condquery = {};
    condquery.devid = device;
        
    var newvalue = {};
    newvalue.$set = {};
    newvalue.$set.uptopic = uptopic;
    newvalue.$set.dwtopic = dwtopic;
        
    collection.updateOne(condquery, newvalue, { upsert : true }, function(err, res) {
        if(err) throw err;
        
        callback( newvalue );
        db.close();
    });
        
   });     
};

function AddMemberToDevice( owner, email, device, callback ) {
  
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('devices');
        
    var condquery = {};
    condquery.devid = device;
    condquery.owner = owner;
        
    var newvalue = {};
        
    var mems = {};
    mems.members = email ;
        
     newvalue.$push = mems;   
        
    collection.updateOne(condquery, newvalue, { upsert : true }, function(err, res) {
        if(err) throw err;
        
        callback( newvalue );
        db.close();
    });
        
  });  
};

function GetSensorsListByEMail( email, callback) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('devices');
        
    var filter = {};
      
    var filterCond1 = {};
    var filterItemEMail = {};
    filterItemEMail.$eq = email;   
    filterCond1.owner = filterItemEMail; 
        
    var filterItemMembers = {};
    filterItemMembers.members = email;   
        
    var orarray = [];
    orarray.push(filterCond1);
    orarray.push(filterItemMembers);
     
        filter.$or = orarray;
        
    console.log( JSON.stringify(filter) );
        
     collection.find(filter).toArray((err, items) => {
       if( err ) throw err;
                    
        callback( items );
        db.close();
    });
        
   });     
};

function UpdateDeviceInfo(email, device, gps, callback) {
    
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
        
    console.log(" Connect to Mongodb");
    
    const db_mgr = db.db("mgrdb");
        
    const collection = db_mgr.collection('devices');
        
    var condquery = {};
    condquery.devid = device;
        
    var newvalue = {};
    newvalue.$set = {};
    newvalue.$set.devid = device;
    newvalue.$set.owner = email;
    newvalue.$set.location = gps;
        
    var attrs = [];
    
    var temp = {};
    temp.param = 'TEMP';
    temp.name = 'temperature';
    temp.unit = '';
        
    var hum = {};
    hum.param = 'HUM';
    hum.name = 'humidity';
    hum.unit = '%';
        
    var co2 = {};
    co2.param = 'CO2';
    co2.name = 'CO2';
    co2.unit = 'ppm';
        
    var lum = {};
    lum.param = 'LUM';
    lum.name = 'luminity';
    lum.unit = 'lux';
        
    attrs.push( temp );
    attrs.push( hum );
    attrs.push( co2 );
    attrs.push( lum );
        
    newvalue.$set.attributes = attrs;    
        
        
    collection.updateOne(condquery, newvalue, { upsert : true }, function(err, res) {
        if(err) throw err;
        
        callback( newvalue );
        db.close();
    });    
        
    });    
}



function getSensorData( db_name, table, start, end, callback ) {
    mongox.connect( urlx, {useNewUrlParser:true}, function( err, db) {
    
    if(err) {
        throw err;
    }
    
    console.log(" Connect to Mongodb");
    
    const db_agri = db.db("agridb");
    
    const collection = db_agri.collection('greenhouse');
    
    var ima = new Date();
    var imaISO = ima.toISOString();
    
    //var date1 = new Date('2019-09-29 06:00:00');
    var date1 = new Date(start);
     //date1.setHours( date1.getHours() - 8 );
    //var date2 = new Date('2019-09-29 18:59:59');
        var date2 = new Date(end);
     //date2.setHours( date2.getHours() - 8 );
    //console.log(date1.toISOString());
    var filter = {};
    var filterItem = {};
    filterItem.$gte = date1;
    filterItem.$lt = date2;
    filter.datetime = filterItem;
    
  // collection.find(filter).sort({'_id':-1}).limit(2).toArray((err, items) => {
    collection.find(filter).toArray((err, items) => {
       if( err ) throw err;
        //console.log(items);
        items.forEach( function(item, index, array) {
            
            var date3 = item.datetime;
            date3.setHours( date3.getHours() + 8 );
            item.showtime = date3.getHours() + ':' + date3.getMinutes() ;
            
        });
                     
        callback( items );
        db.close();
    });
      
  });
}

function getSensorData99( db_name, table, start, end, callback ) {
    
   // mongoose2.connect( 'mongodb://localhost:27017/KASO05SO', {useNewUrlParser:true});
    mongoose2.connect( 'mongodb://localhost:27017/' + db_name, {useNewUrlParser:true});
    
   // console.log(table);
    
    var sensorModel = mongoose2.model( 'Sensor', sensorSchema, 'sensors' );
    
  //  var smobj = {'datetime':{$gt:'2018-11-6 13:47:49', $lt:'2018-11-6 16:15:30'}};
    
    var smobj = {'datetime':{$gt:'2018-11-6 13:47:49', $lt:'2018-11-6 16:15:30'}};
    
    var sdd = new Date(start);
    var edd = new Date(end);
    
    smobj.datetime.$gt = sdd;
    smobj.datetime.$lt = edd;

    sensorModel.find( smobj , function(err, docs) {
     if(err) return console.error(err);
        
    // docs.forEach( function(item, index, array) {
        callback( docs );
    //    });
      });
};

app.use( '/images', express.static('/root/kaso/images') );
app.use( '/semantic', express.static('/root/kaso/semantic'));
app.use( '/script', express.static('/root/kaso/script'));
app.use( '/kaso-agri', express.static('/home/ec2-user/kaso/kaso-agri'));
app.use( '/kaso-agri/mqttlog', express.static('/home/ec2-user/kaso/kaso-agri'));
app.use( '/grid-eye', express.static('/home/ec2-user/kaso/grid-eye'));
app.use( '/sensor-gateway', express.static('/home/ec2-user/kaso/sensor-gateway'));
app.use( '/test', express.static('/home/ec2-user/test'));


//app.set('views', __dirname + '/views');
app.set('views', '/root/kaso/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  name: identifyKey,
  secret: 'kasoagri',
  store: new MongoStore({url:'mongodb://localhost:27017/sessiondb'}),
  saveUninitialized: true,
  resave: true,
  cookie: {
     maxAge: 600 * 1000
  }
}));

app.locals.title = "KASO smart farming system";
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
      outTemp.find( function(err, outtemps) {
          if(err) return console.error(err);
          app.locals.posts = outtemps;
          next();
      });
  }
});

app.get('/do', function(req,res ) {
   console.log( JSON.stringify(req.query) );
   client.publish('kss1000', JSON.stringify(req.query), {qos:1});
   res.end('Send Request OK');
});

app.get('/modbus', function(req,res ) {
   console.log( JSON.stringify(req.cmd) );
   client.publish('kss1000abc', JSON.stringify(req.cmd), {qos:1});
   res.end('Send Modbus Command OK');
});

app.get('/condel', function(req,res ) {
   console.log( 'delete con' + JSON.stringify(req.query) );
   
   var reqobj = {};
   reqobj.cmd = "delete";
   reqobj.subject = "rule";
    reqobj.value = req.query.rid;
    
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") client.publish('kss6004', JSON.stringify(reqobj), {qos:1});
        if( req.query.gwid == "KASO05SO") client.publish('kss6001', JSON.stringify(reqobj), {qos:1});
    }
    
 
   res.end('Send Request OK');
});

app.get('/updaterule', function(req,res ) {
   console.log( JSON.stringify(req.query) );
   
   var reqobj = {};
   reqobj.cmd = "update";
   reqobj.subject = "rule";
   reqobj.value = JSON.parse(req.query.ruleobj.replace('\"', '"'));
    
    var cmdstr = JSON.stringify(reqobj);
    
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") client.publish('kss6004', cmdstr, {qos:1});
        if( req.query.gwid == "KASO05SO") client.publish('kss6001', cmdstr, {qos:1});
    }
    
   res.end('Send Request OK');
});

app.get('/schdel', function(req,res ) {
   console.log( 'delete schedule' + JSON.stringify(req.query) );
   
   var reqobj = {};
   reqobj.cmd = "delete";
   reqobj.subject = "schedule";
    reqobj.value = req.query.scid;
    
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") client.publish('kss7004', JSON.stringify(reqobj), {qos:1});
        if( req.query.gwid == "KASO05SO") client.publish('kss7001', JSON.stringify(reqobj), {qos:1});
    }
    
 
   res.end('Send Request OK');
});

app.get('/updateschedule', function(req,res ) {
   console.log( JSON.stringify(req.query) );
   
   var schobj = {};
   schobj.cmd = "update";
   schobj.subject = "schedule";
   schobj.value = JSON.parse(req.query.scheduleobj.replace('\"', '"'));
    
    var cmdstr = JSON.stringify(schobj);
    
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") client.publish('kss7004', cmdstr, {qos:1});
        if( req.query.gwid == "KASO05SO") client.publish('kss7001', cmdstr, {qos:1});
    }
    
   res.end('Send Request OK');
});

app.get('/request', function(req,res ) {
   console.log( JSON.stringify(req.query) );
   var reqobj = {};
   reqobj.cmd = "query";
   reqobj.subject = "rule";
    
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") client.publish('kss6004', JSON.stringify(reqobj), {qos:1});
        if( req.query.gwid == "KASO05SO") client.publish('kss6001', JSON.stringify(reqobj), {qos:1});
    }
    
   var reqobj2 = {};
   reqobj2.cmd = "query";
   reqobj2.subject = "schedule";
    
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") client.publish('kss7004', JSON.stringify(reqobj2), {qos:1});
        if( req.query.gwid == "KASO05SO") client.publish('kss7001', JSON.stringify(reqobj2), {qos:1});
    }
    
  // client.publish('kss6001', JSON.stringify(reqobj), {qos:1});
   res.end('Send Request OK');
});

app.get('/photolist', function(req, res) {
    var db_name = 'KASO05SO';
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") db_name = 'KASO03HM';
        if( req.query.gwid == "KASO07DM") db_name = 'KASO07DM';
    }
    
    var startdate = req.query.start;
    var enddate = req.query.end;
    
    getImageList( db_name, startdate, enddate, function( sdata ){

      if(sdata) { res.end(JSON.stringify(sdata));}
    });
    
});

app.get('/devhistory2', function(req, res) {
    
    console.log('devhistory');
    
    var db_name = 'KASO05SO';
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") db_name = 'KASO03HM';
        if( req.query.gwid == "KASO07DM") db_name = 'KASO07DM';
    }
    
    var startdate = req.query.start;
    var enddate = req.query.end;
    
    console.log(db_name);
    
    var rdata = [];
    
    getDeviceList( db_name, startdate, enddate, function( sdata ){
        
      if(sdata) { 
          var arrangeData = [];
          
          if( Array.isArray(sdata)) {
              
              for( var iidx = 0; iidx < sdata.length ; iidx++ ) {
                  var devvobj = sdata[iidx];
                  
                  if( devvobj.text == 'kssonof.js') {
                      
                      if( devvobj.value == "1"){ // On 
                          
                          var isOn = false;
                          for( var ia = 0; ia < arrangeData.length; ia++ ) {
                              if( arrangeData[ia].devid == devvobj.devid && arrangeData[ia].end == "" ) {
                                  isOn = true;
                              }
                          }
                          
                          if(!isOn) {
                              var newdata1 = {};
                              newdata1.devid = devvobj.devid;
                              newdata1.start = devvobj.datetime;
                              newdata1.end = "";
                              
                              arrangeData.push(newdata1);
                          }
                          
                      } 
                      
                       if( devvobj.value == "2"){ // Off
                            for( var ib = 0; ib < arrangeData.length; ib++ ) {
                              if( arrangeData[ib].devid == devvobj.devid && arrangeData[ib].end == "" ) {
                                  arrangeData[ib].end = devvobj.datetime;
                              }
                          }
                      } 
                      
                  }
                  
                  if( devvobj.text == 'ksssunroof.js') {
                      
                      if( devvobj.value == "0"){
                          
                          for( var ic = 0; ic < arrangeData.length; ic++ ) {
                              if( arrangeData[ic].devid == devvobj.devid && arrangeData[ic].end == "" ) {
                                  arrangeData[ic].end = devvobj.datetime;
                              }
                          }
                          
                      } else {
                          
                          var isOpen = false;
                          for( var ie = 0; ie < arrangeData.length; ie++ ) {
                              if( arrangeData[ie].devid == devvobj.devid && arrangeData[ie].end == "" ) {
                                  isOpen = true;
                              }
                          }
                          
                          if(!isOpen) {
                              var newdata4 = {};
                              newdata4.devid = devvobj.devid;
                              newdata4.start = devvobj.datetime;
                              newdata4.end = "";
                              
                              arrangeData.push(newdata4);
                          }
                          
                      }
                      
                  }
                  
                  
              }
              
          }
          
           for( var iz = 0; iz < arrangeData.length; iz++ ) {
                              if( arrangeData[iz].end == "" ) {
                                  arrangeData[iz].end = enddate;
                              }
                          }
          
          res.end(JSON.stringify(arrangeData));
      }
        
    });
    
});

app.get('/devhistory', function(req, res) {
    
    console.log('devhistory');
    
    var db_name = 'KASO05SO';
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") db_name = 'KASO03HM';
        if( req.query.gwid == "KASO07DM") db_name = 'KASO07DM';
    }
    
    var startdate = req.query.start;
    var enddate = req.query.end;
    
    console.log(db_name);
    
    var rdata = [];
    
    getDeviceList( db_name, startdate, enddate, function( sdata ){

      if(sdata) { res.end(JSON.stringify(sdata));}
    });
    
});

app.get('/sensordata', function(req, res) {
  
 console.log('sensordata');
    
    var db_name = 'KASO05SO';
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") db_name = 'KASO03HM';
        if( req.query.gwid == "KASO07DM") db_name = 'KASO07DM';
    }
    
    var startdate = req.query.start;
    var enddate = req.query.end;
    
    console.log('startdate=' + startdate);
     console.log('enddate=' + enddate);
    
// var startdate = '2018-11-1 17:47:49';
// var enddate = '2018-11-1 18:30:30';

 var rdata = [];
    
 var table = 'LTMP';
    
  if( req.query.table) {
        table = req.query.table;
  }
       
  getSensorData( db_name, table, startdate, enddate, function( sdata ){

      if(sdata) {
           // sdata.forEach( function(item, index, array) {
        //      var sdataitem = {};
          //    sdataitem.datetime = item.datetime;
        //      sdataitem.value = item.value;
          //    console.log(item.datetime + ' ' + item.value);
        //      rdata.push(sdataitem);
          //  });
          
          if( req.query.csv ){        
             //  const fields = ['datetime', 'LTMP', 'OTMP', 'LHM', 'OHM'];
            //  const fields = [{label:'時間',value: 'showdate' }, {label:'室內温度', value:'LTMP' }, {label:'室外温度', value:'OTMP' }, {label:'室內湿度', value:'LHM' }, {label:'室外湿度', value:'OHM' }];
              // make data structure
              var csvdataarray = [];
              sdata.forEach( function(item, index, array) {
                  var csvdata = {};
                  csvdata.TEMP = item.values.TEMP;
                  csvdata.HUM = item.values.HUM;
                  csvdata.CO2 = item.values.CO2;
                  csvdata.LUM = item.values.LUM;
                  
                  var date3 = item.datetime;
                 // date3.setHours( date3.getHours() + 8 );
                  
                  csvdata.showdate = date3.toLocaleString();
                  csvdataarray.push(csvdata);
              });
              
              var fields = [{label:'時間',value: 'showdate' }];
              
              
              var fieldtables = table.split('-');
              
              for( var k = 0; k < fieldtables.length; k++ ) {
                  
                  var fieldtable = fieldtables[k];
                  
                  if( fieldtable == 'LTMP')    fields.push({label:'温度', value:'TEMP' });
                  if( fieldtable == 'OTMP')    fields.push({label:'湿度', value:'HUM' });
                  if( fieldtable == 'LHM')     fields.push({label:'CO2', value:'CO2' });
                  if( fieldtable == 'OHM')     fields.push({label:'照度', value:'LUM' });
                 // if( fieldtable == 'LTMP')    fields.push({label:'室內温度', value:'LTMP' });
                //  if( fieldtable == 'OTMP')    fields.push({label:'室外温度', value:'OTMP' });
                //  if( fieldtable == 'LHM')     fields.push({label:'室內湿度', value:'LHM' });
                //  if( fieldtable == 'OHM')     fields.push({label:'室外湿度', value:'OHM' });
                  if( fieldtable == 'WDIR')    fields.push({label:'風向', value:'WDIR' });
                  if( fieldtable == 'WIND')    fields.push({label:'風速', value:'WIND' }); 
                  if( fieldtable == 'QWIND')   fields.push({label:'瞬時風速', value:'QWIND' });
                  if( fieldtable == 'RAIN1')   fields.push({label:'時間雨量', value:'RAIN1' });
                  if( fieldtable == 'RAIN2')   fields.push({label:'日雨量', value:'RAIN2' });
                  if( fieldtable == 'UVI')     fields.push({label:'紫外線', value:'UVI' });
                  if( fieldtable == 'LIGHT')   fields.push({label:'照度', value:'LIGHT' });
                  if( fieldtable == 'LIGHT10') fields.push({label:'10分平均照度', value:'LIGHT10' });
                  if( fieldtable == 'LIGHT2')  fields.push({label:'日射量日累積', value:'LIGHT2' });
                  if( fieldtable == 'STMP')    fields.push({label:'土壌湿度', value:'STMP' });
                  
              }
              
              
             // const withBOM = {withBOM:true};
              const del = {del: '\t'};
              
               const opts = { fields, del };
               try{
                   const Parser = new json2csvParser({ fields, delimiter: '\t' });
                  // const Parser = new json2csvParser(opts);
                  // const csv = Parser.parse(sdata);
                   const csv = Parser.parse(csvdataarray);
                  // var csv = json2csv({ data: sdata, fields: fields, del: '\t' });
                  //   var csv = json2csv({ sdata, opts, del });
                  
                   console.log(csv);
                   
                   var path='/root/kaso/csv/SensorData'+Date.now()+'.csv'; 
                   console.log(path);
                   fs.writeFile(path, '\ufeff' + csv, {encoding: 'utf16le'}, function(err,data) {
                  // fs.writeFile(path, '\ufeff' + csv, {encoding: 'utf8'}, function(err,data) {
                    if (err) {
                        throw err;
                    }else{ 
                      res.download(path); // This is what you need
                    }
                   });
                       
               } catch (err) {
                  console.error(err);
               }
              
          } else {
              res.end(JSON.stringify(sdata));
          }
          
       }
   }); 

   
        
});

app.get('/query', function(req, res) {
    
    var ii = 0;
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") ii = 1;
        if( req.query.gwid == "KASO07DM") ii = 2;
    }
   // console.log("mhid=" + ii );
    res.end(JSON.stringify(querySensorStatusArray[ii]));
});

app.get('/query2', function(req, res) {
    
    var ii = 0;
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") ii = 1;
        if( req.query.gwid == "KASO07DM") ii = 2;
    }
  //  console.log("mhid=" + ii );
    res.end(JSON.stringify(clientRuleArray[ii]));
});

app.get('/query3', function(req, res) {
    
    var ii = 0;
    if( req.query.gwid) {
        if( req.query.gwid == "KASO03HM") ii = 1;
        if( req.query.gwid == "KASO07DM") ii = 2;
    }
    console.log("mhid=" + ii );
    res.end(JSON.stringify(clientScheduleArray[ii]));
});

app.get('/techware', function(req, res) {
    
    console.log("techware mqtt=" + querySensorStatus4 );
    res.end(querySensorStatus4);
});

app.get('/api/posts', function(req, res) {
   return(app.locals.posts);
});

app.get('/setup', function(req, res) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;


  if(isLogined){
  app.locals.uname = loginUser;

  console.log('Hello Express : ' + loginUser);
  }

  res.render('setup.ejs', {
      isLogined: isLogined,
      name: loginUser || ''
  }); 

//  console.log(JSON.stringify(app.locals.posts));
//  res.render('index.ejs');


});

app.get('/devices', function(req, res) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;


  if(isLogined){
  app.locals.uname = loginUser;
      
      if(req.query.rid) {
          app.locals.rid = req.query.rid ;
      }else {
          app.locals.rid = '0';
      }
      

  console.log('Hello Express : ' + loginUser);
  }

  res.render('devices.ejs', {
      isLogined: isLogined,
      name: loginUser || ''
  }); 

//  console.log(JSON.stringify(app.locals.posts));
//  res.render('index.ejs');


});

app.get('/cond', function(req, res) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;


  if(isLogined){
  app.locals.uname = loginUser;
      
      if(req.query.rid) {
          app.locals.rid = req.query.rid ;
      }else {
          app.locals.rid = '0';
      }
      

  console.log('Hello Express : ' + loginUser);
  }

  res.render('cond.ejs', {
      isLogined: isLogined,
      name: loginUser || ''
  }); 

//  console.log(JSON.stringify(app.locals.posts));
//  res.render('index.ejs');


});

app.get('/schedule', function(req, res) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;


  if(isLogined){
  app.locals.uname = loginUser;
      
      if(req.query.scid) {
          app.locals.scid = req.query.scid ;
      }else {
          app.locals.scid = '0';
      }
      

  console.log('Hello Express : ' + loginUser);
  }

  res.render('schedule.ejs', {
      isLogined: isLogined,
      name: loginUser || ''
  }); 

//  console.log(JSON.stringify(app.locals.posts));
//  res.render('index.ejs');


});




app.get('/', function(req, res) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;


  if(isLogined){
  app.locals.uname = loginUser;

  console.log('Hello Express : ' + loginUser);
  }

  res.render('index.ejs', {
      isLogined: isLogined,
      name: loginUser || ''
  }); 

//  console.log(JSON.stringify(app.locals.posts));
//  res.render('index.ejs');


});

app.get('/kaso/:id', function(req, res ) {
  res.send(req.params.id + JSON.stringify(req.query));
});

// GreenWave API
app.post('/register', function(req, res, next) {
    
    var reg_email = req.body.email;
    var reg_pass1 = req.body.pass1;
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = {"id":"test123@gmail.com", "message":"Register a new user successfully"};
    
    // check user exist 
    findUserX( reg_email, function( users ){

      if(users.length == 0) {
          RegisterANewUser(reg_email, reg_pass1);
        
       } else {
           
           
        
       }
        
       res.end(JSON.stringify(resobj)); 
   });
    
    
});

app.post('/activate', function(req, res, next) {
    
    var reg_email = req.body.email;
    var reg_auth = req.body.auth;
     
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = {"id":"test123@gmail.com", "message":"User Activated successfully"};
    
    // check user exist 
    findUserY( reg_email, reg_auth, function( users ){

      if(users.length == 1) {
          ActivateUser(reg_email);
        
       } else {
           
           
        
       }
        
       res.end(JSON.stringify(resobj)); 
   });
    
});

app.post('/applogin', function(req, res, next) {
    
   var sess = req.session;
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = {"session":"EAAIWFEytyLABAM6NJZCE7H6ln4a", "email":"test123@gmail.com", "status":"0"};
    
   var loginUser = sess.loginUser;
   var isLogined = !!loginUser;
    
   if(isLogined) {
       
       resobj.detail.session = sess.id;
       resobj.detail.email = loginUser;
       resobj.detail.status = '2';
       
       res.end(JSON.stringify(resobj));
        
   } else {
       
       console.log( req.body.email );
       findUserZ( req.body.email, req.body.password, function( users ){

      if(users.length > 0) {
          
        var pass1 = cryptr.decrypt(users[0].password);
          
        if( pass1 == req.body.password ) {
          
        req.session.regenerate( function(err) {
          if(err) {
             console.log('Error : ' + err );
             return res.json({ret_code: 2, ret_msg: 'login fail'});
          }
            
          req.session.loginUser = users[0].email;
            
          resobj.detail.session = req.session.id;
          resobj.detail.email = req.session.loginUser;
          resobj.detail.status = '1';
          
            res.end(JSON.stringify(resobj));
            
         });
            
        } else {
          resobj.detail.session = req.session.id;
          resobj.detail.email = loginUser;
          resobj.detail.status = '9'; 
            
            res.end(JSON.stringify(resobj));
        }
          
       } else {
         res.json({ret_code: 1, ret_msg: 'Name or Password Error'});
//           res.redirect('/login');
       }
       
       
   });
       
   }
      
});
    
app.post('/forget', function(req, res, next) {
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = {"message":"Send forget password email "};
    
    res.end(JSON.stringify(resobj));
});   
     
app.post('/resetpassword', function(req, res, next) {
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = {"message":"Reset password successfully "};
    
    res.end(JSON.stringify(resobj));
}); 
    
app.post('/sensor', function(req, res, next) {
    
    var reg_email = req.body.email;
    var reg_devid = req.body.device;
    var reg_gps = req.body.gps;
    
    // 
    var reg_op = req.body.op;
    
    //reg_gps = '41.40338, 2.17403';
    
    //BindDevice(reg_email, reg_devid );
    
    UpdateDeviceInfo( reg_email, reg_devid, reg_gps, function( device ) {
        
        var resobj = {};
        resobj.ret = "0";
        resobj.err = "000";
        resobj.detail = device;
            
        res.end(JSON.stringify(resobj));
        
    });
    
    
    
   // resobj.detail.device = "TW2019XXX";
    
    var paramArray = [];
    
//    var paramLTMP = {};
//    paramLTMP.id = "LTMP";
//    paramLTMP.name = "Temperature";
//    paramLTMP.min = -20;
//    paramLTMP.max = 100;
//    paramLTMP.unit = "°C";
//    paramArray.push(paramLTMP );
    
     var paramHUM = {};
    paramHUM.id = "HUM";
    paramHUM.name = "Humidity";
    paramHUM.min = 0;
    paramHUM.max = 100;
    paramHUM.unit = "%";
    paramArray.push(paramHUM );
    
    var paramCO2 = {};
    paramCO2.id = "CO2";
    paramCO2.name = "Co2";
    paramCO2.min = 0;
    paramCO2.max = 10000;
    paramCO2.unit = "ppm";
    paramArray.push(paramCO2 );
    
 //   resobj.detail.param = paramArray
    
    
    
}); 
    
app.get('/sensors', function(req, res, next) {
    
    var reg_email = req.query.email;
    console.log(req.query);
    
    GetSensorsListByEMail(reg_email, function(devices) {
        
         var resobj = {};
         resobj.ret = "0";
         resobj.err = "000";
         resobj.detail = devices;
        
         res.end(JSON.stringify(resobj));
    });
    
    
   
    
    var devobj = {};
    devobj.device = "TW2019XXX";
    devobj.param = [];
    
    var paramLTMP = {};
    paramLTMP.id = "LTMP";
    paramLTMP.name = "Temperature";
    paramLTMP.min = -20;
    paramLTMP.max = 100;
    paramLTMP.unit = "°C";
    devobj.param.push(paramLTMP );
    
     var paramHUM = {};
    paramHUM.id = "HUM";
    paramHUM.name = "Humidity";
    paramHUM.min = 0;
    paramHUM.max = 100;
    paramHUM.unit = "%";
    devobj.param.push(paramHUM );
    
    var paramCO2 = {};
    paramCO2.id = "CO2";
    paramCO2.name = "Co2";
    paramCO2.min = 0;
    paramCO2.max = 10000;
    paramCO2.unit = "ppm";
    devobj.param.push(paramCO2 );
    
   // resobj.detail.push(devobj);
    
   
});  

app.post('/members', function(req, res, next) {
    
    var reg_email = req.body.email;
    var reg_devid = req.body.device;
    var reg_owner = req.body.owner;
    
    AddMemberToDevice(reg_owner, reg_email, reg_devid, function(devices) {
        
         var resobj = {};
         resobj.ret = "0";
         resobj.err = "000";
         resobj.detail = devices;
        
         res.end(JSON.stringify(resobj));
    });
});
    
app.post('/mqtt', function(req, res, next) {
    
    var reg_devid = req.body.device;
    var reg_up_topic = req.body.uptopic;
    var reg_dw_topic = req.body.dwtopic;
       
    SetMqttTopic(reg_devid, reg_up_topic, reg_dw_topic, function(devices) {
        
         var resobj = {};
         resobj.ret = "0";
         resobj.err = "000";
         resobj.detail = devices;
        
         res.end(JSON.stringify(resobj));
    });
});
    
app.get('/photo', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = [];
    
    var imgobj = {};
    imgobj.datetime = "20190819T001018Z";
    imgobj.url = "/images/img20090808.png"
    
    resobj.detail.push(imgobj);
    
    res.end(JSON.stringify(resobj));
}); 
    
 app.get('/location', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = [];
    
    res.end(JSON.stringify(resobj));
}); 
     
app.post('/location', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = "Add a location successfully";
    
    res.end(JSON.stringify(resobj));
}); 
    
app.get('/record', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = [];
    
    var recobj = {};
    
    recobj.rid = "R20180901001";
    recobj.date = "20190819T001018Z ";
    recobj.text = "irrigation";
    recobj.kwords  = ["irrigation","water" ];
    
    resobj.detail.push(recobj);
    
    res.end(JSON.stringify(resobj));
}); 
     
app.post('/record', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = "Add a record successfully";
    
    res.end(JSON.stringify(resobj));
});
    

app.get('/message', function(req, res, next) {
    
    
     var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = [];
    
    var msgobj = {};
    
    msgobj.datetime = "20190819T001018Z ";
    msgobj.msg = "Turn on cooling fen";
    
    resobj.detail.push(msgobj);
    
    res.end(JSON.stringify(resobj));
}); 
    
app.get('/history', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = [];
    
    var devobj = {};
    
    devobj.device = "TW2019XXX";
    devobj.data = [];
    
    var dataobj = {};
    dataobj.datetime = "20190819T001018Z ";
    dataobj.LTMP = "29.01";
    dataobj.HUM = "60";
    dataobj.CO2 = "300";
    dataobj.LUM =  "1000";
    
    devobj.data.push(dataobj);
    
    resobj.detail.push(devobj);
    
    res.end(JSON.stringify(resobj));
});  
    
var http = require("http");

app.get('/weather', function(req, res, next) {
    
    
    var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = {};
    
    res.end(JSON.stringify(resobj));
});   
    
//------------------
//---- candy house ---------
app.post('/candyhouse/log', function(req, res, next) {
    
    var ima = new Date();
    
    var candycommand = req.body.command;
    var candylockid = req.body.device_id;
    var actiontime = ima.toISOString();
    
    console.log( 'candy house command' + candycommand );
    console.log( 'candy house device' + candylockid );
    console.log( 'candy house action time' + actiontime );
    
    mongo2.connect( mongourl2, {useNewUrlParser:true}, function( err, db) {
        
        var db_agri = db.db("agridb");
        
        var my_candyhouse_data = {};
        my_candyhouse_data.date = actiontime;
        my_candyhouse_data.command = candycommand;
        my_candyhouse_data.device_id = candylockid;
        
        db_agri.collection("candyhouse").insertOne(my_candyhouse_data, function(err2, res2) {
          if( err2 ) throw err2;
          console.log("insert new record");
        db.close();
            
        var resobj = {};
    resobj.ret = "0";
    resobj.err = "000";
    resobj.detail = "Add a candyhouse record successfully";
    
    res.end(JSON.stringify(resobj));    
            
       });
        
    });
    
    
});

//-----------------

app.post('/login', function(req, res, next) {
  
    console.log( 'login :post login name : ' + req.body.name );
    
   var sess = req.session;
   //var user = findUser(req.body.name, req.body.password);

   findUser( req.body.name, req.body.password, function( user ){

      console.log('User : ' + JSON.stringify(user) );

      if(user) {
        req.session.regenerate( function(err) {
          if(err) {
             console.log('Error : ' + err );
             return res.json({ret_code: 2, ret_msg: 'login fail'});
          }
          req.session.loginUser = user.uname;
          console.log( 'req.session.loginUser : ' + req.session.loginUser );
//          res.redirect('/');
          res.json({ret_code: 0, ret_msg: 'login OK'});
         });
       } else {
         res.json({ret_code: 1, ret_msg: 'Name or Password Error'});
//           res.redirect('/login');
       }
   });
});

app.post('/vacan/healths', function(req, res, next) {
    
         var resobj = {};
         resobj.ret = "200";
         resobj.err = "000";
         resobj.detail = req.body;

	// console.log(JSON.stringify(resobj));
    console.log(req.headers);
         console.log(req.body);
        
         res.end(JSON.stringify(resobj));
   
});

app.post('/vacan/values', function(req, res, next) {
    
         var resobj = {};
         resobj.ret = "200";
         resobj.err = "000";
         resobj.detail = req.body;
    console.log(req.headers);
         console.log(req.body);
	 //console.log(JSON.stringify(resobj));
        
         res.end(JSON.stringify(resobj));
   
});

app.post('/vacan', function(req, res, next) {
        
         var resobj = {};
         resobj.ret = "200";
         resobj.err = "000";
         resobj.detail =req.body;
      console.log(req.body);

	  console.log(JSON.stringify(resobj));
        
         res.end(JSON.stringify(resobj));
   
});

app.get('/logout', function(req, res, next) {
   req.session.destroy(function(err) {
      if(err) {
        res.json({ret_code: 2, ret_msg: 'logout fail'});
    //    return;
      }

      res.clearCookie(identifiKey);
      res.redirect('/');
    });
});

app.listen(80, function() {
  console.log(' Http Express Server run in 80');
});

process.on('exit', function() {
  console.log('Close Mongodb connection');
  mongoose.connection.close();
});

process.on('SIGINT', function() {
  console.log(' Ctach INT');
  process.exit(2);
});



