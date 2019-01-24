const fetch = require('node-fetch');

module.exports = function(obj) {
    return new Promise(function(resolve, reject) {
        fetch(`https://${obj.domain}/admin/mail/aliases?format=json`, 
                { method: 'GET', headers: { 'Authorization': 'Basic ' + obj.b64 } })
            .then(res => res.json())
            .then(async body => resolve(body))
            .catch(err => reject(err))
    })
}