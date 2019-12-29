const sql = require("./db.js");

// constructor
const BodyReq = function(postbody) {
  this.NPM = postbody.NPM;
  this.Nama = postbody.Nama;
  this.Kelas = postbody.Kelas;
};

BodyReq.create = (NewMahasiswa, result) => {
  sql.query("INSERT INTO mahasiswa_aktif SET ?", NewMahasiswa, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created mahasiswa: ", { responseCode: "00", ...NewMahasiswa });
    result(null, { responseCode: "00", data: {...NewMahasiswa} });
  });
};

BodyReq.findById = (no_mahasiswa, result) => {
  sql.query(`SELECT NPM, Nama, Kelas FROM mahasiswa_aktif WHERE NPM = "${no_mahasiswa}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found mahasiswa: ", res[0]);
      result(null, { responseCode: "00", data: { ...res[0] } });
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

BodyReq.getAll = result => {
  sql.query("SELECT * FROM mahasiswa_aktif", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("mahasiswa: ", res);
    result(null, { responseCode: "00", data: res });
  });
};

BodyReq.updateById = (id, postbody, result) => {
  sql.query(
    "UPDATE mahasiswa_aktif SET Nama = ?, Kelas = ? WHERE NPM = ?",
    [postbody.Nama, postbody.Kelas, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated mahasiswa: ", { responseCode: "00", ...postbody });
      result(null, { responseCode: "00", data : {...postbody} });
    }
  );
};

BodyReq.remove = (id, result) => {
  sql.query("DELETE FROM mahasiswa_aktif WHERE NPM = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted mahasiswa with NPM: ", id);
    result(null, res);
  });
};

BodyReq.removeAll = result => {
  sql.query("DELETE FROM mahasiswa_aktif", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} mahasiswa`);
    result(null, res);
  });
};

module.exports = BodyReq;
