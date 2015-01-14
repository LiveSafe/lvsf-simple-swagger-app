'use strict';

var swagger = require('../../lib/get-swagger')();

module.exports = {
    spec: {
        description: 'Operations about things',
        path: '/test-thing/{testThingId}',
        notes: 'returns a thing based on id',
        summary: 'find thing by ID',
        method: 'GET',
        parameters: [
            swagger.pathParam('testThingId', 'ID of thing to fetch', 'string')
        ],
        type: 'Thing',
        errorResponses: [
            swagger.errors.invalid('id'),
            swagger.errors.notFound('thing')
        ],
        nickname: 'getTestThingById'
    }
};
