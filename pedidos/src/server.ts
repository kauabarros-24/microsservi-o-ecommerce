const express = require('express')
const app = express()

const { router } = require('./modules/infra/database/routes')

app.use(express.json())
const port  = process.env.PORT ?? 3002
app.use(router)

app.listen(port, () => console.log(`Server running on port ${port}`))
