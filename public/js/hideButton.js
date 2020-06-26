const ingredientsButton = document.getElementById("ingredients__button");
const ingredientsList = document.getElementById("ingredients__list");

const preparationButton = document.getElementById("preparation__button");
const preparationList = document.getElementById("preparation__list");

const informationButton = document.getElementById("information__button");
const informationList = document.getElementById("information__list");

function hideButton(button, list) {
  button.addEventListener("click", () => {
    list.classList.toggle("recipe__list-hide");

    button.textContent == "ESCONDER" ? (button.textContent = "MOSTRAR") : (button.textContent = "ESCONDER");
  });
}

hideButton(ingredientsButton, ingredientsList);
hideButton(preparationButton, preparationList);
hideButton(informationButton, informationList);
