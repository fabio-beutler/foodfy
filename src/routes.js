const express = require("express");
const user = require("../controllers/user");
const admin = require("../controllers/admin");

const routes = express.Router();

routes.get("/", (req, res) => res.redirect("/home"));

routes.get("/home", user.home);
routes.get("/about", user.about);
routes.get("/recipes", user.index);
routes.get("/recipe/:id", user.show);

routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipe/create", admin.create);
routes.get("/admin/recipe/:id", admin.show);
routes.get("/admin/recipe/:id/edit", admin.edit);

routes.post("/admin/recipe", admin.post);
routes.put("/admin/recipe", admin.put);
routes.delete("/admin/recipe", admin.delete);

module.exports = routes;
