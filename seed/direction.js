const db = require('../db')
const Direction = require('../models/directions')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const directions = [
    {
    instructions: 'sandwich assembly instructions',
    description: 'facts about the italian sub',
    timeRequired: 'little'
    },
    {
    instructions: 'bagel sandwich assembly instruction',
    description: 'facts about a bagel sandwich',
    timeRequired: 'little'
    },
    {
    instructions: 'ramen making instructions',
    description: 'facts about ramen',
    timeRequired: 'extreme'
    },
    {
    instructions: 'beef welling cooking instructions',
    description: 'facts about beef wellington',
    timeRequired: 'extreme'
    },
]
await Direction.insertMany(directions)
    console.log("Created some directions!")
}
const run = async () => {
    await main()
    db.close()
}

run()