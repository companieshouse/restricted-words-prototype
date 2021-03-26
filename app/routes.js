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

router.get('/delete-word', function (req, res) {
  var word = req.query.word
  res.render('delete-word', {
    // To use the company data on that page use the following
    word: word
  })
})

router.post('/add-new-word', function (req, res) {
  var errors = []
  var wordHasError = false
  var superrestrictedHasError = false
  if (req.session.data['new-word'] === '') {
    wordHasError = true
    errors.push({
      text: 'Enter a word',
      href: '#new-word'
    })
  }
  if (typeof req.session.data['super-restricted-word'] === 'undefined') {
    superrestrictedHasError = true
    errors.push({
      text: 'Enter your password',
      href: '#super-restricted-word'
    })
  }
  if (wordHasError || superrestrictedHasError) {
    res.render('add-new-word', {
      errorWord: wordHasError,
      errorSuperrestricted: superrestrictedHasError,
      errorList: errors
    })
  } else {
    res.redirect('all?status=success')
  }
})

module.exports = router
