var mosca = require('mosca');

var ascoltatore = {
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'ascoltatori',
    mongo: {}
};

var settings = {
    port: 1833,
    backend: ascoltatore,
    http: {
      port: 1883,
      bundle: true,
      static: './'
    }
};

var server= new mosca.Server(settings);

server.on('clientConnected',  function(client) {
   console.log('client connected', client.id);
});

server.on('published', function(packet, client) {
   console.log('Published', packet.topic + ':' +  packet.payload);
});

server.on('ready', setup);

function setup() {
   console.log('Mosca server is up and running');
   
  server.authenticate = authenticate;
  server.authorizePublish = authorizePublish;
  server.authorizeSubscribe = authorizeSubscribe;
   
}

var authenticate = function(client, username, password, callback) {
  var authorized = (username === 'techware' && password.toString() === 'temppwd');
  if (authorized) client.user = username;
  callback(null, authorized);
}

var authorizePublish = function(client, topic, payload, callback) {
  //callback(null, client.user == topic.split('/')[1]);
  callback(null, true);
}

var authorizeSubscribe = function(client, topic, callback) {
  //callback(null, client.user == topic.split('/')[1]);
  callback(null, true);
}


