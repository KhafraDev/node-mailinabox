![mailinabox](https://mailinabox.email/static/logo.png)

A simple package to communicate with the mailinabox API.
The API is installed onto every instance of mailinabox.

[mailinabox](https://mailinabox.email/)

### Installation
``npm i mailinabox``

## Basic Use

Create a new "user" (for authentication).
```javascript
const user = require('mailinabox');
const account = new user.login("admin@example.com", "password", "example.com");
// console.log(account)
```

### List
List *all* users on a box
```javascript
user.list(account).then(res => {
  console.log(res);
  // will return a JSON object of all users, on all domains
  console.log(res.find(e => e.domain == "example.com"));
  // get all users on a single domain
})
```

### Add
Create a new account
```javascript
user.add(account, "new@example.com", "password123").then(res => {
    console.log(res.status == 200 && res.statusText == "OK");
    // v1.0.0 only returns status and statusText
})
```

### Remove
Remove an account (be careful - it doesn't archive the user.)
Almost indentical to adding a user, but it doesn't require a password.
```javascript
user.remove(account, "khafra@example.com").then(res => {
  console.log(res)
  // returns the same results as add
})
```

## Aliases!

### Add
Add an alias
format: account object -> email -> email to forward mail to
```javascript
user.alias_add(account, `spam@example.com`, `admin@example.com`).then(res => {
    console.log(res)
})
```

### Remove
Remove an alias
```javascript
user.alias_remove(account, `spam@example.com`).then(res => {
    console.log(res)
})
```

### List aliases
List all existing aliases
```javascript
user.alias_list(account).then(res => {
    console.log(res.find(dm => dm.domain == "example.com"));
})
```

## DNS (in progress - version 1.1.0)

### Add
Add a DNS record
```javascript
user.dns_add(account, `domain_to_add.com`).then(res => {
    console.log(res)
    // will return "OK" status even if the record is already set
})
```

### Remove
Remove a DNS record
```javascript
user.dns_remove(account, `domain_to_add.com`).then(res => {
    console.log(res)
    // will return "OK" status even if the record is removed
})
```





