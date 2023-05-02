const express = require('express');
const app = express();
const routes = require('./routes/router');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error_handler')

app.use(express.json());

app.use('/api/v1/urls', routes);
app.use(notFound);
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    }catch(error){
        console.log(error)
    }
}

start()