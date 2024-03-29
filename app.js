const express= require('express')
const app = express()
const path= require('path')
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/register.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/login.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
 
// para horoku

app.listen(process.env.PORT||3000,function(){
    console.log("Servidor corriendo en puerto 3000");
})