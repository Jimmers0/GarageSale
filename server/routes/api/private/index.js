const router = require('express').Router()
const path = require('path')

router.get("/jacob", (req, res, next) => {
  res.json({"jacob": "jacob"})
})

module.exports = router