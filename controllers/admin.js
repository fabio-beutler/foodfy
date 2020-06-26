const data = require("../src/data.json");

// SHOW ALL RECIPES OF ADMIN (INDEX)
exports.index = (req, res) => {
  return res.render("admin/index", { recipes: data.recipes });
};

// CREATE PAGE
exports.create = (req, res) => {
  return res.render("admin/create");
};

// SHOW ONE RECIPE BY ID
exports.show = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (item) {
    return item.id == id;
  });

  if (!foundRecipe) return res.send("Recipe not found");

  const recipe = { ...foundRecipe };

  return res.render("admin/show", { recipe });
};

// EDIT ONE RECIPE BY ID
exports.edit = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (item) {
    return item.id == id;
  });

  if (!foundRecipe) return res.send("Recipe not found");

  const recipe = { ...foundRecipe };

  return res.render("admin/edit", { recipe });
};

// POST
exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    //  req.body.key  == ""
    if (req.body[key] == "") {
      return res.send("Please, fill all fields");
    }
  }

  let { image, title, author, ingredients, preparation, information } = req.body;

  let id = 1;
  const lastRecipe = data.recipes[data.recipes.length - 1];
  if (lastRecipe) {
    id = lastRecipe.id + 1;
  }

  data.recipes.push({
    id,
    image,
    title,
    author,
    ingredients,
    preparation,
    information,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error");

    return res.redirect(`admin/recipe/${id}`);
  });

  // return res.send(req.body);
};

// PUT
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundRecipe = data.recipes.find((recipe, foundIndex) => {
    if (recipe.id == id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundRecipe) return res.send("Recipe not found");

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id),
  };

  data.recipes[index] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write error");

    return res.redirect(`admin/recipe/${id}`);
  });
};

// DELETE
exports.delete = (req, res) => {
  const { id } = req.body;
  const filteredRecipes = data.recipes.filter((recipe) => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error");

    return res.redirect("admin/recipes");
  });
};
