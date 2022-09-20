import express from 'express'
import morgan from 'morgan'
import routes from './routes/index.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

//settings
const port = process.env.PORT || 3000
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//middelwares
app.use(morgan('dev'))
//routes
app.use(routes)

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`server on port ${port}`)
})
