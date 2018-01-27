[![Build Status](https://travis-ci.org/linuxexp/firebase-functions-tdd.svg?branch=master)](https://travis-ci.org/linuxexp/firebase-functions-tdd)

Start developing full fledged serverless functions using `firebase's functions` along with CICD, unit testing.

`index.js` exports the functions definition

`tests/spec.js` defines the sample unit test

## In the box
* firebase-functions
* firebase-admin
* Mocha
* Chai
* Chai As Promise
* Sinon

## Local development

`firebase-cli` can be used to locally run functions. They will however have side-effects.

The defined unit tests run on mocked objects. They don't have any side-effects.

### Using firebase-cli

```bash
firebase --project angular-firebase-tdd experimental:functions:shell < local.js 
```

## Unit Testing

`npm test`

## Usage

You can obviously use it as a standalone, isolated project or can integrate it with existing or new project i.e submodule

For example see my `angular-firebase-tdd` repo