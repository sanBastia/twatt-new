const express = require('express')
const router = express.Router()

const Twitter = require('twitter')

const config = require('./config');

const app = express()

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.get('/tweetsomething',function(req, res) {

  const status = req.query.status;

  client.post('statuses/update', {status: status}, function(error, tweets, response) {

    const result = JSON.parse(response.body)
    console.log({result})
    res.send({result})
  })

})

app.use('/', router)
app.listen(3000)
