const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    student_identifier: {
        type: String,
        required: true
    },
    work_identifier: {
        type: String,
        required: true
    },
    work_comment: {
        type: String,
        required: true
    },
    Data: {
        type: String,
        default: new Date().toLocaleString()
    }
})

const Comment = mongoose.model('comment', commentSchema)
module.exports = Comment