const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const dbConnect = require('../database/connection');
const User = require('../models/user');
const Rol = require('../models/rol');
const fileUpload = require('express-fileupload');
const Category= require('./category');
const Product = require('./product');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        
        this.paths = {
            auth: '/api/auth',
            user: '/api/user',
            rol: '/api/rol',
            upload: '/api/upload',
            category: '/api/category',
            product: '/api/product'
        }

        // Método para conectar con la base de datos
        this.dbConnection();

        // Metodo para configurar los middlewares
        this.middlewares();
        
        // Metodo para configurar las rutas
        this.routes();

    }

    // Método para conectar con la base de datos
    async dbConnection() {
        try {
            await dbConnect.authenticate();
            //  Evita que las tablas sean creadas si no existe la base de datos
            await Rol.sync({ force: false });
            await User.sync({ force: false });
            await Category.sync({ force: false });
            await Product.sync({ force: false });
            console.log('Base de datos conectada correctamente');
        } catch (error) {
            console.error('Error al conectar con la base de datos', error);
            console.log('Intenta conectar nuevamente');
        }
    }

    // Método para configurar los middlewares
    middlewares() {

        // Morgan
        this.app.use(logger('dev'));

        // Parametros
        this.app.use(express.json());

        // CORS
        this.app.use(cors());

        // Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true,
        }));
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/authRoute'));
        this.app.use(this.paths.user, require('../routes/userRoute'));
        this.app.use(this.paths.upload, require('../routes/uploadRoute'));
        this.app.use(this.paths.category, require('../routes/categoryRoute'));
        this.app.use(this.paths.product, require('../routes/productRoute'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
