const express = require('express');
const {addUser, 
       getUser,
       addBooking,
       getAllBookings,
       deleteBooking,
       signin
      } = require('../controllers/authcontroller');

const router = express.Router();

router.post('/signup', addUser);
router.get('/login/:id', getUser);
router.get('/signin/', signin);
router.post('/book/:id', addBooking);
router.get('/mybookings/:id', getAllBookings);
router.delete('/mybookings/:id/:bookingid', deleteBooking);

module.exports = {
    routes: router
}

