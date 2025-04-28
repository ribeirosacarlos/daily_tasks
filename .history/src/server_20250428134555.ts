import express from 'express'
import { taskRoutes } from './routes/taskRoutes'

const cors = require("cors");
const app = express()
app.use(express.json())

app.use(cors());
app.use('/tasks', taskRoutes)

app.listen(3333, () => {
    console.log(' Server is running on http://localhost:3333')
})