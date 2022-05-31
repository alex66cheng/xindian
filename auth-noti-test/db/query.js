var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";


const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const getHistoryWithTimeRange = async (fromTime, toTime, key) => {
  const db = await MongoClient.connect(url)
  var dbo = db.db('test')
  var range = { time : { $gt : Number(fromTime), $lt : Number(toTime)}}
  var select = {time: 1, [key]: 1, _id: 0}
  try {
    //console.log(select)
    const valueArr = await dbo.collection('testCollection').find(range).project(select).toArray()
    //console.log(result)
    db.close()
    let result = {}
    valueArr.map((e) => {
      let t = new Date(e.time)   
      var year = t.getFullYear();
      var month = t.getMonth()+1;
      var date = t.getDate();
      var hour = t.getHours();
      var min = t.getMinutes();
      var sec = t.getSeconds();
      result[year + '/'+ month + '/' + date + ' ' + hour + ':' + min + ':' + sec] = e[key] ;
    })

    return result
  }catch(err){
    console.error(err)
  }
}

module.exports = {
  getHistoryWithTimeRange : getHistoryWithTimeRange,
}