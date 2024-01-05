const { Router } = require("express");
const router = Router();
const { Session } = require("../models");

router.post("create", (req, res) => {
  const { title } = req.body;
  const session = new Session({ title });
});

module.export = router;
