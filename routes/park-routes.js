const express = require('express');
const mainController = require('../controllers/parksController');
const views = require('../controllers/viewsController');

const parksRouter = express.Router();



parksRouter.route('/home')
.get(mainController.index, views.showOneState);









module.exports = parksRouter
