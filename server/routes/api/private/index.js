const router = require('express').Router()
const path = require('path')

router.get("/jacob", (req, res, next) => {
  res.json({"jacob": "jacob"})
})
router.get('/checkValids', (req, res, next) => {
    res.json({redirect: true})
})

module.exports = router