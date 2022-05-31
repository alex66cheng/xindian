const dataConfigs = require('./config/pigchdayi.json')
const genDataWithId = (ids, dataobj) => {
	return new Promise((resolve, reject) => {

		let dataArr = []

		for(var index = 0; index < ids.length; ++index){
      id = ids[index]
	    let config = dataConfigs.param.find(x => x.id == id)
     
	    dataArr.push({
        id: id,
	    	name: config.name,
	    	value: dataobj[id],
	    	unit: config.unit,
	    	min: config.min,
	    	max: config.max,
	    })
	  }
	  resolve(dataArr)

	})
}

function getIdToken(req) {
  // Parse the injected ID token from the request header.
  const authorizationHeader = req.headers.authorization || '';
  const components = authorizationHeader.split(' ');
  return components.length > 1 ? components[1] : '';
}

module.exports = {
  genDataWithId: genDataWithId,
}