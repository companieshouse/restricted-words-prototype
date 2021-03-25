const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
require('./routes/core.js')(router)
require('./routes/all.js')(router)

router.get('/word', function (req, res) {
  var word = req.query.word
  res.render('word', {
    // To use the company data on that page use the following
    word: word
  })
})

module.exports = router
