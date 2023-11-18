const dns = require('dns');

const domain = 'www.miu.edu';

dns.resolve4(domain, (err, addresses) => {
    if (err) {
        console.error(`Error resolving ${domain}: ${err.message}`);
    } else {
        console.log(`IP Addresses for ${domain}: ${addresses}`);
    }
});
