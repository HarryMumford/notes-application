describe('NoteListView', () => {
  describe('.toHTML', () => {
    it('outputs Notes to html string', () => {
      var noteList = new NoteList()
      noteList.createNote('this is a note')
      noteList.createNote('this is a second note')
      var noteListView = new NoteListView(noteList)

      var expectedOutput = '<ul><li><div>this is a note</div></li><li><div>this is a second note</div></li></ul>'
      expect(noteListView.toHTML()).toEq(expectedOutput)
    })
  })
})
