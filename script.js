//---------------------------------------ROULETTE--------------------------------------------------------//
////////////////////////////////////////////CREATING DIVS OR NUMBERS///////////////////////////////////////////
createDivs(12, 3, 125, 190, 257, 192, "data-number", "number", "number", [
  3,
  2,
  1
]);
createDivs(12, 3, 125, 190, 257, 158, "data-double", "double", "double1", [
  [0, 3],
  [0, 2],
  [0, 1]
]);
createDivs(12, 2, 158, 225, null, 192, "data-double", "double", "double2", [
  [3, 2],
  [2, 1]
]);
createDivs(12, 1, 290, null, null, 192, "data-threes", "threes", "threes", [
  [1, 2, 3]
]);
createDivs(1, 1, 158, null, null, 158, "data-threes", "threes", "threes", [
  [0, 2, 3]
]);
createDivs(1, 1, 225, null, null, 158, "data-threes", "threes", "threes", [
  [0, 1, 2]
]);

createDivs(
  11,
  2,
  158,
  225,
  null,
  224,
  "data-quadrants",
  "quadrants",
  "quadrants",
  [[3, 2, 6, 5], [2, 1, 5, 4]]
);
createDivs(11, 1, 290, null, null, 224, "data-sixes", "sixes", "sixes", [
  [1, 2, 3, 4, 5, 6]
]);

function createDivs(
  numOfCols,
  numOfRows,
  top1,
  top2,
  top3,
  left,
  attribute,
  nameOfClass,
  classForSwitch,
  initialNumbers
) {
  for (var i = 0; i < numOfCols; i++) {
    var divs = [];
    var numb;
    for (var j = 0; j < numOfRows; j++) {
      divs[j] = document.createElement("div");
      document.querySelector(".tables-wrapper").appendChild(divs[j]);
    }
    if (numOfRows <= 1) {
      divs[0].style.top = top1 + "px";
    } else if (numOfRows <= 2) {
      divs[0].style.top = top1 + "px";
      divs[1].style.top = top2 + "px";
    } else {
      divs[0].style.top = top1 + "px";
      divs[1].style.top = top2 + "px";
      divs[2].style.top = top3 + "px";
    }

    if (i === 0) {
      numb = initialNumbers;
      var styleLeft = left;
      for (var j = 0; j < numOfRows; j++) {
        divs[j].setAttribute(attribute, numb[j]);
        divs[j].style.left = styleLeft + "px";
        divs[j].classList.add("sizeOfDivs", nameOfClass);
      }
    } else {
      styleLeft += 66;
      for (var j = 0; j < numOfRows; j++) {
        switch (classForSwitch) {
          case "number":
            numb[j] += 3;

            break;
          case "double1":
            numb[j][0] = numb[j][1];
            numb[j][1] += 3;
            break;
          case "double2":
            numb[j][0] += 3;
            numb[j][1] += 3;
            break;

          case "threes":
            numb[j][0] += 3;
            numb[j][1] += 3;
            numb[j][2] += 3;
            break;
          case "quadrants":
            numb[j][0] = numb[j][2];
            numb[j][1] = numb[j][3];
            numb[j][2] += 3;
            numb[j][3] += 3;
            break;
          case "sixes":
            numb[j][0] = numb[j][3];
            numb[j][1] = numb[j][4];
            numb[j][2] = numb[j][5];
            numb[j][3] += 3;
            numb[j][4] += 3;
            numb[j][5] += 3;
            break;
        }
        divs[j].setAttribute(attribute, numb[j]);
        divs[j].style.left = styleLeft + "px";
        divs[j].classList.add("sizeOfDivs", nameOfClass);
      }
    }
  }
}

//////////////////////////////////
// for (var i = 0; i < 12; i++) {
//   var divsForNumbers = [];

//   for (var j = 0; j < 3; j++) {
//     divsForNumbers[j] = document.createElement("div");
//     document.querySelector(".tables-wrapper").appendChild(divsForNumbers[j]);
//   }

//   divsForNumbers[0].style.top = "125px";
//   divsForNumbers[1].style.top = "190px";
//   divsForNumbers[2].style.top = "257px";

