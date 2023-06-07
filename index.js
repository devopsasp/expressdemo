import express from 'express'
import fs from 'fs'
import path from 'path'

const app=express()

app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{

      const options = {
            root: path.join("../expressdemo/")
        };
     
  res.sendFile('index.html',options,(err)=>{
      if(err) console.log(err)
      console.log("sent")
  })

})
app.post("/saveorder",(req,res)=>{
    console.log(req.body.itemname)
    console.log(req.body.quantity)
    res.send("<h1>Order Placed</h1>")
})

const server=app.listen(5050,()=>{
const host=server.address().address;
const port=server.address().port;
console.log(`server is listening at ${host}:${port} ` )
})
