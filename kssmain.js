//
const {fork} = require('child_process');

const mqtt_th  = fork('/root/kaso/mqttsrv.js');

const client_th = fork('/root/kaso/mqttclient.js');

const web_th = fork('/root/kaso/websrv.js');

const mongodb_th = fork('/root/kaso/tasks/ksswritetodb.js');

const web_exp_th = fork('/root/kaso/websrvexpress.js');

const kaso05so_th = fork('/root/kaso/clients/KASO05SO/tasks/clientjob.js');

const kaso03hm_th = fork('/root/kaso/clients/KASO03HM/tasks/clientjob.js');

