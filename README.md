![mailinabox](https://mailinabox.email/static/logo.png)

A simple package to communicate with the mailinabox API.
The API is installed onto every instance of mailinabox.

[mailinabox.email](https://mailinabox.email/)

### Installation
``npm i mailinabox``

## Basic Use

Create a new "user" (for authentication).
```javascript
const mail = require('mailinabox');
const admin = new mail("ie@example.com", "my$password", "my.domain.com");
```

### List
List *all* users on a box
```javascript
admin.list().then(res => {
    /* ... */
}
```

### Add
Create a new account
```javascript
admin.add("new@example.com", "$password123").then(res => {
    /* ... */
})
```

### Remove
Remove an account (be careful - it doesn't archive the user.)
Almost indentical to adding a user, but it doesn't require a password.
```javascript
admin.remove("new@example.com").then(res => {
    /* ... */
})
```

## Aliases!

### List aliases
List all existing aliases
```javascript
admin.alias_list().then(res => {
    /* ... */
})
```

### Add
Add an alias
Parameters: account to forward from, account to forward to.
```javascript
admin.alias_add('from@example.com', 'forward_to@example.com').then(res => {
    /* ... */
})
```

### Remove
Remove an alias
```javascript
admin.alias_remove('from@example.com').then(res => {
    /* ... */
})
```

## DNS (in progress - version 1.1.0)

### Add
Add a DNS record
```javascript
admin.dns_add('other.example.com').then(res => {
    /*
        The API returns a successful status even if 
        the DNS record has already been set!
    */
})
```

### Remove
Remove a DNS record
```javascript
admin.dns_remove('other.example.com').then(res => {
    /* 
        The API returns a successful status even if 
        the DNS record has already been removed!
    */
})
```





