const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const tripController = require('../controllers/trip'); 
// 3.
router.post('/trip', tripController.uploadImg, tripController.newTrip); 
// 4. 
router.get('/trip', tripController.getAllTrip);
//5.
router.delete('/trip', tripController.deleteAllTrip);
//6.
router.get('/trip/:name', tripController.getOneTrip);

module.exports = router; // export to use in app.js
