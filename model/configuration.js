const mongoose = require('mongoose')
const configurationSchema = new mongoose.Schema({
    student_identifier: {
        type: String,
        unique: true,
        required: true
    },
    supervisor_identifier: {
        type: String,
        required: true
    },
    meeting_frequency: {
        type: String,
        enum: ['Semanal', 'Quinzenal', 'Mensal'],
        default: 'Semanal',
        description: 'Frequência dos encontros'
    },
    meeting_duration: {
        type: String,
        enum: ['30 minutos', '60 minutos', '90 minutos'],
        default: '60 minutos',
        description: 'Duração dos encontros'
    },
    search_term: {
        type: String,
        default: '60 dias',
        description: 'Prazo do plano de pesquisa'
    },
    dataCollection_term: {
        type: String,
        default: '60 dias',
        description: 'Prazo de colecta de dados'
    },
    write_term: {
        type: String,
        default: '90 dias',
        description: 'Prazo de escrita do trabalho'
    },
    finalEntry_term: {
        type: String,
        default: '120 dias',
        description: 'Prazo de entrega final'
    },
    feedback_type: {
        type: String,
        enum: ['Escrito', 'Áudio', 'Vídeo'],
        default: 'Escrito',
        description: 'Tipo de feedback'
    },
    notify_student: {
        type: Boolean,
        enum: [true, false],
        default: 'true',
        description: 'Notificar estudante'
    },
})

const Configuration = mongoose.model('configuration', configurationSchema)
module.exports = Configuration