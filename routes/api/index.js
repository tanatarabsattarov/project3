const router = require("express").Router();
const bookRoutes = require("./books");
const restaurantsRoutes = require("./restaurants");

// restaurant routes
router.use("/restaurants", restaurantsRoutes);
router.use("/books", bookRoutes);

module.exports = router;