//   if (i === 0) {
//     var numb = [3, 2, 1];
//     var styleLeftNum = 192;
//     for (var j = 0; j < 3; j++) {
//       divsForNumbers[j].setAttribute("data-number", numb[j]);
//       divsForNumbers[j].style.left = styleLeftNum + "px";
//       divsForNumbers[j].classList.add("sizeOfDivs", "number");
//     }
//   } else {
//     styleLeftNum += 66;

//     for (var j = 0; j < 3; j++) {
//       divsForNumbers[j].setAttribute("data-number", numb[j] + 3);
//       divsForNumbers[j].style.left = styleLeftNum + "px";
//       divsForNumbers[j].classList.add("sizeOfDivs", "number");
//     }
//   }
// }

////////////////////////////////////////////CREATING DIVS FOR TWOS///////////////////////////////////////////////////////////////

//////////1st row of twos////////////
// var div1 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div1);
// div1.style.top = "125px";
// var listDouble1 = [0, 3];
// div1.setAttribute("data-double", listDouble1);
// div1.classList.add("sizeOfDivs", "double");
// var styleLeft1 = 158;
// div1.style.left = 158 + "px";

// div1.addEventListener("mouseover", function(e) {
//   for (var i = 0; i < listDouble1.length; i++) {
//     [...document.querySelectorAll(".numberForCss")].forEach(nums => {
//       if (
//         nums.textContent ==
//         e.target
//           .getAttribute("data-double")
//           .split(",")
//           .map(function(item) {
//             return parseInt(item, 10);
//           })[i]
//       ) {
//         console.log("found");
//         console.log(nums);
//         console.log(listDouble1);
//         nums.parentElement.classList.add("hoverColor");
//       }
//     });
//   }
// });
// //////////2nd row of twos////////////
// var div2 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div2);
// div2.style.top = "190px";
// var styleLeft2 = 158;
// div2.style.left = 158 + "px";
// var listDouble2 = [0, 2];
// div2.setAttribute("data-double", listDouble2.join());
// div2.classList.add("sizeOfDivs", "double");

// //////////3rd row of twos////////////
// var div3 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div3);
// div3.style.top = "257px";
// var styleLeft3 = 158;
// div3.style.left = 158 + "px";
// var listDouble3 = [0, 1];
// div3.setAttribute("data-double", listDouble3.join());
// div3.classList.add("sizeOfDivs", "double");

// for (var i = 0; i < 11; i++) {
//   div1 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div1);
//   div1.style.top = "125px";
//   styleLeft1 += 66;
//   div1.style.left = styleLeft1 + "px";
//   listDouble1[0] = listDouble1[1];
//   listDouble1[1] += 3;
//   div1.setAttribute("data-double", listDouble1.join());
//   div1.classList.add("sizeOfDivs", "double");
//   ///////////////div2/////////////////////
//   div2 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div2);
//   div2.style.top = "190px";
//   styleLeft2 += 66;
//   div2.style.left = styleLeft2 + "px";
//   listDouble2[0] = listDouble2[1];
//   listDouble2[1] += 3;
//   div2.setAttribute("data-double", listDouble2.join());
//   div2.classList.add("sizeOfDivs", "double");
//   //////////////div3/////////////////////////
//   div3 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div3);
//   div3.style.top = "257px";
//   styleLeft3 += 66;
//   div3.style.left = styleLeft3 + "px";
//   listDouble3[0] = listDouble3[1];
//   listDouble3[1] += 3;
//   div3.setAttribute("data-double", listDouble3.join());
//   div3.classList.add("sizeOfDivs", "double");
// }

// //////////1st row of twos vertical////////////
// var div4 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div4);
// div4.style.top = "158px";
// var styleLeft4 = 192;
// div4.style.left = 192 + "px";
// var listDouble4 = [3, 2];
// div4.setAttribute("data-double", listDouble4.join());
// div4.classList.add("sizeOfDivs", "double");

