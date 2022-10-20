const  express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// dawin kakak tengku darmis jam 2

const app = express()
const PORT = 5000

mongoose.connect('mongodb://localhost:27017/lear_blog_with_meen')

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended:false
}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

app.listen(PORT, () => {
    console.log(`Starting development server: http://127.0.0.1:${PORT}`)
})

