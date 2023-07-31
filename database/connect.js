const mongoose = require('mongoose')
const mongoUrl = process.env.DB
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))