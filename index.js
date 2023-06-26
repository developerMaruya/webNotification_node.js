const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

// Create express app.
const app = express();

// Use body parser which we will use to parse request body that sending from client.
app.use(bodyParser.json());

// We will store our client files in ./client directory.
app.use(express.static(path.join(__dirname, "client")))

const publicVapidKey = "BGZU9aou38ep3bQ53sDWYudeKEhv_3DmQPX7FkNwU_u6bQVRUDcedeMH-NF2uMnY28g3ay7dW9pTYnfhssDUKR0";

const privateVapidKey = "hgF0edMFaZ0cVGZ9Hpxy3An1ed61opMh8YgRp8I81V0";

// // Setup the public and private VAPID keys to web-push library.
webpush.setVapidDetails(
    "mailto:707mauryaji@gmail.com",
     publicVapidKey, 
     privateVapidKey
     );

// subscribe route
app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "push test"});

    webpush.sendNotification(subscription, payload).catch(console.log);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});