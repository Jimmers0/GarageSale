const router = require('express').Router()
const conn = require('../../db/')
const axios = require('axios')
const shortid = require('shortid')
const sha512 = require('js-sha512')
const jwt = require('jsonwebtoken')
const config = require('config')

let finalObj = []
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
  conn.query(`SELECT * FROM posts WHERE postID = "${req.query.id}"`, (err, result, fields) => {
    res.json(result)
  })
})
router.get('/items', (req, res, next) => {
  conn.query(`SELECT * FROM items where post_id = "${req.query.id}"`, (err, result, fields) => {
    res.json(result)
  })
})

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))
  const sql =  `SELECT * FROM users WHERE username = ? AND password = ? `
  conn.query(sql, [username, password], (err, results, fields) => {
    if (results.length > 0){
      const token = jwt.sign({username}, config.get('secret'))
      res.json({
        message: "User signed in",
        token: token
      })
    } else {
      res.status(401).json({
        message: "username or password is incorrect"
      })
    }
  })
 })

 router.post('/register', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))
 const sql = `INSERT into users (username, password) VALUES (?, ?)`
 conn.query(sql, [username, password], (err, results, fields) => {
   if (err) {
    //  console.log(err)
     res.json({
       message: "User already exists"
     })
   } else {
     res.json({
       message: "User created"
     })
   }
 })
 })

module.exports = router