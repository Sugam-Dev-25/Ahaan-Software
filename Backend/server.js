const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const blogRoutes= require('./routes/blogRoutes')
const userRoutes=require('./routes/userRoutes')
const cors=require('cors')
const session = require('express-session');
const app=express();
const port=3000;
dotenv.config()
app.use(express.json())
app.use(session({
    secret: process.env.SECRET_KEY,  // Use colon, not equal sign
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24,  
    }
}));




const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  };
  
  app.use(cors(corsOptions));

// Serve uploaded images
app.use('/uploads', express.static('uploads')); 
  

mongoose.connect("mongodb://127.0.0.1:27017/blog")
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.log(err)
})


app.use('/api', blogRoutes)

app.use('/api', userRoutes)

app.listen(port, (req, res)=>{
    console.log(`the server running on ${port}`)
})
