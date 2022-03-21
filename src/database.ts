import mongoose from 'mongoose';

const port = `27017`
const database = 'joaobooking'
const uri = `mongodb://localhost:${port}/${database}`;

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

mongoose.connect(uri, options);
