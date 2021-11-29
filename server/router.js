const express = require("express");
const router = express.Router();
const { Serv } = require("./dbConnection");

router.get("/get-burgers", async function (request, response) {
  const result = await Serv.find();
  console.log(result);
  response.send(result);
});


// request === req ja response === res
/* router.get("/get-todos", async function (request, response) {
  const result = await Todos.find();
  console.log(result);
  response.send(result);
});

router.get("/delete-todo/:id", async function (request, response) {
  await Todos.deleteOne({ _id: request.params.id });
  console.log("Delete todo..");
  response.send({});
});

router.get("/get-todo/:id", async function (request, response) {
  const result = await Todos.findOne({ _id: request.params.id });
  console.log(result);
  response.send(result);
});

router.post("/update-todo/:id", async function (request, response){
  await Todos.updateOne(
    { _id: request.params.id },
    { $set: { status: request.body.status } }
  );
  console.log("updating todo..");
  response.send({});
});
*/
router.post("/add-burgers", async function (request, response) {
  console.log(request.body);
    if (request.body.title) {
    await Serv.create(request.body);
    console.log("Lisa burger");
  }
  response.send("done");
}); 

module.exports = router;