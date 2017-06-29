const express = require('express');
const router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.post('/', function(req, res, next) {

  knex('bus_routes')
    .where('city', rea.body.depart)
    .then(depart => {
      knex('bus_routes')
        .where('city', req.body.arrive)
        .then(arrive => {
          res.json({busStart: `${depart[0].lat} ${depart[0].lng}`, busEnd: `${arrive[0].lat} ${arrive[0].lng}`})
        })
    })
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
