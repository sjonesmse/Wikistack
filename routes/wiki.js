const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models');
const wikipage = require('../views/wikipage');

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

  // const input = await res.json(req.body);
  // console.log(input)

  const page = await new Page({
    title: req.body.title,
    content: req.body.content,
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

router.get('/:slug', async (req, res, next) => {
  // res.send(`hit dynamic route at ${req.params.slug}`);
  try {
    const page = await Page.findOne({
      where: { slug: req.params.slug },
    });

    console.log(page);

    res.send(wikipage(page, 'not anna'));
    //res.json(page);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
