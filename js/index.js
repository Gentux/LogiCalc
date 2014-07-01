/*jshint evil: true */

require('angular');
var mathLib = require('./lib/math.js');

var tableauAmortissement = {
  mensualite: mathLib.math.parse('K * ( r / ( 1 - (( 1 + r ) ^ (-n))))').compile(mathLib.math),
  interest: mathLib.math.parse('n * M - K').compile(mathLib.math),
  montant: mathLib.math.parse('M * ( ( 1 - (( 1 + r ) ^ (-n))) / r)').compile(mathLib.math)
};

//var compundInterestFormula = mathLib.math.parse('V * (1 + p/100)^a');
//var compundInterestCompiled = compundInterestFormula.compile(mathLib.math);
//console.log('Compound interest ======  ' + compundInterestCompiled.eval({
//  V: 4000,  // Initial value
//  p: 3,     // Interest rate
//  a: 20     // Number of year
//}));

window.AmortizationTableCtl = function ($scope) {
  'use strict';

  $scope.compute = function() {
    var mathScope = {
      K: $scope.principalAmount,
      n: $scope.periodicNumber,
      r: $scope.periodicInterestRate / ($scope.periodicNumber * 100)
    };

    $scope.periodicAmortizationPayment = Math.round(tableauAmortissement.mensualite.eval(mathScope) * 100) / 100;
    mathScope.M = $scope.periodicAmortizationPayment;
    $scope.overallInterest = Math.round(tableauAmortissement.interest.eval(mathScope) * 100) / 100;
    mathScope.I = $scope.overallInterest;

    //$scope.n = 24;
    //$scope.M = 200;
    //$scope.r = 1 / 100;
    //$scope.K = tableauAmortissement.montant.eval(scope);
  };

  $scope.reset = function() {
    $scope.principalAmount = 0;
    $scope.periodicAmortizationPayment = 0;
    $scope.periodicInterestRate = 0;
    $scope.periodicInterest = 0;
    $scope.periodicNumber = 0;
    $scope.overallInterest = 0;
  };
};
