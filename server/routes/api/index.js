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
router.get('/getCords', (req, res, next) => {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.zip}&key=AIzaSyC8cLGX-N6A6ramMmRMgKK07-TR-rlh5sA`).then(resp => {
    const lat = resp.data.results[0].geometry.location.lat
    const lng = resp.data.results[0].geometry.location.lng
    res.json({
      lat: lat,
      lng: lng
    })
  })
})
router.get('/post', (req, res, next) => {
  // TODO: should this be postID or id??
  conn.query(`SELECT * FROM posts WHERE postID = "${req.query.id}"`, (err, result, fields) => {
    res.json(result)
  })
})
router.get('/items', (req, res, next) => {
  conn.query(`SELECT * FROM items where post_id = "${req.query.id}"`, (err, result, fields) => {
    res.json(result)
  })
})

router.get('/inventory', (req, res, next) => {
  const userID = req.body.userID;

  conn.query(`SELECT * FROM inventory WHERE user_id = "${userID}"`, (err, result, fields) => {
    res.json(result);
  })
})

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))
  const sql =  `SELECT * FROM users WHERE username = ? AND password = ? `
  conn.query(sql, [username, password], (err, results, fields) => {
    if (results.length > 0){
      const token = jwt.sign({username: username, id: results[0].id}, config.get('secret'))
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
 router.get('/checkValids', (req, res, next) => {
   if (req.header('Authorization').length > 1) {
  jwt.verify(req.header('Authorization').split(" ")[1], config.get("secret"), function(err, decoded) {
    if (err) {
      res.json({...err, validated: false})
    } else {
      console.log("Validated")
      res.json({...decoded, validated: true})
    }
  });
}
})
router.post('/createPost', (req, res, next) => {
  let responsee = []
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&key=AIzaSyC8cLGX-N6A6ramMmRMgKK07-TR-rlh5sA`).then(resp => {
    const lat = resp.data.results[0].geometry.location.lat
    const lng = resp.data.results[0].geometry.location.lng
    var id = shortid.generate()
    const sql = `INSERT INTO posts (name, date, active, user_id, zip, city, state, address, postID, lat, lng) VALUES (?,?,?,?,?,?,?,?,?,?,?)`
    conn.query(sql, [req.body.name, req.body.date, true, req.body.user_id, req.body.zip, req.body.city, req.body.state, req.body.address, id, lat, lng], (err, result, fields) => {
      req.body.images.forEach(item => {
        const imageSQL = 'INSERT into items (price, picture, post_id) VALUES (?,?,?)'
        conn.query(imageSQL, [item.price, item.url, id], (err, result, fields) => {
        })
      })
      res.json({id: id})
    })
  })
})


module.exports = router