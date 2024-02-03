const express = require('express')
const app = express()

//route
app.get('/', (req, res) => {
    res.send('Hello Node API')
})
app.listen(3000, ()=> {
    console.log('Node is running on port 3000')
})