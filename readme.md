# eslint-config-dustinspecker
[![NPM version](https://badge.fury.io/js/eslint-config-dustinspecker.svg)](https://badge.fury.io/js/eslint-config-dustinspecker)
[![Coverage Status](https://img.shields.io/coveralls/dustinspecker/eslint-config-dustinspecker.svg)](https://coveralls.io/r/dustinspecker/eslint-config-dustinspecker?branch=main)

[![Code Climate](https://codeclimate.com/github/dustinspecker/eslint-config-dustinspecker/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/eslint-config-dustinspecker)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> ESLint [shareable](http://eslint.org/docs/developer-guide/shareable-configs.html) config of Dustin Specker's preferences

## Install
```
npm install --save-dev eslint-config-dustinspecker
```

## ES5 Usage

Dependes on [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) and [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

In your .eslintrc file:
```javascript
{
  "extends": "dustinspecker"
}
```

## ES2015 (ES6) Usage

Dependes on [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) and [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

```javascript
{
  "extends": "dustinspecker/esnext"
}
```

## AVA usage

Depends on [eslint-plugin-ava](https://github.com/sindresorhus/eslint-plugin-ava)

```javascript
{
  "extends": "dustinspecker/ava"
}
```

## React usage

Dependes on [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

```javascript
{
  "extends": "dustinspecker/react"
}
```

All options from [ava.js](ava.js), [index.js](index.js), [esnext.js](esnext.js), and [react.js](react.js) may be overridden in your .eslintrc file.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
