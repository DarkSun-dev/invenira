const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config({ path: './config/enviropment.env' });
require('./database/connect')
const activityRoutes = require('./routes/activityRoutes')
const AppError = require('./utils/appError')
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(express.static(path.join(__dirname, './public')))
app.set("views", path.join(__dirname, "./public"));
app.set("view engine", "html");


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

app.use('/api', activityRoutes)

app.get("/", (req, res) => {
  res.send("index.html");
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});




