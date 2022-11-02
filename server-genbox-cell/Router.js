const express = require('express')
const { body } = require('express-validator')
const router = express.Router()
const { Create, Read, Read2, Update, Update2 } = require('./Controller')

router.post('/post', [
    body('Tanggal').isLength({min : 2}).withMessage('Tanggal tidak sesuai'),
    body('Nomor_HP').isLength({min : 12},{max : 15}).withMessage('Nomor HP Tidak Valid'),
], Create)

router.get('/get', Read)

router.get('/getSaldo', Read2)

router.put('/update', [
    body('Tanggal').isLength({min : 2}).withMessage('Tanggal tidak sesuai'),
    body('Nomor_HP').isLength({min : 12},{max : 15}).withMessage('Nomor HP Tidak Valid'),
], Update)

router.put('/update2', [
    body('Tanggal').isLength({min : 2}).withMessage('Tanggal tidak sesuai')
], Update2)

module.exports = router