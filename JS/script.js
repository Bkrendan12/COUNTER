var count1 = 0;
var count2 = 0;

var upButton = document.querySelector(".up-btn");
var downButton = document.querySelector(".down-btn");

var counter1 = document.querySelector(".count-1");
var counter2 = document.querySelector(".count-2");

upButton.addEventListener("click", () => {
  count1++;
  counter1.innerHTML = count1;
  flip1();
});

downButton.addEventListener("click", () => {
  count2--;
  counter2.innerHTML = count2;
  flip2();
});

function flip1() {
  if (count1 >= 15) {
    count1--;
    upButton.style.transform = "rotate(180deg)";
  }
}

function flip2() {
  if (count2 <= -15) {
    count2++;
    downButton.style.transform = "rotate(180deg)";
  }
}
