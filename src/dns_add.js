const fetch = require('node-fetch');

module.exports = function(obj, dns_record) {
    return new Promise(function(resolve, reject) {
        fetch(`https://${obj.domain}/admin/dns/custom/${dns_record}`, 
            { method: 'PUT', headers: { 'Authorization': 'Basic ' + obj.b64 } })
        .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
    })
}