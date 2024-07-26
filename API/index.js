//Creacion de mi backend
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

let transaccioArr = []

//#region
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors())
//#endregion

//Creacion de rutas
//Cuando se hace un post hhtp://localhost:3000/transaccions
app.get('/transactions',(req, res)=>{
    res.send(transaccioArr)
})

// Cuando se hace un post hhtp://localhost:3000/transaccions
app.post('/transactions',(req, res)=>{

    let transaction = req.body;
    transaccioArr.push(transaction);
    //console.log(req.body)
    res.send(JSON.stringify("Guardada..."));
    console.log(transaccioArr);
})

app.listen(port,() =>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
})

