app.post('/new_note', (req, res) => {
    notes.push({
      content: req.body.note,
      date: new Date(),
    })
  
    return res.redirect('/notes')
  })