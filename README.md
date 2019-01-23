![mailinabox](https://mailinabox.email/static/logo.png)

A simple package to communicate with the mailinabox API.
The API is installed onto every instance of mailinabox.

[mailinabox](https://mailinabox.email/)

## Installation
`npm i mailinabox`

## Basic Use

Create a new "user" (for authentication).
```javascript
const user = require('mailinabox');
const account = new user.login("admin@example.com", "password", "example.com");
// console.log(account)
```

## List
List *all* users on a box
```javascript
user.list(account).then(res => {
  console.log(res);
  // will return a JSON object of all users, on all domains
  console.log(res.find(e => e.domain == "example.com"));
  // get all users on a single domain
})
```
Or, if you don't like promises
```javascript
(async function() {
    let res = await user.list(account);
    console.log(res);
})();
```

## Add
Create a new account
```javascript
user.add(account, "new@example.com", "password123").then(res => {
    console.log(res.status == 200 && res.statusText == "OK");
    // v1.0.0 only returns status and statusText
})
```
Or, if you don't like promises
```javascript
(async function() {
    let res = await user.add(account, "new@example.com", "password123");
    console.log(res);
})
```

## Remove
Remove an account (be careful - it doesn't archive the user.)
Almost indentical to adding a user, but it doesn't require a password.
```javascript
user.remove(account, "khafra@example.com").then(res => {
  console.log(res)
  // returns the same results as add
})
```
Or, if you don't like promises
```javascript
(async function() {
    let res = await user.remove(account, "khafra@example.com");
    console.log(res);
})
```


