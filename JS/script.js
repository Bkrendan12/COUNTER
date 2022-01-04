var count1 = 0;
var count2 = 0;

var upButton = document.querySelector(".up-btn");
var downButton = document.querySelector(".down-btn");

var counter1 = document.querySelector(".count-1");
var counter2 = document.querySelector(".count-2");

upButton.addEventListener("click", () => {
  if (count1 < 15) {
    count1++;
  } else {
    count1--;
    upButton.style.transform = "rotate(180deg)";
  }
  counter1.innerHTML = count1;
});

downButton.addEventListener("click", () => {
  if (count2 > -15) {
    count2--;
  } else {
    count2++;
    downButton.style.transform = "rotate(180deg)";
  }
  counter2.innerHTML = count2;
});
