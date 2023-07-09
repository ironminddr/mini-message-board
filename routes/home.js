var express = require('express');
var router = express.Router();
var path = require ('path');
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('../views/index.ejs', { title: 'Express', messages: messages });
});

router.post('/new', function (req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/')
});

module.exports = router;
