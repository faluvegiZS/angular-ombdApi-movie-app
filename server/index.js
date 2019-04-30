'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


// API routes
app.get('/api/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', 'movies.json'))
})

app.get('/api/movies/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', `${req.params.id}.json`))
})

// Fallback to index.html
app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } else {
    next()
  }
})

// server
app.listen(3000, () => console.log('Express running on port 3000'))
