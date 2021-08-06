const nexts = document.getElementById("next");
const prevs = document.getElementById("prev");
const picture = document.getElementById("picture");
let items = document.querySelectorAll(".carousel__item");
const counterImg = document.querySelectorAll(".clip-me");
let counter = 0;

window.addEventListener("load", () => {
  counterImg[0].textContent = counter + 1;
  counterImg[1].textContent = items.length;
});

nexts.addEventListener("click", () => {
  counter++;
  counter < items.length ? desplasar(counter) : (counter = items.length - 1);
  pictureImg(counter + 1);
  counterImg[0].textContent = counter + 1;
});
prevs.addEventListener("click", () => {
  counter--;
  counter >= 0 ? desplasar(counter) : (counter = 0);
  pictureImg(counter + 1);
  counterImg[0].textContent = counter + 1;
});

function desplasar(n) {
  items.forEach((item) => {
    item.style.transform = `translateX(-${n * 100}%)`;
  });
}
function pictureImg(number) {
  picture.src = `./assets/img/g${number}.jpg`;
}
