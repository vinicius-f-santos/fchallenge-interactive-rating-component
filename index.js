const buttons = document.querySelectorAll(".button");
const submit = document.querySelector(".submit");
const component = document.querySelector(".component");
const rating = document.querySelector(".rating");
let select = document.querySelector(".show-rating");
let value;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        removeClass(buttons, submit);
        this.classList.add("active");
        submit.classList.add("active");
        value = buttons[i].textContent;
    })
}

submit.addEventListener("click", function() {
    if (submit.classList.contains("active")) {
        component.style.display = "none";
        rating.style.display = "flex";
        select.textContent = "You selected " + value + " out of 5";
    }
})

function removeClass(button, submit) {
    submit.classList.remove("active");
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
    }
}