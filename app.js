const  express = require('express')

const app = express()
const PORT = 5000

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended:false
}))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

app.listen(PORT, () => {
    console.log(`Starting development server: http://127.0.0.1:${PORT}`)
})

