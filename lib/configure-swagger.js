'use strict';

var appVersion = require('../package.json').version,
    swagger = require('./get-swagger')(),
    appConfig = require('../config');

function configureSwagger(basePath) {
    swagger.configureSwaggerPaths('', '/api-docs', '');

    swagger.setHeaders = function setHeaders(res) {
        // TODO: set any needed headers
        // res.header('Content-Type', 'application/json; charset=utf-8');
    };

    // Always do this last!
    // TODO: Base hostname on environment
    swagger.configure('http://' + appConfig.hostname + basePath, appVersion);
}

module.exports = configureSwagger;
