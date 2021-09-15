const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/User.schema");
const secret = "Srm";
// module.exports.signup = async (req, res, next) => {
//   try {
//     const postdata = {
//       Name: req.body.Name,
//       email: req.body.email,
//       password: req.body.password,
//     };
//     const users = await user.findOne({ email: req.body.email });
//     if (!users) {
//       const salt = await bcrypt.genSalt(10);
//       postdata.password = await bcrypt.hash(req.body.password, salt);
//       const contc = new user(postdata);
//       await contc.save();
//       res.status(200).json({
//         message: "Registered Successfully",
//         contc,
//       });
//     } else {
//       res.status(400).json({
//         message: "Email already Exists",
//       });
//     }
//   } catch (err) {
//     res.status(400).json({
//       message: "Something went Wrong!!!!!",
//       error: err,
//     });
//   }
// };
module.exports.signup = (req, res, next) => {
  console.log(req.body.email);
  user
    .find({ email: req.body.email })
    .then((data) => {
      if (data.length >= 1)
        res.json({
          message: "Email Already Exists",
          data,
        });
      else {
        bcrypt
          .hash(req.body.password, 10)
          .then((hash) => {
            const postdata = {
              Name: req.body.Name,
              email: req.body.email,
              password: hash,
            };
            const contc = new user(postdata);
            contc
              .save()
              .then((data) =>
                res.status(200).json({
                  message: "Registered Successfully",
                  data,
                })
              )
              .catch((err) =>
                res.json({
                  message: "Something went wrong",
                  err,
                })
              );
          })
          .catch((err) =>
            res.json({
              message: "No data Found",
              err,
            })
          );
      }
    })
    .catch((err) =>
      res.json({
        message: "Some Error Occured",
        err,
      })
    );
};
module.exports.login = (req, res, next) => {
  user
    .find({ email: req.body.email })
    .then((data) => {
      if (data.length >= 1) {
        bcrypt
          .compare(req.body.password, data[0].password)
          .then((result) => {
            if (result) {
              const token = jwt.sign(
                {
                  email: data[0].email,
                },
                secret,
                {
                  expiresIn: "1h",
                }
              );
              res.status(200).json({
                message: "Auth successfull",
                token: token,
                id: data[0]._id,
                name: data[0].Name,
              });
            } else
              res.json({
                message: "Email/Password doesnot match",
              });
          })
          .catch((err) => res.send("In inner catch"));
      } else
        res.json({
          message: "Email/password doesnot match",
        });
    })
    .catch((err) => res.send("In outer catch"));
};
