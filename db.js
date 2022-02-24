const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/personal_finance');
    console.log("Mongo Conectado");
} catch (error) {
    console.log("Erro ao conectar no Mongo: ", error);
}


mongoose.connection.on('error', (err) => console.log("Deu merda!!!"))