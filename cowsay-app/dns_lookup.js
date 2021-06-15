const dns = require('dns');
const { hostname } = require('os');

dns.lookup(hostname)
