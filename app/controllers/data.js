const Data = require("../models/data_m.js");

// Create and Save a new Mahasiswa
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Insert Mahasiswa
  const NewMahasiswa = new Data({
    NPM: req.body.npm,
    Nama: req.body.nama,
    Kelas: req.body.kelas,
  });

  // Save Mahasiswa in the database
  Data.create(NewMahasiswa, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mahasiswa."
      });
    else res.send(data);
  });
};

// Retrieve all Mahasiswa from the database.
exports.findAll = (req, res) => {
  Data.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};

// Find a single Mahasiswa with a NPM
exports.findOne = (req, res) => {
  Data.findById(req.params.npm, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Mahasiswa not found with NPM ${req.params.npm}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Mahasiswa with NPM " + req.params.npm
            });
          }
        } else res.send(data);
      });
};

// Update a Mahasiswa identified by the NPM in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //data needed to update
  const updateGame = new Data({
    Nama: req.body.nama,
    Kelas: req.body.kelas
  });

  Data.updateById(
    req.params.npm,
    updateGame,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found gameRunId with id ${req.params.npm}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating gameRunId with id " + req.params.npm
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Mahasiswa with the specified NPM (nomor pokok mahasiswa) in the request
exports.delete = (req, res) => {
  Data.remove(req.params.npm, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Mahasiswa with NPM ${req.params.npm}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Mahasiswa with NPM " + req.params.npm
            });
          }
        } else res.send({ responseCode: "00", message: `Mahasiswa was deleted successfully!` });
      });
};

// Delete all mahasiswa from the database.
exports.deleteAll = (req, res) => {
  Data.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all mahasiswa."
          });
        else res.send({ responseCode: "00", message: `All mahasiswa were deleted successfully!` });
      });
};