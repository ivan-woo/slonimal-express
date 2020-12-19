# Express Review
Practice creating an Express server aboard the Slonimal Express :turtle:

## Setup
1. Run `npm install`
1. Load `database/schema.sql` into MySQL (e.g., `mysql -u root -p < database/schema.sql`)
1. Update the user name and password in `database/index.js` to work with your MySQL installation
1. Seed the database with `node database/seed.js`
1. Confirm that you now have a database named `slonimal_db` with a table called `slonimals` populated by five of the world's slowest animals

## Steps
1. Create a working Express server in `server/index.js`
1. Write the routes in `server/routes.js`
1. Write the controller in `server/controller.js` to make use of the prewritten models in `/database`
1. Test that you can `GET` all animals and `POST` new ones; e.g., with [Postman](https://www.postman.com/)
1. **BONUS** Add a new route/controller/model so that a `GET` request to the endpoint `/super` will return all the animals with 'Super' in front of their names and their speeds multiplied by 100

**Tip**: Since the models already exist, it might be helpful to do Steps 1–3 in reverse order :shrug:

## Helpful Docs
* [Express](https://expressjs.com/en/4x/api.html)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [morgan](https://www.npmjs.com/package/morgan)
