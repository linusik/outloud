/**
 * FanController
 *
 * @description :: Server-side logic for managing fans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function(req, res){
   'use strict';
    res.view('new.ejs');
  } 
};

