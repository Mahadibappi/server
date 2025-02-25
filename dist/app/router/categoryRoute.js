"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controller/categoryController");
const router = (0, express_1.Router)();
router.post("/", categoryController_1.createCategory);
router.get("/", categoryController_1.getCategories);
router.get("/:id", categoryController_1.getCategory);
router.put("/:id", categoryController_1.updateCategory);
router.delete("/:id", categoryController_1.deleteCategory);
exports.default = router;
