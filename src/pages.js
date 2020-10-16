const orphanages = require('./database/fakedata.js')

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    orphanages(req, res) {
        return res.render('orphanages')
    },

    orphanage(req, res) {
        return res.render('orphanage', {orphanages})
    },

    createOrphanage(req, res) {
        return res.render('createOrphanage')
    }

}