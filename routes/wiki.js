const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models');

router.get('/', function(req, res, next) {
  res.redirect('../');
});
router.get('/add', function(req, res, next) {
  res.send(addPage());
});
// router.post('/', async function(req, res, next) {
//   const input = await res.json(req.body);
//   console.log(input);
// });

router.post('/', async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const input = await res.json(req.body);

  const page = new Page({
    title: input.title,
    content: input.content,
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
