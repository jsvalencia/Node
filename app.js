require("dotenv").config();

const dbConnect = require('./config/mongo')
const express = require("express");//Servicio Web
const cors = require("cors");// 
const app = express();
app.use(cors());// La app va a usar cors
const port =3000;
//const port= process.env.PORT || 3000;




//Funcion Inicial, comienza a escuchar por el puerto
app.listen(port,()=>{
    console.log(`la app 
        esta lista por 
        http://localhost:${port}`);
})

dbConnect();