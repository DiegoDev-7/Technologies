const express = require('express')
const router = express.Router()

router.get('/greet', (req, res) => {
    const greet = req.query.name
    res.send(`${greet}`)
})

module.exports = router