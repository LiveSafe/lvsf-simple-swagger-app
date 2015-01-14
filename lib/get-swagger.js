'use strict';

var _ = require('ls-lodash');

function getSwagger() {
    return require('swagger-node-express');
}

module.exports = _.once(getSwagger);
