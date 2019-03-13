![mailinabox](https://mailinabox.email/static/logo.png)

A simple package to communicate with the mailinabox API.

The API is installed onto every instance of mailinabox.

This can be used for an account creation form or other methods not yet available to mailinabox.

[mailinabox.email](https://mailinabox.email/)

### Installation
``npm i mailinabox``

## Basic Use

Create a new "user" (for authentication).
Remember, don't load your credentials from /var/www/html/ or bad things may occur.
```javascript
const mailinabox = require('mailinabox');
const mail = new mailinabox({ email: "test@example.com", password: "password", domain: "example.com"});
// or
const mail = new mailinabox({ domain: 'example.com', b64: `base64 string of 'email:password'` });
```

### List
List *all* users on a box
```javascript
mail.list().then(console.log);
```

### Add Account
Create a new account
```javascript
mail.addAccount("new@example.com", "password").then(console.log);
```

### Remove Account
Remove an account (not archived).
Almost indentical to adding a user, but it doesn't require a password.
```javascript
mail.removeAccount("new@example.com").then(console.log);
```

### List Aliases
List all existing aliases
```javascript
mail.listAlias().then(console.log);
```

### Add Alias
Add an alias
Parameters: account to forward from, account to forward to.
```javascript
mail.addAlias('from@example.com', 'forward_to@example.com').then(console.log);
```

### Remove Alias
Remove an alias
```javascript
mail.removeAlias('from@example.com').then(console.log);
```

### Add DNS
Add a DNS record
```javascript
mail.addDNS('google.com').then(console.log);
    /*  The API returns a successful status even if 
        the DNS record has already been set!  */
```

### Remove DNS
Remove a DNS record
```javascript
mail.removeDNS('google.com').then(console.log);
    /*  The API returns a successful status even if 
            the DNS record has already been removed!  */
```

### Tips
I recommend using a form of caching if you're using this, it can significantly increase speed and performance of your app!
My recommendation: memory-cache





