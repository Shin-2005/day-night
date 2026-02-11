const openBtns = document.querySelectorAll(".open-modal-btn");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = "modal-" + btn.id;
    const targetModal = document.getElementById(targetId);
    targetModal.classList.add("open");
  });
});

const closeBtns = document.querySelectorAll(".close-modal-btn");
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("open");
  });
});
