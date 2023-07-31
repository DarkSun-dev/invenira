const mongoose = require('mongoose')
const workSchema = new mongoose.Schema({
    student_identifier: {
        type: String,
        required: true
    },
    work_stage: {
        type: String,
        required: true
    },
    stage_level: {
        type: String,
        enum: ['low', 'hight'],
        default: 'down'
    },
    work_identifier: {
        type: String,
        unique: true,
        required: true
    },
    student_feedback: {
        type: String,
        required: true
    },
    work_file: {
        Nome: {
            type: String,
            trim: true,
            required: true
        },
        Tamanho: {
            type: String,
            trim: true,
            required: true
        },
        Tipo: {
            type: String,
            trim: true,
            required: true
        },
        Buffer_PDF: {
            type: Buffer
        }
    },
    Data: {
        type: String,
        default: new Date().toLocaleString()
    }
})

const Work = mongoose.model('work', workSchema)
module.exports = Work