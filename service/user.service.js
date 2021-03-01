const User = require('../dataBase/models/User');

module.exports = {
    findAllUsers: async (query) => {
        const user = await User.find(query);
        return user;
    },

    findUserById: async (userId) => {
        const user = await User.findById(userId);
        return user;
    },

    createUser: async (userObject) => {
        await User.create(userObject);
    },

    deleteUser: async (userId) => {
        await User.findByIdAndDelete(userId);
    }
};
