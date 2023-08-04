const mongoose = require('mongoose')
const mongoUrl = process.env.WEB
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))