// //////////2nd row of twos vertical////////////
// var div5 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div5);
// div5.style.top = "225px";
// var styleLeft5 = 192;
// div5.style.left = 192 + "px";
// var listDouble5 = [2, 1];
// div5.setAttribute("data-double", listDouble5.join());
// div5.classList.add("sizeOfDivs", "double");

// for (var i = 0; i < 11; i++) {
//   div4 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div4);
//   div4.style.top = "158px";
//   styleLeft4 += 66;
//   div4.style.left = styleLeft4 + "px";
//   listDouble4[0] += 3;
//   listDouble4[1] += 3;
//   div4.setAttribute("data-double", listDouble4.join());
//   div4.classList.add("sizeOfDivs", "double");
//   ///////////////div5/////////////////////
//   div5 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div5);
//   div5.style.top = "225px";
//   styleLeft5 += 66;
//   div5.style.left = styleLeft5 + "px";
//   listDouble5[0] += 3;
//   listDouble5[1] += 3;
//   div5.setAttribute("data-double", listDouble5.join());
//   div5.classList.add("sizeOfDivs", "double");
// }

// ////////////////////////////////////////////CREATING DIVS FOR quadrants/////////////////////////////////////////////////////
// var div6 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div6);
// div6.style.top = "158px";
// var styleLeft6 = 224;
// div6.style.left = 224 + "px";
// var listQuadrants1 = [3, 2, 6, 5];
// div6.setAttribute("data-quadrants", listQuadrants1.join());
// div6.classList.add("sizeOfDivs", "quadrants");

// var div7 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div7);
// div7.style.top = "225px";
// var styleLeft7 = 224;
// div7.style.left = 224 + "px";
// var listQuadrants2 = [2, 1, 5, 4];
// div7.setAttribute("data-quadrants", listQuadrants2.join());
// div7.classList.add("sizeOfDivs", "quadrants");

// for (var i = 0; i < 10; i++) {
//   div6 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div6);
//   div6.style.top = "158px";
//   styleLeft6 += 66;
//   div6.style.left = styleLeft6 + "px";
//   listQuadrants1[0] = listQuadrants1[2];
//   listQuadrants1[1] = listQuadrants1[3];
//   listQuadrants1[2] += 3;
//   listQuadrants1[3] += 3;
//   div6.setAttribute("data-quadrants", listQuadrants1.join());
//   div6.classList.add("sizeOfDivs", "quadrants");
//   ///////////////div7/////////////////////
//   div7 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div7);
//   div7.style.top = "225px";
//   styleLeft7 += 66;
//   div7.style.left = styleLeft7 + "px";
//   listQuadrants2[0] = listQuadrants2[2];
//   listQuadrants2[1] = listQuadrants2[3];
//   listQuadrants2[2] += 3;
//   listQuadrants2[3] += 3;
//   div7.setAttribute("data-quadrants", listQuadrants2.join());
//   div7.classList.add("sizeOfDivs", "quadrants");
// }

// //////////////////////////////////////create divs for threes//////////////////////////////////////////////////////////
// var div10 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div10);
// div10.style.top = "158px";
// var styleLeft10 = 158;
// div10.style.left = 158 + "px";
// var listThrees10 = [0, 2, 3];
// div10.setAttribute("data-threes", listThrees10.join());
// div10.classList.add("sizeOfDivs", "threes");

// var div11 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div11);
// div11.style.top = "225px";
// var styleLeft11 = 158;
// div11.style.left = 158 + "px";
// var listThrees11 = [0, 1, 2];
// div11.setAttribute("data-threes", listThrees11.join());
// div11.classList.add("sizeOfDivs", "threes");

// var div8 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div8);
// div8.style.top = "290px";
// div8.className = "sizeOfDivs";
// var styleLeft8 = 192;
// div8.style.left = 192 + "px";
// var listThrees1 = [1, 2, 3];
// div8.setAttribute("data-threes", listThrees1.join());
// div8.classList.add("sizeOfDivs", "threes");

