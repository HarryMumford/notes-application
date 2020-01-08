describe('NoteController', () => {
  describe('.createNoteListView', () => {
    it('page content', () => {
      var noteController = new NoteController(new NoteList())
      noteController.createNoteListView()
      output = '<ul><li><div>hello my name is harry</div></li></ul>'
      expect(document.getElementById.innerHTML).toEq(output)
    })
  })
})
