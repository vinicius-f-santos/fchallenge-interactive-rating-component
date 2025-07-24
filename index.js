const buttons = document.querySelectorAll(".button");
const submit = document.querySelector(".submit");
const component = document.querySelector(".component");
const rating = document.querySelector(".finish-rating");
const select = document.querySelector(".show-rating");
let value;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        removeClass(buttons, submit);
        this.classList.add("active");
        submit.classList.add("active");
        value = button.textContent;
    })
});

submit.addEventListener("click", function() {
    if (submit.classList.contains("active")) {
        component.style.display = "none";
        rating.style.display = "flex";
        select.textContent = "You selected " + value + " out of 5";
    }
})

function removeClass(buttons, submit) {
    submit.classList.remove("active");
    buttons.forEach(button => {
        button.classList.remove("active");
    })    
}