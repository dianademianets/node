const { Schema, model } = require('mongoose');

const userScheme = new Schema({
    login: { type: String, required: true },
    password: { type: String },
    age: { type: Number },
    cars: [{ type: Schema.Types.Mixed }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userScheme.virtual('full_name').get(function() {
    return `${this.login} ${this.password}`;
});

userScheme.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id',
});

userScheme
    .pre('find', function() {
        console.log('PRE FIND HOOK');
        this.populate('userCars');
    })
    .pre('findOne', function() {
        console.log('PRE FIND ONE HOOK');

        this.populate('userCars');
    });

module.exports = model('User', userScheme);
