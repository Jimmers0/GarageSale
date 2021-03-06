const router = require('express').Router()
const conn = require('../../db/')
const axios = require('axios')
const shortid = require('shortid')
const sha512 = require('js-sha512')
const jwt = require('jsonwebtoken')
const config = require('config')



function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a.distance;
  const genreB = b.distance;

  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;
}

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

router.post('/inventory', (req, res, next) => {
  const sql = `SELECT * FROM items WHERE user_id = ?`

  conn.query(sql,[req.body.userID], (err, result, fields) => {
    console.log(req.body.userID)
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
    const sql = `INSERT INTO posts (from_time, to_time, date, active, user_id, zip, city, state, address, postID, lat, lng) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`
    conn.query(sql, [req.body.from_time, req.body.to_time, req.body.date, true, req.body.user_id, req.body.zip, req.body.city, req.body.state, req.body.address, id, lat, lng, req.body.id], (err, result, fields) => {
      req.body.images.forEach(item => {
        const imageSQL = 'INSERT into items (item_name, item_condition, price, picture, post_id, user_id) VALUES (?,?,?,?,?,?)'
        conn.query(imageSQL, [item.name, item.condition, item.price, item.url, id, req.body.user_id], (err, result, fields) => {
          
        })
      })
      res.json(req.body)
    })
  })
})
router.post('/savesale', (req, res, next) => {
  const sql = `INSERT INTO savedsales (post_id, user_id) VALUES (?,?)`
  conn.query(sql, [req.body.post_id, req.body.user_id], (err, results, fields) => {
    res.json(results)
  })
})

router.post('/watchitem', (req, res, next) => {
  const sql = `INSERT INTO watchlist (user_id, item_id) VALUES (?,?)`
  conn.query(sql, [req.body.user_id, req.body.item_id], (err, results, fields) => {
    res.json(results)
  })
})

router.get('/usersavedsales', (req, res, next) => {

  console.log(req.query.id)
  conn.query(`SELECT * FROM savedsales s 
  JOIN posts p 
  WHERE p.postID = s.post_id and s.user_id = "${req.query.id}"
  `,
  (err, result, fields) => {
    res.json(result)
  })
})

router.get('/getwatchlist', (req, res, next) => {

  console.log(req.query.id)
  conn.query(`SELECT * FROM watchlist s 
  JOIN items i 
  WHERE i.id = s.item_id and s.user_id = "${req.query.id}"
  `,
  (err, result, fields) => {
    res.json(result)
  })
})

router.get('/searchItem', (req, res, next) => {
  sql = `SELECT * from items WHERE name LIKE "%?%"`
  conn.query(`SELECT * from items WHERE item_name LIKE "%${req.query.item}%"`, (err, results, fields) => {
    console.log(err)
    res.json(results)
  })
})
router.get('/getMySale', (req, res, next) => {
  sql = `SELECT * FROM posts WHERE user_id = ?`
  conn.query(sql, [req.query.id], (err, results, fields) => {
      res.json(results)
  })
})
router.post('/ratePost', (req, res, next) => {
  const sql = `INSERT INTO ratings (user_id, post_id, rating) VALUES(?,?,?)`
  conn.query(sql, [req.body.user_id, req.body.post_id, req.body.rating], (err, results, fields) => {
    res.json({message: "Success"})
  })
})
router.post('/checkIfRated', (req, res, next) => {
  const sql = `SELECT * FROM ratings WHERE user_id = ? AND post_id = ?`
  console.log(req.body.user_id, req.body.post_id)
  conn.query(sql,[req.body.user_id, req.body.post_id], (err, results, fields) => {
    console.log(results)
    res.json(results)
  })
})
router.get('/markAsSold', (req, res, next) => {
  const sql = `UPDATE items SET sold = 1 WHERE id = ?`
  conn.query(sql, [req.query.id], (err, results, fields) => {
    console.log(err)
    console.log(results)
    res.json(results)
  })
})
router.get('/getProfile', (req, res, next) => {
  const sql = `SELECT users.*, posts.*
  FROM users
  JOIN posts
  ON posts.user_id = ? AND users.id = posts.user_id`
  conn.query(sql, [req.query.id], (err, results, fields) => {
    res.json(results)
  })
})
router.get('/removeWatchItem', (req, res, next) => {
  const sql = `DELETE FROM watchlist WHERE item_id = ?`
  conn.query(sql, [req.query.id], (err, results, fields) => {
    console.log(results)
    console.log(err)
    res.json(results)
  })
})

module.exports = router