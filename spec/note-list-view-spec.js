describe('NoteListView', () => {
  describe('.toHTML', () => {
    it('outputs Notes to html string', () => {
      var noteList = new NoteList()
      noteList.createNote('this is a note')
      noteList.createNote('this is a second note')
      var noteListView = new NoteListView(noteList)

      var firstNoteHTML = '<li><div><a href="#notes/0">this is a note</a></div></li>'
      var secondNoteHTML = '<li><div><a href="#notes/1">this is a second note</a></div></li>'
      var expectedOutput = '<ul>' + firstNoteHTML + secondNoteHTML + '</ul>'
      expect(noteListView.toHTML()).toEq(expectedOutput)
    })
  })
})
