import mongoose from 'mongoose';

import app from './app.js'

const DB_URI = 'mongodb://127.0.0.1:47336/mindsdb'

mongoose.connect(DB_URI).then(con => {
	// console.log(con.connection);
	console.log("Connection established with the database!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started!");
})