//---------------------------------------ROULETTE--------------------------------------------------------//

////////////////////////////////////////////CREATING DIVS FOR TWOS///////////////////////////////////////////////////////////////

//////////1st row of twos////////////
var div1 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div1);
div1.style.top = "125px";
var listDouble1 = [0, 3];
div1.setAttribute("data-double", listDouble1.join());
div1.classList.add("lala", "double");
var styleLeft1 = 158;
div1.style.left = 158 + "px";

//////////2nd row of twos////////////
var div2 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div2);
div2.style.top = "190px";
var styleLeft2 = 158;
div2.style.left = 158 + "px";
var listDouble2 = [0, 2];
div2.setAttribute("data-double", listDouble2.join());
div2.classList.add("lala", "double");

//////////3rd row of twos////////////
var div3 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div3);
div3.style.top = "257px";
var styleLeft3 = 158;
div3.style.left = 158 + "px";
var listDouble3 = [0, 1];
div3.setAttribute("data-double", listDouble3.join());
div3.classList.add("lala", "double");

for (var i = 0; i < 11; i++) {
  div1 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div1);
  div1.style.top = "125px";
  styleLeft1 += 66;
  div1.style.left = styleLeft1 + "px";
  listDouble1[0] = listDouble1[1];
  listDouble1[1] += 3;
  div1.setAttribute("data-double", listDouble1.join());
  div1.classList.add("lala", "double");
  ///////////////div2/////////////////////
  div2 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div2);
  div2.style.top = "190px";
  styleLeft2 += 66;
  div2.style.left = styleLeft2 + "px";
  listDouble2[0] = listDouble2[1];
  listDouble2[1] += 3;
  div2.setAttribute("data-double", listDouble2.join());
  div2.classList.add("lala", "double");
  //////////////div3/////////////////////////
  div3 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div3);
  div3.style.top = "257px";
  styleLeft3 += 66;
  div3.style.left = styleLeft3 + "px";
  listDouble3[0] = listDouble3[1];
  listDouble3[1] += 3;
  div3.setAttribute("data-double", listDouble3.join());
  div3.classList.add("lala", "double");
}

//////////1st row of twos vertical////////////
var div4 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div4);
div4.style.top = "158px";
var styleLeft4 = 192;
div4.style.left = 192 + "px";
var listDouble4 = [3, 2];
div4.setAttribute("data-double", listDouble4.join());
div4.classList.add("lala", "double");

//////////2nd row of twos vertical////////////
var div5 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div5);
div5.style.top = "225px";
var styleLeft5 = 192;
div5.style.left = 192 + "px";
var listDouble5 = [2, 1];
div5.setAttribute("data-double", listDouble5.join());
div5.classList.add("lala", "double");

for (var i = 0; i < 11; i++) {
  div4 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div4);
  div4.style.top = "158px";
  styleLeft4 += 66;
  div4.style.left = styleLeft4 + "px";
  listDouble4[0] += 3;
  listDouble4[1] += 3;
  div4.setAttribute("data-double", listDouble4.join());
  div4.classList.add("lala", "double");
  ///////////////div5/////////////////////
  div5 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div5);
  div5.style.top = "225px";
  styleLeft5 += 66;
  div5.style.left = styleLeft5 + "px";
  listDouble5[0] += 3;
  listDouble5[1] += 3;
  div5.setAttribute("data-double", listDouble5.join());
  div5.classList.add("lala", "double");
}

////////////////////////////////////////////CREATING DIVS FOR quadrants/////////////////////////////////////////////////////
var div6 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div6);
div6.style.top = "158px";
var styleLeft6 = 224;
div6.style.left = 224 + "px";
var listQuadrants1 = [3, 2, 6, 5];
div6.setAttribute("data-quadrants", listQuadrants1.join());
div6.classList.add("lala", "quadrants");

var div7 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div7);
div7.style.top = "225px";
var styleLeft7 = 224;
div7.style.left = 224 + "px";
var listQuadrants2 = [2, 1, 5, 4];
div7.setAttribute("data-quadrants", listQuadrants2.join());
div7.classList.add("lala", "quadrants");

for (var i = 0; i < 10; i++) {
  div6 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div6);
  div6.style.top = "158px";
  styleLeft6 += 66;
  div6.style.left = styleLeft6 + "px";
  listQuadrants1[0] = listQuadrants1[2];
  listQuadrants1[1] = listQuadrants1[3];
  listQuadrants1[2] += 3;
  listQuadrants1[3] += 3;
  div6.setAttribute("data-quadrants", listQuadrants1.join());
  div6.classList.add("lala", "quadrants");
  ///////////////div7/////////////////////
  div7 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div7);
  div7.style.top = "225px";
  styleLeft7 += 66;
  div7.style.left = styleLeft7 + "px";
  listQuadrants2[0] = listQuadrants2[2];
  listQuadrants2[1] = listQuadrants2[3];
  listQuadrants2[2] += 3;
  listQuadrants2[3] += 3;
  div7.setAttribute("data-quadrants", listQuadrants2.join());
  div7.classList.add("lala", "quadrants");
}

