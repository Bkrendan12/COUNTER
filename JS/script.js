var count1 = 0;
var count2 = 0;
var up = true


var upButton = document.querySelector(".up-btn");
var downButton = document.querySelector(".down-btn");

var counter1 = document.querySelector(".count-1");
var counter2 = document.querySelector(".count-2");

// upButton.addEventListener("click", () => {
//   counter1.innerHTML = count1;
//   PerformCalc1();
// });

// downButton.addEventListener("click", () => {
//   counter2.innerHTML = count2;
//   PerformCalc2();
// });

upButton.addEventListener("click", () => {
  count1++;
  counter1.innerHTML = count1;
  for (let i = 0; i <= 1; i++) {
    if (count1 <= 15) {
      count1++
  }
    else if (count1 === 15) {
      count1--
      upButton.style.transform = "rotate(180deg)";
    }
}
});


downButton.addEventListener("click", () => {
  count2--;
  counter1.innerHTML = count2;
  for (let i = 0; i <= 1; i--) {
    if (count2 > -15) {
      count2--;
      upButton.style.transform = "rotate(180deg)";
  }
    else if (count2 === -15) {
      count2++
    }
}
});

// function PerformCalc1() {
//   if (upButton == true && count1 <= 15) {
//     count1++

//     if (count1 === 15) {
//       upButton = false;
//     }
//   } else {
//       upButton = false
//       count1--;
//       upButton.style.transform = "rotate(180deg)";

//       if (count1 == 0) {
//         upButton = true;
//       }
//   }
// }

  // function PerformCalc2() {
  //   if (downButton == true && count2 >= -15) {
  //     count2--
  
  //     if (count2 == -15) {
  //       downButton = false;
  //     }
  //   } else {
  //       downButton = false
  //       count2++;
  //       upButton.style.transform = "rotate(180deg)";
  
  //       if (count2 == 0) {
  //         upButton = true;
  //       }
  //   }
  // }



// function flip1() {
//   if (count1 >= 15) {
//     count1--;
   
//   }
// }

// function flip2() {
//   if (count2 <= -15) {
//     count2++;
//     downButton.style.transform = "rotate(180deg)";
//   }
// }
