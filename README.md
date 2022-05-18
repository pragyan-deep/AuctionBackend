# AuctionBackend
NodeJS Backend

## Install packages
"npm install"

## To start server use script
"npm start"

## for dev-mode
"nodemon start"

## DB Migrations
npx sequelize-cli migration:generate --name [migration name]

npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo

npx sequelize-cli seed:generate --name [seeder name]

npx sequelize-cli db:seed:all

npx sequelize-cli db:seed:undo