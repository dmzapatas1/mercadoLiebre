const express= require('express')
const app = express()
const path= require('path')
//para horoku
//const port= process.env.PORT||3000;

//decirle a express que queremos temer la carpeta public para consumir los archivos de carpetas sencillas
//views son los html o vistas de nuestra aplicación
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});
 
// para horoku
// app.listen()
app.listen(3000,()=> 
{
    console.log("Servidor corriendo en puerto 3000");
});