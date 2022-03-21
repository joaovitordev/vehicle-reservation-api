import mongoose from 'mongoose';

const port = `27017`
const uri = `mongodb://localhost:${port}/joaobooking`;

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

mongoose.connect(uri, options);
