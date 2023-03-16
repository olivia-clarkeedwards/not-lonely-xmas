const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes/routes')
const lonerRouter = require('./routes/lonerRouter')
const familyRouter = require('./routes/familyRouter')

const server = express()

// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', routes)
server.use('/loner', lonerRouter)
server.use('/family', familyRouter)

module.exports = server
