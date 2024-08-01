const express = require('express')
const app = express()

import { router } from "./modules/infra/database/routes"

app.use(express.json())
const port  = process.env.PORT ?? 3001
app.use(router)

app.listen(port, () => console.log(`Server running in port ${port}`))