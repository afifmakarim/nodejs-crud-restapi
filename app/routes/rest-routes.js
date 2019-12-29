module.exports = app => {
    const mahasiswa = require("../controllers/data.js");
  
    // Create a new Mahasiswa
    app.post("/createmahasiswa", mahasiswa.create);
  
    // Retrieve all Mahasiswa
    app.get("/allmahasiswa", mahasiswa.findAll);
  
    // Retrieve a single Mahasiswa with NPM (nomor pokok mahasiswa)
    app.get("/getmahasiswa/:npm", mahasiswa.findOne);
  
    // Update a Mahasiswa with NPM (nomor pokok mahasiswa)
    app.put("/updatemahasiswa/:npm", mahasiswa.update);
  
    // Delete a Mahasiswa with NPM (nomor pokok mahasiswa)
    app.delete("/deletemhs/:npm", mahasiswa.delete);
  
    // Create a new Mahasiswa
    app.delete("/deleteall", mahasiswa.deleteAll);
  };
  