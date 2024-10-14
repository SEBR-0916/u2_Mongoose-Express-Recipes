const db = require('../db')
const Recipe = require('../models/recipes')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {








const recipes = [
    {
    name: 'italian sub',
    description: 'italian sub description',
    difficulty: 'easy',
    ingredients: 'assorted ingredients for a italian sub'
    },
    {
    name: 'bagel sandwich',
    description: 'bagel sandwich description',
    difficulty: 'easy',
    ingredients: 'assorted ingredients for a bagel sandwich'
    },
    {
    name: 'ramen',
    description: 'ramen description',
    difficulty: 'hard',
    ingredients: 'assorted ingredients for a ramen'
    },
    {
    name: 'beef wellington',
    description: 'beef wellington description',
    difficulty: 'medium',
    ingredients: 'assorted ingredients for a beef wellington'
    },
]
await Recipe.insertMany(recipes)
    console.log("Created some recipes!")
}
const run = async () => {
    await main()
    db.close()
}

run()
