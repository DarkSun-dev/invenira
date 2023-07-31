const mongoose = require('mongoose')
const analyticSchema = new mongoose.Schema({
    student_identifier: {
        type: String,
        required: true
    },
    supervisor_identifier: {
        type: String,
        required: true
    },
    work_identifier: {
        type: String,
        required: true
    },
    progress: {
        value: {
            type: Number,
            required: [true, 'campo obrigatorio']
        },
        description: {
            type: String,
            default: 'Progresso da Monografia'
        }
    },
    supervisor_feedback: {
        value: {
            type: String,
            required: [true, 'campo obrigatorio']
        },
        description: {
            type: String,
            default: '/* Feedback do supervisor */'
        }
    },
    meeting_duration: {
        value: {
            type: String,
            required: [true, 'campo obrigatorio']
        },
        description: {
            type: String,
            default: 'Tempo gasto em cada etapa'
        }
    },
    meeting_number: {
        value: {
            type: Number,
            required: [true, 'campo obrigatorio']
        },
        description: {
            type: String,
            default: 'Número de encontros realizados'
        }
    }
})

const Analytics = mongoose.model('analytics', analyticSchema)
module.exports = Analytics