const  express = require('express')

const app = express()
const PORT = 5000

app.set('views', './src/views')
app.set('view engine', 'ejs')

require('./src/routes/home.routes')(app)
require('./src/routes/about.routes')(app)

app.listen(PORT, () => {
    console.log(`Starting development server: http://127.0.0.1:${PORT}`)
})

