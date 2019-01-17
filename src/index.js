const express = require ('express');
const app = express();
const path = require ('path');
const morgan = require ('morgan');



//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
//middelwares
app.use(morgan('dev'));
//routes
app.use(require ('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));




app.listen(app.get('port'),()=>{
console.log('server on port '+app.get('port'));
});

