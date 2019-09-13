const Express = require('express');
const path = require('path');

var app = new Express();

app.use(Express.static(__dirname+'/dist/vjas-angularpart'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/vjas-angularpart/index.html'));
});

app.listen(process.env.PORT || 5566,()=>{
    console.log("Server running on PORT:5566");
});