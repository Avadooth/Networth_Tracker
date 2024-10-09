// src/models/user.js
const { Sequelize } = require('sequelize');
const sequelize = require('../config/config'); 

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Sync function
const syncDatabase = async () => {
    await sequelize.sync(); // Sync all defined models to the DB
};

// Export User model and sync function
module.exports = {
    User,
    syncDatabase,
};
