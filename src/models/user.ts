import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Userchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    accessToken: {
        type: String
    }
});

export default mongoose.model('User', Userchema);