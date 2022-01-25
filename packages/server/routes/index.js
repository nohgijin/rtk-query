var express = require("express");
var router = express.Router();

let users = [
  { id: 1, name: "기진" },
  { id: 2, name: "찌니" },
  { id: 3, name: "찐스" },
  { id: 4, name: "춘식" },
  { id: 5, name: "춘삼" },
];

router.get("/users", function (req, res, next) {
  res.json(users);
});

router.post("/users", function (req, res, next) {
  users = [...users, req.body];
  res.json(200);
});

router.delete("/users/:userId", function (req, res, next) {
  const userId = Number(req.params.userId);
  users = users.filter((user) => userId !== user.id);
  res.json(200);
});

router.patch("/users/:userId", function (req, res, next) {
  const userId = Number(req.params.userId);

  users = users.map((user) => {
    if (userId === user.id) {
      return {
        id: userId,
        name: req.body.name,
      };
    }

    return user;
  });

  res.json(200);
});

module.exports = router;
