const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', function (req, res, next) {
    res.redirect('../');
});
router.get('/add', function (req, res, next) {
    res.send(addPage());
});
router.post('/', async function (req, res, next) { });

module.exports = router;
