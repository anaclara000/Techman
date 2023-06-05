const express = require('express');

const router = express.Router();


const Clientes = require('../controller/clientes')

router.get('/clientes', Clientes.read)
router.post('/clientes', Clientes.create)


const Automoveis = require('../controller/automoveis')

router.get('/Automoveis', Automoveis.read)
router.get('/Automoveis/id/:id', Automoveis.readOne)
router.post('/Automoveis', Automoveis.create)


const Concessionarias = require('../controller/concessionarias')

router.get('/Concessionarias', Concessionarias.read)
router.post('/Concessionarias', Concessionarias.create)

const Alocacao = require('../controller/alocacao')

router.get('/Alocacao', Alocacao.read)
router.post('/Alocacao', Alocacao.create)


const Venda = require('../controller/venda')

router.get('/Venda', Venda.read)
router.post('/Venda', Venda.create)


module.exports = router;