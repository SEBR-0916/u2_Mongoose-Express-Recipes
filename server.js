const express = require('express');
const db = require('./db');
const cuisineTypeController = require('./controllers/cuisineTypeController')
const recipeController = require('./controllers/recipeController')
const directionController = require('./controllers/directionController')
// require() imports and middleware here ^ ///////
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))




app.get('/', (req, res) => res.send('Foods for you'))

app.get('/cuisineTypes', cuisineTypeController.getAllCuisineTypes)
app.get('/cuisineTypes/:id', cuisineTypeController.getAllCuisineTypesById)
app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/:id', recipeController.getAllRecipesById)
// app.get('/recipes/:name', recipeController.getRecipeByName)
app.get('/directions', directionController.getAllDirections)
app.get('/directions/:id', directionController.getAllDirectionsById)
app.post('/recipes', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)