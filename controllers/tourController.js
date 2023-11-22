const express = require('express');
const Tour = require('./../models/tourModel');
const fs = require('fs');

exports.getalltours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.gettour = (req, res) => {
  //:id => is for variables id is the variable here
  console.log(req.params);
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'invaild',
  //   });
  // }
  // res.status(200).json({
  //   status: 'success',

  //   data: {
  //     tours,
  //   },
};

exports.updatetour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      ststus: 'fail',
      message: 'Invalid',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.createtour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: {
    //   tour: newtour,
    // },
  });
};

exports.deletetour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      ststus: 'fail',
      message: 'Invalid',
    });
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
};
