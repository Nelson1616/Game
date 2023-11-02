# how to run

simple run the docker containers with: 

```
docker-compose up -d
```

the sass may be compiled with an error in windows machine using docker, with your application get this error when starting, try deleting the node_modules/node-sass folder and running "npm install" again

#run sequelize migrations

```
npx sequelize db:migrate
```

#run sequelize seeds

```
npx sequelize-cli db:seed:all
```