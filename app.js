const express = require('express')
const connDB= require('./Setting/db')
const app = express()
const productRouter=require('./routes/product')

connDB();

app.use(express.json())

app.use('/api/product',productRouter)

const port=process.env.port ||8000
app.listen(port,()=>console.log(`server started on port ${port}`))