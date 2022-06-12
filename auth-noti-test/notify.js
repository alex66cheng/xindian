

const admin = require('firebase-admin');
const serviceAccount = require('./Mark_admin.json');

// The Firebase Admin SDK is used here to verify the ID token.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// admin.messaging().sendToDevice(registrationToken, payload,options)
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((error)=>{
//     consol.log('Error sending message', error)
//   })

message = {
  notification:{
    title: 'test notification',
    body: 'this is test notification from server'
  },
  topic: 'test'
}


admin.messaging().send(message).then(()=>{
  console.log(message)
  console.log('success')
})




