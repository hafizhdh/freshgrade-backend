# fruitarian-backend
## Before We Started
```
cp .env.dev.example .env
```
> Changes .env value based on your configuration
## Install Dependencies
```
yarn install
```
or
```
npm intall
```
## Install local database in docker container
```
docker-compose up -d
```
## Push New Schema in Database
```
npx prisma db push
```
or
```
yarn prisma db push
```
## Run Application in Development Mode
```
npm run dev
```
or
```
yarn dev
```
