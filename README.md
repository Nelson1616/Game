# how to run

simple run the docker containers with: 

```
docker-compose up -d
```

run sequelize migrations

```
npx sequelize db:migrate
```

run sequelize seeds

```
npx sequelize-cli db:seed:all
```