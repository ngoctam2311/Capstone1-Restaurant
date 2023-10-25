const express = require('express');

const routeAPI = express.Router();

const BookingController = require("../../../controllers/booking/booking.controller");

//routerAPI
routeAPI.post('/create', BookingController.postCreateBooking);

module.exports = routeAPI;