const { name, version } = require('../package.json');

module.exports = {
    app: {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'develop',
        name: name || 'PlanDeVida_backend',
        version: version || 'package.json not found'
    }
};