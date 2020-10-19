const mongoose = require('mongoose')
const {Student, Class} = require('./schema')

function connect(url){
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));
}

function getStudents(req, res){
    Student.find()
    .then((result)=>{
        setTimeout(()=>{
            res.send(result);
            res.end();
        }, 1);
    })
    .catch((e)=>{
        console.log(e);
    })
}
function postStudent(req, res){ 
    const newStudent = new Student({
        id: req.body.id,
        name: req.body.name,
    }) 
    newStudent.save((error, document)=>{
        if (error) console.log(error)
        else console.log(document)
    })
    res.end();
}
function deleteStudent(req, res){
    Student.findOneAndDelete({id: req.body.id}, (err, doc)=>{
        if (err) {
            console.log(err)
            res.end()
        }
        else{
            if (doc === null){
                res.send("Could not find!")
                res.end();
                return;
            }
            res.send("Delete successfully")
            res.end();
        }
    })
}
async function postClass(req, res) {
    var curClass = await Class.findOne({name: req.body.name});
    //create new if not existing
    if (curClass == null){
        curClass = new Class({
            name: req.body.name
        })
        curClass.save((error, document)=>{
            console.log('Save new class: ')
            console.log(document);
        })
    }
    
    //add more
    await Student.findOne({id: req.body.stId}).then((value)=>{ 
        Class.findOneAndUpdate({name: req.body.name}, {
            $push:{
                students: value._id,
            }
        },
        { new: true, useFindAndModify: false },
        (error)=>{
            if (error) console.log(error)
            else{
                console.log("added");
                // console.log();
            }
        }
        )
    })
    console.log(await Class.find())
    res.end();
}
module.exports = {connect, getStudents, postStudent, deleteStudent, postClass}
