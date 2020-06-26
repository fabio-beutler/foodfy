const data = require("../data.json");

// HOME PAGE
exports.home = (req, res) => {
  return res.render("user/home", { recipes: data.recipes });
};

// ABOUT PAGE
exports.about = (req, res) => {
  return res.render("user/about");
};

// ALL RECIPES PAGE (INDEX)
exports.index = (req, res) => {
  return res.render("user/index", { recipes: data.recipes });
};

// SHOW ONE RECIPE BY ID
exports.show = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (item) {
    return item.id == id;
  });

  if (!foundRecipe) return res.send("Recipe not found");

  const recipe = { ...foundRecipe };

  return res.render("user/show", { recipe });
};
