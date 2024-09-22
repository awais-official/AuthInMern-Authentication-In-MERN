const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://awaisamjad:5I5MqhkCvfenQMVW@cluster0.zmzyi.mongodb.net/signup', {});
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;