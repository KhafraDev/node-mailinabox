const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = function(obj, email) {
    let formData = new FormData()
    formData.append('email', email);

    return new Promise(function(resolve, reject) {
        fetch('https://khafra.club/admin/mail/users/remove', 
            { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + obj.b64 } })
        .then(res => resolve({ status: res.status, statusText: res.statusText }))
    });
}