'use strict'

function NoteList () {
  this.listOfNotes = []
  this._id = 0
};

NoteList.prototype = (function () {
  function createNote (text) {
    var note = new Note(text, this._id)
    this._id++
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
