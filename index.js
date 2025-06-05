// <<<<<<<<<<<<<<<<<<<< LUNES >>>>>>>>>>>>>>>>>>>>>>>
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


let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express

app.get("/", function(req, res){
    res.send("Hola Mundo");
});
app.listen(4000);
console.log("Servidor escuchando en el puerto 4000");


// <<<<<<<<<<<<<<<<<<<< MARTES >>>>>>>>>>>>>>>>>>>>>>>
// ----------------- conexion con base de datos ---------------------

let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express
let mysql = require("mysql2");
//let path = require("path");
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



// ----------------- CONEXION A LA BASE DE DATOS (BIBLIOTECA) ---------------------

let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express
let mysql = require("mysql2");
require("dotenv").config({ path: "./.env" });

let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "bblioteca publica",
})

conexion.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("Conectado a la base de datos");
        
    }
});


// aqui establecemos la consulta requerida
conexion.query(
    "select titulo, autor from libros",function (error, resultados) { 
        if (error){
            console.log(error);
        } else {
            console.log(resultados);
            //resultados.forEach((libros) => {
            //    console.log(libros.titulo);
            //});
        }
    }
);

// --------------- INSERTAR
conexion.query(
    "INSERT INTO libros (titulo, autor, editorial, año_publicacion, categoria) VALUES ('super_sh', 'Shuberth', 'Sinergia', '2025', 'Politica')", 
    function (error, resultados) { 
        if (error){
            console.log(error); 
        } else {
            console.log("registro insertado", resultados);
        }
    }
); 

// --------------- ACTUALIZAR
conexion.query(
    "UPDATE libros SET titulo = 'Super sh' WHERE codigo_libro=8", 
    function (error, resultados) { 
        if (error){
            console.log(error); 
        } else {
            console.log("registro actualizado", resultados);
        }
    }
);


// --------------- BORRAR
conexion.query(
    "DELETE FROM libros WHERE codigo_libro=8", 
    function (error, resultados) { 
        if (error){
            console.log(error); 
        } else {
            console.log("registro eliminado", resultados);
        }
    }
);

conexion.end();
*/

/*
//-----------------------------------------------

let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express
let mysql = require("mysql2");
let path = require ('path');

app.get("/", function(req, res){
    res.send("Hola Mundito");
});

app.get("/contacto", function (req, res) {
    res.send("Página de contactito");
});

app.listen(4000);
console.log("Servidor escuchando en el puerto 4000");




//-------------------------------------------
// CONEXION CON PAGINAS
// Llamamos a las librerias
let express = require('express'); // Importamos express
let app = express(); // Creamos una instancia de express
let path = require ('path'); //libreria para rutas a paginas estaticas

app.use(express.static(path.join(__dirname, 'public'))); //convertimos la carpeta public en estática vinculada

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "pages/index.html")); // le damos la rura especifica con el mensaje
});

app.get("/contacto", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "pages/contacto.html")); // le damos la rura especifica con el mensaje
});
app.listen(4000);
console.log("Servidor escuchando en el puerto 4000 http://localhost:4000/contacto");

*/

//-------------------------------------------
// VARIABLES DE ENTORNO
// Llamamos a las librerias
//et express = require('express'); // Importamos express
//let app = express(); // Creamos una instancia de express
let path = require ('path'); //libreria para rutas a paginas estaticas
//let mysql = require('mysql2');
//let dotenv = require('dotenv')
require('dotenv').config({ path: './.env' });

app.use(express.static(path.join(__dirname, 'public'))); //convertimos la carpeta public en estática vinculada

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "pages/index.html")); // le damos la rura especifica con el mensaje
});
app.get("/contacto", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "pages/contacto.html")); // le damos la rura especifica con el mensaje
});
app.listen(process.env.PORT || 4005);
console.log("Servidor escuchando en el puerto 4000 http://localhost:4000/contacto");





/*
app.listen(process.env.PORT);
console.log("Servidor escuchando en el puerto 4000 http://localhost:4000/contacto");


//---------------------MOTOR DE VISTAS
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname,))

*/


