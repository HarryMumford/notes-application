describe('NoteController', () => {
  describe('.createNoteListView', () => {
    it('page content', () => {
      var noteController = new NoteController(new NoteList())
      element = { innerHTML: 'something' }
      noteController.createNoteListView(element)
      output = '<ul><li><div>hello my name is harry</div></li></ul>'
      expect(element.innerHTML).toEq(output)
    })
  })
})
