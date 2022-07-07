const client = require("twilio")(TWILIO_SID, TWILIO_API_TOKEN);

client.messages.list()
    .then(messages => console.log(`The most recent message is ${messages[0].body}`))
    .catch(err => console.log(err));

 console.log('Getting message')