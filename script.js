const card = document.querySelector("#card");

const flipBtn = document.querySelector("#flipBtn");

const backBtn = document.querySelector("#backBtn");


flipBtn.addEventListener("click", function () {

    card.classList.add("flipped");

});


backBtn.addEventListener("click", function () {

    card.classList.remove("flipped");

});