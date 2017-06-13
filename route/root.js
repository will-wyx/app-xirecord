/**
 * Created by will on 2017/1/28.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const relative = '../view';
// const dbserver = require('../dao/dbserver');
const labelDao = require('../dao/label');

function sendHtml(res, filename) {
    res.sendFile(path.join(__dirname, relative, `${filename}.html`));
}

router.get('/', (req, res) => {
    // labelDao.limit('58899ab3b3db7d065f0bde33');
    labelDao.one('58899ab3b3db7d065f0bde33').then(doc => console.log(doc));
    sendHtml(res, 'index');
});

router.get('/login', (req, res) => {
    sendHtml(res, 'login');
});
router.get('/index', (req, res) => {
    sendHtml(res, 'index');
});
router.get('/labels', (req, res) => {
    sendHtml(res, 'labels');
});
module.exports = router;
