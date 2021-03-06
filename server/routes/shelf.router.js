const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "item"';
    pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error in router.get.', error);
      res.sendStatus(500);
    });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const description = req.body.description;
    const image_url = req.body.image_url;
    const user_id = req.body.user_id
    const queryText = 'INSERT INTO "item" (description, image_url, user_id) VALUES ($1, $2, $3)';
    pool.query(queryText, [description, image_url, user_id])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const queryText= 'DELETE FROM "item" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE query', err);
      res.sendStatus(500);
    });
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM "item" WHERE user_id = $1';
  pool.query(queryText, [req.params.id])
  .then((result) => { res.send(result.rows); })
  .catch((error) => {
    console.log('Error in router.get.', error);
    res.sendStatus(500);
  });

});

module.exports = router;