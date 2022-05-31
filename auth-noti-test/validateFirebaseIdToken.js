
module.exports = function (admin) {

  function getIdToken(req) {
    // Parse the injected ID token from the request header.
    const authorizationHeader = req.headers.authorization || '';
    const components = authorizationHeader.split(' ');
    return components.length > 1 ? components[1] : '';
  }

  const validateFirebaseIdToken = async (req, res, next) =>{
    
    //console.log('varify')
    try{
      let IdToken = getIdToken(req);
      const decodedIdToken = await admin.auth().verifyIdToken(idToken)
      console.log('ID Token correctly decoded', decodedIdToken);
      req.user = decodedIdToken;
      next();
      return
    }catch (error){
      console.log('Error while verifying Firebase ID token:', error)
      res.status(403).send('Unauthorized');
      // admin.auth().updateUser(uid, {
      //   disabled: true
      // })
      return;
    }
    return 
      
  }
  return validateFirebaseIdToken

}

