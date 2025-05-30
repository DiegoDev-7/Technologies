const express = require('express');
const app = express();

//1.
app.get("/", (req, res) => {
    res.status(500).json({
        error: "An error occurred"
    })
})

//2.
app.get("/", (req, res) => {
    if(!req.query.id) {
        res.status(400).send("Missing id parameter")
        return
    }
    res.send(`You passed in ${req.query.id}`)
})

//3.
app.get("/user/:id", (req, res) => {
    const userId = req.params.id
    const user = database.find(userId)

    if(!user) {
        res.status(404).json({
            error: "User not found"
        })
        return
    }
    res.json({
        message: `User ID: ${userId}`, user
    })
})


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/user/12")
})