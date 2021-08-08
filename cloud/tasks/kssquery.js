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

var isodate = require("isodate");

const json2csvParser = require('json2csv').Parser;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect( 'mongodb://localhost:27017/KASO03HM', {useNewUrlParser:true});

console.log('Mongoose connect to MongoDB');

var session = require('express-session');

const MongoStore = require('connect-mongo')(session);

var sensorSchema = new Schema({
      datetime : Date,
      //showdate : String,
      LTMP : String,
      OTMP : String,
      LHM : String,
      OHM : String
});

var sensorModel = mongoose.model('Sensor', sensorSchema, 'sensors' );

var startdate = '2018-11-8 1:47:49';
var enddate = '2018-11-8 20:30:30';

 var sdd = new Date(startdate);
console.log(sdd);
    var edd = new Date(enddate); 

//var smobj = {'datetime':{$gt:new Date('2018-11-8 09:47:49'), $lt:new Date('2018-11-8 19:15:30')}};

var smobj = {};
smobj.datetime = {};

smobj.datetime.$gt = sdd;
smobj.datetime.$lt = edd;

//console.log(smobj);

// sensorModel.find( {'datetime':{'$gt':sdd, '$lt':edd}} , function(err, docs) {
//sensorModel.find(  smobj , function(err, docs) {
  sensorModel.find(  {} , function(err, docs) {
     if(err) return console.error(err);
     docs.forEach( function(item, index, array) {
       console.log( item.datetime + ' ' + item.LTMP );
         var dd = new Date(item.datetime);
         var dtobj = {};
         dtobj.datetime = new Date(dd.toISOString());
       //  dtobj.showdate = formatDate(dd);
         
        sensorModel.findOneAndUpdate({'datetime': item.datetime }, {$set:dtobj}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }

    //console.log(doc);
});
         
     });
    
  //   const fields = ['datetime', 'LTMP', 'OTMP', 'LHM', 'OHM'];
  //  const fields = [{label:'時間',value: 'datetime' }, {label:'室內温度', value:'LTMP' }, 'OTMP', 'LHM', 'OHM'];
  //     const opts = { fields };
  //    try{
  //     const Parser = new json2csvParser(opts);
  //    const csv = Parser.parse(docs);
//    console.log(csv);
//    } catch (err) {
  //      console.error(err);
//    }
    
});



