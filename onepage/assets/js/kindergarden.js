window.onload = function () {
  var hamBtn = document.getElementById("ghost_menu");
  console.log(hamBtn);
  var hiddenM = document.querySelector(".ghost_list");
  console.log(hiddenM);
  var whole = document.querySelector("html, body");
  console.log(whole);

  let subToggle = true;
  hamBtn.addEventListener("click", function (e) {
    if (subToggle) {
      hiddenM.style.setProperty('right', '0');
      whole.style.setProperty('overflow-y', 'hidden');
      whole.style.setProperty("backgroundColor", "black");
    } else {
      hiddenM.style.setProperty('right', '-300px');
      whole.style.setProperty('overflow-y', 'visible');
    }
    subToggle = !subToggle;
  })
}
