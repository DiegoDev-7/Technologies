const express = require('express')
const router = express.Router()

router.get('/kick', (req, res) => {
    const kick = req.query.name
    res.send(`${kick}`)
})

module.exports = router