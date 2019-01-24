const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = function(obj, from, forwards) {
    let formData = new FormData();
    formData.append('address', from);
    formData.append('forwards_to', forwards);

    return new Promise(function(resolve, reject) {
        fetch(`https://${obj.domain}/admin/mail/aliases/add`, 
            { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + obj.b64 } })
        .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
    })
}