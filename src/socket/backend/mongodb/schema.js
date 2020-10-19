//DB
const mongoose = require('mongoose')

const Student = mongoose.model("Student", {
    name: String,
    id: Number,
})
const Class = mongoose.model("Class", {
    name: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
})

module.exports = {Student, Class};
 