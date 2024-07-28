const express = require('express');
const app = express()

const port = process.env.PORT ?? 3003

app.listen(port, () => console.log(`Running produtos in port ${port}`))