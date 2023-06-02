import express from 'express'
import tasksRouter from './routes/tasks.mjs'
import connectDB from './db/connect.mjs'
import notFound from './middleware/not-found.mjs'
import { errorHandlerMiddleware } from './middleware/error-handler.mjs'
import * as dotenv from 'dotenv'

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasksRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task


const start = async () => {
  try {
    dotenv.config()
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => { console.log(`Server is running at http://localhost:${PORT} `)})
  } catch (err) {
      console.log(err)
  }
}

start()


