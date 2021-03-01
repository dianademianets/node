const router = require('express').Router();

const carController = require('../controller/car.controller');
const carMiddleware = require('../middleware/car.middleware');

router.get('/', carController.getAllCars);

router.get('/:carId', carMiddleware.checkIsModelValid, carController.findCarByUserId);

router.post('/', carMiddleware.isCarValid, carController.createCar);

router.delete('/:carId', carMiddleware.checkIsModelValid, carController.deleteCar);
module.exports = router;
