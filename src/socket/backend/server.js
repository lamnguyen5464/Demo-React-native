const morgan = require('morgan')
const express = require("express")
const {Student, Class} = require('./mongodb/schema')
const app = express() 
const mongodbController = require('./mongodb/controller')
app.use(morgan('short'))
app.use(express.json())

const url = 'mongodb://localhost/test'
mongodbController.connect(url);

 
//GET
app.get('/students', (req, res)=>{
    mongodbController.getStudents(req, res);
})
app.get('/', (req, res)=>{
    res.write("test");
    res.end();
})

//POST 
app.post('/students',(req, res)=>{
    mongodbController.postStudent(req, res); 
})

app.post('/class', async(req, res)=>{
    mongodbController.postClass(req, res);
})

//DETELE
app.delete('/students', (req, res)=>{
    mongodbController.deleteStudent(req, res);
})


app.listen(3000);