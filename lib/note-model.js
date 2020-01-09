'use strict'

function Note (text, id) {
  this.text = text
  this.id = id
};

Note.prototype = (function () {
  function showText () {
    return this.text
  }

  return {
    showText: showText
  }
})()
