var fs = require('fs');

var mqtt = require('mqtt');

var opt = {
   port:1833,
   clientId:'kaso726hm'
};

// 6001 web to clientjob  command
// 6002 clientjob response to web
// 6003 clientjob to local command
var localclient = mqtt.connect('http://localhost', opt );

localclient.on('connect', function() {
  console.log('(Sub SBC5000) Connect to local host');
  localclient.subscribe('kss6004', {qos:1} );
  localclient.subscribe('kss7004', {qos:1} );
});

localclient.on('message', function(topic, msg) {
    console.log('Receive ' + topic + ' mgr= ' + msg.toString() );
    
    var objmsg = JSON.parse(msg.toString());
    
    if( objmsg.cmd && objmsg.subject ) {
        
        if( objmsg.cmd == 'query' ) {
            if(objmsg.subject == 'rule') {
                var rulesobj = require('/root/kaso/clients/KASO03HM/json/rules.json');
                localclient.publish('kss6005', JSON.stringify(rulesobj) );
            }
            
            if(objmsg.subject == 'schedule') {
                var rulesobj = require('/root/kaso/clients/KASO03HM/json/schedule2.json');
                localclient.publish('kss7005', JSON.stringify(rulesobj) );
            }
        }
        
        if( objmsg.cmd == 'delete' ) {
            if(objmsg.subject == 'rule') {
                
              var rulesobj = require('/root/kaso/clients/KASO03HM/json/rules.json');
              var ruleroot = rulesobj.rules;
            
              if( Array.isArray(ruleroot)) {
                  var removeidx = -1;
                  for( var i = 0; i<ruleroot.length; i++ ) {
                       var rule = ruleroot[i];
                       
                       if( rule.rid == objmsg.value ) {
                           removeidx = i; 
                       }
                   }
                
                  if( removeidx >= 0) {
                      ruleroot.splice(removeidx, 1);
                  }
                
                  for( var i = 0; i<ruleroot.length; i++ ) {
                       var rule = ruleroot[i];
                       var newidx = i+1;
                    
                       rule.rid = newidx;
                  }
                  
                  fs.writeFile ("/root/kaso/clients/KASO03HM/json/rules.json", JSON.stringify(rulesobj), function(err) {
                   if (err) throw err;
                   console.log('complete');
                  });
                
                console.log(JSON.stringify(rulesobj));
                
                localclient.publish('kss6005', JSON.stringify(rulesobj) );
                localclient.publish('kss6006', JSON.stringify(rulesobj) );
              }
                
            }
            
            if(objmsg.subject == 'schedule') {
                
              var schedulesobj = require('/root/kaso/clients/KASO03HM/json/schedule2.json');
              var scheduleroot = schedulesobj.schedules;
            
              if( Array.isArray(scheduleroot)) {
                  var removeidx = -1;
                  for( var i = 0; i<scheduleroot.length; i++ ) {
                       var schedule = scheduleroot[i];
                       
                       if( schedule.scid == objmsg.value ) {
                           removeidx = i; 
                       }
                   }
                
                  if( removeidx >= 0) {
                      scheduleroot.splice(removeidx, 1);
                  }
                
                  for( var i = 0; i<scheduleroot.length; i++ ) {
                       var schedule = scheduleroot[i];
                       var newidx = i+1;
                    
                       schedule.scid = newidx;
                       schedule.shid = newidx;
                  }
                  
                  fs.writeFile ("/root/kaso/clients/KASO03HM/json/schedule2.json", JSON.stringify(schedulesobj), function(err) {
                   if (err) throw err;
                   console.log('complete');
                  });
                
                console.log(JSON.stringify(schedulesobj));
                
                localclient.publish('kss7005', JSON.stringify(schedulesobj) );
                localclient.publish('kss7006', JSON.stringify(schedulesobj) );
              }
                
            }
            
        }
        
        if( objmsg.cmd == 'update' ) {
            if(objmsg.subject == 'rule') {
              var rulesobj = require('/root/kaso/clients/KASO03HM/json/rules.json');
              var ruleroot = rulesobj.rules;
              var valueobj = objmsg.value;
                
              if( valueobj.rid == '0' ){
                  console.log('Add new rue');
                  valueobj.rid = ruleroot.length + 1;
                  ruleroot.push(valueobj);
              } else {
                if( Array.isArray(ruleroot)) {
                   for( var i = 0; i<ruleroot.length; i++ ) {
                     var rule = ruleroot[i];
                       
                     if( rule.rid == valueobj.rid ) {
                         ruleroot[i] = valueobj;  
                     }
                   }
                }
              }
              
              fs.writeFile ("/root/kaso/clients/KASO03HM/json/rules.json", JSON.stringify(rulesobj), function(err) {
                 if (err) throw err;
                console.log('complete');
              });
                
              console.log(JSON.stringify(rulesobj));
                
                localclient.publish('kss6005', JSON.stringify(rulesobj) );
                localclient.publish('kss6006', JSON.stringify(rulesobj) );
                
            }
            
            if(objmsg.subject == 'schedule') {
                console.log('Update schedule');
              var schedulesobj = require('/root/kaso/clients/KASO03HM/json/schedule2.json');
              var scheduleroot = schedulesobj.schedules;
              var valueobj = objmsg.value;
                
              if( valueobj.scid == '0' ){
                  console.log('Add new schedule');
                  valueobj.scid = scheduleroot.length + 1;
                  scheduleroot.push(valueobj);
              } else {
                if( Array.isArray(scheduleroot)) {
                   for( var i = 0; i<scheduleroot.length; i++ ) {
                     var schedule = scheduleroot[i];
                       
                     if( schedule.scid == valueobj.scid ) {
                         scheduleroot[i] = valueobj;  
                     }
                   }
                }
              }
              
              fs.writeFile ("/root/kaso/clients/KASO03HM/json/schedule2.json", JSON.stringify(schedulesobj), function(err) {
                 if (err) throw err;
                console.log('complete');
              });
                
              console.log(JSON.stringify(schedulesobj));
                
                localclient.publish('kss7005', JSON.stringify(schedulesobj) );
                localclient.publish('kss7006', JSON.stringify(schedulesobj) );
                
            }
        }
        
    }
});

