'use strict';

var q = require('q'),
    _ = require('ls-lodash'),
    express = require('express'),
    path = require('path'),
    requireDir = require('ls-fs').requireDir,

    bodyParser = require('body-parser'),
    serveStatic = require('serve-static'),

    app = express(),
    subpath = express(),
    swagger = require('./lib/get-swagger')(subpath),

    configureSwagger = require('./lib/configure-swagger'),
    httpErrorHandler = require('./lib/http-error-handler'),

    validatorsPromise = requireDir('./validators'),
    modelsPromise = requireDir('./models'),
    resourcesPromise = require('./resources/get-resources')(),

    appConfig = require('./config'),
    basePath = '/api/v2';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(httpErrorHandler);
app.use(basePath, subpath);

app.use(
    basePath + '/swagger-ui',
    serveStatic('node_modules/swagger-node-express/swagger-ui')
);

q.all([
    validatorsPromise,
    modelsPromise,
    resourcesPromise
]).spread(function(validators, models, resources) {

    // Validators
    _.forEach(validators, _.seal(swagger.addValidator, 1, swagger));
    
    // Models
    swagger.addModels({models: models});

    // Resources
    _.forEach(resources, function(resource) {
        swagger.addHandlers(resource.spec.method, [resource]);
    });

    configureSwagger(basePath);
    app.listen(appConfig.port);
}).fail(function(err) {
    console.error(err);
    console.error(err.stack);
});
