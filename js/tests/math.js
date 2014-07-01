/* jshint evil: true */
/* Math lib tests */

'use strict';

var vows = require('vows'),
    assert = require('assert'),
    mathLib = require('../lib/math.js');

vows.describe('Math parser').addBatch({
  'Parsing simple formula "a.x"': {
    topic: function () { return mathLib.math.parse('a * x').compile(mathLib.math); },
    'Using simple formula': {
      'we get 6': function (topic) {
        assert.equal(topic.eval({a: 3, x: 2}), 6);
      },
      'we get 216': function (topic) {
        assert.equal(topic.eval({a: 36, x: 6}), 216);
      },
      'we get -50': function (topic) {
        assert.equal(topic.eval({a: -2, x: 25}), -50);
      }
    }
  },
  'Parsing complex formula "a.x / ( ( p ^ x ) * 2 )"': {
    topic: function () { return mathLib.math.parse('a * x / ( ( p ^ x ) * 2 )').compile(mathLib.math); },
    'Using complex formula': {
      'we get 0.56': function (topic) {
        var roundedResult = Math.round(topic.eval({a: 5, p: 3, x: 2}) * 100) / 100;
        assert.equal(roundedResult, 0.56);
      },
      'we get 0.07': function (topic) {
        var roundedResult = Math.round(topic.eval({a: 10, p: 6, x: 3}) * 100) / 100;
        assert.equal(roundedResult, 0.07);
      }
    }
  }
}).export(module);
