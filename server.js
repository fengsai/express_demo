
const express= require("express");
const multer=require("multer");
const mysql=require('mysql');
const consolidate=require('consolidate');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const path = require("path");
const config=require('./config');
const dbs=require("./libs/dbs")
const server=express();

server.listen(config.server_port);

const db=mysql.createPool({
    host:config.mysql_hostname,
    user:config.mysql_user,
    password:config.mysql_password,
    port:config.mysql_port,
    database:config.mysql_dbname
});

let multerObj=multer({
    dest:'./upload'
});
server.use(dbs(db))
server.use(bodyParser.urlencoded({extended:false}));

server.use(multerObj.any());

server.use(cookieParser(require('./cookieScert')));

server.use(cookieSession({
    keys:require('./seesionScert')
}))

server.use(express.static('./www/'));

server.engine('html',consolidate.ejs);

server.set('view engine','ejs');

server.set('views',path.resolve(__dirname,'./views'));

server.use('/admin',require('./routers/admin'));

server.use('/',require('./routers/www'));




