/*jshint evil: true */

var mathjs = require('mathjs');
var math = mathjs();

function help() {
  'use strict';

  // 2. using function math.parse
  //
  // Function `math.parse` parses expressions into a node tree. The syntax is
  // similar to function `math.eval`.
  // Function `parse` accepts a single expression or an array with
  // expressions as first argument. The function returns a node tree, which
  // then can be compiled against math, and then evaluated against an (optional
  // scope. This scope is a regular JavaScript Object. The scope will be used
  // to resolve symbols, and to write assigned variables or function.
  console.log('\n2. USING FUNCTION MATH.PARSE');

  // parse an expression
  console.log('\nparse an expression into a node tree');
  var node1 = math.parse('sqrt(3^2 + 4^2)');
  console.log(node1); // "ans = sqrt((3 ^ 2) + (4 ^ 2))"

  // compile the node
  var code1 = node1.compile(math);

  // evaluate the compiled code
  console.log(code1.eval()); // 5

  // provide a scope
  console.log('\nprovide a scope');
  var node2 = math.parse('x^a');
  var code2 = node2.compile(math);
  console.log(node2.toString()); // "ans = x ^ a"
  var scope = {
    x: 3,
    a: 2
  };
  console.log(code2.eval(scope)); // 9
}

module.exports = {
  math: math,
  help: help,
};
