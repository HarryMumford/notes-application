describe('SingleNoteView', () => {
  describe('.toHTML', () => {
    it('converts note text to html', () => {
      var note = new Note('Hello I note')
      var singleNoteView = new SingleNoteView(note)
      expect(singleNoteView.toHTML()).toEq('<div>Hello I note</div>')
    })
  })
})
