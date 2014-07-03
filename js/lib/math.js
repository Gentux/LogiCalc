/*jshint evil: true */


"use strict";


var mathjs = require("mathjs");
var math = mathjs();


function round(value, decimalNumber) {
  var factor = Math.pow(10, decimalNumber);
  return Math.round(value * factor) / factor;
}


module.exports = {
  math: math,
  round: round
};
