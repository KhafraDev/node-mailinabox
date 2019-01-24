class acc {
    constructor (mail, pw, server) {
        this.email = mail || null;
        this.password = pw || null;
        this.domain = server || null;
        this.b64 = Buffer.from(`${this.email}:${this.password}`, 'binary').toString('base64');
    } 
}

module.exports = {
    login: acc,

    add: require('./src/add.js'),
    remove: require('./src/remove.js'),
    list: require('./src/list.js'),

    alias_list: require('./src/alias_list.js'),
    alias_add: require('./src/alias_add.js'),
    alias_remove: require('./src/alias_remove.js'),

    dns_add: require('./src/dns_add.js'),
    dns_remove: require('./src/dns_remove.js'),
}