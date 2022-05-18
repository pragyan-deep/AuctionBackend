const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'dev';
const config = require('../config/config')[env];

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = router;