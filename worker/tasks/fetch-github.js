const fetch = require('node-fetch');
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub() {

    let resultCount = 1, onPage = 0;
    const allJobs = [];

    try{
        // fetch all pages
        while(resultCount > 0) {
            const res = await fetch(`${baseUrl}?page=${onPage}`);
            const jobs = await res.json();
            allJobs.push(...jobs);
            resultCount = jobs.length;
            console.log('got', resultCount, 'jobs');
            onPage++;
        }
        console.log('got', allJobs.length, 'jobs total');
        // filter 
        const rmJobs = allJobs.filter(job => {
            const location = job.location.toLowerCase();

            // /senior|architect|manager|sr./.test(job)
            // alg logic
            // if( jobTitle.includes('senior') || 
            //     jobTitle.includes('manager') || 
            //     jobTitle.includes('sr.') ||
            //     jobTitle.includes('architect')) {
            //         return false;
            // }
            if(/remote/.test(location)) return true;
            return false;
        })

        console.log('filtered down to', rmJobs.length);

        // set in redis
        const success = await setAsync('github', JSON.stringify(rmJobs));

        console.log({success});
    } catch(e) {
        console.log(e);
    }
}

// fetchGithub()

module.exports = fetchGithub;