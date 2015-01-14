'use strict';

module.exports = {
    action: function testThingAction(req, res) {
        if (!req.params.testThingId) {
            throw swagger.errors.invalid('id');
        }
    
        res.send(JSON.stringify({
            id: req.params.testThingId,
            name: 'Some Name'
        }));
    }
};
