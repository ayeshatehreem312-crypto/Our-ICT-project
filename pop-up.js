const sendBtn = document.getElementById("sendBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");


sendBtn.addEventListener("click", () => {
    modal.classList.add("open");
});


closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});
