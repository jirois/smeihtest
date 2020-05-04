const express = require('express');
// const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const logger = require('morgan');

const app = express();

// env config variable
dotenv.config({ path: './.sample-enve' });

app.set('port', process.env.PORT || 7000);


// Body parser
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Cross site origin
app.use(cors());


app.listen(app.get('port'), ()=>{
  console.log(`Server started and listening at ${app.get('port')}`);
});