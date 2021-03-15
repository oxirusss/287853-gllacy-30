const feedbackButton = document.querySelector(".contacts__button");

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по ссылке");
});