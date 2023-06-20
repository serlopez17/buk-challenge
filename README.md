# Buk Challenge

Buk Challenge is a challenge to test the technical skills on automation

## Features

- Functional Testing to verify differents parts of the site
- CI/CD Integration to execute on every push to main
- CI/CD Integration to execute the test every day at 12:00 Central Time
- Spec Reports

## Stack & Dependencies

Buk challenge repo uses a number of open source tools to work properly:

- [WebdriverIO] - WebdriverIO allows you to test in actual browser or mobile devices used by your users.
- [ChaiJs] - Assertion library
- [expect] - Assertion library
- [Github Actions] - Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.
- [nodeJs] -  JavaScript runtime built on Chrome's V8 JavaScript engine
- [CucumberJS] - Work faster and smarter than your competition by supporting a team-centric, cross-functional workflow.

## Installation

This project requires [Node.js](https://nodejs.org/) v10+ to run.

Install the devDependencies and run the tests.

```sh
cd buk-challenge
npm i
npm run wdio
```

## Env variables

Create a .env file in the root of the project and add the following env variables

| Env Variable | Value |
| ------ | ------ |
| USERNAME | A string that contains an existing user |
| PASSWORD | A string for the given user set |
