/* 

    express.Router()

    router.param()

    router.route()

*/

const express = require('express')
const app = express()
const router = express.Router()
const greetRoutes = require('./6routesExports')
const kickRoutes = require('./6routesKick')

app.use("/user", greetRoutes)
app.use(kickRoutes)

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/user/greet')
    console.log('Server is running on port http://localhost:3000/kick')
})

/* --------------Multiple Middlewares-------------- */
router.use("/team", (req, res, next) => {
    console.log('First Middleware for /team')
    res.send('First Middleware for /team!')
    next()
})
router.use("/team", (req, res, next) => {
    console.log('Second Middleware for /team')
    next()
})
router.use("/team", (req, res, next) => {
    console.log(`[${new Date().toISOString()}] Solicitud a /team: ${req.method} ${req.url}`);
});

app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/team')
})



/* --------------Params-------------- */

//param
router.param('name', (req, res, next, name) => { // Middleware para el parámetro 'name', este se captura y puede ser utilizado en la ruta
    console.log(`ID param: ${name}`)
    next()
})


router.param('name', function (req, res, next, name) {
    req.item = {
        name: name,
        description: `This is the description for ${name}`
    }
    next()
})
router.get('/item/:name', function (req, res, next) {
    res.json(req.item)
})


//route
//1.
router.route('/user').get((req, res) => {
    res.send('GET request to the homepage')
}).post((req, res) => {
    res.send('POST request to the homepage')
}).put((req, res) => {
    res.send('PUT request to the homepage')
})

//2.
router.route('/Pray').all((req, res) => {
    console.log("Im always executed!")
    next()
}).get((req, res) => {
    res.send('Hi!')
})

//3.
const loading = (req, res, next) => {
    console.log("Loading...")
    next()
}
const validateID = (req, res, next) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).send("ID is required")
    }
    next()
}
router.route("/item/:id").all([loading, validateID]).get((req, res) => {
    console.log("Hi!")
})

//4.
const logging = (req, res, next) => {
    console.log("Logging...")
    next()
}
router.route("item/:id").get(logging, (req, res) => {
    console.log("Hi!")
})

//5.
router.use("/clothing", (req, res, next) => {
    console.log("Router use for /clouthing")
    next()
})
