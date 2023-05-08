const bnt1 = document.querySelector('.button-prev');
const bnt = document.querySelector('.button-next');
const spanElement = document.querySelector('.Hero-slider-nuber');
bnt.addEventListener('click', clickplus);
bnt1.addEventListener('click', clickminus);
let count = 1;
function clickplus() {
  count++;
  spanElement.innerHTML = ${count};
}
function clickminus() {
  count--;
    spanElement.innerHTML = ${count};

};
  if (spanElement <= 0) {
    count = 0;
  }
  if (spanElement >= 5) {
    count = 5;
  }