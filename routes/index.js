const express = require('express');
const myController = require('../controllers');
const routes = require('express').Router();
const app = express();

routes.get('/', myController.awesomeFunction);

routes.get('/ttech', myController.ttech);

module.exports = routes;
