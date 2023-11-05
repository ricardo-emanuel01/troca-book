const { Book } = require('../database/models');

const listBooks = async (req, res) => {
    try {
        const listOfBooks = await Book.findAll();
        return res.json(listOfBooks);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = listBooks;