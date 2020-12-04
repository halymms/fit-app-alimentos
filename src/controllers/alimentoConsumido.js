const express = require('express');
const AlimentoSchema = require('../models/alimento')

const routes = express.Router()

  routes.get('/alimentoConsumido', async(req, res) => {
    const alimentoConsumido = await AlimentoSchema.find();

    return res.json(alimentoConsumido);
  });

  routes.post('/cadastrarAlimentoConsumido', async(req, res) => {
    const { alimento, quantidade } = req.body;

    const alimentoConsumido = await AlimentoSchema.create({
      alimento,
      quantidade
    })

    return res.json(alimentoConsumido);

  });

  routes.get('/filtrarAlimento', async(req, res) => {
    const { alimento } = req.body

    const procurandoAlimento = await AlimentoSchema.find({alimento: alimento});

    return res.json(procurandoAlimento)
  });

  routes.get('/filtrarId', async(req, res) => {
    const body = req.body

    await AlimentoSchema.findOne({_id: body}, function(err,alimento) {
      return res.json(alimento);
    })
  
  });

  routes.get('/filtrarQtd', async(req, res) => {
    const { quantidade } = req.body

    const procurandoId = await AlimentoSchema.findOne({quantidade: quantidade})

    return res.json(procurandoId)
  });

  routes.get('/calculoAlimento', async(req, res) => { 
    const calcQtd = await AlimentoSchema.find()

    const totalQtd = calcQtd.reduce((prevVal, elem) => prevVal + elem.quantidade, 0)

    return res.json(totalQtd)  
  })

  routes.get('/calculoCaloria', async(req, res) => {
    const alimentos = await AlimentoSchema.find()

    const calcAli = alimentos.map(function(item){
      return {
        alimento: item.alimento,
        quantidade: item.quantidade + 20
      }
    })

    return res.json(calcAli)
  }) 
  
  routes.put('/alterarAlimento', async = (req, res) => {
    //console.log('teste:' + req.body.idpedido)
    const alimento = req.body

    var id = alimento._id;
    delete alimento._id;

    const alterar = AlimentoSchema.collection().updateOne({_id: require("mongojs").ObjectId(id)}, {$set: alimento}, (err) => {
         console.log(err)
    })
     return res.json(alterar);
 }) 

  module.exports = app => app.use('/alimentos', routes);


