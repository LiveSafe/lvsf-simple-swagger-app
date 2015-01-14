'use strict';

var swagger = require('../../lib/get-swagger')(),
    paramTypes = swagger.paramTypes;

module.exports = {
    spec: {
        description: 'Add things',
        path: '/test-thing',
        notes: 'adds a thing',
        summary: 'add thing',
        method: 'POST',
        parameters: [
            paramTypes.body('body', 'Thing to add', 'Thing')
        ],
        nickname: 'addTestThing'
    }
};
