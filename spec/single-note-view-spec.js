// describe('SingleNoteView', () => {
//   describe('.toHTML', () => {
//     it('converts note text to html', () => {
//       var note = new Note('Hello I note')
//       var singleNoteView = new SingleNoteView(note)
//       expect(singleNoteView.toHTML()).toEq('<div>Hello I note</div>')
//     })
//   })
// })

describe('SingleNoteView', () => {
  describe('.toHTML', () => {
    it('converts note text to html', () => {
      var note = new Note('Hello I note')
      var singleNoteView = new SingleNoteView(note)
      expect(singleNoteView.toHTML()).toEq('<div>Hello I note</div>')
    })

    it('only displays the first 20 characters', () => {
      var note = new Note('Hello I very long note')
      var singleNoteView = new SingleNoteView(note)
      expect(singleNoteView.toHTML()).toEq('<div>Hello I very long no...</div>')
    })
  })
})
