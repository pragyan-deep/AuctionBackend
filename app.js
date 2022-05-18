const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
var cookieParser = require('cookie-parser');
const limiter = require('./middlewares/rate-limiter');
const morgan = require('morgan')
const app = express();
require('dotenv').config();

const userConfigsRouter = require('./routes/user-config.routes')
const userRouter = require('./routes/user.routes')
const auctionRouter = require('./routes/auction.routes')
const productsRouter = require('./routes/products.routes')

app.use(cors())
app.use(helmet())
app.use(limiter)
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({ extended: false, limit: "500mb", }));
app.use(cookieParser());

app.use('/v1/user-configs', userConfigsRouter);
app.use('/v1/users', userRouter);
app.use('/v1/auctions', auctionRouter);
app.use('/v1/products', productsRouter);

const port = process.env.PORT;
app.listen(port, function () {
    console.log('Server listening on port', port, process.env.NODE_ENV);
});