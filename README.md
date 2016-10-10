# ember-precondition [![Build Status](https://travis-ci.org/systembugtj/ember-precondition.svg?branch=v0.1.0)](https://travis-ci.org/systembugtj/ember-precondition)

A Precondition utility library, inspired by guava Precondition class.

## Usage

import Precondition from "ember-precondition/utils/precondition";

Precondition.checkString(variable)

Precondition.checkArray(variable)

Precondition.checkFunction(variable)

Precondition.checkNull(variable) // undefined is treated as null, return null instead of undefined.

Precondition.checkNotNull(variable)

Precondition.checkEmpty(variable)

Precondition.checkNotEmpty(variable)

if match the condition, the variable will be returned, otherwise exception is thrown.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
