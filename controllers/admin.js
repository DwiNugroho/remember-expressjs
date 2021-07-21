const adminModels = require('../models/admin');

exports.getAllAdmins = async (req, res) => {
  const admin = await adminModels.fetchAdminData();

  res.send(admin);
};

exports.getAdminById = async (req, res) => {
  const where = {
    id_admin: req.params.id,
  };

  const admin = await adminModels.fetchAdminData(where);

  res.send(admin);
};
