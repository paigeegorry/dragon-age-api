# Dragon Age API

**Authors**: [Paige Gorry](https://github.com/paigeegorry)

**[dragon-age-api.herokuapp.com](https://dragon-age-api.herokuapp.com/)**

## Overview
This is an open-source API that provides character information from the Dragon Age franchise. This information is publicly sourced; I do not claim to own.

## Technologies used
Node.js, [MongoDB](https://www.mongodb.com/what-is-mongodb), [Express](https://www.npmjs.com/package/express), [Jest](https://www.npmjs.com/package/jest), [SuperTest](https://www.npmjs.com/package/supertest), [nodemon](https://www.npmjs.com/package/nodemon), [dotenv](https://www.npmjs.com/package/dotenv), [Mongoose](https://www.npmjs.com/package/mongoose), [morgan](https://www.npmjs.com/package/morgan), [SuperAgent](https://www.npmjs.com/package/superagent), [node-html-parser](https://www.npmjs.com/package/node-html-parser)

## Routes
_All routes are GET routes_
* **GET /api/v1/characters** - get all characters (default 50 per page / 792 total characters)
* **GET /api/v1/characters/:id** - get character by id 
* **GET /api/v1/characters?page=${num}** - get all characters / pagination
* **GET /api/v1/characters?perPage=${num}** - change number of characters you get per page
* **GET /api/v1/characters?appearances=${value}** - get characters by appearance / which game/comic they appeared in
* **GET /api/v1/characters?quests=${value}** - get characters by quest
* **GET /api/v1/characters/random** - get a random character

## Getting Started
I welcome any and all contributions! Feel free to submit a Pull Request with your changes to make this a better API for everyone!

1. Clone and download [GitHub repo](https://github.com/paigeegorry/dragon-age-api)
1. Install dependencies:\
`npm i`

3. Run scripts:\
`npm run lint`\
`npm run pretest`\
`npm run start` (start node server)\
`npm run start:watch` (start nodemon server)\
`npm run seed` (seed database)\
`npm run drop` (drop MongoDB)\
`npm run db-load-all` (drop db and load seed data from scratch)

## License
Standard [MIT](/LICENSE.md)
