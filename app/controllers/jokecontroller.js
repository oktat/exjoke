const Joke = require('../models/joke')

const JokeController = {
    async index(req, res) {
        try {
            JokeController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const jokes = await Joke.findAll()
        res.status(200)
        res.json({
            success: true,
            data: jokes
        })
    },
    async store(req, res) {
        try {
            if(!req.body.text) {
                throw new Error('Error! The text field is missing!')
            }
            await JokeController.tryStore(req, res)
        } catch (error) {
            if(!req.body.text) {
                res.status(400)
            }else {
                res.status(500)
            }
            res.json({
                success: false,
                message: 'Error! The create is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        let category = req.body.category || 1
        const joke = {
            text: req.body.text,
            sender: req.body.sender,
            category: category
        }
        Joke.create(joke)
        .then( result => {
            res.status(201)
            res.json({
                succes: true,
                data: result
            })
        })        
    }
}

module.exports = JokeController
