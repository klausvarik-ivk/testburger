const express = require("express");
const router = express.Router();
const { Serv } = require("./dbConnection");

router.get("/get-burgers", async function (request, response) {
  const result = await Serv.find();
  console.log(result);
  response.send(result);
});


router.get("/delete-burgers/:id", async function (request, response) {
  await Serv.deleteOne({ _id: request.params.id });
  console.log("Delete burger..");
  response.send({});
});

router.get("/get-burger/:id", async function (request, response) {
  const result = await Serv.findOne({ _id: request.params.id });
  console.log(result);
  response.send(result);
});

router.patch("/update-burger/:id", async function (request, response){
  await Serv.updateOne(
    { _id: request.params.id },
    // Muutimise koht siin!
    { $set: { status: request.body.status } }
  );
  console.log("updating burger..");
  response.send({});
});

router.post("/add-burgers", async function (request, response) {
  console.log(request.body);
    if (request.body.title) {
    await Serv.create(request.body);
    console.log("Lisa burger");
  }
  response.send("done");
}); 

module.exports = router;