// for (var i = 0; i < 11; i++) {
//   div8 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div8);
//   div8.style.top = "290px";
//   styleLeft8 += 66;
//   div8.style.left = styleLeft8 + "px";
//   listThrees1[0] += 3;
//   listThrees1[1] += 3;
//   listThrees1[2] += 3;
//   div8.setAttribute("data-threes", listThrees1.join());
//   div8.classList.add("sizeOfDivs", "threes");
// }

// ///////////////////////////////create divs of sixes//////////////////////////////////

// var div9 = document.createElement("div");
// document.querySelector(".tables-wrapper").appendChild(div9);
// div9.style.top = "290px";
// div9.className = "sizeOfDivs";
// var styleLeft8 = 224;
// div9.style.left = 224 + "px";
// var listSixes1 = [1, 2, 3, 4, 5, 6];
// div9.setAttribute("data-sixes", listSixes1.join());
// div9.classList.add("sizeOfDivs", "sixes");

// for (var i = 0; i < 10; i++) {
//   div9 = document.createElement("div");
//   document.querySelector(".tables-wrapper").appendChild(div9);
//   div9.style.top = "290px";
//   styleLeft8 += 66;
//   div9.style.left = styleLeft8 + "px";
//   listSixes1[0] = listSixes1[3];
//   listSixes1[1] = listSixes1[4];
//   listSixes1[2] = listSixes1[5];
//   listSixes1[3] += 3;
//   listSixes1[4] += 3;
//   listSixes1[5] += 3;
//   div9.setAttribute("data-sixes", listSixes1.join());
//   div9.classList.add("sizeOfDivs", "sixes");
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
var budget = 100;
var numberOn = false;
var doubleOn = false;
var threesOn = false;
var quadrantsOn = false;
var sixesOn = false;
var colorOn = false;
var numberTypeOn = false;
var dozenOn = false;
var eighteenOn = false;
var rowsOn = false;
var oneEuroOn = false;
var twoEurosOn = false;
var fiveEurosOn = false;
var luckyNumberDisplayOff = true;

document.querySelector(".budgetNumber").textContent = budget;
///////////////////////////////////////////
///////////////////////////////////////creating number objects//////////////////////////////////
function Number(number, color, numberKind) {
  this.number = number;
  this.color = color;
  this.numberKind = numberKind;
}
var numberList = [];

