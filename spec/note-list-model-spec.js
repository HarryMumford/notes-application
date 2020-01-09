describe('NoteList', () => {
  describe('.createNote', () => {
    it('adds new note to a list', () => {
      var noteList = new NoteList()
      noteList.createNote('this is a note')
      expect(noteList.showNotes()[0]).isInstanceOf(Note)
    })
  })
})
