const cuisineType = require('../models/cuisineTypes');

//GetIndex
const getAllCuisineTypes = async (req, res) => {
    try {
        const cuisineTypes = await cuisineType.find()
        res.json(cuisineTypes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllCuisineTypesById = async (req, res) => {
    try {
        const { id } = req.params;
        const cuisineType = await cuisineType.findById(id)
        if (cuisineType) {
            return res.json(cuisineType);
        }
        return res.status(404).send('that cuisine is not available');
    } catch (error) {
        return res.status(500).send(error.message);
    }


}


module.exports ={
    getAllCuisineTypes,
    getAllCuisineTypesById
}