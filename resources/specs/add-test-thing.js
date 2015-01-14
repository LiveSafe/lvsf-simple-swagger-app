'use strict';

var swagger = require('../../lib/get-swagger')();

module.exports = {
    spec: {
        description: 'Add things',
        path: '/test-thing',
        notes: 'adds a thing',
        summary: 'add thing',
        method: 'POST',
        parameters: [
            swagger.bodyParam('body', 'Thing to add', 'Thing')
        ],
        nickname: 'addTestThing'
    }
};
