const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    findAllUsers: async (req, res) => {
        try {
            const users = await userService.findAllUsers(req.query);

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    findUserById: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },
    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);
        } catch (e) {
            res.status(errorCodes.CREATED).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const deleteUser = await userService.deleteUser(userId);

            res.json(deleteUser);
        } catch (e) {
            res.status(errorCodes.NOT_FOUND).json(e.message);
        }
    }
};
