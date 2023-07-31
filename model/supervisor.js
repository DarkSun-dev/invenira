const mongoose = require('mongoose')
const supervisorSchema = new mongoose.Schema({
    supervisor_identifier: {
        type: String,
        unique: true,
        required: true
    },
    supervisor_name: {
        type: String,
        required: true
    },
    supervisor_course: {
        type: String,
        required: true
    }
})

const Supervisor = mongoose.model('supervisor', supervisorSchema)
module.exports = Supervisor