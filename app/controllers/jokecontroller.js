const Joke = require('../models/joke')

const JokeController = {
    async index(req, res) {
        try {
            const jokes = await Joke.findAll()
            res.status(200)
            res.json({
                success: true,
                data: jokes
            })
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    }
}

module.exports = JokeController
