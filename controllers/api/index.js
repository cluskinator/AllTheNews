'use strict';


// dependencies
// =============================================================
const express = require('express'),
      router = express.Router(),
      request = require('request'),
      Article = require('../../models/article'),
      Note = require('../../models/note'),
      cheerio = require('cheerio');
      

router.get('/index', function(req, res) {
    res.render('main');
    res.status(200).send('<a href=\'/api/articles/\'>articles</a><br><a href=\'/api/notes/\'>notes</a>');
});

router.use('/articles', require('./articles'));
router.use('/notes', require('./notes'));

module.exports = router;