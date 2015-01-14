'use strict';

module.exports = {
    hostname: process.env['LVSF_HTTP_HOSTNAME'] || 'lvsf-app.hexxie.com',
    port: process.env['LVSF_HTTP_LISTENING_PORT'] || 1337
};
