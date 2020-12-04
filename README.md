# Nuit de l'info 2020

## Features

* Application
  * Register
  * Sign in
  * Tests Cypress
* Project managment
  * CI/CD

## Project installation
To install the project :

### Code installation
```
$ git clone git@github.com:Timmy7314/NI2020.git
$ cd NI2020
$ cd watsurf
$ yarn
$ cd ../watsurfAPI
$ yarn
```

### Install database

```
$ sudo docker pull timmy73/nuit-info-2020:1.0.0
$ sudo mkdir -p /mongodata
$ sudo docker run -it -v mongodata:/data/db -p 27017:27017 --name mongodb -d timmy73/nuit-info-2020:1.0.0
```

### Run the project

Run the api :

```
$ yarn start
```

Run the app

```bash
$ yarn dev --port 8080
```

Run the tests with Cypress

```bash
$ yarn test:cy
```
