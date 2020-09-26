let dropdownBtn = document.querySelector(".dropdownbtn");
let menuContent = document.querySelector(".content");
dropdownBtn.addEventListener("click", () => {
  if (menuContent.style.display === "") {
    menuContent.style.display = "flex";
  } else {
    menuContent.style.display = "";
  }
});
