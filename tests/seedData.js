const Character = require('../lib/models/Character');

const characters = [
  {
    '_id': '5d0915d1fec3ff91e271a5f7',
    'photo': 'https://vignette.wikia.nocookie.net/dragonage/images/c/c9/Cass5.png/revision/latest/scale-to-width-down/350?cb=20150407154623',
    'name': 'Cassandra Pentaghast',
    'quests': [
      'Guilty Pleasures',
      'Promise of Destruction',
      'The Ideal Romance',
      'Unfinished Business'
    ],
    'appearances': [
      'Dragon Age: Dawn of the Seeker',
      'Dragon Age II',
      'Dragon Age: Inquisition',
      'Heroes of Dragon Age'
    ]
  },
  {
    '_id': '5d0915d1fec3ff91e271a630',
    'photo': 'https://vignette.wikia.nocookie.net/dragonage/images/2/2a/Cullen_Profile_2a.png/revision/latest/scale-to-width-down/350?cb=20150405013511',
    'name': 'Cullen Rutherford',
    'quests': [
      'Perseverance',
      'Before the Dawn',
      'Happier Times'
    ],
    'appearances': [
      'Dragon Age: Origins',
      'The Darkspawn Chronicles',
      'Dragon Age II',
      'Heroes of Dragon Age',
      'Dragon Age: Inquisition'
    ]
  },
  {
    '_id': '5d0dbbf12e7afe17512028b3',
    'name': 'Cole',
    'photo': 'https://vignette.wikia.nocookie.net/dragonage/images/e/e5/Cole_Profile_Dimmed.jpg/revision/latest?cb=20150403230741',
    'quests': [
      'The Forgotten Boy',
      'Subjected to His Will'
    ],
    'appearances': [
      'Dragon Age: Asunder',
      'Dragon Age: Inquisiton',
      'Heroes of Dragon Age'
    ]
  },
  {
    '_id': '5d0915d1fec3ff91e271a5b8',
    'photo': 'https://vignette.wikia.nocookie.net/dragonage/images/8/8b/Josephine-DAIProfile2.png/revision/latest/scale-to-width-down/350?cb=20150404051723',
    'name': 'Josephine Montilyet',
    'quests': [
      'Of Somewhat Fallen Fortune',
      'Heraldry From a Herald',
      'An Unexpected Engagement'
    ],
    'appearances': [
      'Dragon Age: Inquisition',
      'Trespasser',
      'Heroes of Dragon Age'
    ]
  },
  {
    '_id': '5d0915d1fec3ff91e271a68d',
    'photo': 'https://vignette.wikia.nocookie.net/dragonage/images/5/59/Varric.jpg/revision/latest/scale-to-width-down/350?cb=20110217185229',
    'name': 'Varric Tethras',
    'quests': [
      'Questions and Answers',
      'An Update',
      'Family Matter',
      'Friendly Concern',
      'A Story Being Told',
      'Plans for the Future',
      'Varric\'s Apology',
      'The Tethras Signet Ring',
      'The Storm and what Came Before It',
      'A Small Problem',
      'Haunted',
      'Closure',
      'An Anniversary',
      'Literary Theft',
      'Seeing Red',
      'Well, Shit'
    ],
    'appearances': [
      'Dragon Age II',
      'Dragon Age: The Silent Grove',
      'Dragon Age: Those Who Speak',
      'Dragon Age: Until We Sleep',
      'Dragon Age: Inquisition',
      'Trespasser',
      'Dragon Age: Knight Errant',
      'Heroes of Dragon Age'
    ]
  }
];

const seedData = async() => {
  const characterSeed = await characters.map(character => {
    return Character.create(character);
  });
  return characterSeed;
};

module.exports = {
  seedData,
  characters
};
