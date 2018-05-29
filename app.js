
require('./public/javascripts/globals');
require('./public/javascripts/global_functions');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var panelRouter = require('./routes/paneltarjetas');
var filewatcher = require('filewatcher');