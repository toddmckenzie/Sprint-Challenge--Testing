const router = require('express').Router();
const gM = require('./gameModel.js');

router.get('/', (req, res) => {
    gM.findAll()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})

router.post('/', (req, res) => {
    let { title, genre } = req.body;
    if (!title || !genre) {
        res.status(422).json({ message: 'please input appropriate data.'})
    }
    gM.add(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })

})
module.exports = router;