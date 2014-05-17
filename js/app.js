define([
  'ractive',
],
function (Ractive) {
  'use strict';

  function init() {
    var data = {
      numbers: [
        {
          uid: 0,
          value: 0,
          name: 'Variable',
          editable: false
        }
      ]
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
        console.log(this);
        console.log(event);
      }
    });
  }

  return {init: init};
});
