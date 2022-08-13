//Configure package json for a node application
const configuration = {
    "name": "codewars-solution",
    "version": "1.0.0",
    "description": "codewars solution",
    "main": "server.js",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },
    "author": "emlegweak",
    "license": "ISC",
    "dependencies": {
        "@sendgrid/mail": "^7.7.0",
        "bad-words": "^3.0.4",
        "bcryptjs": "^2.4.3",
        "cloudinary": "^1.30.1",
        "dotenv": "^16.0.1",
        "express": "^4.18.1",
        "express-async-handler": "^1.2.0",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^6.4.6",
        "nodemon": "^2.0.19",
        "sharp": "^0.30.7"
    },

};
// Hint: try creating with `npm init` command
// Help! -> https://docs.npmjs.com/files/package.json