//////////////////////////////////////create divs for threes//////////////////////////////////////////////////////////
var div10 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div10);
div10.style.top = "158px";
var styleLeft10 = 158;
div10.style.left = 158 + "px";
var listThrees10 = [0, 2, 3];
div10.setAttribute("data-threes", listThrees10.join());
div10.classList.add("lala", "threes");

var div11 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div11);
div11.style.top = "225px";
var styleLeft11 = 158;
div11.style.left = 158 + "px";
var listThrees11 = [0, 1, 2];
div11.setAttribute("data-threes", listThrees11.join());
div11.classList.add("lala", "threes");

var div8 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div8);
div8.style.top = "290px";
div8.className = "lala";
var styleLeft8 = 192;
div8.style.left = 192 + "px";
var listThrees1 = [1, 2, 3];
div8.setAttribute("data-threes", listThrees1.join());
div8.classList.add("lala", "threes");

for (var i = 0; i < 11; i++) {
  div8 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div8);
  div8.style.top = "290px";
  styleLeft8 += 66;
  div8.style.left = styleLeft8 + "px";
  listThrees1[0] += 3;
  listThrees1[1] += 3;
  listThrees1[2] += 3;
  div8.setAttribute("data-threes", listThrees1.join());
  div8.classList.add("lala", "threes");
}

///////////////////////////////create divs of sixes//////////////////////////////////

var div9 = document.createElement("div");
document.querySelector(".tables-wrapper").appendChild(div9);
div9.style.top = "290px";
div9.className = "lala";
var styleLeft8 = 224;
div9.style.left = 224 + "px";
var listSixes1 = [1, 2, 3, 4, 5, 6];
div9.setAttribute("data-sixes", listSixes1.join());
div9.classList.add("lala", "sixes");

for (var i = 0; i < 10; i++) {
  div9 = document.createElement("div");
  document.querySelector(".tables-wrapper").appendChild(div9);
  div9.style.top = "290px";
  styleLeft8 += 66;
  div9.style.left = styleLeft8 + "px";
  listSixes1[0] = listSixes1[3];
  listSixes1[1] = listSixes1[4];
  listSixes1[2] = listSixes1[5];
  listSixes1[3] += 3;
  listSixes1[4] += 3;
  listSixes1[5] += 3;
  div9.setAttribute("data-sixes", listSixes1.join());
  div9.classList.add("lala", "sixes");
}

[...document.querySelectorAll(".number")].forEach(el => {
  el.setAttribute("data-number", el.textContent);
});
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
/////////////////////////////chip choices////////////////////////////////
var betOn = false;
document.querySelector(".chip-1").addEventListener("click", function(e) {
  oneEuroOn = true;
  twoEurosOn = false;
  fiveEurosOn = false;
  betOn = true;
});

document.querySelector(".chip-2").addEventListener("click", function(e) {
  oneEuroOn = false;
  twoEurosOn = true;
  fiveEurosOn = false;
  betOn = true;
});

document.querySelector(".chip-5").addEventListener("click", function(e) {
  oneEuroOn = false;
  twoEurosOn = false;
  fiveEurosOn = true;
  betOn = true;
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
  [...document.querySelectorAll("." + classOfTarget)].forEach(num => {
    num.addEventListener("click", function(e) {
      if (betOn) {
        var chipDiv = document.createElement("div");
        chipDiv.classList.add("small", "flat");
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
          doubleOn = true;
        } else if (classOfTarget === "color") {
          colorOn = true;
        } else if (classOfTarget === "numberType") {
          numberTypeOn = true;
        } else if (classOfTarget === "sixes") {
          sixesOn = true;
        }

        if (oneEuroOn) {
          bet = 1;
        } else if (twoEurosOn) {
          bet = 2;
        } else if (fiveEurosOn) {
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
    });
  });
}

///////////////////////spin roulette////////////////////////////////////////

document.querySelector(".spin").addEventListener("click", function() {
  var totalWinnings = 0;

  //////////////////////////////////////////generate a random number//////////////////////////////////////////

  var luckyNumber = Math.floor(Math.random() * 36 + 1);
  /////////////////////////////

  //////////////////////////////////find number in objects

  for (var i = 0; i < numberList.length; i++) {
    if (luckyNumber === numberList[i].number) {
      luckyNumber = numberList[i];
      console.log(luckyNumber);
      break;
    }
  }
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
  reset();
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
  oneEuroOn = false;
  twoEurosOn = false;
  fiveEurosOn = false;
  betOn = false;
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
}

function clearAr(arr) {
  for (var i = arr.length; i > 0; i--) {
    arr.pop();
  }
}
