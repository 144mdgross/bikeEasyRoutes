'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.get('/:city', (req, res, next) => {
  knex('bus_routes')
    .where('city', req.params.city)
      .then(depart => {
        res.json(`${depart[0].lat}, ${depart[0].lng}`)
    })
})

module.exports = router;
