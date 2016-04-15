# eslint-config-dustinspecker
[![NPM version](https://badge.fury.io/js/eslint-config-dustinspecker.svg)](https://badge.fury.io/js/eslint-config-dustinspecker)
[![Build Status](https://travis-ci.org/dustinspecker/eslint-config-dustinspecker.svg)](https://travis-ci.org/dustinspecker/eslint-config-dustinspecker)
[![Coverage Status](https://img.shields.io/coveralls/dustinspecker/eslint-config-dustinspecker.svg)](https://coveralls.io/r/dustinspecker/eslint-config-dustinspecker?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/eslint-config-dustinspecker/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/eslint-config-dustinspecker)
[![Dependencies](https://david-dm.org/dustinspecker/eslint-config-dustinspecker.svg)](https://david-dm.org/dustinspecker/eslint-config-dustinspecker/#info=dependencies&view=table)
[![DevDependencies](https://david-dm.org/dustinspecker/eslint-config-dustinspecker/dev-status.svg)](https://david-dm.org/dustinspecker/eslint-config-dustinspecker/#info=devDependencies&view=table)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> ESLint [shareable](http://eslint.org/docs/developer-guide/shareable-configs.html) config of Dustin Specker's preferences

## Install
```
npm install --save-dev eslint-config-dustinspecker
```

## ES5 Usage
In your .eslintrc file:
```javascript
{
  "extends": "dustinspecker"
}
```

## ES2015 (ES6) Usage

```javascript
{
  "extends": "dustinspecker/esnext"
}
```

## JSX usage

Depends on [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

```javascript
{
  "extends": "dustinspecker/jsx",
  "plugins": [
    "react"
  ]
}
```

All options from [index.js](index.js), [esnext.js](esnext.js), [jsx.js](jsx.js) may be overridden in your .eslintrc file.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
