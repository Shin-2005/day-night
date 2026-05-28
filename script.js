const daySection = document.getElementById("day-section");
const nightSection = document.getElementById("night-section");
const body = document.body;

nightSection.style.display = "none";

// Modal Btns
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

// Sun click
const sunBtn = document.getElementById("sun");
sunBtn.addEventListener("click", () => {
  body.id = "night";
  daySection.style.display = "none";
  nightSection.style.display = "flex";
});

// Moon click
const moonBtn = document.getElementById("moon");
moonBtn.addEventListener("click", () => {
  body.id = "day";
  daySection.style.display = "flex";
  nightSection.style.display = "none";
});
