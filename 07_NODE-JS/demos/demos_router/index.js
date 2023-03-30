import express from 'express'
import firstrouter from './router/firstrouter.js'
import secondrouter from './router/secondrouter.js'

const port = 3000

const app = express()

app.use(express.json())


app.use('/first',firstrouter)
app.use('/second',secondrouter)


app.listen(port, () => {
    console.log(`Serveur en cours à l'adresse http://localhost:${port}`)
})