const router = require('express').Router()
const conn = require('../../db/')
const axios = require('axios')
const shortid = require('shortid')

let finalObj = []

router.get('/greeting', (req, res, next) => {
  res.json({
    "greeting": "Hello World!"
  })
})
router.get('/getPosts/:zip', (req, res, next) => {
  conn.query('SELECT * FROM posts', (err, result, fields) => {
    if (err) throw err
    let processed = 0
    result.forEach(element => {
      axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${req.params.zip}&destinations=${element.zip}&key=AIzaSyC8cLGX-N6A6ramMmRMgKK07-TR-rlh5sA`).then(resp => {
        element.distance = resp.data.rows[0].elements[0].distance.text
        element.duration = resp.data.rows[0].elements[0].duration.text
        finalObj.push(element)
        processed++
        if (processed === result.length) {
          res.json(finalObj)
          finalObj = []
        }
      })
    })
  })
})
router.get('/post', (req, res, next) => {
  conn.query(`SELECT * FROM posts where id = ${req.query.id}`, (err, result, fields) => {
    res.json(result)
  })
})
router.get('/items', (req, res, next) => {
  conn.query(`SELECT * FROM items where post_id = ${req.query.id}`, (err, result, fields) => {
    res.json(result)
  })
})
router.post('/createPost', (req, res, next) => {
  var id = shortid.generate()
  const sql = `INSERT INTO posts (name, date, active, user_id, zip, city, state, address, postID) VALUES (?,?,?,?,?,?,?,?,?)`
  conn.query(sql, [req.body.name, req.body.date, true, req.body.user_id, req.body.zip, req.body.city, req.body.state, req.body.address, id], (err, result, fields) => {
    req.body.images.forEach(item => {
      const imageSQL = 'INSERT into items (price, picture, post_id) VALUES (?,?,?)'
      conn.query(imageSQL, [item.url, item.price, id], (err, result, fields) => {
        console.log(fields)
        console.log(err)
        console.log(result)
      })
    })
    res.json({id: id})
  })
})

module.exports = router