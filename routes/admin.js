const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.getAdminById);

module.exports = router;
