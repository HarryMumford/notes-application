describe('NoteController', () => {
  describe('.createNoteListView', () => {
    it('page content', () => {
      var noteController = new NoteController(new NoteList())
      element = { innerHTML: 'something' }
      noteController.createNoteListView(element)
      output = '<ul><li><div><a href="#notes/0">hello my name is harry</a></div></li></ul>'
      expect(element.innerHTML).toEq(output)
    })
  })
})
