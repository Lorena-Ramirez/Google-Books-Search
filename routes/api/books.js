const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

//Set up a router for the /:id and using .delete

module.exports = router;
