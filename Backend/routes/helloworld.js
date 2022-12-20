const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/', (req, res) => {
    const body = req.body;
    const { name } = body; 

    res.send(`${name} is saying: Hello World`);
});

module.exports = router;