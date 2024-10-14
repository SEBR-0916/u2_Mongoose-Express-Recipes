const db = require('../db')
const cuisineType = require('../models/cuisineTypes')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisineTypes = [
    {
    name: 'Italian Sub',
    type: 'Lunch',
    origin: 'USA',
    description: 'a sub sandwich made with assorted deli meats',
    },
    {
    name: 'bagel sandwich',
    type: 'breakfast',
    origin: 'USA',
    description: 'a bagel sandwich made with assorted items',
    },
    {
    name: 'Ramen',
    type: 'Lunch',
    origin: 'Japan',
    description: 'a soup with noodles and different types of stuff in it',
    },
    {
    name: 'beef wellington',
    type: 'dinner',
    origin: 'England',
    description: 'a piece of beef cooked inside a puff pastry with proscuitto and mushrooms lining it',
    },
]
await cuisineType.insertMany(cuisineTypes)
    console.log("Created some cuisine types!")
}
const run = async () => {
    await main()
    db.close()
}

run()        