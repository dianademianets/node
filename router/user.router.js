const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.findAllUsers);

router.get('/:userId', userMiddleware.checkIsIdValid, userController.findUserById);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.delete('/:userId', userMiddleware.checkIsIdValid, userController.deleteUser);
module.exports = router;
