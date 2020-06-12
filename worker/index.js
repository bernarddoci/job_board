var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

var job = new CronJob('* * * * *', fetchGithub, null, true);
job.start();

/*
    run redis server
    > sudo service redis-server start
    redis cli
    > redis-cli
    
    stop redis
    ctr-c
    >sudo service redis-server stop
*/