
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World")

})

app.get('/user', (req, res) => {
    res.send("You are getting a user data back!")

})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send("We created a user: " + req.body.name + " age: " + req.body.age)
})

app.delete('/user', (req, res) => {
    console.log(req.body)
    res.send("We deleted a user: " + req.body.name + " age: " + req.body.age)
})

app.put('/user', (req, res) => {
    console.log(req.body)
    res.send("We updated a user: " + req.body.name + " age: " + req.body.age)
})


const PORT = 3000

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})