var mcs_config = {
  "logLevel": "",
  "mobileBackends": {
    "ZX_Backend": {
      "default": true,
      "baseUrl": "https://apacdemo14-apacdemo14.mobileenv.us2.oraclecloud.com:443",
      "applicationKey": "d300b522-6f5e-4443-81ba-19c9c8194104",
      "authorization": {
        "basicAuth": {
          "backendId": "1ad522c3-badd-4823-8b84-a23ea7dd2d77",
          "anonymousToken": "QVBBQ0RFTU8xNF9BUEFDREVNTzE0X01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6WXpjZGkzX3NlMGFqZ24="
        },
        "oAuth": {
          "clientId": "f5863985-63a6-43e9-84b8-550522fcdb3c",
          "clientSecret": "uWHNfcDEAgXJjRwaiqH4",
          "tokenEndpoint": "https://gse00011678.identity.us.oraclecloud.com/oam/oauth2/tokens"
        },
        "facebookAuth":{
          "facebookAppId": "YOUR_FACEBOOK_APP_ID",
          "backendId": "YOUR_BACKEND_ID",
          "anonymousToken": "YOUR_BACKEND_ANONYMOUS_TOKEN"
        },
        "ssoAuth":{
          "clientId": "YOUR_CLIENT_ID",
          "clientSecret": "YOUR_ClIENT_SECRET",
          "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
        }
      }
    }
  }
};
