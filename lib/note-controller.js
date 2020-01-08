'use strict'

// var element = document.getElementById('app')
// console.log(element)

// document.addEventListener('click', (event) => {
//   element.innerHTML = 'Howdy, Harry!'
// })

function NoteController (noteList) {
  noteList.createNote('hello my name is harry')
  this.noteListView = new NoteListView(noteList)
}
NoteController.prototype = (function () {
  function createNoteListView (element = document.getElementById('app')) {
    // console.log(noteListView)
    var noteHTML = this.noteListView.toHTML()
    element.innerHTML = noteHTML
  }
  return {
    createNoteListView: createNoteListView
  }
})()

