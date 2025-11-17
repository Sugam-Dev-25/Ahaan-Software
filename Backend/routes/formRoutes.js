const express = require("express");
const { saveForm, getForm } = require("../controllers/formController");

const router = express.Router();

router.post("/", saveForm);
router.get("/", getForm);

module.exports = router;
