const express = require('express');

const fs = require('fs');

const tourController = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/')
  .get(tourController.getalltours)
  .post(tourController.createtour);

// app.get('/api/v1/tours/:id', gettour);
// app.patch('/api/v1/tours/:id', updatetour);
// app.delete('/api/v1/tours/:id', deletetour);

//equivalent routes

router
  .route('/:id')
  .get(tourController.gettour)
  .patch(tourController.updatetour)
  .delete(tourController.deletetour);

module.exports = router;