for (var i = 0; i <= 36; i++) {
  if (i === 0) {
    numberList[i] = new Number(i, null, "even");
  } else if (i <= 10 || (i >= 19 && i <= 28)) {
    if (i % 2 === 0) {
      numberList[i] = new Number(i, "black", "even");
    } else {
      numberList[i] = new Number(i, "red", "odd");
    }
  } else {
    if (i % 2 === 0) {
      numberList[i] = new Number(i, "red", "even");
    } else {
      numberList[i] = new Number(i, "black", "odd");
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

// function hoverEffect(nameOfClass) {
//   [...document.querySelectorAll("."+nameOfClass)].forEach(el=>el.addEventListener("mouseover", function(e) {

// if(nameOfClass==="color"){
//   numberList.forEach(obj=>{if(obj.color===e.target.getAttribute("data-color")){
//     [...document.querySelectorAll(".numberForCss")].forEach(n=>{if(obj.number==n.textcontent){
//       n.parentElement.classList.add("hoverColor");
//     }})
//   }

// }
// console.log("sizeOfDivs");

hoverEffect("color", "mouseover");
hoverEffect("numberType", "mouseover");
hoverEffect("number", "mouseover", "data-number");
hoverEffect("dozen", "mouseover", "data-dozen");
hoverEffect("rows", "mouseover", "data-rows");
hoverEffect("double", "mouseover", "data-double");
hoverEffect("threes", "mouseover", "data-threes");
hoverEffect("quadrants", "mouseover", "data-quadrants");
hoverEffect("sixes", "mouseover", "data-sixes");
hoverEffect("eighteen", "mouseover", "data-eighteen");

hoverEffect("color", "mouseout");
hoverEffect("numberType", "mouseout");
hoverEffect("number", "mouseout", "data-number");
hoverEffect("dozen", "mouseout", "data-dozen");
hoverEffect("rows", "mouseout", "data-rows");
hoverEffect("double", "mouseout", "data-double");
hoverEffect("threes", "mouseout", "data-threes");
hoverEffect("quadrants", "mouseout", "data-quadrants");
hoverEffect("sixes", "mouseout", "data-sixes");
hoverEffect("eighteen", "mouseout", "data-eighteen");

function hoverEffect(nameOfClass, eventType, attribute) {
  [...document.querySelectorAll("." + nameOfClass)].forEach(el => {
    el.addEventListener(eventType, function(e) {
      if (nameOfClass === "color") {
        numberList.forEach(obj => {
          if (obj.color === e.target.getAttribute("data-color")) {
            [...document.querySelectorAll(".numberForCss")].forEach(n => {
              if (obj.number == n.textContent) {
                if (event.type === "mouseover") {
                  e.target.parentElement.classList.add("hoverColor");
                  n.parentElement.classList.add("hoverColor");
                } else {
                  n.parentElement.classList.remove("hoverColor");
                  e.target.parentElement.classList.remove("hoverColor");
                }
              }
            });
          }
        });
      } else if (nameOfClass === "numberType") {
        numberList.forEach(obj => {
          if (obj.numberKind === e.target.getAttribute("data-numbertype")) {
            [...document.querySelectorAll(".numberForCss")].forEach(n => {
              if (obj.number == n.textContent) {
                if (event.type === "mouseover") {
                  n.parentElement.classList.add("hoverColor");
                  e.target.classList.add("hoverColor");
                } else {
                  n.parentElement.classList.remove("hoverColor");
                  e.target.classList.remove("hoverColor");
                }
              }
            });
          }
        });
      } else {
        var attributeInList = e.target
          .getAttribute(attribute)
          .split(",")
          .map(function(item) {
            return parseInt(item, 10);
          });
        for (var i = 0; i < attributeInList.length; i++) {
          [...document.querySelectorAll(".numberForCss")].forEach(nums => {
            if (
              nums.textContent ==
              e.target
                .getAttribute(attribute)
                .split(",")
                .map(function(item) {
                  return parseInt(item, 10);
                })[i]
            ) {
              if (event.type === "mouseover") {
                nums.parentElement.classList.add("hoverColor");
                if (
                  nameOfClass === "rows" ||
                  nameOfClass === "eighteen" ||
                  nameOfClass === "dozen"
                ) {
                  e.target.classList.add("hoverColor");
                }
              } else {
                nums.parentElement.classList.remove("hoverColor");
                e.target.classList.remove("hoverColor");
              }
            }
          });
        }
      }
    });
  });
}

// removehoverEffect("color");
// removehoverEffect("numberType");
// removehoverEffect("number", "data-number");
// removehoverEffect("dozen", "data-dozen");
// removehoverEffect("rows", "data-rows");
// removehoverEffect("double", "data-double");
// removehoverEffect("threes", "data-threes");
// removehoverEffect("quadrants", "data-quadrants");
// removehoverEffect("sixes", "data-sixes");

// function removehoverEffect(nameOfClass, attribute) {
//   [...document.querySelectorAll("." + nameOfClass)].forEach(el => {
//     el.addEventListener("mouseout", function(e) {
//       if (nameOfClass === "color") {
//         numberList.forEach(obj => {
//           if (obj.color === e.target.getAttribute("data-color")) {
//             [...document.querySelectorAll(".numberForCss")].forEach(n => {
//               if (obj.number == n.textContent) {
//                 n.parentElement.classList.remove("hoverColor");
//               }
//             });
//           }
//         });
//       } else if (nameOfClass === "numberType") {
//         numberList.forEach(obj => {
//           if (obj.numberKind === e.target.getAttribute("data-numbertype")) {
//             [...document.querySelectorAll(".numberForCss")].forEach(n => {
//               if (obj.number == n.textContent) {
//                 n.parentElement.classList.remove("hoverColor");
//               }
//             });
//           }
//         });
//       } else {
//         var attributeInList = e.target
//           .getAttribute(attribute)
//           .split(",")
//           .map(function(item) {
//             return parseInt(item, 10);
//           });
//         for (var i = 0; i < attributeInList.length; i++) {
//           [...document.querySelectorAll(".numberForCss")].forEach(nums => {
//             if (
//               nums.textContent ==
//               e.target
//                 .getAttribute(attribute)
//                 .split(",")
//                 .map(function(item) {
//                   return parseInt(item, 10);
//                 })[i]
//             ) {
//               console.log("found");
//               console.log(nums);

//               nums.parentElement.classList.remove("hoverColor");
//             }
//           });
//         }
//       }
//     });
//   });
// }
// var attributeInList=e.target
//           .getAttribute(attribute)
//           .split(",")
//           .map(function(item) {
//             return parseInt(item, 10);
//           })
//   for (var i = 0; i < attributeInList; i++) {
//     [...document.querySelectorAll(".numberForCss")].forEach(nums => {
//       if (
//         nums.textContent ==
//         e.target
//           .getAttribute(attribute)
//           .split(",")
//           .map(function(item) {
//             return parseInt(item, 10);
//           })[i]
//       ) {
//         console.log("found");
//         console.log(nums);
//         console.log(numb);
//         nums.parentElement.classList.add("hoverColor");
//       }
//     });
//   }
// }))}
// ))}

/////////////////////////////chip choices////////////////////////////////
var betOn = false;
document.querySelector(".chip-1").addEventListener("click", function(e) {
  if (luckyNumberDisplayOff) {
    oneEuroOn = true;
    twoEurosOn = false;
    fiveEurosOn = false;
    betOn = true;
    document.querySelector(".chip-1").style.boxShadow = " 0px 0px 15px white";
    document.querySelector(".chip-2").style.boxShadow = " 0px 0px white";
    document.querySelector(".chip-5").style.boxShadow = " 0px 0px white";
  }
});

document.querySelector(".chip-2").addEventListener("click", function(e) {
  if (luckyNumberDisplayOff) {
    oneEuroOn = false;
    twoEurosOn = true;
    fiveEurosOn = false;
    betOn = true;
    document.querySelector(".chip-2").style.boxShadow = " 0px 0px 15px white";
    document.querySelector(".chip-1").style.boxShadow = " 0px 0px white";
    document.querySelector(".chip-5").style.boxShadow = " 0px 0px white";
  }
});

document.querySelector(".chip-5").addEventListener("click", function(e) {
  if (luckyNumberDisplayOff) {
    oneEuroOn = false;
    twoEurosOn = false;
    fiveEurosOn = true;
    betOn = true;
    document.querySelector(".chip-5").style.boxShadow = " 0px 0px 15px white";
    document.querySelector(".chip-1").style.boxShadow = " 0px 0px white";
    document.querySelector(".chip-2").style.boxShadow = " 0px 0px white";
  }
});
/////////////////////////////////////Bet choices/////////////////////////////////////////////////////////

//////////////////////////////////choose number
var bet = 0;

var listBetOnNumbers = [];
var listOfBetsForNumbers = [];
bets(listOfBetsForNumbers, listBetOnNumbers, "number", "number");

var listBetOnDoubles = [];
var listOfBetsForDoubles = [];
bets(listOfBetsForDoubles, listBetOnDoubles, "double", "double");

var listBetOnThrees = [];
var listOfBetsForThrees = [];
bets(listOfBetsForThrees, listBetOnThrees, "threes", "threes");

var listBetOnQuadrants = [];
var listOfBetsForQuadrants = [];
bets(listOfBetsForQuadrants, listBetOnQuadrants, "quadrants", "quadrants");

var listBetOnSixes = [];
var listOfBetsForSixes = [];
bets(listOfBetsForSixes, listBetOnSixes, "sixes", "sixes");

var listBetOnRows = [];
var listOfBetsForRows = [];
bets(listOfBetsForRows, listBetOnRows, "rows", "rows");

var listBetOnDozen = [];
var listOfBetsForDozen = [];
bets(listOfBetsForDozen, listBetOnDozen, "dozen", "dozen");

var listBetOnEighteen = [];
var listOfBetsForEighteen = [];
bets(listOfBetsForEighteen, listBetOnEighteen, "eighteen", "eighteen");

var listBetOnColor = [];
var listOfBetsForColor = [];
bets(listOfBetsForColor, listBetOnColor, "color", "color");

var listBetOnNumberType = [];
var listOfBetsForNumberType = [];
bets(listOfBetsForNumberType, listBetOnNumberType, "numbertype", "numberType");

function bets(
  listOfMoneyBets,
  listOfNumberBets,
  contentOfTarget,
  classOfTarget
) {
  var clicks = 0;
  var lala = 50;
  [...document.querySelectorAll("." + classOfTarget)].forEach(num => {
    num.addEventListener("click", function(e) {
      if (luckyNumberDisplayOff) {
        if (betOn) {
          clicks += 1;
          var chipDiv = document.createElement("div");
          if (clicks > 1) {
            lala -= 1;
            chipDiv.style.top = lala + "%";
          }

          // chipDiv.classList.add("small", "flat", "pokerchip", "blue");
          chipDiv.setAttribute(
            "data-" + contentOfTarget,
            e.target.getAttribute("data-" + contentOfTarget)
          );
          e.target.appendChild(chipDiv);

          if (classOfTarget === "number") {
            numberOn = true;
          } else if (classOfTarget === "double") {
            doubleOn = true;
          } else if (classOfTarget === "threes") {
            threesOn = true;
          } else if (classOfTarget === "quadrants") {
            quadrantsOn = true;
          } else if (classOfTarget === "rows") {
            rowsOn = true;
          } else if (classOfTarget === "dozen") {
            dozenOn = true;
          } else if (classOfTarget === "eighteen") {
            eighteenOn = true;
          } else if (classOfTarget === "color") {
            colorOn = true;
          } else if (classOfTarget === "numberType") {
            numberTypeOn = true;
          } else if (classOfTarget === "sixes") {
            sixesOn = true;
          }

          if (oneEuroOn) {
            bet = 1;
            chipDiv.classList.add("small", "flat", "red");
          } else if (twoEurosOn) {
            chipDiv.classList.add("small", "flat", "gold");
            bet = 2;
          } else if (fiveEurosOn) {
            chipDiv.classList.add("small", "flat", "black");
            bet = 5;
          }
          budget -= bet;
          document.querySelector(".budgetNumber").textContent = budget;

          console.log("clicked");
          var sameOn = false;
          var element;
          for (var i = 0; i < listOfNumberBets.length; i++) {
            if (
              e.target.getAttribute("data-" + contentOfTarget) ===
              listOfNumberBets[i]
            ) {
              sameOn = true;
              element = i;
              break;
            }
          }

          if (sameOn) {
            listOfMoneyBets[element] += bet;
          } else {
            listOfNumberBets.push(
              e.target.getAttribute("data-" + contentOfTarget)
            );
            listOfMoneyBets.push(bet);
          }
        }
      }
    });
  });
}

///////////////////////spin roulette////////////////////////////////////////

document.querySelector(".spin").addEventListener("click", function() {
  if (luckyNumberDisplayOff) {
    var totalWinnings = 0;

    //////////////////////////////////////////generate a random number//////////////////////////////////////////

    var luckyNumber = Math.floor(Math.random() * 36);
    /////////////////////////////
    document.querySelector(".displayLuckyNumber").innerHTML = luckyNumber;

    //////////////////////////////////find number in objects

    for (var i = 0; i < numberList.length; i++) {
      if (luckyNumber === numberList[i].number) {
        luckyNumber = numberList[i];
        console.log(luckyNumber);
        break;
      }
    }
    if (luckyNumber.color === "red") {
      document.querySelector(".displayLuckyNumber").style.backgroundColor =
        "rgb(122, 2, 2)";
    } else {
      document.querySelector(".displayLuckyNumber").style.backgroundColor =
        luckyNumber.color;
    }

    document.querySelector(".alertNumber").style.display = "block";
    luckyNumberDisplayOff = false;
    setTimeout(function() {
      document.querySelector(".alertNumber").style.display = "none";
      luckyNumberDisplayOff = true;
    }, 3000);
    ////////////////////////
    results(numberOn, listBetOnNumbers, listOfBetsForNumbers, 36);
    results(doubleOn, listBetOnDoubles, listOfBetsForDoubles, 18);
    results(threesOn, listBetOnThrees, listOfBetsForThrees, 12);
    results(quadrantsOn, listBetOnQuadrants, listOfBetsForQuadrants, 9);
    results(sixesOn, listBetOnSixes, listOfBetsForSixes, 6);
    results(dozenOn, listBetOnDozen, listOfBetsForDozen, 3);
    results(eighteenOn, listBetOnEighteen, listOfBetsForEighteen, 2);
    results(rowsOn, listBetOnRows, listOfBetsForRows, 3);
    resultsForColor(colorOn, listBetOnColor, listOfBetsForColor, 2);
    resultsForNumberType(
      numberTypeOn,
      listBetOnNumberType,
      listOfBetsForNumberType,
      2
    );

    function resultsForColor(typeOn, listOfColors, listOfBets, multiplier) {
      if (typeOn) {
        for (var i = 0; i < listOfColors.length; i++) {
          if (luckyNumber.color === listOfColors[i]) {
            totalWinnings += listOfBets[i] * multiplier;
          }
        }
        budget += totalWinnings;
        document.querySelector(".budgetNumber").textContent = budget;
      }
    }

    function resultsForNumberType(
      typeOn,
      listOfNumberTypes,
      listOfBets,
      multiplier
    ) {
      if (typeOn) {
        for (var i = 0; i < listOfNumberTypes.length; i++) {
          if (luckyNumber.numberKind === listOfNumberTypes[i]) {
            totalWinnings += listOfBets[i] * multiplier;
          }
        }
        budget += totalWinnings;
        document.querySelector(".budgetNumber").textContent = budget;
      }
    }

    function results(typeOn, listOfNumbers, listOfBets, multiplier) {
      if (typeOn) {
        for (var i = 0; i < listOfNumbers.length; i++) {
          listOfNumbers[i] = listOfNumbers[i].split(",").map(function(item) {
            return parseInt(item, 10);
          });
          for (var j = 0; j < listOfNumbers[i].length; j++) {
            if (luckyNumber.number === listOfNumbers[i][j]) {
              totalWinnings += listOfBets[i] * multiplier;
            }
          }
        }
        budget += totalWinnings;
        document.querySelector(".budgetNumber").textContent = budget;
      }
    }
    document.querySelector(".displayWinnings").innerHTML =
      " Total winnings " + totalWinnings;
    reset();
  }
});

function reset() {
  numberOn = false;
  doubleOn = false;
  threesOn = false;
  quadrantsOn = false;
  sixesOn = false;
  colorOn = false;
  numberTypeOn = false;
  dozenOn = false;
  eighteenOn = false;
  rowsOn = false;
  // oneEuroOn = false;
  // twoEurosOn = false;
  // fiveEurosOn = false;
  // betOn = false;
  clearAr(listBetOnNumbers);
  clearAr(listOfBetsForNumbers);
  clearAr(listBetOnDoubles);
  clearAr(listOfBetsForDoubles);
  clearAr(listBetOnThrees);
  clearAr(listOfBetsForThrees);
  clearAr(listBetOnQuadrants);
  clearAr(listOfBetsForQuadrants);
  clearAr(listBetOnSixes);
  clearAr(listOfBetsForSixes);
  clearAr(listBetOnRows);
  clearAr(listOfBetsForRows);
  clearAr(listBetOnDozen);
  clearAr(listOfBetsForDozen);
  clearAr(listBetOnDozen);
  clearAr(listOfBetsForDozen);
  clearAr(listBetOnEighteen);
  clearAr(listOfBetsForEighteen);
  clearAr(listBetOnColor);
  clearAr(listOfBetsForColor);
  clearAr(listBetOnNumberType);
  clearAr(listOfBetsForNumberType);
  [...document.querySelectorAll(".small")].forEach(elem => elem.remove());
}

function clearAr(arr) {
  for (var i = arr.length; i > 0; i--) {
    arr.pop();
  }
}
