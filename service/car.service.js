const Car = require('../dataBase/models/Car');

module.exports = {
    getAllCars: async (query) => {
        const car = await Car.find(query);
        return car;
    },

    findCarByUserId: async (carUserId) => {
        const carId = await Car.findById(carUserId);
        return carId;
    },

    createCar: async (carObject) => {
        await Car.create(carObject);
    },

    deleteCar: async (carId) => {
        await Car.findByIdAndDelete(carId);
    }
};
