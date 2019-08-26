const router = require('express').Router()
const conn = require('../../db/')
const axios = require('axios')

let finalObj = []

router.get('/greeting', (req, res, next) => {
  res.json({
    "greeting": "Hello World!"
  })
})
router.get('/getPosts/:zip', (req, res, next) => {
  conn.query('SELECT * FROM posts', (err, result, fields) => {
    if (err) throw err
    result.forEach(element => {
      axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${req.params.zip}&destinations=${element.zip}&key=AIzaSyC8cLGX-N6A6ramMmRMgKK07-TR-rlh5sA`).then(resp => {
        element.distance = resp.data.rows[0].elements[0].distance.text
        element.duration = resp.data.rows[0].elements[0].duration.text
        finalObj.push(element)
      })
    })
    res.json(finalObj)
    finalObj = []
  })
})

module.exports = router