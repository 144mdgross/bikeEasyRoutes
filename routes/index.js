const express = require('express');
const router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  // how is information going to come in?
  // I will take input from google places
  // look for the corresponding city
  // select from the db where the city matches.
  // I need to send back two cities though: one for start and one for end.
  // so that means 2 queries. 
  // what will I send back? >> the lat, lng as a formatted string
  //
});

module.exports = router;
