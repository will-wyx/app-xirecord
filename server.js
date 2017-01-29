/**
 * Created by will on 2017/1/28.
 */
const os = require('os');
const platform = os.platform();
const express = require('express');
const app = express();

const root = require('./route/root');

app.use(express.static('public'));

let port = 3001;
if(platform === 'linux')
    port = 80;

app.use('/', root);



app.listen(port);
