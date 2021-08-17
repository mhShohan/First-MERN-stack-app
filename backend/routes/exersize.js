const router = require('express').Router();
const Exersize = require('../models/exersize.model');

//get all  exersizes
router.get('/', (req, res) => {
    Exersize.find()
        .then((exersizes) => res.status(200).json(exersizes))
        .catch((err) => res.status(400).json('ERROR: ' + err));
});

//get single exersize
router.get('/:id', (req, res) => {
    Exersize.findById(req.params.id)
        .then((exersize) => res.status(200).json(exersize))
        .catch((err) => res.status(400).json('ERROR: ' + err));
});

//delete  single exersize by ID
router.delete('/:id', (req, res) => {
    Exersize.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Exersize Deleted...'))
        .catch((err) => res.status(400).json('ERROR: ' + err));
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExersize = new Exersize({ username, description, duration, date });

    newExersize
        .save()
        .then(() => res.status(200).json('Exersize Added!'))
        .catch((err) => res.status(400).json(err));
});

//update exersize by id
router.post('/update/:id', (req, res) => {
    Exersize.findById(req.params.id)
        .then((exersize) => {
            exersize.username = req.body.username;
            exersize.description = req.body.description;
            exersize.duration = Number(req.body.duration);
            exersize.date = Date.parse(req.body.date);

            exersize
                .save()
                .then(() => res.status(200).json('Exersize Update!'))
                .catch((err) => res.status(400).json(err));
        })
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
