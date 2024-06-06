var firstIndex = 0;
function automaticaSlide() {
  setTimeout(automaticaSlide, 2000);
  var pics;
  const img = document.querySelectorAll("bgimg");
  for (pics = 0; pics < img.length; pics++) {
    img[pics].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > img.length) {
    firstIndex = 1;
  }
  img[firstIndex - 1].style.dispaly = "block";
}
automaticaSlide();
