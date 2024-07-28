import { router } from "./routes";
const express = require('express')
const app = express()

app.use(express.json())
const port = process.env.PORT ?? 3001;
app.use(router)

app.listen(port, () => console.log(`Server client running in port ${port}`))