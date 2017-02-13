var express = require('express');
var app = express();
app.use(express.static('public'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function (req,res){
    // res.send('你访问的首页');
    res.sendFile(__dirname+'/'+"index.html");
});
//首页
app.get('/1', function (req,res){
    // res.send('你访问的首页');
    res.sendFile(__dirname+'/'+"data/1.json");
});
//居家页
app.get('/2', function (req,res){
    // res.send('你访问的首页');
    res.sendFile(__dirname+'/'+"data/2.json");
});
// 首页分页
app.get('/find1', function (req,res){
    res.sendFile(__dirname+'/'+"data/find1.json");
});
app.get('/find2', function (req,res){
    res.sendFile(__dirname+'/'+"data/find2.json");
});
app.get('/find3', function (req,res){
    res.sendFile(__dirname+'/'+"data/find3.json");
});
app.get('/find4', function (req,res){
    res.sendFile(__dirname+'/'+"data/find4.json");
});
app.get('/find5', function (req,res){
    res.sendFile(__dirname+'/'+"data/find5.json");
});
app.get('/find6', function (req,res){
    res.sendFile(__dirname+'/'+"data/find6.json");
});
app.get('/find7', function (req,res){
    res.sendFile(__dirname+'/'+"data/find7.json");
});
app.get('/find8', function (req,res){
    res.sendFile(__dirname+'/'+"data/find8.json");
});
app.get('/find9', function (req,res){
    res.sendFile(__dirname+'/'+"data/find9.json");
});



var server = app.listen(2046, function  () {
  // body...
  console.log(server.address().address, server.address().port, server.address().family);
})