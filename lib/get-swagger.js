'use strict';

var _ = require('ls-lodash');

function getSwagger(expressApp) {
    if (_.isUndefined(expressApp)) {
        throw new Error('swagger must be initialized with an express app, got: ' + typeof expressApp);
    }

    return require('swagger-node-express').createNew(expressApp);
}

module.exports = _.once(getSwagger);
