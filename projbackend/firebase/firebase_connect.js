const firebase = require("firebase");

const app = firebase.initializeApp({
    apiKey: "AIzaSyACk3KglQx2u3y6QwjEeCp46nJ3U4PI56w",
    authDomain: "bookify-3c2d2.firebaseapp.com",
    databaseURL: "https://bookify-3c2d2-default-rtdb.firebaseio.com/",
    projectId: "bookify-3c2d2",
});

module.exports = app;