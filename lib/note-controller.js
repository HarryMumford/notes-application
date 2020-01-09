'use strict'

function NoteController (noteList) {
  noteList.createNote('hello my name is harry')
  this.noteListView = new NoteListView(noteList)
}
NoteController.prototype = (function () {
  function createNoteListView (element = document.getElementById('app')) {
    var noteHTML = this.noteListView.toHTML()
    element.innerHTML = noteHTML
  }
  return {
    createNoteListView: createNoteListView
  }
})()
