function SingleNoteView (note) {
  this.note = note
}

SingleNoteView.prototype = function () {
  function toHTML () {
    return `<div>${this.note.text}</div>`
  }

  return {
    toHTML: toHTML
  }
}()
