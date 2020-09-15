const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI
const dbName = 'users'


router.get('/', function(req, res) {
    const id = req.query.id
    console.log(id)
    MongoClient.connect(url, async function(err, client) {
        console.log('connected succesfully')
    
        const db = client.db(dbName)
        const data = await db.collection('user').findOne({userid: id})
        res.render('complete', {
            title: 'Minor web dev enquete',
            id: id,
            data: data
        })
    })
})

router.post('/', async function(req,res) {
    // send email containing the results
})

module.exports = router