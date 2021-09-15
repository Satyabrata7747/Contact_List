const express = require("express");
const router = express.Router();
const fetch=require('node-fetch');
router.use(express.json());
const auth = require("./auth");
const secret = "Srm";
const controller = require("./controller/user_control");
const contact_controller = require("./controller/contacts_control");
//post for signup
router.post("/signup", controller.signup);
//post for Login
router.post("/login", controller.login);
//to add contacts
router.post("/contacts/:id", auth, contact_controller.add_contacts);
//to search the user contact by name
router.get("/contacts/:name", auth, contact_controller.search);
//update the user contact
router.put("/edit/:id", auth, contact_controller.update);
//delete the user contact
router.delete("/delete/:id", auth, contact_controller.delete);

router.get("/api/:id", contact_controller.getcontacts);
router.get("/api/query/:name", async (req, res) => {
  const url="https://codeforces.com/api/user.status?handle="+req.params.name + "&from=1&count=10";
 fetch(url,{
    headers:{
      'content-type':'application/json'
    }
  }).then(respo=>{
    return respo.json();
  }).then(data=>{
    console.log(data)
    res.send(data);
  });
  
});
router.get("/api/contest/rating/:name", async (req, res) => {
  const url="https://codeforces.com/api/user.status?handle="+req.params.name+"&from=1&count=2";
 fetch(url,{
    headers:{
      'content-type':'application/json'
    }
  }).then(respo=>{
    return respo.json();
  }).then(data=>{
    console.log("data")
    res.send(data);
  });
  
});

module.exports = router;
