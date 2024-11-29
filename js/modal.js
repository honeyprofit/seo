$(document).ready(function () {
  // Select elements
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const closeModal = document.querySelector(".modal-close");
  const bready_box = document.getElementById("item01");
  const sprout_box = document.getElementById("item1");

  // bready
  bready_box.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".modal-images").innerHTML = `
    <img src="images/bready/bready1.jpg" alt="Bready casestudy" />
    <img src="images/bready/bready2.jpg" alt="Bready casestudy" />
    <img src="images/bready/bready3.jpg" alt="Bready casestudy" />
    <img src="images/bready/bready4.png" alt="Bready casestudy" />
    <img src="images/bready/bready5.jpg" alt="Bready casestudy" />
    <img src="images/bready/bready6.jpg" alt="Bready casestudy" />
    <img src="images/bready/bready7.jpg" alt="Bready casestudy" />
    <img src="images/bready/bready8.png" alt="Bready casestudy" />
    `;
    modal.style.display = "flex";
    body.style.overflow = "hidden"; // Disable background scrolling
  });

  //sprout
  sprout_box.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".modal-images").innerHTML = `
    <img src="images/sprout/sprout1.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout2.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout3.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout4.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout5.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout6.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout7.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout8.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout9.jpg" alt="Sprout casestudy" />
    <img src="images/sprout/sprout9_1.jpg" alt="Sprout casestudy" />
    `;
    modal.style.display = "flex";
    body.style.overflow = "hidden"; // Disable background scrolling
  });

  // Close modal on close button click
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "auto"; // Re-enable background scrolling
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
  });
});
