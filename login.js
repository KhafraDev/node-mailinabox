const fetch = require('node-fetch');
const FormData = require('form-data');
let formData = new FormData();

module.exports = class acc {
    constructor (mail, pw, server) {
        this.email = mail || null;
        this.password = pw || null;
        this.domain = server || null;
        this.b64 = Buffer.from(`${this.email}:${this.password}`, 'binary').toString('base64');
    } 

    list() {
        let acc = this;

        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/mail/users?format=json`, 
                { method: 'GET', headers: { 'Authorization': 'Basic ' + acc.b64} })
            .then(req => { 
                if(req.status == 200 && req.statusText == "OK") 
                    resolve(req.json());
                else   
                    reject(new Error(`Status code: ${req.status} received. https://en.wikipedia.org/wiki/List_of_HTTP_status_codes`));
            })
            .catch(err => reject(err))
        })
    }

    add(email = String, password = String) {
        let acc = this;

        formData.append('email', email);
        formData.append('password', password);

        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/mail/users/add`, 
                { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + acc.b64 } })
            .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
            .catch(err => reject(err))
        })
    }

    remove(email = String) {
        let acc = this;

        formData.append('email', email);

        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/mail/users/remove`, 
                { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + acc.b64 } })
            .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
            .catch(err => reject(err))
        })
    }

    alias_list() {
        let acc = this;

        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/mail/aliases?format=json`, 
                    { method: 'GET', headers: { 'Authorization': 'Basic ' + acc.b64 } })
                .then(res => res.json())
                .then(async body => resolve(body))
                .catch(err => reject(err))
        })
    }

    alias_add(from = String, forward_to = String) {
        let acc = this;
        formData.append('address', from);
        formData.append('forwards_to', forward_to);

        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/mail/aliases/add`, 
                { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + acc.b64 } })
            .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
            .catch(err => reject(err))
        })
    }

    alias_remove(alias) {
        let acc = this;
        formData.append('address', alias);

        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/mail/aliases/remove`, 
                { method: 'POST', body: formData, headers: { 'Authorization': 'Basic ' + acc.b64 } })
            .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
            .catch(err => reject(err))
        })
    }

    dns_add(record) {
        let acc = this;
        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/dns/custom/${record}`, 
                { method: 'PUT', headers: { 'Authorization': 'Basic ' + acc.b64 } })
            .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
            .catch(err => reject(err))
        })
    }

    dns_remove(record) {
        let acc = this;
        return new Promise(function(resolve, reject) {
            fetch(`https://${acc.domain}/admin/dns/custom/${record}`, 
                { method: 'DELETE', headers: { 'Authorization': 'Basic ' + acc.b64 } })
            .then(res => { resolve({ status: res.status, statusText: res.statusText }); })
            .catch(err => reject(err))
        })
    }
}