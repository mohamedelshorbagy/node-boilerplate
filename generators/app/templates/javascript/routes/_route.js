const express = require('express');
const router = express.Router();

const { all } = require('../app/controllers/<%= serviceName %>')



router.get('/all', all);




module.exports = router;


