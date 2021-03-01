const carService = require('../service/car.service');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    getAllCars: (req, res) => {
        try {
            const cars = carService.getAllCars(req.query);

            res.json(cars);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    findCarByUserId: async (req, res) => {
        try {
            const { carId } = req.params;

            const car = await carService.findCarByUserId(carId);

            res.json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    createCar: async (req, res) => {
        try {
            await carService.createCar(req.body);
        } catch (e) {
            res.status(errorCodes.CREATED).json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { carId } = req.params;
            const deleteCar = await carService.deleteCar(carId);

            res.json(deleteCar);
        } catch (e) {
            res.status(errorCodes.NOT_FOUND).json(e.message);
        }
    }
};
