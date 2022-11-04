<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Nest Commands

```bash
# Create Controller
$ npx nest generate resource

# Create Provider
$ nest g service service-name

# Create Module
$ nest g module module-name

# Create Service
$ npx nest generate service service-name

# Create Resource - With Path
$ npx nest generate module ./path/module-name

# Create Resource - With Path & Without Folder
$ npx nest generate module ./path/module-name --flat

```

## TypeORM CLI Commands

```bash
# Create new migration
$ typeorm migration:create ./path-to-migrations-dir/migration-name

# Run Migration
$ typeorm migration:run

# If you need to specify a timestamp for the migration name, use the -t (alias for --timestamp) and pass the timestamp (should be a non-negative number)
$ typeorm -t <specific-timestamp> migration:{create|generate}

# To synchronize a database schema use
$ typeorm schema:sync

# Drop Schema
$ typeorm schema:drop

# To check what sql queries schema:sync is going to run use
$ typeorm schema:log

# To show all migrations and whether they've been run or not use following command:
$ typeorm migration:show
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Common CURL Commands

```bash
# Login
$ curl -X POST http://localhost:3000/accounts/login -d '{"username": "sbarkaat", "password": "password123"}' -H "Content-Type: application/json"

# Get Users
$ curl http://localhost:3000/users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNiYXJrYWF0Iiwic3ViIjoxLCJpYXQiOjE2NjAxOTEyNjQsImV4cCI6MTY2MDIwNzI2NH0.9AcnXPlB7Buqfr1G2h-oz-1l3FOs1iPtKEUYcGLO0TY"

```
This Compose file contains the following environment variables:

POSTGRES_USER the default value is postgres
POSTGRES_PASSWORD the default value is changeme
PGADMIN_PORT the default value is 5050
PGADMIN_DEFAULT_EMAIL the default value is pgadmin4@pgadmin.org
PGADMIN_DEFAULT_PASSWORD the default value is admin
Access to postgres:
localhost:5432
Username: postgres (as a default)
Password: changeme (as a default)
Access to PgAdmin:
URL: http://localhost:5050
Username: pgadmin4@pgadmin.org (as a default)
Password: admin (as a default)
Add a new server in PgAdmin:
Host name/address postgres
Port 5432
Username as POSTGRES_USER, by default: postgres
Password as POSTGRES_PASSWORD, by default changeme
Logging
There are no easy way to configure pgadmin log verbosity and it can be overwhelming at times. It is possible to disable pgadmin logging on the container level.

Add the following to pgadmin service in the docker-compose.yml:

logging:
