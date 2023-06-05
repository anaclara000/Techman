const express = require('express');

const router = express.Router();


const Clientes = require('../controller/clientes')

router.get('/clientes', Clientes.read)
router.post('/clientes', Clientes.create)


const Automoveis = require('../controller/automoveis')

router.get('/Automoveis', Automoveis.read)
router.post('/Automoveis', Automoveis.create)


const Concessionarias = require('../controller/concessionarias')

router.get('/Concessionarias', Concessionarias.read)
router.post('/Concessionarias', Concessionarias.create)


const Alocacao = require('../controller/alocacao')

router.get('/Alocacao', Alocacao.read)
router.post('/Alocacao', Alocacao.create)

module.exports = router;