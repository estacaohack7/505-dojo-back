const express = require ("express");
const mongodb = require ("express-mongo-db");
const cors = require ("cors");
const bodyParsa = require ('body-Parser');
const app = express();

app.use('mongodb://localhost:5000/cardapio'));
app.use(cors());
app.use(bodyParsa.json())

app.post('/pedido', (req,res) => {
   req.db.collection("pratos").insert(req.body ,res => {

   })
    res.send()
});

app.listen(5000, () => console.log('Aplicação iniciada'));