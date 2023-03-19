const express = require('express')
const app = express()
const port = process.env.port|| 3000

const path = require("path")
const x = path.join(__dirname,'../public')
app.use(express.static(x))

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
app.get('/about', (req, res) => {
    res.send(' About page!')
  })
  /*
  app.get('/services', (req, res) => {
    res.send('services page')
  })*/
  app.get('/prices', (req, res) => {
    res.send('prices page')
  })/*
  app.get('/team', (req, res) => {
    res.send('team page')
  })*/
  app.get('/data1', (req, res) => {
    res.send('data1 page')
  })
  app.get('/data2', (req, res) => {
    res.send('data2page')
  })
  app.get('/data3', (req, res) => {
    res.send('data3 page')
  })

  
app.set('view engine','hbs')
app.get('/', (req ,res)=>{
 res.render('index',{
  title:"HOME",
  desc:"this is home page"
 }
 )

})
app.set('view engine','hbs')
app.get('/service', (req ,res)=>{
 res.render('index',{
  title:"Service",
  desc:"this is service  page",
  name:"merna",
  city:"mansoura",
 }
 )

})

app.set('view engine','hbs')
app.get('/team', (req ,res)=>{
 res.render('index',{
  title:"team",
  desc:"this is team  page",
  img1:"image/peo1.jpg",
  name:"merna",
  city:"mansoura",
 }
 )
 app.set('view engine','hbs')
 app.get('/header', (req ,res)=>{
  res.render('index',{
   title:"header",
   desc:"this is header page"
   
  }
  )
 
 })
})
app.listen (port, () => {
  console.log(`Example app listening on port ${port}`)
})