'use strict'

function NoteListView (noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function () {
  function toHTML () {
    var HTMLString = ''
    var arr = this.noteList.showNotes()
    arr.forEach(function (note) {
      HTMLString += `<li><div><a href="#notes/${note.id}">${note.text}</a></div></li>`
    })
    return `<ul>` + HTMLString + '</ul>'
  }

  return {
    toHTML: toHTML
  }
})()
