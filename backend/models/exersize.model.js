const mongoose = require('mongoose');

const exersizSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    {
        timestamps: true,
    }
);

const Exersize = mongoose.model('exersize', exersizSchema);

module.exports = Exersize;
