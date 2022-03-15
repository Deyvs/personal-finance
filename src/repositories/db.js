const mongoose = require('mongoose');

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const DB = process.env.DB_NAME;

const uri = `mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DB}`;

try {
    mongoose.connect(uri);
    console.log("Mongo Conectado");
    
} catch (error) {
    console.log("Erro ao conectar no Mongo: ", error);
}


mongoose.connection.on('error', (err) => console.log("Deu merda!!!"))