const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "f3195426",
  apiSecret: "1xBac5k1bF3NwRbO"
})



const from = "573222618817"
const to = "573222618817"
const text = 'Esto es un mensaje de prueba'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();


//envio 11:58 recepcion 11:58