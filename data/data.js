const movies = [
    { category: "movies", question: "Who wrote the screenplay for 1983's Scarface?", answerOne: "Aaron Sorkin", answerTwo: "Oliver Stone",  answerThree: "Paul Schrader", answerFour: "Francis Ford Coppola", correctAnswer: 1},
    { category: "movies", question: "What’s the name of Meatloaf’s character in The Rocky Horror Picture Show?", answerOne: "Henry", answerTwo: "Eddie",  answerThree: "Chuck", answerFour: " Al", correctAnswer: 1},
    { category: "movies", question: "Where were The Lord of the Rings movies filmed?", answerOne: "Ireland", answerTwo: "Iceland",  answerThree: "New Zealand", answerFour: "Australia", correctAnswer: 2},
    { category: "movies", question: "Which actor was in the following movies: The Outsiders, Wayne’s World, and Tommy Boy", answerOne: "Tom Cruise", answerTwo: "Matt Dillon",  answerThree: "Rob Lowe", answerFour: "C. Thomas Howell", correctAnswer: 2},
    { category: "movies", question: "What was the top-grossing movie of 2014?", answerOne: "The Hunger Games: Mockingjay Part 1", answerTwo: "The Lego Movie",  answerThree: "Captain America: The Winter Soldier", answerFour: "Guardians of the Galaxy", correctAnswer: 3},
    { category: "movies", question: "Who directed the hit 2017 movie Get Out?", answerOne: "James Wan", answerTwo: "Jordan Peele",  answerThree: "Guillermo del Toro", answerFour: "Tim Story", correctAnswer: 1},
]

const music = [
    { category: "music", question: "What singer has had a Billboard No 1. hit in each of the last four decades?", answerOne: "Mariah Carey", answerTwo: "John Legend",  answerThree: "Kelly Clarkson", answerFour: "Beyonce", correctAnswer: 0},
    { category: "music", question: "Who founded Motown Records", answerOne: "Barrett Strong", answerTwo: "Smokey Robinson",  answerThree: "Berry Gordon", answerFour: "William 'Mickey' Stevenson", correctAnswer: 2},
    { category: "music", question: "What was Madonna's first top 10 hit?", answerOne: "Like a Prayer", answerTwo: "Like a Virgin",  answerThree: "Borderline", answerFour: "Holiday", correctAnswer: 3},
    { category: "music", question: "Who was the first woman ever inducted into the Rock and Roll Hall of Fame", answerOne: "Aretha Franlin", answerTwo: "Janis Joplin",  answerThree: "Grace Slick", answerFour: "Joni Mitchell", correctAnswer: 0},
    { category: "music", question: "Which Alanis Morissette song contains the phrase 'jagged little pill?", answerOne: "Ironic", answerTwo: "You Learn", answerThree: "Perfect", answerFour: "Wake Up", correctAnswer: 1},
    { category: "music", question: "Who was the first lead guitarist of Metallica?", answerOne: "James Hetfield", answerTwo: "Kirk Hammett", answerThree: "Paul SchraderRon McGovney", answerFour: "Dave Mustaine", correctAnswer: 3},
]

const travel = [
    { category: "travel", question: "What is the world’s number one destination for international tourists?", answerOne: "London", answerTwo: "Rome",  answerThree: "New York", answerFour: "Paris", correctAnswer: 3},
    { category: "travel", question: "Which two Australian cities are connected by the Ghan train?", answerOne: "Darwin and Adelaide", answerTwo: "Melbourne and Brisbane",  answerThree: "Broome and Alice Springs", answerFour: "Perth and Sydney", correctAnswer: 0},
    { category: "travel", question: "How many floors are in the Empire State Building?", answerOne: "82", answerTwo: "102",  answerThree: "122", answerFour: "142", correctAnswer: 1},
    { category: "travel", question: "In which capital city can you find the Petronas Twin Towers?", answerOne: "Johor Bahru", answerTwo: "Ipoh",  answerThree: "George Town Of Penang", answerFour: "Kuala Lumpur", correctAnswer: 3},
    { category: "travel", question: "Which basilica sits at the top of the Montmartre hill in Paris?", answerOne: "Notre Dame", answerTwo: "Sainte-Chapelle",  answerThree: "Eglise Saint-Sulpice", answerFour: "Sacré-Cœur", correctAnswer: 3},
    { category: "travel", question: "Where did the bungee jump originate?", answerOne: "Nepal", answerTwo: "New Zealand",  answerThree: "Switzerland", answerFour: "United States", correctAnswer: 1}
]

const art = [
    { category: "art", question: "Which of Picasso’s famous paintings was inspired by the bombings of civilians during the Spanish War?", answerOne: "The Weeping Woman", answerTwo: "Le Reve",  answerThree: "Guernica", answerFour: "La Vie", correctAnswer: 2},
    { category: "art", question: "Which French artist is most famous for his obsession with ballerinas?", answerOne: "Edgar Degas", answerTwo: "Claude Monet",  answerThree: "Pierre-Auguste Renoir", answerFour: "Edouard Manet", correctAnswer: 0},
    { category: "art", question: "The American Gothic is one of the most recognizable paintings in the world. Who painted it?", answerOne: "Norman Rockwell", answerTwo: "Grant Wood",  answerThree: "Jackson Pollock", answerFour: "Georgia O'Keeffe", correctAnswer: 1},
    { category: "art", question: "This famous painting by Leonardo Da Vinci was used for target practice by Napoleon’s soldiers.", answerOne: "Mona Lisa", answerTwo: "The Last Supper",  answerThree: "Vitruvian Man", answerFour: "Salvator Mundi", correctAnswer: 4},
    { category: "art", question: "The famous painting, 'Birth of Venus' by Botticelli, features a goddess floating in the ocean on what?", answerOne: "A rowboat", answerTwo: "A seashell",  answerThree: "A branch", answerFour: "A stack of lily pads", correctAnswer: 1},
    { category: "art", question: "Which is the only piece of artwork that Michelangelo had ever signed?", answerOne: "The Sistine Chapel", answerTwo: "Madonna of Bruges",  answerThree: "The Pieta", answerFour: "Bacchus", correctAnswer: 1},
]


  
export {
    movies,
    music,
    travel,
    art
  }