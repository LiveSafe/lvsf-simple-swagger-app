'use strict';

var _ = require('ls-lodash'),
    q= require('q'),
    requireDir = require('ls-fs').requireDir;

function getResources() {
    var actionsPromise = requireDir('./actions'),
        specsPromise = requireDir('./specs');

    return q.all([
        actionsPromise,
        specsPromise
    ]).spread(function(actions, specs) {
        return _.safeMerge(actions, specs);
    });
}

module.exports = getResources;
