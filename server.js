const express = require('express');
const auth0 = require('auth0');
const app = express();
const dotenv = require('dotenv');

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



var webAuth = new auth0.WebAuth({
  domain: 'dev-561zw80656alm5u3.us.auth0.com',
  clientID: 'JqMMyQWcS0npAOsWA_N8Xrf5nVU1DABfwlGuEQ4bPn5YDtnjCCBbl8gyreV2bj60'
});

function login() {
  webAuth.authorize({
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });
}
