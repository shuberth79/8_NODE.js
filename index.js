/*
console.log("Hello World");

let nombre = "Shuberth"
let apellido = "Cordero"
console.log("Mi nombre es " +nombre+" "+apellido);

let dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
];

let colors = require ("colors");
console.log("Hoy es ".red + dias[2].green);

let calculos = require("./funciones.js");
calculos.sumar(1,2);
calculos.restar(4,7);
calculos.multiplicar(9,11);
calculos.dividir(40,3);


let http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200, { "Content-Type":"text/html"});
    res.write("<h1>HOLA MUNDITO</h1>");
    console.log("Peticion recibida");
    res.end();
}).listen(4000);
*/

let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express

app.get("/", function(req, res){
    res.send("Hola Mundo");
});
app.listen(4000);
console.log("Servidor escuchando en el puerto 4000");

/*
let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express
let mysql = require("mysql2");
let path = require("path");
require("dotenv").config({ path: "./.env" });



let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "centro educativo",
})

conexion.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("Conectado a la base de datos");
    }
});




conexion.end();

//conexion.query("SELECT ")

*/