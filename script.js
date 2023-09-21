let subMenu = document.querySelector(".sub-menu");
let form = document.querySelector(".review__form");
let feedbackInput = form.querySelector("[name=feedback]");
let nameInput = form.querySelector("[name=Name]");

let menu = function(evt) {
    if (evt.target.closest(".nav__item--has-children")) {
        subMenu.classList.toggle("hidden")
    }
    if (!evt.target.closest(".nav__item--has-children")) {
        subMenu.classList.add("hidden");
    }
};

document.addEventListener("click", menu);


form.addEventListener("submit", function (evt) {
    if (feedbackInput.value === "" || nameInput.value === "") {
        evt.preventDefault();
        alert("Не все данные введены");
    } else {
        alert("Благодарим за отзыв!");
    }
});
