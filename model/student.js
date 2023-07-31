const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    student_identifier: {
        type: String,
        unique: true,
        required: true
    },
    student_name: {
        type: String,
        required: true
    },
    student_course: {
        type: String,
        required: true
    },
    student_title: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('student', studentSchema)
module.exports = Student