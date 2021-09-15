// const bcrypt = require("bcrypt");
const user = require("../models/User.schema");
const contacts = require("../models/contact.schema2");

module.exports.getcontacts = (req, res, next) => {
  contacts
    .find({ userid: req.params.id })
    .then((contact) => {
      res.send({
        cont: contact,
      });
    })
    .catch((err) => console.log("in Catch"));
};
module.exports.add_contacts = (req, res, next) => {
  user
    .findOne({ _id: req.params.id })
    .then((data) => {
      const condata = {
        userid: data._id,
        Name: req.body.Name,
        email: req.body.email,
        Phn: req.body.Phn,
        contype: req.body.contype,
      };
      const userdat = new contacts(condata);
      userdat
        .save()
        .then((respo) => res.send(respo))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
};
module.exports.search = (req, res, next) => {
  user
    .findOne({ Name: req.params.name })
    .then((data) => {
      contacts
        .find({ userid: data._id })
        .then((respo) => {
          if (respo.length < 1) {
            res.json({
              message: "No Contacts Found",
            });
          } else
            res.json({
              message: respo,
            });
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
};
module.exports.update = (req, res) => {
  const sbr = {
    Name: req.body.Name,
    email: req.body.email,
    Phn: req.body.Phn,
    contype: req.body.contype,
  };
  contacts
    .findByIdAndUpdate(req.params.id, sbr)
    .then((respo) => res.send(respo))
    .catch((err) => res.send(err));
};

module.exports.delete = (req, res) => {
  contacts
    .findByIdAndDelete(req.params.id)
    .then((respo) => res.send(respo))
    .catch((err) => res.send("Error"));
};
