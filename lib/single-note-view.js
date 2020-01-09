function SingleNoteView (note) {
  this.note = note
}

SingleNoteView.prototype = (function () {
  function toHTML () {
    var noteText = this.note.text
    if (noteText.length > 20) noteText = noteText.slice(0, 20) + '...'
    return `<div>${noteText}</div>`
  }
  
  return {
    toHTML: toHTML
  }
})()
