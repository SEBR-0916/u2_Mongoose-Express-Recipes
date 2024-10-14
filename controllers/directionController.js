const Direction = require('../models/directions');

//GetIndex
const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(directions)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllDirectionsById = async (req, res) => {
    try {
        const { id } = req.params;
        const direction = await Direction.findById(id)
        if (direction) {
            return res.json(direction);
        }
        return res.status(404).send('that cuisine is not available');
    } catch (error) {
        return res.status(500).send(error.message);
    }


}


module.exports ={
    getAllDirections,
    getAllDirectionsById
}