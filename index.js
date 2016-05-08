var express = require('express');
var app = express();





app.use(express.static("public"));

app.get("/",function(solicitud,respuesta) {
  respuesta.render("index");
});


var server = app.listen(3000,function(){
  console.log("Servidor corriendo el puerto 3000");
});
