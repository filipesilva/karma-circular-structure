const karma = require('karma');
const karmaServer = new karma.Server({ singleRun: true, configFile: __dirname + '/karma.conf.js' });
karmaServer.start();