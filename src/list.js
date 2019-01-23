const fetch = require('node-fetch');

module.exports = function(obj) {
    return new Promise(function(resolve, reject) {
        fetch(`https://${obj.domain}/admin/mail/users?format=json`, 
            { method: 'GET', headers: { 'Authorization': 'Basic ' + obj.b64} })
        .then(req => { 
            if(req.status == 200 && req.statusText == "OK") 
                resolve(req.json());
            else   
                reject(new Error(`Status code: ${req.status} received. https://en.wikipedia.org/wiki/List_of_HTTP_status_codes`));
        })
    })
}