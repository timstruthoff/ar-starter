'use strict';

import domready from 'domready';

import Manager from './core/Manager';

import * as AR from 'ar.js';

console.log("______________");
console.log(AR);
console.log("______________");

domready(() => {

    const manager = new Manager();

});