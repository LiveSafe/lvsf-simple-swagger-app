'use strict';

var swagger = require('../../lib/get-swagger')();

module.exports = {
    spec: {
        description: 'Health check for Elastic Load Balancer',
        path: '/elb-health-check',
        notes: 'Responds with 200 status to indicate app is alive',
        summary: 'ELB Health Check',
        method: 'GET',
        parameters: [],
        type: 'string',
        errorResponses: [],
        nickname: 'elbHealthCheck'
    }
};
