document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang diperlukan
  const showModalButtons = document.querySelectorAll(".showModal");
  const closeModalButton = document.querySelector(".closeModal");
  const kirimButton = document.querySelector(".kirim-button");
  const okButton = document.querySelector(".ok-button");
  const applyBtn = document.querySelector(".apply-btn");
  const leftContent = document.querySelector(".left-content");
  const rightContent = document.querySelector(".right-content");
  const modal = document.querySelector(".myModal");
  const modalSuccess = document.querySelector(".modal-success");

  showModalButtons.forEach((showModal) => {
    showModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  });

  closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  kirimButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalSuccess.classList.remove("hidden");
  });

  okButton.addEventListener("click", () => {
    modalSuccess.classList.add("hidden");
    leftContent.classList.remove("hidden");
    rightContent.classList.add("hidden");
  });

  applyBtn.addEventListener("click", () => {
    leftContent.classList.add("hidden");
    rightContent.classList.remove("hidden");
  });
});
