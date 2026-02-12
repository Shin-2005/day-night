const openModalBtns = document.querySelectorAll(".open-modal-btn");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = "modal-" + btn.id;
    const targetModal = document.getElementById(targetId);
    targetModal.classList.add("open");
  });
});

const closeModalBtns = document.querySelectorAll(".close-modal-btn");
closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("open");
  });
});

const sunBtn = document.getElementById("sun");
sunBtn.addEventListener("click", () => {
  const daySection = document.getElementById("day-section");
  const nightSection = document.getElementById("night-section");
  const body = document.body;
  body.id = "night";
  daySection.style.display = "none";
  nightSection.style.display = "block";
});

const moonBtn = document.getElementById("moon");
moonBtn.addEventListener("click", () => {
  const daySection = document.getElementById("day-section");
  const nightSection = document.getElementById("night-section");
  const body = document.body;
  body.id = "day";
  daySection.style.display = "block";
  nightSection.style.display = "none";
});