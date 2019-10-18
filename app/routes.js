const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
require('./routes/core.js')(router)
require('./routes/all.js')(router)

module.exports = router
