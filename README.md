## dota-stats

This here is supposed to one day become a project that uses NestJS and OpenDota API to read all kinds of data from one's Dota games and then mangle that data into submission.

## Usage

npm run start:dev to run in dev mode, the magic happens at localhost:3000
start local mongoDB at ..\MongoDB\Server\4.4\bin\mongod.exe --dbpath="C:\projects\db\data"

## Routes

current routes are:
GET localhost:3000/stats/stats
GET localhost:3000/stats/:statID
POST localhost:3000/stats