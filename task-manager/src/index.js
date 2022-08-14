const express = require('express')

require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is on port ' + port)
})
  



const bcrypt = require('bcrypt')
