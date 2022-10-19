module.exports = (app) => {
    const about = require('../controllers/about.controller')
    const router = require('express').Router()

    router.get('/about', about.aboutPage)

    app.use('/', router)
}