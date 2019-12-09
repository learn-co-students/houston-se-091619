const express = require('express')
const bodyParser = require('body-parser')
const Painting = require("./models/Painting")
const pry = require('pryjs')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// Painting.hasOne(Artist)
// Artist.hasMany(Painting)

const port = 8000
app.listen(port, () => console.log("I am listening at"+port))

app.get("/home", (req, res) => {
    res.json("Hi!!!")
})

app.get("/paintings", (req, res) => {
    Painting.findAll()
    .then(paintings => res.json(paintings))
})

app.get("/paintings/:id", async (req,res) => {
    // eval(pry.it)
    painting = await Painting.findByPk(req.params.id)
    res.json(painting)
})

app.post("/paintings", async (req,res) => {
    // eval(pry.it)
    painting = await Painting.create(req.body)
    res.json(painting)
})

app.patch("/paintings/:id", async (req,res) => {
    painting = await Painting.findByPk(req.params.id)
    await painting.update(req.body)
    res.json(painting)
})

app.delete("/paintings/:id",async (req,res) => {
    painting = await Painting.findByPk(req.params.id)
    painting.destroy()
 } )