var subMenuButton = document.querySelector(".nav__item--has-children");
var subMenu = document.querySelector(".sub-menu");
var form = document.querySelector(".review__form");
var feedbackInput = form.querySelector("[name=feedback]");
var nameInput = form.querySelector("[name=Name]");

var makeElement = function(tagName, className, text) {
    var element = document.querySelector(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

subMenuButton.addEventListener("click", function () {
    subMenu.classList.toggle("hidden");
});


form.addEventListener("submit", function (evt) {
    if (feedbackInput.value === "" || nameInput.value === "") {
        evt.preventDefault();
        alert("Не все данные введены");
    } else {
        alert("Благодарим за отзыв!");
    }
});
