const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = function(obj, email, password) {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return new Promise(function(resolve, reject) {
        fetch(`https://${obj.domain}/admin/mail/users/add`, 
            { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + obj.b64 } })
        .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
    })
}