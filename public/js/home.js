let loadMoreBtn = document.querySelector("#more-btn");
let currentItem = 6;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".container-fluid_1 .row .col")];
  for (var i = currentItem; i < currentItem + 6; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 6;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

