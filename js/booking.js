function modifyTextOnSmallScreens() {
    const screenWidth = window.innerWidth;
    const textElement = document.getElementById("textToModify");

    if (screenWidth <= 912) {
      // Adjust this value as needed for md and sm breakpoints
      document.getElementById("hideText1").style.display = "none";
      document.getElementById("hideText2").style.display = "none";
      document.getElementById("hideHr1").style.display = "none";
      document.getElementById("hideHr2").style.display = "none";
      textElement.textContent = "TIDAK PUNYA WAKTU BELANJA?";
    } else {
      document.getElementById("hideText1").style.display = "block";
      document.getElementById("hideText2").style.display = "block";
      document.getElementById("hideHr1").style.display = "block";
      document.getElementById("hideHr2").style.display = "block";
      textElement.textContent = "VOUCHER TREATMENT DAN SKINCARE DIMANA SAJA.";
    }

    textElement.classList.add("lg:text-start", "text-center");
  }

  // Initial call on page load
  modifyTextOnSmallScreens();

  // Call the function whenever the window is resized
  window.addEventListener("resize", modifyTextOnSmallScreens);