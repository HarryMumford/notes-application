'use strict'

function NoteList () {
  this.listOfNotes = []
};

NoteList.prototype = (function () {
  function createNote (text) {
    var note = new Note(text)
    this.listOfNotes.push(note)
  }

  function showNotes () {
    return this.listOfNotes
  }

  return {
    createNote: createNote,
    showNotes: showNotes
  }
})()
