'use strict'

function Note (text) {
  this.text = text
};

Note.prototype = (function () {
  function showText () {
    return this.text
  }

  return {
    showText: showText
  }
})()
