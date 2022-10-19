const  express = require('express')


const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Starting development server: http://127.0.0.1:${PORT}`)
})

