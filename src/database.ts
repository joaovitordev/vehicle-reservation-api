// import { createPool } from 'mysql2/promise';

// export async function connect() {

//     const connection = await createPool({
//         host: 'localhost',
//         user: 'root',
//         password: '191200',
//         database: 'posts_test',
//         connectionLimit: 10
//     });
    
//     return connection;

// }

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
