// 1 require express
const express = require("express");

// 2 instance of express
const app = express();

// midlleware body-parser
app.use(express.json())


// test route
app.get('/test', (req, res) => {
    res.send("Hello World")
})

// CRUD
let users = [
    {
        name: "Ghaith",
        email: "ghaith@gmail.com",
        id: 1
    },
    {
        name: "Aziz",
        email: "aziz@gmail.com",
        id: 2
    },
    {
        name: "Ons",
        email: "ons@gmail.com",
        id: 3
    }
]

// get all users
app.get('/users', (req, res) => {
    res.status(200).send({msg:"List of all users", users})
})

// add user
app.post('/users/add', (req, res) => {
    const newUser = req.body;
    users = [...users, newUser]
    res.status(200).send({msg: "user added", newUser})
})

// 3 create server
const PORT = 2525;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on port ${PORT} ...`)
})