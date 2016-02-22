# angular-google-oauth2
[![npm version](https://img.shields.io/npm/v/angular-google-auth2.svg?style=flat-square)](https://www.npmjs.org/package/angular-google-auth2)
[![npm downloads](https://img.shields.io/npm/dm/angular-google-auth2.svg?style=flat-square)](https://www.npmjs.org/package/angular-google-auth2)
[![Dependency Status](https://david-dm.org/AOlefirenko/angular-google-auth2.svg)](https://david-dm.org/AOlefirenko/angular-google-auth2)
[![devDependency Status](https://david-dm.org/AOlefirenko/angular-google-auth2/dev-status.svg)](https://david-dm.org/AOlefirenko/angular-google-auth2#info=devDependencies)

A lightweight library to perform client side authentication with Google OAuth2.

![example](https://github.com/AOlefirenko/angular-google-oauth2/blob/master/demo/example.PNG)




###Installation

  ```npm install angular-google-auth2 --save```

Include this script in your index.html file before your application bundle
```html
<script src="https://apis.google.com/js/platform.js"></script>
```
Configure your application
  ```javascript
var app = angular.module('example', ['googleOAuth2']);
app.config(function (gapiAuth2CredentialsProvider) {
   gapiAuth2CredentialsProvider.client_id = '<YOUR_CLIENT_ID>';
})
  ```
###Usage

####Directive
  ```html
<google-sign-in width="250" height="50" longtitle="true" theme="light"></google-sign-in>
  ```

####Service
 **gapiAuth2**
  This is the simplest wrapper of Google library. For more information look at [Client reference](https://developers.google.com/identity/sign-in/web/reference)

 There are only two methods:

 * *logout()*

  Returns promise
    ```javascript
    gapiAuth2.logout().then(function(){
      console.log('logged out')
    })
    ```
 * *getAuthInstance()*

 Gives access to the native methods. Returns promise
  ```javascript
    gapiAuth2.getAuthInstance().then(function(res){
      console.log(res.instance.isSignedIn.get())
    })
```
####Events

  **google:oauth2:signed-in**
  ```javascript
$rootScope.$on('google:oauth2:signed-in', function (e,val) {
  console.log('is signed in', val)
})
  ```

  **google:oauth2:profile**
```javascript
$rootScope.$on('google:oauth2:profile', function (e,profile) {
  console.log('got profile', profile)
})
  ```

###Contribution
Feel free to extend functionality of this library if you need.
