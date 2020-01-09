describe('NoteList', () => {
  describe('.createNote', () => {
    it('adds new note to a list', () => {
      var noteList = new NoteList()
      noteList.createNote('this is a note')
      expect(noteList.showNotes()[0]).isInstanceOf(Note)
    })

    it('note has an id upon creation', () => {
      var noteList = new NoteList()
      noteList.createNote('first')
      noteList.createNote('second')
      expect(noteList.listOfNotes[0].id).toEq(0)
      expect(noteList.listOfNotes[1].id).toEq(1)
    })
  })
})
