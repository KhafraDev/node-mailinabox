const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = function(obj, alias) {
    let formData = new FormData();
    formData.append('address', alias);

    return new Promise(function(resolve, reject) {
        fetch(`https://${obj.domain}/admin/mail/aliases/remove`, 
            { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + obj.b64 } })
        .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
    })
}