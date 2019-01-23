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
}