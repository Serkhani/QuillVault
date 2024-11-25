//seed the db so you have some data to start out with
const Book=require('./models/book')
const mongoose=require('mongoose')
const print=console.log
require("dotenv").config()
async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  main().then(()=>{
      print('connection sauce')
  }).
  catch(err => console.log(err));


Book.insertMany([
  {
    "name": "Dune",
    "price": 24,
    "author": "Frank Herbert",
    "genre": ["Sci-Fi", "Adventure", "Drama"],
    "stock": 55,
    "description": "In a distant future, young Paul Atreides must navigate the treacherous politics of a desert planet and unlock his destiny, amidst massive ecological and political upheaval."
  },
  {
    "name": "Pride and Prejudice",
    "price": 16,
    "author": "Jane Austen",
    "genre": ["Romance", "Drama"],
    "stock": 60,
    "description": "A sharp critique of social class and romantic ideals, this novel follows Elizabeth Bennet as she grapples with her growing feelings for the enigmatic Mr. Darcy."
  },
  {
    "name": "1984",
    "price": 18,
    "author": "George Orwell",
    "genre": ["Dystopian", "Sci-Fi", "Thriller"],
    "stock": 70,
    "description": "In a totalitarian future, Winston Smith dares to defy the oppressive government of Oceania, risking his life to find truth and freedom in a society controlled by surveillance and propaganda."
  },
  {
    "name": "The Catcher in the Rye",
    "price": 14,
    "author": "J.D. Salinger",
    "genre": ["Drama", "Literary Fiction"],
    "stock": 50,
    "description": "Holden Caulfield, a disillusioned teenage rebel, tells the story of his life after being expelled from a prep school, offering a glimpse into his complex thoughts on the adult world."
  },
  {
    "name": "The Alchemist",
    "price": 17,
    "author": "Paulo Coelho",
    "genre": ["Fantasy", "Adventure", "Philosophy"],
    "stock": 45,
    "description": "Santiago, a young shepherd, sets off on a quest to find treasure, encountering life-changing lessons and the wisdom of the universe along the way."
  },
  {
    "name": "The Girl with the Dragon Tattoo",
    "price": 22,
    "author": "Stieg Larsson",
    "genre": ["Thriller", "Mystery", "Crime"],
    "stock": 55,
    "description": "Journalist Mikael Blomkvist and hacker Lisbeth Salander join forces to investigate a decades-old disappearance, uncovering a dark conspiracy with deadly consequences."
  },
  {
    "name": "The Road",
    "price": 18,
    "author": "Cormac McCarthy",
    "genre": ["Post-Apocalyptic", "Drama", "Adventure"],
    "stock": 40,
    "description": "A father and son journey through a desolate, post-apocalyptic world, struggling to survive amidst the harsh conditions and the collapse of civilization."
  },
  {
    "name": "The Picture of Dorian Gray",
    "price": 16,
    "author": "Oscar Wilde",
    "genre": ["Gothic", "Drama", "Philosophy"],
    "stock": 50,
    "description": "Dorian Gray, a handsome young man, makes a pact to preserve his beauty forever, while a portrait of him ages and reflects the consequences of his hedonistic life."
  },
  {
    "name": "Brave New World",
    "price": 19,
    "author": "Aldous Huxley",
    "genre": ["Dystopian", "Sci-Fi", "Philosophy"],
    "stock": 60,
    "description": "In a world where happiness is engineered through technology and social conditioning, a group of rebels question the price of a perfectly controlled society."
  },
  {
    "name": "The Night Circus",
    "price": 20,
    "author": "Erin Morgenstern",
    "genre": ["Fantasy", "Romance", "Mystery"],
    "stock": 50,
    "description": "A magical competition between two young illusionists unfolds in a mysterious, traveling circus, where love and rivalry intertwine in enchanting and unexpected ways."
  },
],
)