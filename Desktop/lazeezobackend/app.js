var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var Booktables=require('./routes/booktables');
var Categories=require('./routes/categories');
var Menuitems=require('./routes/menuitems');
var Orders=require('./routes/orders');
var Restaurants=require('./routes/restaurants');
var Restowners=require('./routes/restowners');
var Reviews=require('./routes/reviews');
var Users=require('./routes/users');
var Favs=require('./routes/favs');
var Discounts=require('./routes/discounts');
var Reviewlikes=require('./routes/reviewlikes');
var Getbookjoins=require('./routes/getbookjoins');
var Getmenuitemjoins=require('./routes/getmenuitemjoins');
var Getorderjoins=require('./routes/getorderjoins');
var Getrestaurantjoins=require('./routes/getrestaurantjoins');
var Getfavjoins=require('./routes/getfavjoins');
var Getdiscountjoins=require('./routes/getdiscountjoins');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/booktables',Booktables);
app.use('/categories',Categories);
app.use('/menuitems',Menuitems);
app.use('/orders',Orders);
app.use('/restaurants',Restaurants);
app.use('/restowners',Restowners);
app.use('/reviews',Reviews);
app.use('/users',Users);
app.use('/favs',Favs);
app.use('/discounts',Discounts);
app.use('/reviewlikes',Reviewlikes);
app.use('/getbookjoins',Getbookjoins); 
app.use('/getmenuitemjoins',Getmenuitemjoins);
app.use('/getorderjoins',Getorderjoins);
app.use('/getrestaurantjoins',Getrestaurantjoins);
app.use('/getfavjoins',Getfavjoins);
app.use('/getdiscountjoins',Getdiscountjoins);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
