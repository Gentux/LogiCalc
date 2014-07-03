/*jshint evil: true */

require("angular");
var mathLib = require("./lib/math.js");

var tableauAmortissement = {
  mensualite: mathLib.math.parse("K * ( r / ( 1 - (( 1 + r ) ^ (-n))))").compile(mathLib.math),
  interest: mathLib.math.parse("n * M - K").compile(mathLib.math),
  montant: mathLib.math.parse("M * ( ( 1 - (( 1 + r ) ^ (-n))) / r)").compile(mathLib.math)
};

window.AmortizationTableCtl = function ($scope) {
  "use strict";

  $scope.compute = function() {
    var mathScope = {
      K: $scope.principalAmount,
      n: $scope.periodicNumber,
      r: $scope.periodicInterestRate / ($scope.periodicNumber * 100)
    };

    $scope.periodicAmortizationPayment = mathLib.round(tableauAmortissement.mensualite.eval(mathScope), 2);
    mathScope.M = $scope.periodicAmortizationPayment;
    $scope.overallInterest = mathLib.round(tableauAmortissement.interest.eval(mathScope), 2);
    mathScope.I = $scope.overallInterest;

    $scope.entries = [];
    for (var i = 0; i < $scope.periodicNumber; i++) {
      var entry = {
        idx: i,
        date: "now",
      };
      entry.remainingCapital = mathLib.round(
        ($scope.principalAmount + $scope.overallInterest) - (i * $scope.periodicAmortizationPayment),
        2
      );
      entry.periodicAmortizationPaymentInterest = mathLib.round(
        $scope.overallInterest / $scope.periodicNumber,
        2
      );
      entry.periodicAmortizationPaymentCapital = mathLib.round(
        $scope.periodicAmortizationPayment - entry.periodicAmortizationPaymentInterest,
        2
      );
      $scope.entries.push(entry);
    }
  };

  $scope.reset = function() {
    $scope.principalAmount = 0;
    $scope.periodicAmortizationPayment = 0;
    $scope.periodicInterestRate = 0;
    $scope.periodicInterest = 0;
    $scope.periodicNumber = 0;
    $scope.overallInterest = 0;
    $scope.entries = [];
  };
};
