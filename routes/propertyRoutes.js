const { Router } = require("express");
const propertyController = require("../controllers/propertyController");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

const router = Router();

router.delete("/image/:id", propertyController.propertyImage_delete);
router.post("/image", propertyController.propertyImage_post);

router.post("/contact", propertyController.contact_post);

router.get("/:id", propertyController.property_get);
router.post("/", checkUser, propertyController.property_post);
router.put("/:id", propertyController.property_put);
router.delete("/:id", propertyController.property_delete);

router.get("/", propertyController.properties_get);

module.exports = router;
