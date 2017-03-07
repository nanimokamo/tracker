'use strict';

const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const index = (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html'));

app.use(compression());
app.use('/public', express.static(path.resolve(__dirname, '../dist/public')));
app.get('*', index);
app.listen(process.env.PORT || 3000);
