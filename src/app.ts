import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './database';

import vehicleRoutes from './routes/vehicle.routes';
import userRoutes from './routes/user.routes';
import booking from './routes/booking.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    
    settings() {
        this.app.set('port', 3000);
    }
    
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    routes() {
        this.app.use('/user', userRoutes)
        this.app.use('/vehicles', vehicleRoutes);
        this.app.use('/booking', booking)
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}