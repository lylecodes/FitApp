const express = require('express');

const users = require('../models/UserModel');


exports.getUsers = (req,res) => {
    users.find() 
      .then(results => {
          console.log("results", results)
      })
      .catch(err => console.error(err));
  }

  exports.getAUser = (req, res) => {
      users.findById({
          _id: req.params.id
      }).then(result => {
          console.log('result', result)
      })
      .catch(err => console.error(err));
  }
