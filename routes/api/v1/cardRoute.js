const express = require('express');
const cardRouter = express.Router();
const path = require('path');
const dbController = require('../../../controllers/dbController');

// all cards
cardRouter.get('/cards', (req, res, next) => {
  res.status(200).json({ data: 'Card Info' });
});
// specfic card
cardRouter.get('cards/:id', (req, res, next) => {
  res.status(200).json({ data: 'Card Info' });
});
// add card
cardRouter.post('/card', (req, res, next) => {
  res.status(200).json({ data: 'Card Info' });
});
// update card
cardRouter.patch('/', (req, res, next) => {
  res.status(200).json({ data: 'Card Info' });
});
// delete card
cardRouter.delete('/', (req, res, next) => {
  res.status(200).json({ data: 'Card Info' });
});
/**
 * GET: / | displayHome()
 * GET: /users | getUsers()
 * GET: /users/:id | getUserById()
 * POST: /users | createUser()
 * PUT: /users/:id | updateUser()
 * DELETE: /users/:id | deleteUser()
 */

module.exports = cardRouter;
