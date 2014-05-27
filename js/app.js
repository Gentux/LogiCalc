define([
  'mathjs',
  'ractive'
],
function (mathjs, Ractive) {
  'use strict';

  function init() {
    var math = mathjs();
    var data = {
      numbers: [
        {
          uid: 0,
          value: 0,
          name: 'Variable',
          editable: false
        }
      ],
      stringRepresentation: ''
    };
    var ractive = new Ractive({
      el: '.logicalc-app',
      template: '#tmpl',
      data: data
    });
    ractive.on({
      editable: function (event) {
        event.context.editable = (event.context.editable === true) ? false : true;
        this.set(event.keypath, event.context);
      },
      parse: function (event) {
        var stringRepresentation = event.node.value;
        console.log(stringRepresentation);
        console.log(math.parse(stringRepresentation));
      }
    });
  }

  return {init: init};
});
