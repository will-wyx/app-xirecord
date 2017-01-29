/**
 * Created by will on 2017/1/28.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const relative = '../view';

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, relative, 'index.html'));
});

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, relative, 'index.html'));
});
module.exports = router;
