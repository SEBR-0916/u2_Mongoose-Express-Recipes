const Recipe = require('../models/recipes');


const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllRecipesById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe);
        }
        return res.status(404).send('that recipe is not available');
    } catch (error) {
        return res.status(500).send(error.message);
    }


}
// const getRecipeByName= (req, res) => {
//     const recipeName = req.params[recipeName].toLowerCase(); 
//     const recipeItem = Recipe.find(r => r.name.toLowerCase() === recipeName); 
  
//     if (recipeItem) {
//       res.json(`Name: ${recipeItem.name}`); 
//     } else {
//       res.status('No recipes found with that Name');
//     }
//   };

//Post
  const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


// Update -> PUT
const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error("animal not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// Delete -> Delete
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe has been removed");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}






module.exports ={
    getAllRecipes,
    getAllRecipesById,
    // getRecipeByName,
    createRecipe,
    updateRecipe,
    deleteRecipe
}