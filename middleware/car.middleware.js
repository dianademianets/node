const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {

    checkIsModelValid: (req, res, next) => {
        try {
            const {model, preferLanguage = 'en'} = req.body;
            if (model !== 'string') {
                throw new Error(errorMessages.REPEAT_email[preferLanguage]);
            }
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isCarValid: (req, res, next) => {
        try {
            const {model, price, preferLanguage = 'en'} = req.body;

            if (!model || !price) {
                throw new Error('Some filed is empty');
            }

            if (price.length < 1) {
                throw new Error(errorMessages.TOO_WEAK_Password[preferLanguage]);
            }
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
