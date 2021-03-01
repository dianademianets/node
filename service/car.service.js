const Car = require('../dataBase/models/Car');

module.exports = {
    getAllCars: async (query) => {
        const car = await Car.find(query);
        return car;
    },

    findCarByUserId: async (carUserId) => {
        const car = await Car.findById(carUserId);
        return car;
    },

    createCar: async (carObject) => {
        await Car.create(carObject);
    },

    deleteCar: async (carId) => {
        await Car.findByIdAndDelete(carId);
    }
};
