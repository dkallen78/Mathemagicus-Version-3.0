
//-------------------------------------------------------------------//
//Logic helper functions                                             //
//-------------------------------------------------------------------//

//
//Gets random number for the math problems from
//where floor is the lowest number possible and
//ceiling is the highest number possible
function getRandomNumber(floor, ceiling) {
  let range = (ceiling - floor) + 1;
  return Math.floor((Math.random() * range) + floor);
}

function getAverage(averageTime, newNumber) {
  averageTime[0] = ((averageTime[0] * averageTime[1]) + newNumber) / (averageTime[1] + 1);
  averageTime[1]++;
  return averageTime;
}
//
//A function to check if a number is prime
function isPrime(number) {
  //
  //All the primes between 0 and 200
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
    59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
    137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
  //
  //primes.includes() will return true if there
  //is a prime, false if there is not
  return primes.includes(number);
}

function isTriangle(number) {

  let triangleNumbers = [3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136];

  return triangleNumbers.includes(number);
}

function isSquare(number) {

  let squareNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196];

  return squareNumbers.includes(number);
}
//
//This function is my version of the
//array.indexOf() function, just customized
//for my array of arrays
//array is the array to be searched
//index is the index whose value we want
//to return
function findMonster(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == index) {
      return i;
    }
  }
  return -1;
}
//
//This function is my version of the
//array.includes() function, just customized
//for my array of arrays
//array is the array to be searched
//index is the item to be searched for
function monsterSearch(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == index) {
      return true;
    }
  }
  return false;
}


//-------------------------------------------------------------------//
//Display helper functions                                           //
//-------------------------------------------------------------------//

//
//This clears the inner HTML of an element
function clearElement() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].innerHTML = "";
  }
}

function hideElement(element, time) {
  setTimeout(function() {
    element.innerHTML = "";
    element.style.visibility = "hidden";
  }, time)
}
//
//Removes elements from their parent
//parameters are the ID of the element
function removeElement() {
  for (let i = 0; i < arguments.length; i++) {
    let element = document.getElementById(arguments[i]);
    element.parentNode.removeChild(element);
  }
}
//
//Removes the last child from an element
function removeLastChild(parent, repeat = 1) {
  for (let i = 0; i < repeat; i++) {
    parent.removeChild(parent.lastChild);
  }
}
//
//Inserts a <br /> element into the DOM
//element is the parent element into which the
//<br /> will be inserted
function insertLineBreak(element, repeat = 1) {
  for (let i = 0; i < repeat; i++) {
    let lineBreak = document.createElement("br");
    element.appendChild(lineBreak);
  }
}
//
//Inserts a text node into a DOM element
//element is the element into which the node
//is inserted
//text is a string that comprises the text
//of the node
function insertTextNode(element, text) {
  let node = document.createTextNode(text);
  element.appendChild(node);
}
//
//Inserts a button into an element
//element is the element the button will be appended to
//text is the text of the button
//nextFunction is the the function called when it's clicked
//id defaults to "nextButton"
function insertButton(element, text, nextFunction, id = "nextButton") {
  const button = makeButton(nextFunction, text, id);
  element.appendChild(button);
  setTimeout(function() {
    button.focus();
  }, 100);
}
//
//Makes and inserts the number input box
function insertAnswerInput(target, answer, callback) {
  let input = document.createElement("input");
  input.type = "number";
  input.id = "answerInput";
  if (callback) {
    input.onkeypress = function() {
      callback(event, answer);
    }
  }
  target.appendChild(input);
}
//
//This function displays text one letter at a time
//text is a string variable with the text to be typed
//target is the HTML element into which the text will
//be typed
//callback is a function that will run once the text
//has completed typing
//i indicates which letter of the text string is
//currently being "typed" by the function
function typer(text, target, callback, i = 0) {
  //
  //This listens for any key to be pressed. If a key
  //is pressed, they typing stops and the full text
  //is displayed
  document.onkeydown = function() {
    i = text.length;
    target.innerHTML = text;
  }
  //
  //This is the wait time in ms between each new
  //character of the text string
  let waitTime = (player.textSpeed > 0) ? ((player.textSpeed * 20) - 10):0;

  if (waitTime === 0) {
    i = text.length;
    target.innerHTML = text;
  }
  //
  //As long i is less than the length of the text string
  //there are more letters to type
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    //
    //If the character being typed is a comma or period
    //an additional delay is added, unless it's the end of
    //the string
    if (((text.charAt(i) === ".") || (text.charAt(i) === ",")) && ((i + 2) < text.length)) {
      waitTime = waitTime * 5;
    }
    i++;
    //
    //This setTimeout() adds the delay between each letter
    setTimeout(function() {
      typer(text, target, callback, i);
    }, waitTime);
  //
  //If we've typed all the letters or hit a button the
  //callback function is called
  } else {
    document.onkeydown = "";
    if (typeof callback === "function") callback();
  }
}
//
//makes a <div> element and assigns an ID and class
//first parameter assigns a string to an ID
//additional parameters are added as classes
function makeDiv() {
  let div = document.createElement("div");
  if (arguments.length > 0) {div.id = arguments[0]}
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      div.classList.add(arguments[i]);
    }
  }
  return div;
}
//
//makes an <img> element and assigns a src and id
//src is a string
//second parameter is intended ID
//additional parameters are added as classes
function makeImg(src) {
  let img = document.createElement("img");
  img.src = src;
  if (arguments.length > 1) {
    img.id = arguments[1];
  }
  if (arguments.length > 2) {
    for (let i = 2; i < arguments.length; i++) {
      img.classList.add(arguments[i]);
    }
  }
  return img;
}
//
//Returns a button element
//text is the text that appears on the button
//callback is what it does when clicked
//id is the button ID
//additional parameters are added as classes
function makeButton(callback, text, id = "") {
  const button = document.createElement("button");
  insertTextNode(button, text);
  button.type = "button";
  button.onclick = callback;
  button.id = id;
  if (arguments.length > 3) {
    for (let i = 3; i < arguments.length; i++) {
      button.classList.add(arguments[i]);
    }
  }
  return button;
}
//
//Inserts multiple elements into a fragment to be
//appended to another element
function makeFragment() {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < arguments.length; i++) {
    fragment.appendChild(arguments[i]);
  }
  return fragment;
}

function makeCanvas(id) {
  var canvas = document.createElement("canvas");
  canvas.id = id;
  if (arguments.length > 1) {
    canvas.height = arguments[1];
    canvas.width = arguments[2];
  }
  return canvas;
}
//
//
function makeCameoDiv(src) {
  let div = makeDiv("cameo");
  let img = makeImg(src, "cameoImg")
  div.appendChild(img);
  return div;
}

function showImage(src, target, duration = 3000) {
  let img = makeImg(src, "firstKey", "quickImg");
  img.style.filter = "opacity(0%)";
  target.appendChild(img);
  setTimeout(function() {
    img.style.filter = "opacity(100%)";
  })
  setTimeout(function() {
    img.style.filter = "opacity(0%)";
    img.ontransitionend = function(e) {
      e.stopImmediatePropagation();
      target.removeChild(img);
    }
  }, duration);
}
//
//type 0 is the large menu
//type 1 is the small menu
class MenuSelectors {
  constructor(type, text) {
    this.target = "playArea",
    this.textId = (type) ? "characterSelectText":"overworldMenuText",
    this.text = text,
    this.lowClass = null,
    this.menuDiv = {
      idLeft: (type) ? "characterDivLeft":"overworldDivLeft",
      idMiddle: (type) ? "characterDivMiddle":"overworldDivMiddle",
      idRight: (type) ? "characterDivRight":"overworldDivRight"
    },
    this.imgClass = (type) ? "characterImg":"overworldMenuImg",
    this.hoverClass = (type) ? null:"overworldMenuHover",
    this.buttonClass = (type) ? "selectButtons":"overworldButtons",
    this.buttonId = {
      left: (type) ? "leftButton":"overworldButtonLeft",
      right: (type) ? "rightButton":"overworldButtonRight"
    }

  }
}
//
//This makes my menus
//selector is an object w/ ID and class information
//imgData is an object with image information
//callback is the function that is run when the menu
//item is selected
//index is the starting menu item
function menuMaker(selector, imgData, callback, index = 0) {
  //
  //Turns off all the event listeners before
  //leaving the menu
  function clickFunction() {
    menuImgMiddle.onclick = "";
    document.onkeyup = "";
    callback(imgData);
  }
  //
  //This visually shifts the menu to the
  //left. It's triggered by the RIGHT arrow
  function shiftLeft() {
    removeElement(selector.menuDiv.idLeft);
    imgData.index++;

    if (imgData.index >= imgData.sprites.length) {
      imgData.index = 0;
    }
    //
    //Changes the menu text
    menuSelectText.innerHTML = imgData.sprites[imgData.index][imgData.sprites[0].length - 1];
    //
    //This shifts the middle <div> to the left <div>
    menuDivMiddle.id = selector.menuDiv.idLeft;
    menuDivLeft = menuDivMiddle;
    //
    //This shifts the right <div> to the middle <div>
    //and then gives it an onclick value
    menuDivRight.id = selector.menuDiv.idMiddle;
    menuDivMiddle = menuDivRight;
    menuImgMiddle = menuImgRight;
    menuImgMiddle.onclick = clickFunction;
    //
    //This makes a new right <div> to replace the one that
    //was shifted to the middle
    menuDivRight = makeDiv(selector.menuDiv.idRight);
    let srcPath = imgData.path + imgData.sprites[(imgData.index + 1) % imgData.sprites.length][0];
    menuImgRight = makeImg(srcPath, "", selector.imgClass, selector.hoverClass)
    menuDivRight.appendChild(menuImgRight);
    target.insertBefore(menuDivRight, rightButton);
  }
  //
  //This visually shifts the menu to the
  //right. It's triggered by the LEFT arrow
  function shiftRight() {
    removeElement(selector.menuDiv.idRight);
    imgData.index--;

    if (imgData.index < 0) {
      imgData.index = imgData.sprites.length - 1;
    }
    //
    //Changes the menu text
    menuSelectText.innerHTML = imgData.sprites[imgData.index][imgData.sprites[0].length - 1];
    //
    //This shifts the middle <div> to the right
    menuDivMiddle.id = selector.menuDiv.idRight;
    menuDivRight = menuDivMiddle;
    //
    //This shifts the left <div> to the middle <div>
    //and then gives it an onclick value
    menuDivLeft.id = selector.menuDiv.idMiddle;
    menuDivMiddle = menuDivLeft;
    menuImgMiddle = menuImgLeft;
    menuImgMiddle.onclick = clickFunction;
    //
    //This makes a new left <div> to replace the one that
    //was shifted to the middle
    menuDivLeft = makeDiv(selector.menuDiv.idLeft);
    let srcPath = imgData.path +
      imgData.sprites[(imgData.index + (imgData.sprites.length - 1)) % imgData.sprites.length][0];
    menuImgLeft = makeImg(srcPath, "", selector.imgClass, selector.hoverClass)
    menuDivLeft.appendChild(menuImgLeft);
    target.insertBefore(menuDivLeft, menuDivMiddle);
  }
  //
  //This  will call a specific function based on which
  //key is pressed
  function checkArrowKeys(key) {
    key = key || window.event;
    switch (key) {
      case 13:
        clickFunction();
        break;
      case 37:
        shiftRight();
        break;
      case 39:
        shiftLeft();
        break;
    }
  }
  //
  //This sets up a listener for a key to be pressed
  setTimeout(function() {
    document.onkeyup = function(e) {
      e = e || window.event;
      checkArrowKeys(e.keyCode);
    }
  }, 100);
  //
  //Puts text above the central menu item
  let menuSelectText = makeDiv(selector.textId, selector.lowClass);
  imgData.index = index;
  insertTextNode(menuSelectText, selector.text);
  setTimeout(function() {
    menuSelectText.innerHTML = imgData.sprites[imgData.index][imgData.sprites[0].length - 1];
  }, 2000);

  let leftIndex = index - 1;
  if (leftIndex < 0) leftIndex = imgData.sprites.length - 1;
  let rightIndex = index + 1
  if (rightIndex >= imgData.sprites.length) rightIndex = 0;
  //
  //This <div> is set up outside of the visible play area
  //ready to slide onscreen when an arrow is clicked
  let menuDivLeft = makeDiv(selector.menuDiv.idLeft);
  let menuImgLeft = makeImg(imgData.path + imgData.sprites[leftIndex][0], "", selector.imgClass, selector.hoverClass);
  menuDivLeft.appendChild(menuImgLeft);
  //
  //This <div> is the visible menu selection. If it
  //is clicked, it will trigger the callback function
  let menuDivMiddle = makeDiv(selector.menuDiv.idMiddle, selector.lowClass);
  let menuImgMiddle = makeImg(imgData.path + imgData.sprites[index][0], "", selector.imgClass, selector.hoverClass);
  menuImgMiddle.onclick = clickFunction;
  menuDivMiddle.appendChild(menuImgMiddle);
  //
  //This <div> is set up outside of the visible play area
  //ready to slide onscreen when an arrow is clicked
  let menuDivRight = makeDiv(selector.menuDiv.idRight);
  let menuImgRight = makeImg(imgData.path + imgData.sprites[rightIndex][0], "", selector.imgClass, selector.hoverClass);
  menuDivRight.appendChild(menuImgRight);
  //
  //These two blocks put the buttons onscreen that let the
  //player manipulate the menu
  const leftButton = makeButton(shiftRight, "<", selector.buttonId.left, selector.buttonClass, selector.lowClass);
  const rightButton = makeButton(shiftLeft, ">", selector.buttonId.right, selector.buttonClass, selector.lowClass);
  //
  //This block puts all of the elements that have been
  //made onto the webpage
  let fragment = makeFragment(menuSelectText, leftButton, menuDivLeft, menuDivMiddle, menuDivRight, rightButton);
  let target = document.getElementById(selector.target);
  target.appendChild(fragment);
}
//
//Clears the DOM elements made by the menuMaker()
//selector is the same as in the menuMaker()
//options indicates which elements are to be removed
function clearMenu(selector, options = [1, 1, 1, 1, 1, 1]) {
  if (options[0]) {
    removeElement(selector.textId);
  }
  if (options[1]) {
    removeElement(selector.buttonId.left);
  }
  if (options[2]) {
    removeElement(selector.menuDiv.idLeft);
  }
  if (options[3]) {
    removeElement(selector.menuDiv.idMiddle);
  }
  if (options[4]) {
    removeElement(selector.menuDiv.idRight);
  }
  if (options[5]) {
    removeElement(selector.buttonId.right);
  }
}
//
//A transition for switching menus w/out changing anything else
function menuSwitch(selectorOld, menuFunction) {

  if (selectorOld) {
    let divMiddle = document.getElementById(selectorOld.menuDiv.idMiddle);
    let menuText = document.getElementById(selectorOld.textId);
    let buttons = document.getElementsByClassName(selectorOld.buttonClass);

    menuText.classList.add("menuItemsLow");
    divMiddle.classList.add("menuItemsLow");
    buttons[0].classList.add("menuItemsLow");
    buttons[1].classList.add("menuItemsLow");
  }

  if (menuFunction) {
    menuFunction();
    setTimeout(function() {
      if (selectorOld) clearMenu(selectorOld);
      let lowClasses = document.getElementsByClassName("menuItemsLow")
      for (let i = lowClasses.length - 1; i >= 0; i--) {
        lowClasses[i].classList.remove("menuItemsLow");
      }
    }, 750);
  }
}
//
//Makes a fade-in/fade-out transition effect
//element is a DOM element to add
//target is a DOM element to which element
//will be added
//speed is the speed in ms of the transitions
//callback is a function to call during the transition
function fadeTransition(element, target, speed = 500, callback = null) {
  target.style.filter = "brightness(0%)";
  setTimeout(function() {
    clearElement(target);
    if (element != null) {target.appendChild(element);}
    if (callback != null) {callback();}
    target.style.filter = "brightness(100%)";
  }, speed);


}

function fadeOutElement() {
  for (let i = 0; i < arguments.length; i++) {
    let element = document.getElementById(arguments[i]);
    element.style.filter = "opacity(0%)";
    element.ontransitionend = function(e) {
      e.stopImmediatePropagation();
      element.parentNode.removeChild(element);
    }
  }
}

class ScreenFlash {
  constructor(color, count = 10) {
    this.count = 10;
    this.flash = null;
    this.color = color
  }

  screenFlash() {
    if (arguments.length > 0 && arguments[1] === 1) {
      arguments[0]();
    }
    if (this.count > 0) {
      if ((this.count % 2) === 0) {
        playArea.classList.remove(this.color);
        if (arguments.length > 0 && arguments[1] === 2) {
          arguments[0]();
        }
      } else {
        playArea.classList.add(this.color);
      }
      this.count--;
    } else {
      playArea.classList.remove(this.color);
      clearInterval(this.flash);
    }
  }
}

//-------------------------------------------------------------------//
//Object functions                                                   //
//-------------------------------------------------------------------//

//
//This function creates a new player object
//with all of the variables associated with it
class Player {
  constructor() {
    this.name = "";                 //The player's name
    this.health = 10;               //The player's health
    this.maxHealth = 10;            //The player's maximum health (used for healing)
    this.damage = 1;                //The base damage done by the player
    this.damageBoost = 0;           //Additional damage caused by the Strength spell

    this.notification = {
      subtractionKey: false,
      multiplicationKey: false,
      divisionKey: false,
      fibonacciSpell: "Fibonacci Spell Available",
      eulerSpell1: false,
      eulerSpell2: false,
      euclidSpell: false,
      hypatiaSpell: false,
      lovelaceSpell: false,
      huygensSpell: false,
      fermatSpell: false,
      noetherSpell: false,
      braheSpell: false
    };

    this.triggers = {
      newGame: true
    }

    this.textSpeed = 0;
    //
    //Avatar sprites for the player
    this.sprites = {
      path: "",
      files: []
    }
    //
    //Achievement tracking stats
    this.stats = {
      damage: {
        received: 0,                //Total damage received
        dealt: 0,                   //Total damage dealt
        healed: 0                   //Total health recovered
      },
      fortyTwo: 0,                  //Total answers equal to 42
      lastSecond: 0,                //Questions answered w/ less than 1 second left
      flash: 0,                     //Questions answered in less than 1 second
      primes: 0,                    //Questions answered equal to a prime
      monstersKilled: 0,            //Total number of monsters killed
    }
    //
    //Spell related stats
    this.spells = {
      fibonacci: {
        name: "Fibonacci's Associative Spell",
        available: true,
        learned: false,
        cast: 0,
        ongoing: false,
        notificationIndex: 3
      },
      euler1: {
        name: "Euler's Left Distributive Spell",
        available: false,
        learned: false,
        cast: 0,
        notificationIndex: 4
      },
      euler2: {
        name: "Euler's Right Distributive Spell",
        available: false,
        learned: false,
        cast: 0,
        notificationIndex: 5
      },
      euclid: {
        name: "Euclid's Fireball Spell",
        available: false,
        learned: false,
        cast:0,
        number: 0,
        ongoing: false,
        notificationIndex: 6
      },
      hypatia: {
        name: "Hypatia's Healing Spell",
        available: false,
        learned: false,
        cast: 0,
        number: 0,
        ongoing: false,
        notificationIndex: 7
      },
      lovelace: {
        name: "Lovelace's Reduction Spell",
        available: false,
        learned: false,
        cast: 0,
        number: 0,
        ongoing: false,
        notificationIndex: 8
      },
      huygens: {
        name: "Huygen's Stop-time Spell",
        available: false,
        learned: false,
        cast: 0,
        number: 0,
        ongoing: false,
        notificationIndex: 9
      },
      fermat: {
        name: "Fermat's Polymorph Monster Spell",
        available: false,
        learned: false,
        cast: 0,
        number: 0,
        ongoing: false,
        notificationIndex: 10
      },
      noether: {
        name: "Noether's Strength Spell",
        available: false,
        learned: false,
        cast: 0,
        number: 0,
        ongoing: false,
        notificationIndex: 11
      },
      brahe: {
        name: "Brahe's Nova Spell",
        available: false,
        learned: false,
        cast: 0,
        number: 0,
        ongoing: false,
        notificationIndex: 12
      },
    }

    this.addition = {
      level: 0,
      monsters: [],
      totalAverage: [0, 0],
      runningAverage: [],
      sign: "+"
    }

    this.subtraction = {
      level: 0,
      monsters: [],
      totalAverage: [0, 0],
      runningAverage: [],
      sign: "-"
    }

    this.multiplication = {
      level: 0,
      monsters: [],
      totalAverage: [0, 0],
      runningAverage: [],
      sign: "×"
    }

    this.division = {
      level: 0,
      monsters: [],
      totalAverage: [0, 0],
      runningAverage: [],
      sign: "÷"
    }
  }

  addTime(time, averages) {
    if (averages.length >= 20) {
      averages.shift();
    }
    averages.push(time);
    return averages;
  }

  passingAverage(averages) {
    let total = 0;
    for (let i = 0; i < averages.length; i++) {
      total += averages[0];
    }
    let average = total / averages.length;
    if ((average < 5) && (averages.length >= 20)) {
      return true;
    } else {
      return false;
    }
  }

  get hasNotifications() {
    for (let i = 0; i < Object.keys(this.notification).length; i++) {
      if (Object.values(this.notification)[i]) {
        return true;
      }
    }
    return false;
  }

  get totalLevel() {
    let total = this.addition.level + this.subtraction.level;
    total += this.multiplication.level + this.division.level;
    return total;
  }
  //
  //Total damage player does when attacking
  get totalDamage() {
    return this.damage + this.damageBoost;
  }
  //
  //This gets the possesive form of the players name
  get possessive() {
    if (this.name.charAt(this.name.length - 1) === "s") {
      return this.name + "'";
    } else {
      return this.name + "'s";
    }
  }

  get hintSpells() {
    let object = this.spells;
    return (object.fibonacci.cast + object.euler1.cast + object.euler2.cast);
  }

  get attackSpells() {
    let object = this.spells;
    return object.euclid.cast + object.brahe.cast;
  }

  get spellsCast() {
    let total = 0;
    for (let i = 0; i < Object.keys(this.spells).length; i++) {
      total += Object.values(this.spells)[i].cast;
    }
    return total;
  }
}

function test() {
  player = new Player();
  player.name = "Shady";
  player.maxHealth = 10;
  player.damage = 1;
  player.addition.level = 1;
  player.subtraction.level = 0;
  player.multiplication.level = 0;
  player.division.level = 0;
  player.sprites.path = "./mages/";
  player.sprites.files = ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif", "Cat Mage"];
  player.spells.fibonacci.learned = true;
  player.spells.euclid.learned = true;
  player.spells.euclid.number = 50;
  player.spells.lovelace.learned = true;
  player.spells.lovelace.number = 50;
  player.spells.hypatia.learned = true;
  player.spells.hypatia.number = 50;
  player.spells.noether.learned = true;
  player.spells.noether.number = 50;
  player.spells.huygens.learned = true;
  player.spells.huygens.number = 50;
  player.spells.fermat.learned = true;
  player.spells.fermat.number = 50;
  player.spells.brahe.learned = true;
  player.spells.brahe.number = 50;
  player.triggers.newGame = false;

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let monsterData = JSON.parse(this.responseText);
      catacombs(player, "addition", 0, 2, monsterData);
    }
  };
  xmlhttp.open("GET", "./monsterData.json", true);
  xmlhttp.send();

  //overworld(player);
}

//-------------------------------------------------------------------//
//Game Intro functions                                               //
//-------------------------------------------------------------------//

function optionMenu() {
  let optionBox = makeDiv("optionBox", "textBox");

  class MenuOption {
    constructor(name) {
      this.name = name;
      this.options = [];
      this.index = 0;
    }

    appendTo(target) {

      function optionLeft(obj, option) {
        obj.index--;
        if (obj.index < 0) {
          obj.index = obj.options.length - 1;
        }
        option.innerHTML = obj.options[obj.index];
      }

      function optionRight(obj, option) {
        obj.index++;
        if (obj.index >= obj.options.length) {
          obj.index = 0;
        }
        option.innerHTML = obj.options[obj.index];
      }
      let obj = this;

      let menuBox = makeDiv("", "menuBox");
        insertTextNode(menuBox, this.name);
        let left = makeDiv("", "optionButton");
          left.onclick = function() {
            optionLeft(obj, option);
          };
          insertTextNode(left, "<");
        let option = makeDiv("", "optionWindow");
          insertTextNode(option, this.options[this.index]);
        let right = makeDiv("", "optionButton");
          right.onclick = function() {
            optionRight(obj, option);
          };
          insertTextNode(right, ">");
        let fragment = makeFragment(left, option, right);
      menuBox.appendChild(fragment);
      target.appendChild(menuBox);
    }
  }

  let textSpeedBox = new MenuOption("Text Speed: ");
  textSpeedBox.options = ["Instant", "Fast", "Slow"];
  textSpeedBox.appendTo(optionBox);

  insertLineBreak(optionBox);

  let languageBox = new MenuOption("\u00A0 Language: ");
  languageBox.options = ["English", "Spanish", "French", "German"];
  languageBox.appendTo(optionBox);

  insertLineBreak(optionBox);

  let closeBox = makeDiv("closeBox");
    let closeButton = makeDiv("closeButton", "optionButton");
      insertTextNode(closeButton, "Close");
      closeButton.onclick = function() {
        player.textSpeed = textSpeedBox.index;
        playArea.removeChild(optionBox);
      }
  closeBox.appendChild(closeButton);
  optionBox.appendChild(closeBox);

  playArea.insertBefore(optionBox, titleDiv);
}

function gameStart() {

  function shadycrzy() {

    let shady = makeDiv("shady");
    shady.innerHTML = "Shadycrzy Games";

    let blocks = makeDiv("blocks");
    let red = makeDiv("red");
    let green = makeDiv("green");
    let blue = makeDiv("blue");

    blocks.appendChild(red);
    blocks.appendChild(green);
    blocks.appendChild(blue);

    let fragment = makeFragment(shady, blocks);
    document.body.appendChild(fragment);

    setTimeout(function() {
      red.style.transform = "rotateY(360deg)";
      red.ontransitionend = function(event) {
        event.stopPropagation();
      }
    }, 10);
    setTimeout(function() {
      green.style.transform = "rotateY(360deg)";
      green.ontransitionend = function(event) {
        event.stopPropagation();
      }
    }, 260);
    setTimeout(function() {
      blue.style.transform = "rotateY(360deg)";
    }, 760);

    blue.ontransitionend = function(event) {
      event.stopPropagation();
      shady.style.filter = "opacity(100%)";
    }

    shady.ontransitionend = function(event) {
      event.stopPropagation();
      document.body.style.filter = "opacity(0%)";
    }

    document.body.ontransitionend = function(event) {
      document.body.ontransitionend = "";
      clearElement(document.body);
      titleScreen();
    }


  }
  //
  //This function sets up the title screen of Mathemagicus
  function titleScreen() {

    function titleScreenButton(id, tab, callback, name) {
      let div = makeDiv(id, "startbuttons");
      div.tabIndex = tab;
      div.onclick = callback;
      insertTextNode(div, name);
      return div;
    }

    document.body.appendChild(playArea);

    let titleDiv = makeDiv("titleDiv");
    insertTextNode(titleDiv, "Mathemagicus");

    let newGame = titleScreenButton("newGame", "1", enterName, "New Game");
    let cont = titleScreenButton("continue", "2", test, "Continue");
    let options = titleScreenButton("options", "3", optionMenu, "Options");

    let fragment = makeFragment(titleDiv, newGame, cont, options);

    playArea.appendChild(fragment);
    setTimeout(function() {
      document.body.style.filter = "opacity(100%)";
    }, 10);
  }
  //
  //The New Game screen with player name input
  function enterName() {

    fadeOutElement("newGame", "continue", "options");
    //
    //This block displays the "Enter your name" prompt
    let enterNameDiv = makeDiv("enterNameDiv", "clearBox");
    enterNameDiv.style.filter = "opacity(0%)";
    insertTextNode(enterNameDiv, "Please enter your name:");
    insertLineBreak(enterNameDiv);
    //
    //This block displays the text input box
    let nameTextBox = document.createElement("input");
    nameTextBox.type = "text";
    nameTextBox.id = "nameTextBox";
    enterNameDiv.appendChild(nameTextBox);
    insertLineBreak(enterNameDiv);

    let next = makeDiv("next", "startButtons");
    next.onclick = chooseCharacter;
    insertTextNode(next, "Next");

    let fragment = makeFragment(enterNameDiv, next);
    //
    //This puts it all into the playArea and puts the focus on the nameTextBox
    setTimeout(function() {
      playArea.appendChild(fragment);
      nameTextBox.focus();
      enterNameDiv.style.filter = "opacity(100%)";
    }, 600);
    //
    //Listens for the enter key
    setTimeout(function() {
      document.onkeyup = function(e) {
        e = e || window.event;
        if (e.keyCode === 13) {
          document.onkeyup = "";
          chooseCharacter();
        };
      }
    }, 100);
  }
  //
  //The Choose Character screen where the player picks
  //their avatar
  function chooseCharacter() {
    //
    //Saves the sprite info from the avatar they player chose
    //then calls the townIntro() function
    function saveCharacterData(imgData) {
      player.sprites.path = imgData.path;
      player.sprites.files = imgData.sprites[imgData.index];
      //
      //Removes elements used for character selection before
      //moving to the townIntro screen
      clearMenu(avatarMenuSelectors);
      document.onkeyup = "";

      storyIntro();
    }
    //
    //Saves the player's name
    player.name = document.getElementById("nameTextBox").value

    removeElement("titleDiv", "enterNameDiv", "next");

    let tellahDiv = makeCameoDiv("Tellah.gif");

    let introTextDiv = makeDiv("introTextDiv", "textBox");
    //
    //Object with data for the menu maker
    let avatarMenuSelectors = new MenuSelectors(1, "Choose your mage");
    //
    //This object holds the information for accessing the mage sprites
    let mageData = {
      sprites: [
        ["mage0.gif", "mage0fight.gif", "mage0hurt.gif", "mage0dead.gif", "Black Mage"],
        ["mage1.gif", "mage1fight.gif", "mage1hurt.gif", "mage1dead.gif", "White Mage"],
        ["mage2.gif", "mage2fight.gif", "mage2hurt.gif", "mage2dead.gif", "Turban Mage"],
        ["mage3.gif", "mage3fight.gif", "mage3hurt.gif", "mage3dead.gif", "Blue Mage"],
        ["mage4.gif", "mage4fight.gif", "mage4hurt.gif", "mage4dead.gif", "Red Mage"],
        ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif", "Cat Mage"],
        ["mage6.gif", "mage6fight.gif", "mage6hurt.gif", "mage6dead.gif", "Green Mage"]
      ],
      path: "./mages/",
      index: 0
    };
    //
    //This block is wrapped in a setTimeout because the typer()
    //function is listening for any key to be pressed and this
    //gives enough time for the computer to register the release
    //of the enter key from the name input of the previous screen
    setTimeout(function() {

      let fragment = makeFragment(tellahDiv, introTextDiv);
      playArea.appendChild(fragment);
      //
      //This is the intro text for character selection
      let introText = "Welcome to Arithmeticia. You must be " + player.name +
                      ", the new mage. Let me get a better look at you.";
      typer(introText, introTextDiv, function () {
        menuMaker(avatarMenuSelectors, mageData, saveCharacterData);
      });
    }, 100);


  }
  //
  //The Story Intro screen that gives the game a bit of story
  function storyIntro() {
    //
    //These functions display the text for the story
    //introduction of the game
    function introPart1() {
      clearElement(introTextDiv);
      let textString = "Ah, that's better. We're glad you're here because we have a monster problem. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart2);
      });
    }
    function introPart2() {
      clearElement(introTextDiv);
      let textString = "The old catacombs beneath the city are overrun with monsters " +
                        "and they've been attacking people. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart3);
      });
    }
    function introPart3() {
      clearElement(introTextDiv);
      let textString = "We need you to clear them out to make our town safe again. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart4);
      });
    }
    function introPart4() {
      clearElement(introTextDiv);
      let textString = "We've sealed up all of the catacombs to keep people from going down " +
                        "there. We keep the keys at the Mages' Guild. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart5);
      });
    }
    function introPart5() {
      clearElement(introTextDiv);
      let textString = "We have also have something that will help you in your fight. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", function() {
          overworld(player);
        });
      });
    }

    const playArea = document.getElementById("playArea");
    const introTextDiv = document.getElementById("introTextDiv");
    //
    //a button that lets the player skip the game intro
    const skipButton = makeButton(function() {
      overworld(player);
    }, "Skip", "skipButton");
    playArea.appendChild(skipButton);
    introPart1();
  }

  const playArea = makeDiv("playArea");

  player = new Player();

  //titleScreen();
  shadycrzy();
}

//-------------------------------------------------------------------//
//Overworld functions                                                //
//-------------------------------------------------------------------//

//
//Everything that happens in the overworld happens in this function
function overworld(player) {
  //
  //Does everything that needs to be done to launch the
  //Overworld Menu
  function launchOverworldMenu(selectors, imgData, callback, index = 0) {
    if (player.addition.level) menuData.sprites[0][0] = "additionDoorOpen.gif";
    if (player.subtraction.level) menuData.sprites[1][0] = "subtractionDoorOpen.gif";
    if (player.multiplication.level) menuData.sprites[2][0] = "multiplicationDoorOpen.gif";
    if (player.division.level) menuData.sprites[3][0] = "divisionDoorOpen.gif";
    if (player.hasNotifications) {
      postNotifications();
    }
    menuMaker(selectors, imgData, callback, index);
  }
  //
  //This function returns to the overworld menu
  function returnToDungeonMenu() {
    fadeTransition(null, playArea, 500, function() {
      launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection, menuData.index);
    });
  }
  //
  //Determines what to do next based on the player's
  //menu selection
  function menuSelection(imgData) {
    document.onkeyup = "";
    menuData.index = imgData.index;
    switch(imgData.index) {
      case 0:     //Addition Catacomb
        dungeonLevelMenu(player.addition.level, "addition");
        break;
      case 1:     //Subtraction Catacomb
        dungeonLevelMenu(player.subtraction.level, "subtraction");
        break;
      case 2:     //Multiplication Catacomb
        dungeonLevelMenu(player.multiplication.level, "multiplication");
        break;
      case 3:     //Division Catacomb
        dungeonLevelMenu(player.division.level, "division");
        break;
      case 4:     //Mage Guild Door
        mageGuild();
        break;
      case 5:     //Liber mathemagicus
        //
        //This loads monster data from an outside file that
        //the book may need.
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let monsterData = JSON.parse(this.responseText);
            liberMathemagicus(monsterData);
          }
        };
        xmlhttp.open("GET", "./monsterData.json", true);
        xmlhttp.send();
        break;
    }
  }
  //
  //The sub-menu that pops up before a player gets to the dungeon
  //level is the player's level in the operation of the
  //selected dungeon
  function dungeonLevelMenu(level, operation) {
    //
    //Ojbect to get the right door image
    const doors = {
      "addition": menuData.path + menuData.sprites[0][0],
      "subtraction": menuData.path + menuData.sprites[1][0],
      "multiplication": menuData.path + menuData.sprites[2][0],
      "division": menuData.path + menuData.sprites[3][0]
    }
    //
    //Handles the logic of what happens when the
    //timer buttons are clicked
    function clickTimerButton(newSelection) {
      let newButton = document.getElementById(selectedTimerButton);
      newButton.classList.remove("timerButtonClicked");
      newButton = document.getElementById(newSelection);
      newButton.classList.add("timerButtonClicked");
      selectedTimerButton = newSelection;
      switch(newSelection) {
        case 0:
          clearElement(timerSelectBox);
          insertTextNode(timerSelectBox, "No Timer");
          break;
        case 1:
          clearElement(timerSelectBox);
          insertTextNode(timerSelectBox, "Slow Timer");
          break;
        case 2:
          clearElement(timerSelectBox);
          insertTextNode(timerSelectBox, "Normal Timer");
          break;
        case 3:
          clearElement(timerSelectBox);
          insertTextNode(timerSelectBox, "Fast Timer");
          break;
      }
    }
    //
    //Changes the behavior of my level buttons so they
    //are more similar to radio buttons
    function checkLevelButton(newSelection) {
      let newButton = document.getElementById("level" + selectedLevelButton);
      newButton.classList.remove("levelButtonClicked");
      newButton = document.getElementById("level" + newSelection);
      newButton.classList.add("levelButtonClicked");
      selectedLevelButton = newSelection;
    }
    //
    //Does a bit of prep work before loading the catacombs
    function enterCatacombs() {
      //
      //This loads monster data from an outside file that
      //the catacomb will need.
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let monsterData = JSON.parse(this.responseText);
          catacombs(player, operation, selectedTimerButton, selectedLevelButton, monsterData);
        }
      };
      xmlhttp.open("GET", "./monsterData.json", true);
      xmlhttp.send();
    }

    let fragment = document.createDocumentFragment();
    let returnToMenu = makeButton(returnToDungeonMenu, "Return to Menu", "menuReturnButton", "buttonHover");
    fragment.appendChild(returnToMenu);

    let timerSelectBox = makeDiv("timerSelectBox", "textBox");
    insertTextNode(timerSelectBox, "No Timer");
    fragment.appendChild(timerSelectBox);
    //
    //Makes the buttons to select the timer level
    let timerSelectDiv = makeDiv("timerSelectDiv");
    let selectedTimerButton = 0;
    for (let i = 0; i < 4; i++) {
      let button = makeButton(function() {
        clickTimerButton(i)
      }, "", i, "timerSelectButtons");
      timerSelectDiv.appendChild(button);
    }
    fragment.appendChild(timerSelectDiv);
    //
    //Makes and styles the buttons to select the
    //dungeon level
    let dungeonSelectDiv = makeDiv("dungeonSelectDiv");
    let selectedLevelButton = 1;
    for (let i = 0; i < 10; i++) {
      let buttonFunction = function() {
        checkLevelButton(i + 1);
      }
      let brightness = "brightness(100%)";
      let className2 = "buttonHover";
      if (i + 1 > level) {
        buttonFunction = null;
        brightness = "brightness(50%)";
        className2 = null;
      }
      const button = makeButton(buttonFunction, "Level " + (i + 1), "level" + (i + 1), "dungeonSelectButton", className2);
      button.style.filter = brightness;
      dungeonSelectDiv.appendChild(button);
      insertLineBreak(dungeonSelectDiv);
    }
    fragment.appendChild(dungeonSelectDiv);

    let dungeonImg = makeImg(doors[operation], "dungeonSelectImg");
    if (level) {
      dungeonImg.onclick = enterCatacombs;
      dungeonImg.classList.add("overworldMenuHover");
    }

    fragment.appendChild(dungeonImg);

    fadeTransition(fragment, playArea, 500, function() {
      let selectedButton = document.getElementById("0");
      selectedButton.classList.add("timerButtonClicked");
      if (level > 0) {
        let levelButton = document.getElementById("level1");
        levelButton.classList.add("levelButtonClicked");
      }

    })
  }
  //
  //Loads the Mages' Guild menu
  function mageGuild() {

    function removeNotification(index) {
      let key = Object.keys(player.notification)[index]
      player.notification[key] = false;
    }
    //
    //What to do when the player makes a menu selection
    function guildMenuSelection(imgData) {
      document.onkeyup = "";
      switch (imgData.index) {
        case 0:               //Library
          break;
        case 1:               //Catacomb Keys
          catacombKeys();
          break;
        case 2:               //New Spells
          learnSpells();
          break;
        case 3:               //Return to previous menu
          returnToDungeonMenu();
          break;
      }
    }

    function learnSpells() {

      function victory(spellName) {

        function victorySpeech() {
          clearElement(challengeDiv);
          let victoryText = "Well done! I knew you could do it! You've definitely " +
                            "earned " + spellName + ".";
          typer(victoryText, challengeDiv, function() {
            insertLineBreak(challengeDiv, 2);
            insertButton(challengeDiv, "Return to Guild", mageGuild);
          })
        }

        let flash = new ScreenFlash("playAreaWhite");

        flash.flash = setInterval(function() {
          flash.screenFlash();
        }, 100);

        let checkFlash = setInterval(function() {
          if (flash.count === 0) {
            clearInterval(checkFlash);
            victorySpeech();
          }
        }, 250);
        return true;
      }

      function checkAnswer(answer, spell, count, challenge) {
        let answerInput = document.getElementById("answerInput");
        if (parseInt(answerInput.value) === answer) {
          if (count < 10) {
            document.onkeyup = "";
            challenge();
          } else {
            spell.available = false;
            spell.learned = victory(spell.name);
            removeNotification(spell.notificationIndex);
          }
        } else {
          let text = challengeDiv.innerHTML;
          if (text.charAt(text.length - 1) === "!") {removeLastChild(challengeDiv, 3);}
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "Oh no! " + answerInput.value + " didn't work!");
          answerInput.value = "";
        }
      }

      function learnAssociative() {

        function beginChallenge() {

          function challenge() {
            questions++;
            clearElement(challengeDiv);
            let addend1 = getRandomNumber(6, 9);
            let addend2 = getRandomNumber(6, 9);
            let sum = addend1 + addend2;
            let answer = 10 - addend2;
            let addendPart = addend1 - answer;

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, addend1 + " + " + addend2 + " = " + sum);
            insertLineBreak(fragment, 2);
            insertTextNode(fragment, "(" + addendPart + " + ?) + " + addend2 + " = " + sum);
            insertLineBreak(fragment, 2);
            insertTextNode(fragment, addendPart + " + (")
            insertAnswerInput(fragment, answer);
            insertTextNode(fragment, " + " + addend2 + ") = " + sum);


            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.fibonacci, questions, challenge);
                }
              }
            }, 200);

            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "The Associative Property says that in an addition problem, " +
                        "it doesn't matter what order the numbers are in:";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "8 + 5 = 5 + 8");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "(5 + 3) + 5 = (5 + 5) + 3");
          let textTwo = "To earn this spell you must answer 10 problems using " +
                        "the Associative Property."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "

        clearElement(guildTextDiv);

        spellMenu.style.filter = "opacity(0%)";

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);

        })
      }

      function learnLeftDistribution() {

        function beginChallenge() {

          function challenge() {
            questions++;
            clearElement(challengeDiv);
            let mult1 = getRandomNumber(6, 9);
            let mult2 = getRandomNumber(3, 9);
            if (mult2 === 5) mult2--;
            let product = mult1 * mult2;
            let answer = (mult2 > 5) ? (mult2 - 5):(mult2 - 2);
            let part1 = (mult2 > 5) ? 5:2;

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, mult1 + " × " + mult2 + " = " + product);
            insertLineBreak(fragment, 2);
            insertTextNode(fragment, mult1 + " × (" + part1 + " + ?) = " + product);
            insertLineBreak(fragment, 2);
            insertTextNode(fragment, "(" + mult1 + " + " + part1 + ") × (" + mult1 + " + ");
            insertAnswerInput(fragment, answer);
            insertTextNode(fragment, ") = " + product);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.euler1, questions, challenge);
                }
              }
            }, 200);

            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "The Distributive Property says that in a multiplication problem, " +
                        "we can break apart one of the terms to simplify our problem:";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "8 × 7 = 8 × (5 + 2)");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "8 × (5 + 2) = ");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "(8 × 5) + (8 × 2)");
          let textTwo = "To earn this spell you must answer 10 problems using " +
                        "the Left Distribution."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "

        clearElement(guildTextDiv);

        spellMenu.style.filter = "opacity(0%)";

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);

        })
      }

      function learnRightDistribution() {

        function beginChallenge() {

          function challenge() {
            questions++;
            clearElement(challengeDiv);
            let quotient = getRandomNumber(6, 9);
            let divisor = getRandomNumber(2, 4);
            let dividend = quotient * divisor;
            let part1 = 5 * divisor;
            let answer = (quotient - 5) * divisor;

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, dividend + " ÷ " + divisor + " = " + quotient);
            insertLineBreak(fragment, 2);
            insertTextNode(fragment, "(" + part1 + " + ?) ÷ " + divisor + " = " + quotient);
            insertLineBreak(fragment, 2);
            insertTextNode(fragment, "(" + part1 + " ÷ " + divisor + ") + (");
            insertAnswerInput(fragment, answer);

            insertTextNode(fragment, " ÷ " + divisor + ") = " + quotient);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.euler2, questions, challenge);
                }
              }
            }, 200);

            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "The Distributive Property says that in a division problem, " +
                        "we can break apart the left term to simplify our problem:";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "36 ÷ 4 = (24 + 12) ÷ 4");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "(20 + 16) ÷ 4 = ");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "(20 ÷ 4) + (16 ÷ 4)");
          let textTwo = "To earn this spell you must answer 10 problems using " +
                        "the Right Distribution."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "

        clearElement(guildTextDiv);

        spellMenu.style.filter = "opacity(0%)";

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);

        })
      }

      function learnFireball() {

        function beginChallenge() {

          function challenge() {
            questions++;
            clearElement(challengeDiv);

            let answer = 0;
            let addend1 = 0;
            let addend2 = 0;

            let fragment = document.createDocumentFragment();

            for (let i = 1; i <= questions + 1; i++) {
              addend1 = answer;
              addend2 = i
              answer = addend1 + addend2;
              insertTextNode(fragment, i);
              if (i < (questions + 1)) {insertTextNode(fragment, " + ");}
            }
            insertLineBreak(fragment, 2);

            insertTextNode(fragment, addend1 + " + " + addend2 + " = ");
            insertAnswerInput(fragment, answer);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.euclid, questions, challenge);
                }
              }
            }, 200);

            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "Euclid's Fireball is powered by Triangle Numbers, numbers that " +
                        "can be arranged to form an equilateral triangle.";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "   Δ       1");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "  Δ Δ      3");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "Δ  Δ  Δ    6");
          let textTwo = "To earn this spell you must answer 10 problems using " +
                        "summation."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "

        clearElement(guildTextDiv);

        spellMenu.style.filter = "opacity(0%)";

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);

        })
      }

      function learnHeal() {

        function beginChallenge() {

          function challenge() {
            questions++;
            clearElement(challengeDiv);

            let addend = questions + 1;
            let answer = addend * addend;

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, addend + "² = " + addend + " × " + addend);
            insertLineBreak(fragment, 2);

            insertTextNode(fragment, addend + " × " + addend + " = ");
            insertAnswerInput(fragment, answer);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.hypatia, questions, challenge);
                }
              }
            }, 200);

            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "Hypatia's Healing Spell is powered by Square Numbers, numbers thats " +
                        "parts can be arranged to form a square.";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "\u00A0 ▫▫ 4");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "▫▫ ");

          insertLineBreak(challengeDiv, 2);

          insertTextNode(challengeDiv, "▫▫▫");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "\u00A0 ▫▫▫ 9");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "▫▫▫");

          let textTwo = "To earn this spell you must find 10 Square Numbers. ";
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "

        clearElement(guildTextDiv);

        spellMenu.style.filter = "opacity(0%)";

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);

        })
      }

      function learnReduce() {

        function beginChallenge() {

          function challenge() {

            function showProblem(text, increment) {
              insertTextNode(fragment, answers[answers.length - 1]);
              for (let i = 0; i < answers.length; i++) {
                insertTextNode(fragment, text);
              }
              insertTextNode(fragment, "= ?");
              insertLineBreak(fragment, 2);
              insertTextNode(fragment, answers[0] + text + "= ");
              answer = answers[0] + increment
              answers.unshift(answer);
            }

            questions++;
            clearElement(challengeDiv);

            if (answers.length === 0) {
              answers[0] = getRandomNumber(11, 50);
            } else if (answers.length > 5) {
              answers = [];
              answers[0] = getRandomNumber(15, 50);
            }
            let answer = null;
            let fragment = document.createDocumentFragment();

            if (questions < 1) showProblem(" + 2 ", 2);
            if (questions > 0) showProblem(" - 2 ", -2);

            insertAnswerInput(fragment, answer);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.hypatia, questions, challenge);
                }
              }
            }, 200);

            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "Lovelace's Reduction Spell is powered by numbers that end " +
                        "with the number 2.";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "2, 4, 6, 8, 10...");

          insertLineBreak(challengeDiv, 2);

          insertTextNode(challengeDiv, "19, 17, 15, 13, 11...");

          let textTwo = "Earn this spell by adding and subtracting by 2. ";
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = -10;
          let answers = [];
        }

        let challengeText = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "

        clearElement(guildTextDiv);

        spellMenu.style.filter = "opacity(0%)";

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);
        });
      }

      function menuUp() {
        number--;
        if (number < 0) {
          number = spellMenu.children.length - 1;
        }
        spellMenu.children[number].focus();
      }

      function menuDown() {
        number++;
        if (number >= spellMenu.children.length) {
          number = 0;
        }
        spellMenu.children[number].focus();
      }

      function selectSpell(selection) {
        switch(parseInt(selection)) {
          case 0:     //Fibonacci's Associative Spell
            learnAssociative();
            break;
          case 1:     //Euler's Left Distributive Spell
            learnLeftDistribution();
            break;
          case 2:     //Euler's Right Distributive Spell
            learnRightDistribution();
            break;
          case 3:     //Euclid's Fireball Spell
            learnFireball();
            break;
          case 4:     //Hypatia's Healing Spell
            learnHeal();
            break;
          case 5:     //Lovelace's Reduction Spell
            learnReduce();
            break;
          case "6":     //Huygen's Stop-time Spell

            break;
          case "7":     //Fermat's Polymorph Monster Spell

            break;
          case "8":     //Noether's Strength Spell

            break;
          case "9":     //Brahe's Nova Spell

            break;
          case 10:
            mageGuild();
            break;
        }
      }

      menuSwitch(guildMenuSelectors, null);

      let spellMenu = makeDiv("spellSelectMenu");

      let number = 0;
      for (let i = 0; i < Object.keys(player.spells).length; i++) {

        if (Object.values(player.spells)[i].available === true) {
          let menuItem = makeDiv(i, "menuItem");
          menuItem.tabIndex = number;
          menuItem.onclick = function() {
            selectSpell(i);
          }
          insertTextNode(menuItem, Object.values(player.spells)[i].name);
          spellMenu.appendChild(menuItem);
          number++;
        }
      }
      let menuItem = makeDiv("10", "menuItem");
      menuItem.tabIndex = (number + 1);
      menuItem.onclick = mageGuild;
      insertTextNode(menuItem, "Return to Guild");
      spellMenu.appendChild(menuItem);

      let spellText = "Which spell would you like to learn " + player.name + "?";

      if (spellMenu.childNodes.length === 1) {
        spellText = "It doesn't look like there are any spells you can learn " +
                    "right now.";
      }

      playArea.appendChild(spellMenu);
      spellMenu.focus();

      clearElement(guildTextDiv);
      typer(spellText, guildTextDiv, function() {
        setTimeout(function() {
          spellMenu.style.filter = "opacity(100%)";
          spellMenu.firstChild.focus();
        }, 10);
      });

      number = 0;

      document.onkeydown = function(event) {

        if (event.which === 13) {     //Enter key
          selectSpell(spellMenu.children[number].id);
        }
        if (event.which === 38) {     //Up Arrow
          event.preventDefault();
          menuUp();
        }
        if (event.which === 40) {     //Down Arrow
          event.preventDefault();
          menuDown();
        }
      }
    }

    function catacombKeys() {

      let subtractionClick = function() {}
      let multiplicationClick = function() {}
      let divisionClick = function() {}

      function keySelection(imgData) {
        switch (imgData.index) {
          case 0:           //Subtraction
            subtractionClick();
            break;
          case 1:           //Multiplication
            multiplicationClick();
            break;
          case 2:           //Divison
            divisionClick();
            break;
          case 3:           //Return
            clearElement(guildTextDiv);
            typer(introText, guildTextDiv, null);
            guildMenuSelectors.lowClass = "menuItemsLow";
            menuSwitch(keySelectors, function() {
              menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection, 1);
            });
            break;
        }
      }

      function victory(catacomb) {

        function victorySpeech() {
          clearElement(challengeDiv);
          let victoryText = "Well done! I knew you could do it! You're definitely " +
                            "ready to take on the " + catacomb + " Catacombs.";
          typer(victoryText, challengeDiv, function() {
            insertLineBreak(challengeDiv, 2);
            insertButton(challengeDiv, "Return to Guild", mageGuild);
          })
        }

        let flash = new ScreenFlash("playAreaWhite");

        flash.flash = setInterval(function() {
          flash.screenFlash();
        }, 100);

        let checkFlash = setInterval(function() {
          if (flash.count === 0) {
            clearInterval(checkFlash);
            victorySpeech();
          }
        }, 250);
        return 1;
      }

      function subtractionChallenge() {

        function beginChallenge() {

          function checkAnswer(answer) {
            let answerInput = document.getElementById("answerInput");
            if (parseInt(answerInput.value) === answer) {
              if (questions < 10) {
                document.onkeyup = "";
                questions++;
                challenge();
              } else {
                player.subtraction.level = victory("Subtraction");
                player.notification.subtractionKey = false;
              }
            } else {
              if (challengeDiv.childNodes.length > 6) {removeLastChild(challengeDiv, 3);}
              insertLineBreak(challengeDiv, 2);
              insertTextNode(challengeDiv, "Oh no! " + answerInput.value + " didn't work!");
              answerInput.value = "";
            }
          }

          function challenge() {
            clearElement(challengeDiv);
            let terms = getTerms("addition", 1);

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, terms[2] + " - " + terms[0] + " = ?");
            insertLineBreak(fragment, 2);

            insertTextNode(fragment, terms[0] + " + ");
            insertAnswerInput(fragment, terms[1]);
            insertTextNode(fragment, " = " + terms[2]);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {

                  checkAnswer(terms[1]);
                }
              }
            }, 200);


            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "Subtraction magic is like addition but turned around:";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "1 + 2 = 3");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "3 - 2 = 1 or 3 - 1 = 2");
          let textTwo = "To earn this key you must answer 10 addition problems using subtraction."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn the key to the Subtraction Catacombs, you " +
                            "must prove your worthiness. Are you ready? "

        clearElement(guildTextDiv);

        menuSwitch(keySelectors, null);

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "Yes!", beginChallenge);

        })

      }

      function multiplicationChallenge() {

        function beginChallenge() {

          function checkAnswer(answer) {
            let answerInput = document.getElementById("answerInput");
            if (parseInt(answerInput.value) === answer) {
              document.onkeyup = "";
              if (questions < 10) {
                questions++;
                challenge();
              } else {
                player.spells.euler1.learned = true;
                player.multiplication.level = victory("Multiplication");
                player.notification.multiplicationKey = false;
              }
            } else {
              console.log(challengeDiv.lastChild.nodeType);
              if (challengeDiv.lastChild.nodeType > 1) {removeLastChild(challengeDiv, 3);}
              insertLineBreak(challengeDiv, 2);
              insertTextNode(challengeDiv, "Oh no! " + answerInput.value + " didn't work!");
              answerInput.value = "";
            }
          }

          function challenge() {
            clearElement(challengeDiv);
            let terms = getTerms("multiplication", 1);
            terms[1]++;
            terms[2] += terms[0];

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, terms[1] + " × " + terms[0] + " = ?");
            insertLineBreak(fragment, 2);

            for (let i = 0; i < terms[0]; i++) {
              if (i) {
                insertTextNode(fragment, " + " + terms[1]);
              } else {
                insertTextNode(fragment, terms[1]);
              }
            }
            insertTextNode(fragment, " = ");
            insertAnswerInput(fragment, terms[2]);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {

                  checkAnswer(terms[2]);
                }
              }
            }, 200);



            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "Multiplication magic is like addition but repeated:";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "4 × 3 is the same as");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "4 + 4 + 4");
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "7 × 4 is the same as");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "7 + 7 + 7 + 7");
          let textTwo = "To earn this key you must answer 10 problems using repeated addition."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn the key to the Multiplication Catacombs, you " +
                            "must prove your worthiness. Are you ready? "

        clearElement(guildTextDiv);

        menuSwitch(keySelectors, null);

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "Yes!", beginChallenge);
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
        })
      }

      function divisionChallenge() {

        function beginChallenge() {

          function checkAnswer(answer) {
            let answerInput = document.getElementById("answerInput");
            if (parseInt(answerInput.value) === answer) {
              if (questions < 10) {
                document.onkeyup = "";
                questions++;
                challenge();
              } else {
                player.spells.euler2.learned = true;
                player.division.level = victory("Division");
                player.notification.divisionKey = false;
              }
            } else {
              if (challengeDiv.childNodes.length > 6) {removeLastChild(challengeDiv, 3);}
              insertLineBreak(challengeDiv, 2);
              insertTextNode(challengeDiv, "Oh no! " + answerInput.value + " didn't work!");
              answerInput.value = "";
            }
          }

          function challenge() {
            clearElement(challengeDiv);
            let terms = getTerms("multiplication", 1);

            let fragment = document.createDocumentFragment();

            insertTextNode(fragment, terms[2] + " ÷ " + terms[0] + " = ?");
            insertLineBreak(fragment, 2);

            insertTextNode(fragment, terms[0] + " × ");
            insertAnswerInput(fragment, terms[1]);
            insertTextNode(fragment, " = " + terms[2]);

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {

                  checkAnswer(terms[1]);
                }
              }
            }, 200);



            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");

          let textOne = "Division magic is like multiplication but turned around:";
          insertTextNode(challengeDiv, textOne);
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "3 × 5 = 15");
          insertLineBreak(challengeDiv);
          insertTextNode(challengeDiv, "15 ÷ 5 = 3 or 15 ÷ 3 = 5");
          let textTwo = "To earn this key you must answer 10 multiplication problems " +
                        "using division."
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, textTwo);
          insertLineBreak(challengeDiv, 2);

          fadeTransition(challengeDiv, playArea);
          setTimeout(function() {
            insertButton(challengeDiv, "Begin", challenge);
          }, 501);
          let questions = 0;
        }

        let challengeText = "To earn the key to the Division Catacombs, you " +
                            "must prove your worthiness. Are you ready? "

        clearElement(guildTextDiv);

        menuSwitch(keySelectors, null);

        typer(challengeText, guildTextDiv, function() {
          insertButton(guildTextDiv, "Yes!", beginChallenge);
          insertTextNode(guildTextDiv, " ");
          insertButton(guildTextDiv, "No", function() {
            clearElement(guildTextDiv);
            catacombKeys();
            typer(introText, guildTextDiv, null);
          });
        })

      }

      let keyData = {
        sprites: [
          ["subtraction.gif", "Subtraction"],
          ["multiplication.gif", "Multiplication"],
          ["division.gif", "Divison"],
          ["guildDoors.gif", "Return"]
        ],
        path: "./mageGuild/keys/",
        index: 0
      }

      let keyText = "You're not ready to open any new catacombs right now. " +
                    "Come back when you're stronger.";

      if (player.subtraction.level) {
        keyData.sprites[0][0] = "subtractionKeyCompleted.gif";
      } else if (player.addition.level < 3) {
        keyData.sprites[0][0] = "subtractionKeyLocked.gif";
      } else {
        keyText = "I think you're ready to take on the Subtraction Catacombs!";
        subtractionClick = subtractionChallenge;
      }

      if (player.multiplication.level) {
        keyData.sprites[1][0] = "multiplicationKeyCompleted.gif";
      } else if (player.addition.level < 5) {
        keyData.sprites[1][0] = "multiplicationKeyLocked.gif";
      } else {
        keyText = "I think you're ready to take on the Multiplication Catacombs!";
        multiplicationClick = multiplicationChallenge;
      }

      if (player.division.level) {
        keyText = "You've unlocked all the catacombs! There are no more left to unlock!";
        keyData.sprites[2][0] = "divisionKeyCompleted.gif";
      } else if ((player.subtraction.level < 5) && (player.multiplication.level < 3)) {
        keyData.sprites[2][0] = "divisionKeyLocked.gif";
      } else {
        keyText = "I think you're ready to take on the Division Catacombs!";
        divisionClick = divisionChallenge;
      }

      clearElement(guildTextDiv);

      typer(keyText, guildTextDiv, null);

      let keySelectors = new MenuSelectors(1, "Earn Catacomb Keys");
      keySelectors.lowClass = "menuItemsLow"
      menuSwitch(guildMenuSelectors, function() {
        menuMaker(keySelectors, keyData, keySelection);
      });
    }

    function firstVisit() {

      function firstVisitPart1() {
        clearElement(guildTextDiv);
        let textString = "Welcome to the Mages' Guild, " + player.name + ". ";
        player.addition.level = 1;
        typer(textString, guildTextDiv, function() {
          insertButton(guildTextDiv, "Next", firstVisitPart2);
        });
      }
      function firstVisitPart2() {
        clearElement(guildTextDiv);
        let textString = "Before you start clearing out the monsters you'll need " +
                          "this key. ";
        typer(textString, guildTextDiv, function() {
          insertButton(guildTextDiv, "Next", firstVisitPart3);
          showImage("./mageGuild/keys/addition.gif", playArea);
        });
      }
      function firstVisitPart3() {
        clearElement(guildTextDiv);
        let textString = "You can come back for the other keys after you've gained " +
                          "some more experience. ";
        typer(textString, guildTextDiv, function() {
          insertButton(guildTextDiv, "Next", firstVisitPart4);
        });
      }
      function firstVisitPart4() {
        clearElement(guildTextDiv);
        let textString = "Before you leave, stop by the spell school for some magic " +
                          "that will help you in the catacombs.";
        typer(textString, guildTextDiv, function() {
          guildMenuSelectors.lowClass = "menuItemsLow";
          menuSwitch(null, function() {
            menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection, 2);
          })
        });
      }

      player.triggers.newGame = false;
      firstVisitPart1();
    }

    let tellahDiv = makeCameoDiv("Tellah.gif");
    let guildTextDiv = makeDiv("guildTextDiv", "textBox");
    let fragment = makeFragment(tellahDiv, guildTextDiv);

    let guildMenuData = {
      sprites: [
        ["library.gif", "Library"],
        ["key.gif", "Unlock Catacombs"],
        ["spells.gif", "Spell School"],
        ["return.gif", "Return"]
      ],
      path: "./mageGuild/",
      index: 0
    }
    let guildMenuSelectors = new MenuSelectors(1, "Welcome to the Mages' Guild")
    let introText = "It's good to see you again " + player.name +
                    ", what can I do for you?";

    fadeTransition(fragment, playArea, 500, function() {
      if (player.triggers.newGame) {
        firstVisit();
      } else {
        typer(introText, guildTextDiv, function () {
          menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection);
        });
      }
    });
  }
  //
  //Controls the Liber Mathemagicus, the book that is
  //the status information for the player
  function liberMathemagicus(monsterData) {
    let spellBookContent = [
      ["Fibonacci's Associative Spell", "fibonacciSpellBook1.gif"],
      ["Euler's Left Distributive Spell", "fibonacciSpellBook2.gif"],
      ["Euler's Right Distributive Spell", "fibonacciSpellBook3.gif"],
      ["Euclid's Fireball Spell", "triangleSpellBook.gif"],
      ["Hypatia's Healiing Spell", "squareSpellBook.gif"],
      ["Huygen's Stop Time Spell", "pyramidSpellBook.gif"],
      ["Lovelace's Reduction Spell", "pentagonSpellBook.gif"],
      ["Noether's Strength Spell", "hexagonSpellBook.gif"],
      ["Fermet's Polymorph Monster Spell", "cubeSpellBook.gif"],
      ["Brahe's Nova Spell", "starSpellBook.gif"]
    ];
    //
    //These two functions are left empty so they
    //can save a few lines in the book page functions
    let pageLeft = function() {}
    let pageRight = function() {}
    //
    //Puts the page title on the target page
    //text is text of the title in a string
    //target is the element the title will be
    //posted to
    //size is the size of the text in ems.
    //defaults to 1em
    function makePageTitle(text, target, size = 1.5) {
      let p = document.createElement("p");
      p.style.textAlign = "center";
      p.style.fontWeight = "bold";
      p.style.textDecoration = "underline";
      p.style.fontSize = size + "em";
      insertTextNode(p, text);
      target.appendChild(p);
    }
    //
    //Checks which of the arrow keys was pressed and
    //executes a function depending on which one
    function checkKeys(key) {
      switch (key) {
        case 37:
          document.onkeyup = "";
          pageRight();
          break;
        case 39:
          document.onkeyup = "";
          pageLeft();
          break;
      }
    }
    //
    //This function handles the animation of turning
    //a page to the left.
    //currentPage is the page DOM object from which the
    //function is called.
    //targetPage is the function that creates the elements
    //for the next page to be displayed.
    //index is an optional argument that is passed only if
    //targetPage needs an argument to display properly.
    function turnPageLeft(currentPage, targetPage, index) {
      let nextPage = targetPage(index);
      let bg = getRandomNumber(0, 3);
      nextPage.style.backgroundImage = "url(./book/" + pageBackgrounds[bg] +")";
      monsterBook.appendChild(nextPage);
      currentPage.style.zIndex = "2";
      currentPage.style.transformOrigin = "0 200px 0px";
      requestAnimationFrame(function() {
        currentPage.style.transform = "perspective(2000px) rotateY(-90deg)";
      });
      setTimeout(function() {
        requestAnimationFrame(function() {
          monsterBook.removeChild(currentPage);
        });
      }, 750);
    }
    //
    //This function handles the animation of turning a
    //page to the right. It does not like to run as it
    //should most of the time and I need to vigorously
    //debug it
    //currentPage is the page DOM object from which the
    //function is called.
    //targetPage is the function that creates the elements
    //for the next page to be displayed.
    //index is an optional argument that is passed only if
    //targetPage needs an argument to display properly.
    function turnPageRight(currentPage, targetPage, index) {
      currentPage.style.zIndex = "1";
      let nextPage = targetPage(index);
      if (nextPage.id === "titlePage") {
        nextPage.style.backgroundImage = "url(./book/bookCover.gif)";
      } else {
        let bg = getRandomNumber(0, 3);
        nextPage.style.backgroundImage = "url(./book/" + pageBackgrounds[bg] + ")";
      }
      nextPage.style.zIndex = "2";
      nextPage.style.transformOrigin = "0 200px 0px";
      nextPage.style.transform = "perspective(2000px) rotateY(-90deg)";
      monsterBook.insertBefore(nextPage, currentPage);
      setTimeout(function() {
        //
        //The only way I can get this page turn to animate
        //cleanly and consistently is to include this console.clear()...
        //I want to find a better way...
        //console.clear();
        requestAnimationFrame(function() {
          nextPage.style.transform = "perspective(2000px) rotateY(0deg)";
        });
      }, 100);
      setTimeout(function() {
        requestAnimationFrame(function() {monsterBook.removeChild(currentPage);});
      }, 850);

    }
    //
    //This function creates and displays the two
    //turn page buttons at the bottom corners of
    //each of my pages
    //targetElement is the DOM object to which the
    //turn page buttons will be displayed
    function turnPageButtons(targetElement) {
      let pageTurnButtons = makeDiv("pageTurnButtons");

      const leftButton = makeButton(null, "<", "leftPageButton", "turnPageButtons");
      pageTurnButtons.appendChild(leftButton);

      const rightButton = makeButton(null, ">", "rightPageButton", "turnPageButtons");
      pageTurnButtons.appendChild(rightButton);

      targetElement.appendChild(pageTurnButtons);

      return(pageTurnButtons);
    }
    //
    //This function makes the quick buttons that
    //go at the top of most book pages.
    //targetElement is the DOM object to which the
    //quick buttons will be displayed
    function makeQuickButtons(targetElement) {

      let quickButtonDiv = makeDiv("quickButtonDiv");

      let button = makeButton(null, "ToC", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Status", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Spells", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Monsters", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Achievements", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      targetElement.appendChild(quickButtonDiv);
      return quickButtonDiv;
    }
    //
    //This function makes the cover of my book even
    //though it is called title page
    function makeTitlePage() {

      let titlePage = makeDiv("titlePage", "bookPage");
      //
      //This block puts the button on the corners to
      //turn the page
      let pageTurnButtons = turnPageButtons(titlePage);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      turnButton[1].onclick = function() {turnPageLeft(titlePage, contentsPage);}
      turnButton[0].parentNode.removeChild(turnButton[0]);
      //
      //This is an event listener to use the arrows to
      //turn the pages
      document.onkeyup = function(e) {
        e = e || window.event;
        if (e.keyCode === 39) {
          document.onkeyup = "";
          turnPageLeft(titlePage, contentsPage);
        }
      }
      //
      //This puts the title of the book onto the page
      //and then puts it on the screen
      let p = document.createElement("p");
      insertTextNode(p, "Liber");
      insertLineBreak(p);
      insertTextNode(p, "Mathemagicus");
      titlePage.appendChild(p);

      return titlePage;
    }
    //
    //This function handles the set up of the
    //table of contents page. I need to make it
    //look better
    function contentsPage() {
      let tableOfContents = makeDiv("tableOfContents", "bookPage");
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page

      /*function setQuickButtons(buttons, origin, remove) {
        let quickButton = buttons.getElementsByClassName("quickButtons");
        quickButton[0].onclick = function() {turnPageLeft(origin, contentsPage);}
        quickButton[1].onclick = function() {turnPageLeft(origin, statusPage);}
        quickButton[2].onclick = function() {turnPageLeft(origin, spellsPage);}
        quickButton[3].onclick = function() {turnPageLeft(origin, monstersPage);}
        quickButton[4].onclick = function() {turnPageLeft(origin, achievementsPage);}
        quickButton[remove].parentNode.removeChild(quickButton[remove]);
      }*/

      let quickButtons = makeQuickButtons(tableOfContents);
      //setQuickButtons(quickButtons, tableOfContents, 0)
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[1].onclick = function() {turnPageLeft(tableOfContents, statusPage);}
      quickButton[2].onclick = function() {turnPageLeft(tableOfContents, spellsPage);}
      quickButton[3].onclick = function() {turnPageLeft(tableOfContents, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(tableOfContents, achievementsPage);}
      quickButton[0].parentNode.removeChild(quickButton[0]);
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(tableOfContents);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      pageRight = function() {turnPageRight(tableOfContents, makeTitlePage);}
      turnButton[0].onclick = pageRight;
      pageLeft = function() {turnPageLeft(tableOfContents, statusPage);}
      turnButton[1].onclick = pageLeft;
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }

      makePageTitle("Table of Contents", tableOfContents);
      //
      //Makes the parts for the chapters on the Table of
      //Contents page
      //targetPage is the function that calls the page linked
      //to the chapter
      //title is the bold, underlined title of the chapter
      //text is the text that is displayed beneath the
      //chapter title
      function chapterEntry(targetPage, title, text) {
        let p = document.createElement("p");
        let span = document.createElement("span");
        span.onclick = function() {turnPageLeft(tableOfContents, targetPage);}
        let node1 = document.createTextNode(title);
        let node2 = document.createTextNode(text);

        span.appendChild(node1);
        p.appendChild(span);
        insertLineBreak(p);
        p.appendChild(node2);

        return p;
      }

      let p = chapterEntry(statusPage, "Status", "A list of " + player.possessive + " progress.");
      tableOfContents.appendChild(p);

      p = chapterEntry(spellsPage, "Spells", "A list of the spells " + player.name + " has learned.");
      tableOfContents.appendChild(p);

      p = chapterEntry(monstersPage, "Monsters", "A list of the monsters " + player.name + " has encountered.");
      tableOfContents.appendChild(p);

      p = chapterEntry(achievementsPage, "Achievements", "A list of the achievements " + player.name + " has earned.");
      tableOfContents.appendChild(p);

      return tableOfContents;
    }
    //
    //This function makes the layout of the status
    //page of the player's book
    function statusPage() {
      //
      //Displays the player's stats for the different operations
      //target is the element the stats will be added to
      //text is the text string that will be added
      //level is the player's level for that operation
      //average is the array w/ the average info
      function makeStats(target, text, level, average) {
        insertTextNode(target, text + level);
        insertLineBreak(target);
        let averageInfo = appendAverageInfo(average);
        target.appendChild(averageInfo);
        insertLineBreak(target);
      }
      //
      //Adds the two lines with even more stats to the book
      //array is the array w/ the average info
      function appendAverageInfo(array) {
        let span = document.createElement("span");
        insertTextNode(span, "Average Answer Time: " + array[0].toFixed(2));
        insertLineBreak(span);
        insertTextNode(span, "Questions Answered: " + array[1]);
        return span;
      }

      let status = makeDiv("statusPage", "bookPage");
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(status);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(status, contentsPage);}
      quickButton[2].onclick = function() {turnPageLeft(status, spellsPage);}
      quickButton[3].onclick = function() {turnPageLeft(status, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(status, achievementsPage);}
      quickButton[1].parentNode.removeChild(quickButton[1]);
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(status);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      pageRight = function() {turnPageRight(status, contentsPage);}
      turnButton[0].onclick = pageRight;
      pageLeft = function() {turnPageLeft(status, spellsPage);}
      turnButton[1].onclick = pageLeft;
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }
      //
      //This block makes and places the <div> and <image>
      //elements for the status page of the book
      let playerCameoDiv = makeDiv("playerCameoDiv");
      playerCameoDiv.onclick = function() {
        playerCameoImg.src = player.sprites.path + player.sprites.files[1];
        setTimeout(function() {
          playerCameoImg.src = player.sprites.path + player.sprites.files[0];
        }, 1000);
      }
      let playerCameoImg = makeImg(player.sprites.path + player.sprites.files[0], "playerCameoImg");
      playerCameoDiv.appendChild(playerCameoImg);
      status.appendChild(playerCameoDiv);
      //
      //This makes the players name
      let p = document.createElement("p");
      insertTextNode(p, player.name);
      p.style.textAlign = "right";
      p.style.marginRight = "10px";
      p.style.fontSize = "1.5em";
      p.style.marginBottom = "10px";
      p.style.fontWeight = "bold";
      p.style.textDecoration = "underline";
      status.appendChild(p);
      //
      //This displays the max health and damage of the player
      p = document.createElement("p");
      p.style.marginTop = "-27px";
      insertTextNode(p, "Max Health: " + player.maxHealth);
      insertLineBreak(p);
      insertTextNode(p, "Max Damage: " + player.damage);
      status.appendChild(p);
      //
      //This displays the total monsters killed
      p = document.createElement("p");
      insertTextNode(p, "Monsters Killed: " + player.stats.monstersKilled);
      status.appendChild(p);
      //
      //This displays the different levels of the player
      p = document.createElement("p");
      makeStats(p, "Addition Level: ", player.addition.level, player.addition.totalAverage);
      makeStats(p, "Subtraction Level: ", player.subtraction.level, player.subtraction.totalAverage);
      makeStats(p, "Multiplication Level: ", player.multiplication.level, player.multiplication.totalAverage);
      makeStats(p, "Division Level: ", player.division.level, player.division.totalAverage);
      status.appendChild(p);

      const saveGame = makeButton(null, "Save Game", "saveGame");
      status.appendChild(saveGame);

      return status;
    }

    function findNextSpell(index, object) {
      //console.log(Object.keys(object).length);
      for (let i = index + 1; i < Object.keys(object).length; i++) {
        if (Object.values(object)[i].learned) {
          return i;
        }
      }
      return false;
    }

    function findPreviousSpell(index, object) {
      for (let i = index - 1; i >= 0; i--) {
        if (Object.values(object)[i].learned === true) {
          return i;
        }
      }
      return false;
    }
    //
    //This function makes the layout of the spells
    //page of the player's book.
    function spellsPage() {
      let spells = makeDiv("spellsPage", "bookPage");
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(spells);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(spells, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(spells, statusPage);}
      quickButton[3].onclick = function() {turnPageLeft(spells, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(spells, achievementsPage);}
      quickButton[2].parentNode.removeChild(quickButton[2]);
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(spells);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      pageRight = function() {turnPageRight(spells, statusPage);}

      if (typeof findNextSpell(-1, player.spells) === "number") {
        pageLeft = function() {
          turnPageLeft(spells, spellDetailPage, findNextSpell(-1, player.spells));
        }
      } else {
        pageLeft = function() {
          turnPageLeft(spells, monstersPage);
        }
      }

      turnButton[0].onclick = pageRight;
      turnButton[1].onclick = pageLeft;
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }
      //
      //Inserts the title of the Spell Page
      makePageTitle(player.possessive + " Spells", spells);
      //
      //Iterates through the spells the player has acquired
      //and places them in the spells object
      for (let i = 0; i < Object.values(player.spells).length; i++) {
        if (Object.values(player.spells)[i].learned === true) {
          let span = document.createElement("span");
          span.onclick = function() {
            turnPageLeft(spells, spellDetailPage, i);
          }
          insertTextNode(span, Object.values(player.spells)[i].name)
          insertLineBreak(span);
          spells.appendChild(span);
        }

      }

      /*for (let index in player.spells.learned) {
        let span = document.createElement("span");
        span.onclick = function() {
          turnPageLeft(spells, spellDetailPage, (index - 1));
        }
        insertTextNode(span, spellBookContent[player.spells.learned[index]][0])
        insertLineBreak(span);
        spells.appendChild(span);
        index++;
      }*/

      return spells;
    }
    //
    //This function handles the individual spell pages
    //index is the index of player.spells.learned
    function spellDetailPage(index) {

      let spell = makeDiv("spellsDetailPage", "bookPage");
      //
      //Determines the function of the page turning butttons
      if (findPreviousSpell(index, player.spells) === false) {
        pageRight = function() {
          turnPageRight(spell, spellsPage);
        }
      } else {
        pageRight = function() {
          //console.log(findPreviousSpell(index, player.spells));
          turnPageRight(spell, spellDetailPage, findPreviousSpell(index, player.spells));
        }
      }

      if (findNextSpell(index, player.spells)) {
        pageLeft = function() {
          turnPageLeft(spell, spellDetailPage, findNextSpell(index, player.spells));
        }
      } else {
        pageLeft = function() {
          turnPageLeft(spell, monstersPage);
        }
      }
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(spell);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(spell, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(spell, statusPage);}
      quickButton[2].onclick = function() {turnPageRight(spell, spellsPage);}
      quickButton[3].onclick = function() {turnPageLeft(spell, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(spell, achievementsPage);}
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(spell);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      turnButton[0].onclick = pageRight;
      turnButton[1].onclick = pageLeft;
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }

      let spellDiv = makeDiv("spellDetailDiv");
      let spellImg = makeImg("./scrolls/" + spellBookContent[index][1]);
      spellImg.style.height = "330px";
      spellDiv.appendChild(spellImg);
      spell.appendChild(spellDiv);

      return spell;
    }
    //
    //This function makes the main monster page
    //of my monster book
    function monstersPage() {
      //
      //Does the work of making and placing the HTML elements
      //for the monster types onto the page
      function showTypeInfo(destination, target, text, typeArray) {
        let span = document.createElement("span");
        insertTextNode(span, text);
        if (typeof(typeArray[0]) === "object") {
          span.onclick = function() {turnPageLeft(monsters, monsterBasePage, destination);}
        } else {
          span.onclick = "";
        }
        target.appendChild(span);
        insertTextNode(target, ": " + typeArray.length);
        insertLineBreak(target);
      }

      let monsters = makeDiv("monsterPage", "bookPage");
      //
      //Determines the function of the page turning butttons
      pageRight = function() {
        turnPageRight(monsters, spellDetailPage, findPreviousSpell(10, player.spells));
      }
      if (typeof(player.addition.monsters[0]) === "object") {
        pageLeft = function() {
          turnPageLeft(monsters, monsterBasePage, "+");
        }
      } else {
        pageLeft = function() {
          turnPageLeft(monsters, achievementsPage);
        }
      }
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(monsters);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(monsters, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(monsters, statusPage);}
      quickButton[2].onclick = function() {turnPageRight(monsters, spellsPage);}
      quickButton[4].onclick = function() {turnPageLeft(monsters, achievementsPage);}
      quickButton[3].parentNode.removeChild(quickButton[3]);
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(monsters);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      turnButton[0].onclick = pageRight;
      turnButton[1].onclick = pageLeft;
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }
      makePageTitle("Capitulum Prodigium", monsters, 1.5);
      //
      //Puts the number of monsters killed of each
      //type onto the page
      showTypeInfo("+", monsters, "Addition Monsters", player.addition.monsters);
      showTypeInfo("-", monsters, "Subtraction Monsters", player.subtraction.monsters);
      showTypeInfo("*", monsters, "Multiplication Monsters", player.multiplication.monsters);
      showTypeInfo("/", monsters, "Division Monsters", player.division.monsters);

      return monsters;
    }
    //
    //This function makes the base page for each
    //type of monster
    //monsterClass is a string that determines which
    //base page to create (+, -, *, /)
    function monsterBasePage(monsterClass) {
      //
      //Sets the values to be usesd to display the monster names
      //and to be passed to the Monster Detail Page
      function setArrayValues(playerInfo, monsterInfo) {
        monsterArray = playerInfo;
        monsterFiles = monsterInfo.files;
        monsterNames = monsterInfo.names;
      }
      //
      //Inserts a <td> into my table of monster names
      //target is the DOM element into which the DOM
      //element is inserted
      //index is the index of the monster to display
      //in the array of monsters the player has defeated
      function insertTableCell(target, index) {
        let td = document.createElement("td");
        insertTextNode(td, (monsterArray[index][0] + 1) + ". " + monsterNames[monsterArray[index][0]]);
        td.onclick = function() {turnPageLeft(monsterList, monsterDetailPage, [monsterClass, monsterArray[index][0]]);}
        target.appendChild(td);
      }

      let monsterList = makeDiv("monsterListPage", "bookPage");

      let monsterArray = null;
      let monsterFiles = null;
      let monsterNames = null;
      let last = null;
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(monsterList);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(monsterList, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(monsterList, statusPage);}
      quickButton[2].onclick = function() {turnPageRight(monsterList, spellsPage);}
      quickButton[3].onclick = function() {turnPageRight(monsterList, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(monsterList, achievementsPage);}

      let pageTurnButtons = turnPageButtons(monsterList);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      //
      //This sets up the book page based on the value
      //of the monsterClass parameter
      switch (monsterClass) {
        case "+":
          setArrayValues(player.addition.monsters, monsterData.addition);
          makePageTitle("Addition Monsters", monsterList)
          pageRight = function() {turnPageRight(monsterList, monstersPage);}
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["+", player.addition.monsters[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
        case "-":
          setArrayValues(player.subtraction.monsters, monsterData.subtraction);
          makePageTitle("Subtraction Monsters", monsterList)
          last = (player.addition.monsters.length - 1);
          pageRight = function() {
            turnPageRight(monsterList, monsterDetailPage, ["+", player.addition.monsters[last][0]]);
          }
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["-", player.subtraction.monsters[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;

          break;
        case "*":
          setArrayValues(player.multiplication.monsters, monsterData.multiplication);
          makePageTitle("Multiplication Monsters", monsterList)
          last = (player.subtraction.monsters.length - 1);
          pageRight = function() {
            turnPageRight(monsterList, monsterDetailPage, ["-", player.subtraction.monsters[last][0]]);
          }
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["*", player.multiplication.monsters[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;

          break;
        case "/":
          setArrayValues(player.division.monsters, monsterData.division);
          makePageTitle("Division Monsters", monsterList)
          last = (player.multiplication.monsters.length - 1);
          pageRight = function() {
            turnPageRight(monsterList, monsterDetailPage, ["*", player.multiplication.monsters[last][0]]);
          }
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["/", player.division.monsters[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;

          break;
      }

      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }
      //
      //Makes the table that displays the names of the
      //monsters the player has defeated
      let table = document.createElement("table");
      table.id = "monsterListTable";
      for (let i = 0; i < monsterArray.length; i += 3) {
        let tr = document.createElement("tr");
        insertTableCell(tr, i);
        if (typeof(monsterArray[i + 1]) === "object") {
          insertTableCell(tr, i + 1);
        }
        if (typeof(monsterArray[i + 2]) === "object") {
          insertTableCell(tr, i + 2);
        }
        table.appendChild(tr);
      }

      monsterList.appendChild(table);

      return monsterList;
    }
    //
    //This function makes the individual monster pages
    //in the monster book
    //currentMonster is an array.
    //currentMonster[0] is a string that tells the function
    //which class the monster is (+, -, *, /)
    //currentMonster[1] is the index of the monster in the
    //...Monsters/...MonsterNames arrays
    function monsterDetailPage(currentMonster) {
      //
      //Sets the values to be usesd to display the monster names
      //and to be passed to the Monster Detail Page
      function setArrayValues(playerInfo, monsterInfo) {
        monsterArray = playerInfo;
        monsterFiles = monsterInfo.files;
        monsterNames = monsterInfo.names;
        imgSrcString = monsterInfo.path;
        currentIndex = findMonster(monsterArray, currentMonster[1]);
      }

      let monsterArray = null;
      let monsterFiles = null;
      let monsterNames = null;
      let imgSrcString = null;
      let currentIndex = null;

      let monsterDetail = makeDiv("monsterDetailPage", "bookPage");
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(monsterDetail);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(monsterDetail, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(monsterDetail, statusPage);}
      quickButton[2].onclick = function() {turnPageRight(monsterDetail, spellsPage);}
      quickButton[3].onclick = function() {turnPageRight(monsterDetail, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(monsterDetail, achievementsPage);}

      let pageTurnButtons = turnPageButtons(monsterDetail);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");

      switch (currentMonster[0]) {
        case "+":
          setArrayValues(player.addition.monsters, monsterData.addition);
          if (currentIndex === 0) {
            pageRight = function() {turnPageRight(monsterDetail, monsterBasePage, "+");}
          } else {
            let next = (findMonster(monsterArray, currentMonster[1]) - 1);
            pageRight = function() {
              turnPageRight(monsterDetail, monsterDetailPage, ["+", monsterArray[next][0]]);
            }
          }
          if ((currentIndex) < (monsterArray.length - 1)) {
            let next = (findMonster(monsterArray, currentMonster[1]) + 1);
            pageLeft = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["+", monsterArray[next][0]]);}
          } else {
            if ((player.subtraction.monsters[0] + 1)) {
              pageLeft = function() {turnPageLeft(monsterDetail, monsterBasePage, "-");}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
        case "-":
          setArrayValues(player.subtraction.monsters, monsterData.subtraction);
          if (currentIndex === 0) {
            pageRight = function() {turnPageRight(monsterDetail, monsterBasePage, "-");}
          } else {
            let next = (findMonster(monsterArray, currentMonster[1]) - 1);
            pageRight = function() {turnPageRight(monsterDetail, monsterDetailPage, ["-", monsterArray[next][0]]);}
          }
          if ((currentIndex) < (monsterArray.length - 1)) {
            let next = (findMonster(monsterArray, currentMonster[1]) + 1);
            pageLeft = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["-", monsterArray[next][0]]);}
          } else {
            if ((player.multiplication.monsters[0] + 1)) {
              pageLeft = function() {turnPageLeft(monsterDetail, monsterBasePage, "*");}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
        case "*":
          setArrayValues(player.multiplication.monsters, monsterData.multiplication);
          if (currentIndex === 0) {
            pageRight = function() {turnPageRight(monsterDetail, monsterBasePage, "*");}
          } else {
            let next = (findMonster(monsterArray, currentMonster[1]) - 1);
            pageRight = function() {turnPageRight(monsterDetail, monsterDetailPage, ["*", monsterArray[next][0]]);}
          }
          if ((currentIndex) < (monsterArray.length - 1)) {
            let next = (findMonster(monsterArray, currentMonster[1]) + 1);
            pageLeft = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["*", monsterArray[next][0]]);}
          } else {
            if ((player.division.monsters[0] + 1)) {
              pageLeft = function() {turnPageLeft(monsterDetail, monsterBasePage, "/");}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick= pageLeft;
          break;
        case "/":
          setArrayValues(player.division.monsters, monsterData.division);
          if (currentIndex === 0) {
            pageRight = function() {turnPageRight(monsterDetail, monsterBasePage, "/");}
          } else {
            let next = (findMonster(monsterArray, currentMonster[1]) - 1);
            pageRight = function() {turnPageRight(monsterDetail, monsterDetailPage, ["/", monsterArray[next][0]]);}
          }
          if ((currentIndex) < (monsterArray.length - 1)) {
            let next = (findMonster(monsterArray, currentMonster[1]) + 1);
            pageLeft = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["/", monsterArray[next][0]]);}
          } else {
            pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
      }
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        checkKeys(e.keyCode);
      }

      makePageTitle((currentMonster[1] + 1) + ". " + monsterNames[currentMonster[1]], monsterDetail);
      //
      //Number of monsters killed
      p = document.createElement("p");
      insertTextNode(p, "Number Killed: " + monsterArray[currentIndex][1]);
      monsterDetail.appendChild(p);
      //
      //Level of monster
      p = document.createElement("p");
      if (currentMonster[1] < 30) {
        var monsterLevel = Math.ceil((currentMonster[1] + 1) / 3);
        insertTextNode(p, "Level " + monsterLevel);
      } else {
        var monsterLevel = ((currentMonster[1] % 30) * 2) + 2;
        insertTextNode(p, "Level " + monsterLevel + " Boss");
      }
      monsterDetail.appendChild(p);
      //
      //Hit points of monster
      //Only visible after 5 or more have been killed
      if (monsterArray[currentIndex][1] > 4) {
        p = document.createElement("p");
        if (currentMonster[1] < 30) {
          insertTextNode(p, "Hit Points: " + Number(monsterLevel + 1));
        } else {
          insertTextNode(p, "Hit Points: " + ((monsterLevel * 2) + (monsterLevel / 2) + 5));
        }
        monsterDetail.appendChild(p);
      }
      //
      //Damage monster inflicts
      //Only visible after 10 or more have been killed
      if (monsterArray[currentIndex][1] > 9) {
        p = document.createElement("p");
        insertTextNode(p, "Damage: " + Math.ceil((currentMonster[1] + 1) / 9));
        monsterDetail.appendChild(p);
      }
      //
      //Range of problem difficulty for monster
      //Only visible after 20 or more have been killed
      if (monsterArray[currentIndex][1] > 19) {
        switch (currentMonster[0]) {
          case "+":
            var floor1 = 0;
            var floor2 = 0;
            var ceiling1 = monsterLevel * 10;
            var ceiling2 = ceiling1;
            var operation = "+";
            break;
          case "-":
            var floor1 = 1;
            var floor2 = 0;
            var ceiling1 = monsterLevel * 10;
            var ceiling2 = ceiling1;
            var operation = "-";
            break;
          case "*":
            var floor1 = 1;
            var floor2 = 0;
            var ceiling1 = monsterLevel + 5;
            var ceiling2 = ((monsterLevel + 5) - ((((monsterLevel % 2) + monsterLevel) / 2) - 1));
            var operation = "*";
            break;
          case "/":
            var floor1 = 1;
            var floor2 = 1;
            var ceiling1 = 5 * ((monsterLevel + 5) - ((((monsterLevel % 2) + monsterLevel) / 2) - 1));
            var ceiling2 = monsterLevel + 5;
            var operation = "/";
            break;
        }

        p = document.createElement("p");
        insertTextNode(p, "Attack: (" + floor1 + " - " + ceiling1 + ") " + operation + " (" + floor2 +
                          " - " + ceiling2 + ")");
        monsterDetail.appendChild(p);
      }

      let monsterDetailDiv = makeDiv("monsterDetailDiv");
      if (monsterArray[currentIndex][1] < 5) {
        monsterDetailDiv.style.border = "3px solid black";
      } else if (monsterArray[currentIndex][1] < 10) {
        monsterDetailDiv.style.border = "3px solid #cd7f32";
      } else if (monsterArray[currentIndex][1] < 20) {
        monsterDetailDiv.style.border = "3px solid #c0c0c0";
      } else {
        monsterDetailDiv.style.border = "3px solid #d4af37";
      }
      let monsterDetailImg = makeImg(imgSrcString + monsterFiles[currentMonster[1]], "monsterImg");
      monsterDetailDiv.appendChild(monsterDetailImg);
      monsterDetail.appendChild(monsterDetailDiv);

      return monsterDetail;
    }
    //
    //This function makes the achievements page
    function achievementsPage() {
      //
      //This determines whether an achievement is triggered
      //target is the element that contains the image
      //value is the value that will trigger the achievement
      //threshold are the specific values that trigger
      //the achievement
      //text is the text that will appear when the player
      //hovers over the achievement image
      //colors are the three background colors that correspond
      //to the different levels of the achievement
      function setAchievement(target, value, threshold, text, colors = ["#cd7f32", "#c0c0c0", "#d4af37"]) {
        if (value >= threshold[0]) {
          target.lastChild.style.filter = "opacity(100%)";
          target.lastChild.title = value + " " + text;
          if (value >= threshold[2]) {
            target.firstChild.style.backgroundColor = colors[2];
          } else if (value >= threshold[1]) {
            target.firstChild.style.backgroundColor = colors[1];
          } else {
            target.firstChild.style.backgroundColor = colors[0];
          }
        } else {
          target.firstChild.style.filter = "opacity(30%)";
        }
      }
      //
      //Determines whether a dungeon achievement is triggered
      //target is the element that contains the image
      //monsters holds the value to check for the gold level
      //level holds the value to check for the silver level
      //dungeon holds a string indicating the dungeon
      function setDungeonAchievement(target, monsters, level, dungeon) {
        if (monsters.length === 35) {
          target.lastChild.style.filter = "opacity(100%)";
          target.lastChild.title = "Defeated one of every monster in the " + dungeon + " Catacomb.";
          target.firstChild.style.backgroundColor = "#d4af37";
        } else if (level > 10) {
          target.firstChild.style.backgroundColor = "#c0c0c0";
          target.lastChild.title = "Completed the " + dungeon + " Catacomb."
        } else if (level > 0) {
          target.firstChild.style.backgroundColor = "#cd7f32";
          target.lastChild.title = "Unlocked the " + dungeon + " Catacomb."
        } else {
          target.lastChild.style.filter = "opacity(30%)";
        }
      }
      //
      //This does a lot of the boring work to make
      //an image for the achievement table
      //imgSource is the file name for the image
      //returns a <td> element to put in a <tr>
      function makeAchievementElement(imgSource) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let div = document.createElement("div");
        let img = makeImg("./icons/" + imgSource, "", "achievementImg");
        div.style.borderRadius = "5px";
        div.appendChild(img);
        td.appendChild(div);
        return td;
      }
      //
      //Used to get the sum of all elements in an array
      function getSum(total, num) {
        return total + num;
      }

      let achievementPage = makeDiv("achievementPage", "bookPage");
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(achievementPage);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(achievementPage, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(achievementPage, statusPage);}
      quickButton[2].onclick = function() {turnPageRight(achievementPage, spellsPage);}
      quickButton[3].onclick = function() {turnPageRight(achievementPage, monstersPage);}
      quickButton[4].parentNode.removeChild(quickButton[4]);
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(achievementPage);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      if (Array.isArray(player.division.monsters[0])) {
        let index = player.division.monsters.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["/", player.division.monsters[index][0]]);
        }
      } else if (Array.isArray(player.multiplication.monsters[0])) {
        let index = player.multiplication.monsters.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["*", player.multiplication.monsters[index][0]]);
        }
      } else if (Array.isArray(player.subtraction.monsters[0])) {
        let index = player.subtraction.monsters.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["-", player.subtraction.monsters[index][0]]);
        }
      } else if (Array.isArray(player.addition.monsters[0])) {
        let index = player.addition.monsters.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["+", player.addition.monsters[index][0]]);
        }
      } else {
        pageRight = function() {turnPageRight(achievementPage, monstersPage);}
      }
      turnButton[0].onclick = pageRight;
      turnButton[1].parentNode.removeChild(turnButton[1]);

      document.onkeyup = function(e) {
        e = e || window.event;
        if (e.keyCode === 37) {
          document.onkeyup = "";
          pageRight();
        }
      }

      makePageTitle(player.possessive + " Achievements", achievementPage);

      let table = document.createElement("table");
      table.id = "achievementTable"
      let tr = document.createElement("tr");

      //
      //This controls the achievement for total number of
      //monsters killed
      let td = makeAchievementElement("graveyard.png");
      setAchievement(td, player.stats.monstersKilled, [100, 200, 500], "monsters killed.");
      tr.appendChild(td);
      //
      //This controls the achievement for total questions
      //answered in less than 1 second
      td = makeAchievementElement("sprint.png");
      if (player.stats.flash === 1) {
        var flashText = "question answered in less than 1 second.";
      } else {
        var flashText = "questions answered in less than 1 second.";
      }
      setAchievement(td, player.stats.flash, [1, 10, 50], flashText);
      tr.appendChild(td);
      //
      //This controls the achievement for total number of
      //questions answered with less than 1 second remaining
      td = makeAchievementElement("stopwatch.png");
      if (player.stats.lastSecond === 1) {
        var slowText = "question answered with less than 1 second remaining.";
      } else {
        var slowText = "questions answered with less than 1 second remaining.";
      }
      setAchievement(td, player.stats.lastSecond, [1, 10, 50], slowText);
      tr.appendChild(td);
      //
      //This controls the achievement for total number of
      //answers equal to 42
      td = makeAchievementElement("dolphin.png");
      if (player.stats.fortyTwo === 1) {
        var dolphinText = "answer equal to 42.";
      } else {
        var dolphinText = "answers equal to 42.";
      }
      setAchievement(td, player.stats.fortyTwo, [1, 21, 42], dolphinText);
      tr.appendChild(td);
      //
      //This controls the achievement for total number of
      //answers equal to a prime number
      td = makeAchievementElement("prime.png");
      if (player.stats.primes === 1) {
        var primeText = "answer equal to a prime number.";
      } else {
        var primeText = "answers equal to a prime number.";
      }
      setAchievement(td, player.stats.primes, [1, 20, 100], primeText);
      tr.appendChild(td);
      table.appendChild(tr);

      tr = document.createElement("tr");
      //
      //This controls the achievement that tracks the
      //total amount of damage done to enemies
      td = makeAchievementElement("bleeding-wound.png");
      let bloodPalette = ["#ff9393", "#ff5656", "#b70000"];
      setAchievement(td, player.stats.damage.dealt, [200, 1000, 1500], "damage inflicted on monsters.", bloodPalette);
      tr.appendChild(td);
      //
      //This controls the achievement for tracking how
      //much damage the player has received
      td = makeAchievementElement("heart-minus.png");
      setAchievement(td, player.stats.damage.received, [10, 20, 50], "damage inflicted on " + player.name + ".");
      tr.appendChild(td);
      //
      //This controls the achievement for tracking how
      //much health the player has recovered
      td = makeAchievementElement("medical-pack.png");
      setAchievement(td, player.stats.damage.healed, [10, 20, 50], "health recovered.");
      tr.appendChild(td);
      //
      //This controls the achievement for how much damage
      //the player has inflicted with spells
      td = makeAchievementElement("fire-ray.png");
      setAchievement(td, player.attackSpells, [5, 10, 25], "Attack spells cast.");
      tr.appendChild(td);
      //
      //This controls the achievement for how many times the
      //player has used the fibonacci magic
      td = makeAchievementElement("help.png");
      setAchievement(td, player.hintSpells, [5, 10, 25], "Hint spells cast.");
      tr.appendChild(td);
      table.appendChild(tr);

      tr = document.createElement("tr");
      //
      //This controls the achievement for how many spells
      //the player has cast
      td = makeAchievementElement("spell-book.png");
      setAchievement(td, player.spellsCast, [10, 50, 100], "spells cast.");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the addition dungeon
      td = makeAchievementElement("laurels-plus.png");
      setDungeonAchievement(td, player.addition.monsters, player.addition.level, "Addition");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the subtraction dungeon
      td = makeAchievementElement("laurels-minus.png");
      setDungeonAchievement(td, player.subtraction.monsters, player.subtraction.level, "Subtraction");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the multiplication dungeon
      td = makeAchievementElement("laurels-times.png");
      setDungeonAchievement(td, player.multiplication.monsters, player.multiplication.level, "Multiplication");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the division dungeon
      td = makeAchievementElement("laurels-divide.png");
      setDungeonAchievement(td, player.division.monsters, player.division.level, "Division");
      tr.appendChild(td);

      table.appendChild(tr);

      achievementPage.appendChild(table);

      return achievementPage;


    }

    let fragment = document.createDocumentFragment();
    //
    //Makes the button that will return the player to the
    //main overworld menu
    const bookReturnButton = makeButton(returnToDungeonMenu, "Return to Menu", "bookReturnButton");
    fragment.appendChild(bookReturnButton);
    //
    //This block creates the <div> that holds all the
    //pages of the book and the title page
    let monsterBook = makeDiv("monsterBook");
    let titlePage = makeTitlePage();
    monsterBook.appendChild(titlePage);
    fragment.appendChild(monsterBook);

    fadeTransition(fragment, playArea);
    //
    //The background images for the pages of the book
    let pageBackgrounds = [
      "page1.gif",
      "page2.gif",
      "page3.gif",
      "page4.gif"
    ];
  }

  function postNotifications() {
    let notification = makeDiv("notification");
      insertTextNode(notification, "New Notifications");
    let notificationContent = makeDiv("notificationContent");
    for (let i = 0; i < Object.keys(player.notification).length; i++) {
      if (Object.values(player.notification)[i]) {
        insertTextNode(notificationContent, Object.values(player.notification)[i]);
        insertLineBreak(notificationContent);
      }
    }
    notification.appendChild(notificationContent);
    playArea.appendChild(notification);
  }

  let playArea = document.getElementById("playArea");
  //
  //The image data for the overworld menu
  let menuData = {
    sprites: [
      ["additionDoorClosed.gif", "Addition Catacombs"],
      ["subtractionDoorClosed.gif", "Subtraction Catacombs"],
      ["multiplicationDoorClosed.gif", "Multiplication Catacombs"],
      ["divisionDoorClosed.gif", "Division Catacombs"],
      ["guildDoors1.gif", "Mages' Guild"],
      ["book.gif", "Liber Mathemagicus"]
    ],
    path: "./doors/",
    index: 0
  }
  //
  //The selector data to make sure the overworld menu
  //is styled properly
  let overworldMenuSelectors = new MenuSelectors(0, "Choose your catacomb");
  //
  //Makes the overworld menu and puts it on the screen
  fadeTransition(null, playArea, 500, function() {
    launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection);
  });

}

//-------------------------------------------------------------------//
//Catacomb functions                                                 //
//-------------------------------------------------------------------//

//
//Gets the terms for the problems
function getTerms(type, level, operation) {
  let constant1 = null;
  let constant2 = null;
  let answer = null;
  switch (type) {
    case "addition": //Addition
      constant1 = getRandomNumber(0, (level * 10));
      constant2 = getRandomNumber(0, (level * 10));
      answer = constant1 + constant2;
      return [constant1, constant2, answer];
      break;
    case "subtraction": //Subtraction
      constant1 = getRandomNumber(1, (level * 10));
      constant2 = getRandomNumber(0, constant1);
      answer = constant1 - constant2;
      return [constant1, constant2, answer];
      break;
    case "multiplication": //Multiplication
      constant1 = getRandomNumber(1, (level + 5));
      constant2 = getRandomNumber(0, ((level + 5) - ((((level % 2) + level) / 2) - 1)));
      answer = constant1 * constant2;
      return [constant1, constant2, answer];
      break;
    case "division": //Division
      constant2 = getRandomNumber(1, (level + 5));
      answer = getRandomNumber(1, ((level + 5) - ((((level % 2) + level) / 2) - 1)));
      constant1 = constant2 * answer;
      return [constant1, constant2, answer];
      break;
    case "sequence":
      let sequenceTerms = [];
      let interval = 0;
      let range = 0;
      let start = 0
      switch (operation) {
        case "addition": //Addition
          interval = getRandomNumber(2, (level + 1));
          range = interval * 5;
          start = getRandomNumber(1, (100 - range));
          break;
        case "subtraction": //Subtraction
          interval = getRandomNumber(2, (level + 1));
          range = interval * 5;
          start = getRandomNumber((range + 1), 100);
          break;
        case "multiplication": //Multiplication
          interval = getRandomNumber(1, (Math.ceil((level + 1) / 2)));
          range = interval * 10;
          start = getRandomNumber(1, (100 - range));
          break;
        case "division": //Division
          interval = getRandomNumber(1, (Math.ceil((level + 1) / 2)));
          range = interval * 10;
          start = getRandomNumber((range + 1), 100);
          break;
      }
      let increment = interval;
      for (let i = 0; i < 6; i++) {
        sequenceTerms[i] = start;
        switch (operation) {
          case "addition":
            start += interval;
            break;
          case "subtraction":
            start -= interval;
            break;
          case "multiplication":
            start += interval;
            interval += increment;
            break;
          case "division":
            start -= interval;
            interval += increment;
            break;
        }
      }
      return [sequenceTerms[0], sequenceTerms[1], sequenceTerms[2], sequenceTerms[3], sequenceTerms[4]];
      break;
  }

}

function catacombs(player, operation, timerValue, catacombLevel, monsterData) {

  const current = {
    "addition": player.addition,
    "subtraction": player.subtraction,
    "multiplication": player.multiplication,
    "division": player.division
  }
  //
  //Makes the monster object
  class Monster {
    constructor(catacombLevel) {
      if (current[operation].level > catacombLevel) {
        this.index = getRandomNumber(0, ((catacombLevel * 3) - 1));
      } else {
        this.index = getRandomNumber(((catacombLevel * 3) - 3), ((catacombLevel * 3) - 1));
      }
      if (this.index > 33) {
        this.index = getRandomNumber(0, 33);
      }
      //
      //Level 1 - 3      1 dmg
      //Level 4 - 6      2 dmg
      //Level 7 - 9      3 dmg
      //Level 10         4 dmg
      this.hp = 2;
      this.maxHp = this.hp;
      this.damage = Math.ceil((this.index + 1) / 9);
      this.damageBoost = 0;
      if (this.index < 30) {
        this.level = Math.ceil((this.index + 1) / 3);
      } else {
        this.level = (((this.index % 30) * 2) + 2);
      }

      switch (operation) {
        case "addition":
          this.src = monsterData.addition.path + monsterData.addition.files[this.index];
          this.name = monsterData.addition.names[this.index];
          break;
        case "subtraction":
          this.src = monsterData.subtraction.path + monsterData.subtraction.files[this.index];
          this.name = monsterData.subtraction.names[this.index];
          break;
        case "multiplication":
          this.src = monsterData.multiplication.path + monsterData.multiplication.files[this.index];
          this.name = monsterData.multiplication.names[this.index];
          break;
        case "division":
          this.src = monsterData.division.path + monsterData.division.files[this.index];
          this.name = monsterData.division.names[this.index];
          break;
      }

      let monsterImg = document.getElementById("monsterImg");
      monsterImg.src = this.src;
      monsterImg.title = this.name;
    }
  }
  //
  //This function gets a new boss monster object and puts it on the screen
  class Boss {
    constructor() {
      this.level = current[operation].level;
      this.index = (current[operation].level / 2) + 29;
      //
      //Boss 1  Level 2   10 HP   3 dmg
      //Boss 2  Level 4   15 HP   3 dmg
      //Boss 3  Level 6   20 HP   4 dmg
      //Boss 4  Level 8   25 HP   4 dmg
      //Boss 5  Level 10  30 HP   5 dmg
      this.hp = (current[operation].level * 2) + (current[operation].level / 2) + 5;
      this.maxHp = this.hp;
      this.damage = (Math.floor(this.hp / 10) + 2);

      if (this.index === 34) {
        let playArea = document.getElementById("playArea");
        playArea.style.height = "474px";
        let monsterDiv = document.getElementById("monsterDiv");
        monsterDiv.style.height = "125px";
        monsterDiv.style.width = "125px";
      }
      switch (operation) {
        case "addition":
          this.src = monsterData.addition.path + monsterData.addition.files[this.index];
          this.name = monsterData.addition.names[this.index];
          break;
        case "subtraction":
          this.src = monsterData.subtraction.path + monsterData.subtraction.files[this.index];
          this.name = monsterData.subtraction.names[this.index];
          break;
        case "multiplication":
          this.src = monsterData.multiplication.path + monsterData.multiplication.files[this.index];
          this.name = monsterData.multiplication.names[this.index];
          break;
        case "division":
          this.src = monsterData.division.path + monsterData.division.files[this.index];
          this.name = monsterData.division.names[this.index];
          break;
      }

      let monsterImg = document.getElementById("monsterImg");
      monsterImg.src = this.src;
      monsterImg.title = this.name;
    }
  }
  //
  //A quick dungeon intro screen
  function catacombIntro() {

    let div = makeDiv("", "textBox");
    insertTextNode(div, "Prepare yourself to fight monsters!");
    insertLineBreak(div, 2);
    insertButton(div, "Go!", makeDungeonScreen);

    fadeTransition(div, playArea, 500, function() {
      document.querySelector("button").focus();
    });

  }
  //
  //Makes the dungeon screen
  function makeDungeonScreen() {
    //
    //Makes the spell icons
    //spell is a string of the spell name
    //count is the variable that holds the count for
    //that particular spell
    function makeSpellIcon(spell, count) {
      let div = makeDiv();
      let img = makeImg(imgSrc + spell + ".gif", spell + "Img");
      img.style.filter = "opacity(10%)";
      div.appendChild(img);
      let counter = makeDiv(spell + "Count");
      counter.innerHTML = count;
      div.appendChild(counter);
      spellBar.appendChild(div);
    }
    //
    //Makes the cameo boxes for the player and the monster
    //divId is the ID of the <div> box
    //file is the path and name of the image file
    //imgId is the ID of the image
    //damageImg is the path and name of the damage image file
    //damageId is the ID of the damage image
    function makeCombatDiv(divId, file, imgId, damageImg, damageId) {
      let div = makeDiv(divId);
      let img = makeImg(file, imgId);
      div.appendChild(img);
      let damage = makeImg(damageImg, damageId);
      damage.style.visibility = "hidden";
      div.appendChild(damage);

      return div;
    }

    let fragment = document.createDocumentFragment();
    //
    //Creates the level display
    let levelDiv = makeDiv("levelDiv");
      insertTextNode(levelDiv, "Level " + catacombLevel);
      let exitDiv = makeDiv("exitDiv");
        insertTextNode(exitDiv, "Exit")
        exitDiv.onclick = function() {
          overworld(player);
        }
      levelDiv.appendChild(exitDiv);
    fragment.appendChild(levelDiv);
    //
    //Creates the box to display the problem
    let problemDiv = makeDiv("problemDiv", "textBox");
    //problemDiv.innerHTML = "1 + 2 + 3 + 4 + 5 = ?"  //Sample text
    fragment.appendChild(problemDiv);
    //
    //Creates the block to display the hint
    let hintDiv = makeDiv("hintDiv", "textBox");
    //hintDiv.innerHTML = "I'll get you Black Dynamite, if it's the last thing I do!!!";  //Sample text
    fragment.appendChild(hintDiv);
    hintDiv.style.visibility = "hidden";
    //
    //This block creates the elements needed for the
    //countdown bar
    let countdownBarBack = makeDiv("countdownBarBack");
    let countdownBarFront = makeDiv("countdownBarFront");
    let countdownTimer = makeDiv("countdownTimer");
    countdownBarBack.appendChild(countdownBarFront);
    countdownBarBack.appendChild(countdownTimer);
    if (timerValue === 0) {countdownBarBack.style.visibility = "hidden";}
    fragment.appendChild(countdownBarBack);
    //
    //creates the spell icons for the combat div
    let spellBar = makeDiv("spellBar");
    let imgSrc = "./spellIcons/";
    makeSpellIcon("fibonacci", "ꚙ");
    makeSpellIcon("triangle", player.spells.euclid.number);
    makeSpellIcon("square", player.spells.hypatia.number);
    makeSpellIcon("pentagon", player.spells.lovelace.number);
    makeSpellIcon("hexagon", player.spells.noether.number);
    makeSpellIcon("pyramid", player.spells.huygens.number);
    makeSpellIcon("cube", player.spells.fermat.number);
    makeSpellIcon("star", player.spells.brahe.number);
    fragment.appendChild(spellBar);
    //
    //The combatDiv holds the player and monster
    //health bars as well as the images for the
    //player and monster
    let combatDiv = makeDiv("combatDiv");
    //
    //The player health bar
    let healthBarBack = makeDiv("healthBarBack");
    let healthBarFront = makeDiv("healthBarFront");
    healthBarFront.style.height = ((player.health / player.maxHealth) * 110) + "px";
    healthBarBack.appendChild(healthBarFront);
    combatDiv.appendChild(healthBarBack);
    //
    //The player's image
    let playerDiv = makeCombatDiv("playerDiv", player.sprites.path + player.sprites.files[0], "playerImg", "slash.gif", "slash");
    combatDiv.appendChild(playerDiv);
    //
    //The monster's image
    let monsterDiv = makeCombatDiv("monsterDiv", "", "monsterImg", "blast.gif", "blast");
    combatDiv.appendChild(monsterDiv);
    //
    //The monster health bar
    let monsterHealthBarBack = makeDiv("monsterHealthBarBack");
    let monsterHealthBarFront = makeDiv("monsterHealthBarFront");
    monsterHealthBarBack.appendChild(monsterHealthBarFront);
    combatDiv.appendChild(monsterHealthBarBack);
    fragment.appendChild(combatDiv);

    fadeTransition(fragment, playArea, 500, combat);
  }

  function combat() {
    //
    //This handles the countdown bar
    class Timer {

      constructor(timerValue) {
        this.width = 340;
        this.decrement = (timerValue > 2) ? (.17 * 4):(.17 * timerValue);
        this.time = null;
        this.totalTime = (timerValue) ? (timerValue > 2) ? 5:(20 / timerValue) :null;
        this.increment = this.totalTime;
        this.timeLeft = null;
        this.timeIndex = timerValue;
      }

      get answerTime() {
        return (this.totalTime - this.timeLeft) / 1000;
      }

      timeDown() {
        if (this.width < 1) {
          this.width = 340;
          this.totalTime += this.increment;
          damagePlayer();
        } else {
          this.width -= this.decrement;
          countdownBarFront.style.width = this.width + "px";
          let timeLeft = (this.width / (this.decrement * 100));
          countdownTimer.innerHTML = timeLeft.toFixed(2);
        }
      }

      startTimer() {
        this.timeLeft = new Date();
      }

      stopTimer() {
        this.totalTime = new Date();
        this.time += (this.totalTime - this.timeLeft);

      }

      stopTime() {
        if (this.timeIndex) {
          clearInterval(this.time);
        }
        this.stopTimer();
      }

    }
    //
    //Handles the flash animation after damage
    class DamageFlash {
      constructor() {
        this.count = 6;
        this.flash = null;
      }

      monster() {
        playerImg.src = player.sprites.path + player.sprites.files[1];
        monsterImg.style.filter = "brightness(50%)";

        if (this.count > 0) {
          if (this.count % 2) {
            monsterDiv.style.backgroundColor = "grey";
            blast.style.visibility = "hidden";
          } else {
            monsterDiv.style.backgroundColor = "red";
            blast.style.visibility = "visible";
          }
          this.count--;
        } else {
          setTimeout(function() {monsterDiv.removeChild(damageDiv);}, 1400);
          playerImg.src = player.sprites.path + player.sprites.files[0];
          if (monster.hp > 0) {
            monsterImg.style.filter = "brightness(100%)";
          }
          clearInterval(this.flash);
        }
      }

      player() {
        playerImg.src = player.sprites.path + player.sprites.files[2];
        playerImg.style.filter = "brightness(50%)";

        if (this.count > 0) {
          if (this.count % 2) {
            playerDiv.style.backgroundColor = "grey";
            slash.style.visibility = "hidden";
          } else {
            playerDiv.style.backgroundColor = "red";
            slash.style.visibility = "visible";
          }
          this.count--;
        } else {
          setTimeout(function() {playerDiv.removeChild(damageDiv);}, 1400);
          playerImg.style.filter = "brightness(100%)";
          clearInterval(this.flash);
        }
      }
    }

    const showHintDiv = function() {
      let hintDiv = document.getElementById("hintDiv");
      hintDiv.style.visibility = "visible";
    }

    const hideHintDiv = function() {
      let hintDiv = document.getElementById("hintDiv");
      hintDiv.style.visibility = "hidden";
    }

    const levelUp = function() {

      const checkForNotifications = function() {
        switch (operation) {
          case "addition":
            if (current[operation].level === 2) {
              player.notification.subtractionKey = "Subtraction Key Available";
            }
            if (current[operation].level === 4) {
              player.notification.multiplicationKey = "Multiplication Key Available";
            }
            if (current[operation].level === 6) {
              player.notification.euclidSpell = "Fireball Spell Available";
              player.spells.euclid.available = true;
            }
            break;
          case "subtraction":
            if (current[operation].level === 2) {
              player.notification.lovelaceSpell = "Reduce Terms Spell Available";
              player.spells.lovelace.available = true;
            }
            if (current[operation].level === 4 && player.multiplication.level === 2) {
              player.notification.divisionKey = "Division Key Available";
            }
            break;
          case "multiplication":
            if (current[operation].level === 2 && player.subtraction.level === 4) {
              player.notification.divisionKey = "Division Key Available";
            }
            if (current[operation].level === 4) {
              player.notification.hypatiaSpell = "Healing Spell Available";
              player.spells.hypatia.available = true;
            }
            break;
          case "division":
            break;
        }
      }

      checkForNotifications();

      current[operation].level++;
      current[operation].runningAverage = [];
      let problemDiv = document.getElementById("problemDiv");
      problemDiv.innerHTML = "I think you're strong enough for Level " +
                              current[operation].level + "!";
      insertLineBreak(problemDiv, 2);
      insertButton(problemDiv, "Continue", nextMonster);
      insertTextNode(problemDiv, " ");
      insertButton(problemDiv, "Return to Surface", function() {
        overworld(player);
      });
    }
    //
    //Gets the next monster and sends the player
    //back to the getProblem() function
    const nextMonster = function() {
      monster = new Monster(catacombLevel);
      monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
      monsterImg.style.filter = "brightness(100%)";
      getProblem();
    }

    const bossFight = function() {
      monster = new Boss();
      monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
      monsterImg.style.filter = "brightness(100%)";

      let problemDiv = document.getElementById("problemDiv");
      clearElement(problemDiv);
      insertTextNode(problemDiv, "This monster doesn't seem like the others...");

      let flash = new ScreenFlash("playAreaWhite");
      flash.flash = setInterval(function() {
        flash.screenFlash();
      }, 100);
      setTimeout(getProblem, 2000);
    }

    const intermission = function() {
      let problemDiv = document.getElementById("problemDiv");
      problemDiv.innerHTML = "You're doing great! You've defeated " + monsterInterval + " monsters!";
      insertLineBreak(problemDiv, 2);
      insertButton(problemDiv, "Return to Surface", function() {
        overworld(player);
      });
      insertTextNode(problemDiv, " ");
      insertButton(problemDiv, "Continue", nextMonster);
    }
    //
    //This function checks for specific key presses in the answer input box
    //event is the key press
    //answer is the answer to the question that will be passed to the
    //checkAnswer() function if enter is pressed
    const checkKeyPress = function(event, answer) {
      var key = event.which;
      if (buttonsOff) {
        event.preventDefault();
        return;
      }
      switch(key) {
        case 13: //Enter key, check answer
          checkAnswer(answer);
          break;
        case 97: //"a" key, Fibonacci Spell
          event.preventDefault();
          if (player.spells.fibonacci.ongoing || !player.spells.fibonacci.learned) break;
          castFibonacci();
          break;
        case 115: //"s" key, Fireball Spell
          event.preventDefault();
          if (player.spells.euclid.ongoing || !player.spells.euclid.learned) break;
          castEuclid();
          break;
        case 100: //"d" key, Heal Spell
          event.preventDefault();
          if (player.spells.hypatia.ongoing || !player.spells.hypatia.learned) break;
          castHypatia();
          break;
        case 101: //"e" key, Reduction Spell
          event.preventDefault();
          if (player.spells.lovelace.ongoing || !player.spells.lovelace.learned) break;
          castLovelace();
          break;
        case 102: //"f" key, Stop Time Spell
          event.preventDefault();
          if (player.spells.huygens.ongoing || !player.spells.huygens.learned) break;
          castHuygens();
          break;
        case 113: //"q" key, Cube Spell
          event.preventDefault();
          if (player.spells.fermat.ongoing || !player.spells.fermat.learned) break;
          castFermat();
          break;
        case 114: //"r" key, Strength Spell
          event.preventDefault();
          if (player.spells.noether.ongoing || !player.spells.noether.learned) break;
          castNoether();
          break;
        case 119: //"w" key, Nova Spell
          event.preventDefault();
          if (player.spells.brahe.ongoing || !player.spells.brahe.learned) break;
          castBrahe();
          break;
      }
    }
    //
    //Makes and displays the math problems
    const getProblem = function() {
      //
      //Finds the type of problem to display
      const findProblemType = function(type) {
        let randomNumber = getRandomNumber(0, 99);

        if (randomNumber <= 4) {
          return "algebra";
        } else if (randomNumber <= 9) {
          return "sequence";
        } else {
          return "normal";
        }
      }
      //
      //Makes and inserts the <span> for my red numbers
      const insertProblemSpan = function(target, text) {
        let span = document.createElement("span");
        insertTextNode(span, " " + text + " ");
        span.style.color = "#ffbaba";
        target.appendChild(span);
      }

      const showProblem = function() {

        clearElement(problemDiv);
        problemDiv.appendChild(fragment);
        timer = new Timer(timerValue);
        if (timerValue > 0) {
          timer.time = setInterval(function() {
            timer.timeDown();
          }, 10);
        }
        timer.startTimer();
        spellsOn();

        let answerInput = document.getElementById("answerInput");
        answerInput.focus();
      }

      let problemDiv = document.getElementById("problemDiv");
      clearElement(problemDiv);
      let fragment = document.createDocumentFragment();
      let flash = new ScreenFlash("playAreaWhite");
      let checkFlash = null;

      switch (findProblemType()) {
        case "normal":
          terms = getTerms(operation, monster.level);
          insertTextNode(fragment, terms[0] + " " + current[operation].sign);
          insertProblemSpan(fragment, terms[1]);
          insertTextNode(fragment, "= ");
          insertAnswerInput(fragment, terms[2], checkKeyPress);
          showProblem();
          break;
        case "algebra":
          problemDiv.innerHTML = "The " + monster.name + " used Algebra!";
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 100);

          terms = getTerms(operation, monster.level);
          insertTextNode(fragment, terms[0] + " " + current[operation].sign + " ");
          insertAnswerInput(fragment, terms[1], checkKeyPress);
          insertTextNode(fragment, " = " + terms[2]);

          checkFlash = setInterval(function() {
            if (flash.count === 0) {
              clearInterval(checkFlash);
              showProblem();
            }
          }, 250);
          break;
        case "sequence":
          problemDiv.innerHTML = "The " + monster.name + " used Sequence!";
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 100);

          terms = getTerms("sequence", monster.level, operation);
          insertTextNode(fragment, terms[0] + ", " + terms[1] + ", ");
          insertTextNode(fragment, terms[2] + ", " + terms[3] + ", ");
          insertAnswerInput(fragment, terms[4], checkKeyPress);
          insertTextNode(fragment, ",...");

          checkFlash = setInterval(function() {
            if (flash.count === 0) {
              clearInterval(checkFlash);
              showProblem();
            }
          }, 250);

          break;
      }

    }

    const getNumberData = function(answer) {

      const saveAverage = function() {
        current[operation].totalAverage = getAverage(current[operation].totalAverage, timer.answerTime);
        if (current[operation].level === catacombLevel) {
          current[operation].runningAverage = player.addTime(timer.answerTime, current[operation].runningAverage);
        }
      }

      saveAverage();
      if (timer.answerTime <= 1) player.stats.flash++;
      if (timer.timeLeft <= 1) player.stats.lastSecond++;
      if (answer === 42) player.stats.fortyTwo++;
      if (isPrime(answer)) player.stats.primes++;
      if (isTriangle(answer) && player.spells.euclid.learned) player.spells.euclid.number++;
      if (isSquare(answer) && player.spells.hypatia.learned) player.spells.hypatia.number++;
      if (answer % 10 === 2 && player.spells.lovelace.learned) player.spells.lovelace.number++;
    }
    //
    //Checks the answer to my problems
    const checkAnswer = function(answer) {

      let answerInput = document.getElementById("answerInput");
      if (parseInt(answerInput.value) === answer) {
        getNumberData(answer);
        damageMonster();
      } else {
        damagePlayer();
        if (problemDiv.childNodes.length > 5) {removeLastChild(problemDiv, 3);}
        insertLineBreak(problemDiv, 2);
        insertTextNode(problemDiv, "Oh no! " + answerInput.value + " didn't work!");
        answerInput.value = "";
      }
    }
    //
    //Inserts the floating damage numbers
    const insertDamageNumbers = function(target, damage) {
      let damageDiv = makeDiv("damageDiv");
      insertTextNode(damageDiv, damage);
      target.appendChild(damageDiv);
      requestAnimationFrame(function() {damageDiv.style.bottom = "100%";});
      requestAnimationFrame(function() {damageDiv.style.filter = "opacity(0%)";});
    }
    //
    //What to do when a monster is damaged
    const damageMonster = function() {
      //
      //What do do when a monster is killed
      const killMonster = function() {
        //
        //Process the monster for record keeping
        const processMonster = function() {

          if (monsterSearch(current[operation].monsters, monster.index)) {
            let monsterIndex = findMonster(current[operation].monsters, monster.index);
            current[operation].monsters[monsterIndex][1]++;
          } else {
            current[operation].monsters.push([monster.index, 1]);
            current[operation].monsters.sort(function(a, b){return a[0] - b[0]});
          }
        }

        player.stats.monstersKilled++;
        player.damageBoost = 0;
        monsterInterval++
        spellsOff();
        processMonster();
        problemDiv.innerHTML = "Great job, you defeated the " + monster.name + "!<br /><br />";

        if (monster.maxHp > 2) {
          setTimeout(levelUp, 1000);
        } else if (player.passingAverage(current[operation].runningAverage)) {
          if (current[operation].level % 2 === 0) {
            setTimeout(bossFight, 1000);
          } else {
            setTimeout(levelUp, 1000);
          }
        } else if ((monsterInterval % 5) === 0) {
          setTimeout(intermission, 1000);
        } else {
          setTimeout(nextMonster, 1000);
        }
      }

      timer.stopTime();
      player.stats.damage.dealt += player.totalDamage;
      monster.hp = (player.totalDamage > monster.hp) ? 0:(monster.hp - player.totalDamage);

      let monsterHealthBarFront = document.getElementById("monsterHealthBarFront");
      monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";

      hideHintDiv();
      insertDamageNumbers(monsterDiv, player.totalDamage);

      let flash = new DamageFlash();
      flash.flash = setInterval(function() {
        flash.monster();
      }, 100);

      setTimeout(function() {
        if (monster.hp) {
          getProblem();
        } else {
          killMonster();
        }
      }, 600);

    }
    //
    //What to do when the player is damaged
    const damagePlayer = function() {
      //
      //What to do when the player's health
      //drops to 0
      const killPlayer = function() {

        const rescueScreen = function() {

          const rescuePart1 = function() {
            clearElement(introTextDiv);
            let textString = "Oh! You're alive!. ";
            typer(textString, introTextDiv, function() {
              insertButton(introTextDiv, "Next", rescuePart2);
            });
          }
          const rescuePart2 = function() {
            clearElement(introTextDiv);
            let textString = "Someone found you at the edge of the catacombs and brought you back here. ";
            typer(textString, introTextDiv, function() {
              insertButton(introTextDiv, "Next", rescuePart3);
            });
          }
          const rescuePart3 = function() {
            clearElement(introTextDiv);
            let textString = "I've restored your health, but next time be more careful down there. ";
            typer(textString, introTextDiv, function() {
              insertButton(introTextDiv, "Next", function() {

                overworld(player);
              });
            });
          }

          clearElement(playArea);

          let tellahDiv = makeCameoDiv("Tellah.gif");

          let introTextDiv = makeDiv("introTextDiv", "textBox");
          //
          //a button that lets the player skip the game intro
          const skipButton = makeButton(function() {
            overworld(player);
          }, "Skip", "skipButton");

          let fragment = makeFragment(tellahDiv, introTextDiv, skipButton);
          playArea.appendChild(fragment);

          playArea.style.filter = "brightness(100%)";

          player.health = player.maxHealth;
          rescuePart1();
        }

        timer.stopTime();
        playArea.classList.add("playAreaSpotlight");
        let style = document.createElement("style");
        insertTextNode(style, ".playAreaSpotlight::after {filter:opacity(100%);}");
        setTimeout(function() {
          playArea.appendChild(style);
        }, 100);

        setTimeout(function() {
          playArea.style.filter = "brightness(0%)";
          setTimeout(function() {
            playArea.classList.remove("playAreaSpotlight");
            rescueScreen();
          }, 500);
        }, 3000)
      }

      player.stats.damage.received += monster.damage;
      player.health = (monster.damage > player.health) ? 0:(player.health - monster.damage);

      let healthBarFront = document.getElementById("healthBarFront");
      healthBarFront.style.height = ((player.health / player.maxHealth) * 110) + "px";

      insertDamageNumbers(playerDiv, monster.damage);

      let flash = new DamageFlash();
      flash.flash = setInterval(function() {
        flash.player();
      }, 100);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);
          if (player.health) {
            playerImg.src = player.sprites.path + player.sprites.files[0];
          } else {
            timer.stopTime();
            killPlayer();
            playerImg.src = player.sprites.path + player.sprites.files[3];
          }
        }
      }, 250);
    }
    //
    //This function turns my spells "on" at the beginning of the battle
    const spellsOn = function() {

      const turnOnSpell = function(id, callback) {
        let img = document.getElementById(id);
        img.style.filter = "opacity(100%)";
        img.onclick = callback;
      }

      if (player.spells.fibonacci.learned) {      //Hint Spell
        turnOnSpell("fibonacciImg", castFibonacci);
        player.spells.fibonacci.ongoing = false;
      }
      if (player.spells.euclid.learned) {         //Fireball Spells
        turnOnSpell("triangleImg", castEuclid);
        player.spells.euclid.ongoing = false;
      }
      if (player.spells.hypatia.learned) {        //Heal Spells
        turnOnSpell("squareImg", castHypatia);
        player.spells.hypatia.ongoing = false;
      }
      if (player.spells.lovelace.learned) {       //Reduction Spells
        turnOnSpell("pentagonImg", castLovelace);
        player.spells.lovelace.ongoing = false;
      }
      if (player.spells.noether.learned) {        //Strength Spells
        turnOnSpell("hexagonImg", castNoether);
        player.spells.noether.ongoing = false;
      }
      if (player.spells.huygens.learned) {        //Stop Time Spells
        turnOnSpell("pyramidImg", castHuygens);
        player.spells.huygens.ongoing = false;
      }
      if (player.spells.fermat.learned) {         //Polymorph Spells
        turnOnSpell("cubeImg", castFermat);
        player.spells.fermat.ongoing = false;
      }
      if (player.spells.brahe.learned) {            //Star Spells
        turnOnSpell("starImg", castBrahe);
        player.spells.brahe.ongoing = false;
      }
    }
    //
    //Disables spell functionality
    const spellsOff = function() {

      const turnOffSpell = function(id, spell) {
        img = document.getElementById(id);
        img.style.filter = "opacity(30%)";
        img.onclick = "";
        //spell.ongoing = true;
      }

      turnOffSpell("fibonacciImg", player.spells.fibonacci);
      turnOffSpell("triangleImg", player.spells.euclid);
      turnOffSpell("squareImg", player.spells.hypatia);
      turnOffSpell("pentagonImg", player.spells.lovelace);
      turnOffSpell("hexagonImg", player.spells.noether);
      turnOffSpell("pyramidImg", player.spells.noether);
      turnOffSpell("cubeImg", player.spells.fermat);
      turnOffSpell("starImg", player.spells.brahe);
    }
    //
    //Hint Spell
    const castFibonacci = function() {

      //
      //This is the logic that handles the addition hints
      function additionHint(addend1, addend2) {

        //
        //These operations seperate the two addends into expanded notation
        let newAddend1 = addend1 % 10;
        let newAddend2 = addend2 % 10;
        addend1 -= newAddend1;
        addend2 -= newAddend2;
        //
        //These two if statements only execute if one of the addends is 0
        if (!addend2 && !newAddend2 && addend1) {
          addend1 += newAddend1;
          newAddend1 = 0;
        }
        if (!addend1 && !newAddend1 && addend2) {
          addend2 += newAddend2;
          newAddend2 = 0;
        }
        //
        //This if statement handles the 10s
        if (addend1 && addend2) {
          hintString += "(" + addend1 + " + " + redSpan + addend2 + "</span>)";
        } else if (addend1) { //If there is only one 10s number, then that is the only one output to the string
          hintString += addend1;
        } else if (addend2) {
          hintString += redSpan + addend2 + "</span>";
        }
        //
        //This if statement only runs if there is at least one 10s number
        if ((addend1 || addend2) && (newAddend1 || newAddend2)) {
          hintString += " + ";
        }
        //
        //This if statement handles the 1s numbers
        if (newAddend1 && newAddend2) {
          //
          //This if statement regroups the addends for more intuitive addition
          if ((newAddend1 + newAddend2) > 10) {
            let newAddend4 = 10 - newAddend1;
            let newAddend3 = newAddend2 - newAddend4;
            hintString += "(" + newAddend1 + " + " + redSpan + newAddend4 +
              "</span>) + " + redSpan + newAddend3 + "</span> = ?";
          } else { //No regrouping needed here
            hintString += "(" + newAddend1 + " + " + redSpan + newAddend2 + "</span>) = ?";
          }
        } else if (newAddend1) { //These two else ifs handle the output if there's only one 1s number
          hintString += newAddend1 + " = ?";
        } else if (newAddend2) {
          hintString += redSpan + newAddend2 + "</span> = ?";
        }
        //
        //If there are no 1s numbers, then this puts the " = ?" on the end
        if (!newAddend1 && !newAddend2) {
          hintString += " = ?";
        }
      }
      //
      //This is the logic that handles the subtraction hints
      function subtractionHint(minuend1, subtrahend1) {

        let minuend2 = minuend1 % 10;
        let subtrahend2 = subtrahend1 % 10;
        minuend1 -= minuend2;
        subtrahend1 -= subtrahend2;

        if (subtrahend2 > minuend2) {
          subtrahend1 += subtrahend2;
          subtrahend2 = 0;
        }

        if (!subtrahend1) {
          hintString += minuend1 + " + ";
        } else if (!minuend2 && !subtrahend2) {
          hintString += minuend1 + " - ";
        } else {
          hintString += "(" + minuend1 + " - " + redSpan + subtrahend1 + "</span>) + ";
        }

        if (!subtrahend2 && !minuend2) {
          hintString += redSpan + subtrahend1 + "</span> = ?";
        } else if (!subtrahend2) {
          hintString += minuend2 + " = ?";
        } else {
          hintString += "(" + minuend2 + " - " + redSpan + subtrahend2 + "</span>) = ?";
        }
      }
      //
      //This is the logic that handles the multiplication hints
      //There's a bit of redundancy here that I want to come back
      //to, to try and make the code more consise
      function multiplicationHint(multiplicand, multiplier1) {

        if (multiplicand === 1) {
          hintString += multiplier1 + " + 0 = ?";
        } else if (multiplier1 === 1) {
          hintString += multiplicand + " + 0 = ?";
        } else if (multiplicand === 2) {
          hintString += multiplier1 + " + " + multiplier1 + " = ?";
        } else if (multiplier1 === 2) {
          hintString += multiplicand + " + " + multiplicand + " = ?";
        } else if ((multiplicand === 10) || (multiplier1 === 10)) {
          hintString += multiplicand + " × " + redSpan + multiplier1 + "</span> = ?";
        } else {
          //
          //I type the same bit of code more than a few times here...
          //I bet I can remove one line from each if statement...
          if (multiplier1 < 5) {
            var multiplier2 = multiplier1 - 2;
            hintString += multiplicand + " × (" + redSpan + "2</span> + " + redSpan;
            hintString += multiplier2 + "</span>) = ?<br />";
          } else if (multiplier1 === 5) {
            var multiplier2 = 5;
            hintString += multiplicand + " × (" + redSpan + "10</span> - " + redSpan;
            hintString += multiplier2 + "</span>) = ?<br />";
          } else if (multiplier1 < 8) {
            var multiplier2 = multiplier1 - 5;
            hintString += multiplicand + " × (" + redSpan + "5</span> + " + redSpan;
            hintString += multiplier2 + "</span>) = ?<br />";
          } else if (multiplier1 < 10) {
            var multiplier2 = 10 - multiplier1;
            hintString += multiplicand + " × (" + redSpan + "10</span> - " + redSpan;
            hintString += multiplier2 + "</span>) = ?<br />";
          } else if (multiplier1 > 10) {
            var multiplier2 = multiplier1 - 10;
            hintString += multiplicand + " × (" + redSpan + "10</span> + " + redSpan;
            hintString += multiplier2 + "</span>) = ?<br />";
          }
          //
          //Here is the redundancy. I use the same if statement twice...
          hintString += "(" + multiplicand + " × " + redSpan;
          if (multiplier1 < 5) {
            var multiplier2 = multiplier1 - 2;
            hintString += "2</span>) + ";
          } else if (multiplier1 === 5) {
            var multiplier2 = 5;
            hintString += "10</span>) - ";
          } else if (multiplier1 < 8) {
            var multiplier2 = multiplier1 - 5;
            hintString += "5</span>) + ";
          } else if (multiplier1 < 10) {
            var multiplier2 = 10 - multiplier1;
            hintString += "10</span>) - ";
          } else if (multiplier1 > 10) {
            var multiplier2 = multiplier1 - 10;
            hintString += "10</span>) + ";
          }

          hintString += "(" + multiplicand + " × " + redSpan + multiplier2 + "</span>) = ?";
        }
      }
      //
      //This is the logic that handles the divison hints
      function divisionHint(dividend1, divisor) {
        let quotient = dividend1 / divisor;
        //
        //I like this if statement because it works, but it has some
        //redundancy that I'd like to work out later if I can
        if (divisor === 10) {
          hintString += dividend1 + " ÷ " + redSpan + divisor + "</span> = ?";
        } else if (divisor === 5) {
          hintString += dividend1 + " ÷ " + redSpan + divisor + "</span> = ?";
        } else if (divisor < 3) {
          hintString += dividend1 + " ÷ " + redSpan + divisor + "</span> = ?";
        } else if (dividend1 > (divisor * 10)) {
          let dividend2 = dividend1 - (divisor * 10);
          dividend1 = divisor * 10;
          hintString += "(" + dividend1 + " + " + dividend2 + ") ÷ ";
          hintString += redSpan + divisor + "</span> = ?<br />";
          hintString += "(" + dividend1 + " ÷ " + redSpan + divisor + "</span>) + ";
          hintString += "(" + dividend2 + " ÷ " + redSpan + divisor + "</span>) = ?";
        } else if (dividend1 < (divisor * 5)) {
          let dividend2 = dividend1 - (divisor * 2);
          dividend1 = divisor * 2;
          hintString += "(" + dividend1 + " + " + dividend2 + ") ÷ ";
          hintString += redSpan + divisor + "</span> = ?<br />";
          hintString += "(" + dividend1 + " ÷ " + redSpan + divisor + "</span>) + ";
          hintString += "(" + dividend2 + " ÷ " + redSpan + divisor + "</span>) = ?";
        } else if (dividend1 < (divisor * 8)) {
          let dividend2 = dividend1 - (divisor * 5);
          dividend1 = divisor * 5;
          hintString += "(" + dividend1 + " + " + dividend2 + ") ÷ ";
          hintString += redSpan + divisor + "</span> = ?<br />";
          hintString += "(" + dividend1 + " ÷ " + redSpan + divisor + "</span>) + ";
          hintString += "(" + dividend2 + " ÷ " + redSpan + divisor + "</span>) = ?";
        } else if (dividend1 < (divisor * 10)) {
          let dividend2 = (10 - quotient) * divisor;
          dividend1 = divisor * 10;
          hintString += "(" + dividend1 + " - " + dividend2 + ") ÷ ";
          hintString += redSpan + divisor + "</span> = ?<br />";
          hintString += "(" + dividend1 + " ÷ " + redSpan + divisor + "</span>) - ";
          hintString += "(" + dividend2 + " ÷ " + redSpan + divisor + "</span>) = ?";
        }
      }

      function fibonacciAnimation() {
        let possible = "1234567890+-÷×()%½²";
        let randomString = "";
        let spellCount = 1;

        let shortener1 = null;
        if (hintString.includes("<span style=\"color:#ffbaba\">")) {
          shortener1 = hintString.match(/<span style="color:#ffbaba">/gi);
        } else {
          shortener1 = [];
        }

        let shortener2 = null;
        if (hintString.includes("</span>")) {
          shortener2 = hintString.match(/<\/span>/gi);
        } else {
          shortener2 = [];
        }

        let shortener3 = null;
        if (hintString.includes("<br />")) {
          shortener3 = hintString.match(/<br \/>/gi);
        } else {
          shortener3 = [];
        }

        let shortener = (shortener1.length + shortener2.length + shortener3.length);
        let charactersToPrint = (hintString.length - ((shortener1.length * 28) + (shortener2.length * 7) + (shortener3.length * 6)));
        let span1 = 0;
        let span2 = 0;
        let br1 = 0;
        let randomCount = 0;
        let spellCast = setInterval(castSpell, 50);

        function castSpell() {
          randomString = "";
          if (spellCount >= (charactersToPrint + shortener)) {
            hintDiv.innerHTML = hintString;
            let answerInput = document.getElementById("answerInput");
            answerInput.focus();
            clearInterval(spellCast);
            if (timerValue && !player.spells.huygens.ongoing) {
              timer.time = setInterval(function() {
                timer.timeDown();
              }, 10);
            }
            timer.startTimer();
            buttonsOff = false;
            player.spells.fibonacci.ongoing = true;
            let fibonacciImg = document.getElementById("fibonacciImg");
            fibonacciImg.style.filter = "opacity(30%)";
            fibonacciImg.onclick = "";
          } else {
            span1 = 0;
            span2 = 0;
            br1 = 0;
            hintLoop:
            for (var j = 0; j < spellCount; j++) {
              let spanMod = ((span1 * 27) + (span2 * 6) + (br1 * 5))

              if ((hintString.charAt(j + spanMod) === "<") && (hintString.charAt(j + 6 + spanMod) === ">")) {
                randomString += "</span>";
                span2++;
              } else if ((hintString.charAt(j + spanMod) === "<") && (hintString.charAt(j + 5 + spanMod) === ">")) {
                randomString += "<br />";
                br1++;
              } else if (hintString.charAt(j + spanMod) === "<") {
                randomString += "<span style=\"color:#ffbaba\">";
                span1++;
              } else  {
                randomString += hintString.charAt((j + spanMod));
              }

            }
            for (let i = randomCount; i < ((charactersToPrint - 1) + shortener); i++) {
              randomString += possible.charAt(getRandomNumber(0, (possible.length - 1)));
            }
            spellCount++;
            randomCount++;
            hintDiv.innerHTML = randomString;
          }
        }
      }

      buttonsOff = true;
      player.spells.fibonacci.ongoing = true;
      timer.stopTime();
      //
      //This holds the string that will become the hint
      let hintString = "";
      let redSpan = "<span style=\"color:#ffbaba\">";

      showHintDiv();
      let problemDiv = document.getElementById("problemDiv");
      //
      //If the enemy cast Algebra, then this small hint code runs.
      //I will probably update it with better hints as I develop
      //subtraction problems and hints.
      if (problemDiv.childNodes.length === 3) {
        //
        //Determines what the hint will be based on what
        //the current operator is
        switch (operation) {
          case "addition":
            hintString += terms[2] + " - " + terms[0] + " = ? <br />";
            subtractionHint(terms[2], terms[0]);
            break;
          case "subtraction":
            hintString += terms[0] + " - " + terms[2] + " = ? <br />";
            subtractionHint(terms[0], terms[2]);
            break;
          case "multiplication":
            hintString += terms[2] + " ÷ " + terms[0] + " = ? <br />";
            divisionHint(terms[2], terms[0]);
            break;
          case "division":
            hintString += terms[0] + " ÷ " + terms[2] + " = ? <br />";
            divisionHint(terms[0], terms[2]);
            break;
        }

        fibonacciAnimation();
        player.spells.cast[10]++
        return;
      }
      //
      //If the problem is a number sequence, this logic
      //runs to display a sequence hint
      if (terms.length === 5) {
        if ((operation === "addition") || (operation === "multiplication")) {
          hintString += terms[1] + " - " + terms[0] + " = ?<br />";
          hintString += terms[2] + " - " + terms[1] + " = ?";
        } else {
          hintString += terms[0] + " - " + terms[1] + " = ?<br />";
          hintString += terms[1] + " - " + terms[2] + " = ?";
        }
        fibonacciAnimation();
        player.spells.cast[11]++;
        return;
      }
      //
      //This switch determines which hint to display
      switch (operation) {
        case "addition":
          additionHint(terms[0], terms[1]);
          player.spells.fibonacci.cast++;
          break;
        case "subtraction":
          subtractionHint(terms[0], terms[1]);
          player.spells.fibonacci.cast++;
          break;
        case "multiplication":
          multiplicationHint(terms[0], terms[1]);
          player.spells.euler1.cast++;
          break;
        case "division":
          divisionHint(terms[0], terms[1]);
          player.spells.euler2.cast[2]++;
          break;
       }

      fibonacciAnimation();

    }
    //
    //Fireball spell
    const castEuclid = function() {

      function fireballAnimation() {

        function makeEuclidSpark() {
          let canvas = makeCanvas("", 21, 21);
          canvas.className = "sparkCanvas";
          return canvas;
        }

        function drawLine1() {
          context.beginPath();

          context.moveTo(lineX1, 250);
          lineX1 -= lineXinterval;
          context.lineTo(lineX1, 250);
          drawSpark((lineX1 - 10), 240, sparkCanvas1, sparkContext1);

          context.moveTo(lineX2, 250);
          lineX2 += lineXinterval;
          context.lineTo(lineX2, 250);
          drawSpark((lineX2 - 10), 240, sparkCanvas2, sparkContext2);

          context.lineWidth = lineWidth;
          context.strokeStyle = baseColor;
          context.stroke();

          if (lineX2 > 450) {
            clearInterval(lineDraw);
            playArea.removeChild(sparkCanvas1);
            playArea.removeChild(sparkCanvas2);
          }
          context.shadowBlur = 5;
          context.shadowColor = baseShadow;
        }

        function drawCircle1() {
          context.beginPath();
          context.arc(150, 250, 150, (circleStart1 * Math.PI), (circleAngle1 * Math.PI));
          context.lineWidth = lineWidth;
          context.strokeStyle = baseColor;
          context.stroke();
          circleStart1 = circleAngle1;
          circleAngle1 += circleInterval1;

          let xPos = (140 + (150 * Math.cos(circleStart1 * Math.PI)));
          let yPos = (240 + (150 * Math.sin(circleStart1 * Math.PI)));

          drawSpark(xPos, yPos, sparkCanvas3, sparkContext3);

          if (circleAngle1 > 2) {
            context.beginPath();
            context.arc(150, 250, 150, (circleStart1 * Math.PI), (2 * Math.PI));
            context.lineWidth = lineWidth;
            context.strokeStyle = baseColor;
            context.stroke();
            clearInterval(circleDraw1);
            playArea.removeChild(sparkCanvas3);
          }
          context.shadowBlur = 5;
          context.shadowColor = baseShadow;
        }

        function drawCircle2() {
          context.beginPath()
          context.arc(300, 250, 150, (circleStart2 * Math.PI), (circleAngle2 * Math.PI), true);
          context.lineWidth = lineWidth;
          context.strokeStyle = baseColor;
          context.stroke();
          circleStart2 = circleAngle2;
          circleAngle2 -= circleInterval2;

          let xPos = (290 + (150 * Math.cos(circleStart2 * Math.PI)));
          let yPos = (240 + (150 * Math.sin(circleStart2 * Math.PI)));

          drawSpark(xPos, yPos, sparkCanvas4, sparkContext4);

          if (circleAngle2 < 0) {
            roundTwo = true;
            circleAngle2 = 2
          }
          if ((roundTwo) && (circleAngle2 < 1)) {
            context.beginPath();
            context.arc(300, 250, 150, (circleStart2 * Math.PI), (1 * Math.PI), true);
            context.lineWidth = lineWidth;
            context.strokeStyle = baseColor;
            context.stroke();
            clearInterval(circleDraw2);
            playArea.removeChild(sparkCanvas4);
            drawTriangle1();
          }
          context.shadowBlur = 5;
          context.shadowColor = baseShadow;
        }

        function drawTriangle1() {
          context.beginPath();
          context.moveTo(150, 250);
          context.lineTo(225, 120);
          context.lineTo(300, 250);
          context.lineTo(150, 250);
          context.closePath();
          context.lineJoin = "round";
          context.lineWidth = lineWidth + 10;
          context.strokeStyle = "rgba(255, 255, 0, .75)";
          context.stroke();

          context.beginPath();
          context.moveTo(150, 250);
          context.lineTo(225, 120);
          context.lineTo(300, 250);
          context.lineTo(150, 250);
          context.closePath();
          context.lineWidth = lineWidth;
          context.strokeStyle = "#ff0000";
          context.stroke();

          playArea.classList.add("playAreaRedFlash");
          setTimeout(function() {
            requestAnimationFrame(function() {
              playArea.classList.remove("playAreaRedFlash");
            });
          }, 150);
          animationDone = true;
        }

        function drawSpark(x, y, sparkCanvas, sparkContext) {
          sparkContext.clearRect(0, 0, 21, 21);
          sparkContext.stroke();

          let spark1 = getRandomNumber(0, 21);
          let spark2 = getRandomNumber(0, 21);
          let spark3 = getRandomNumber(0, 21);
          let spark4 = getRandomNumber(0, 21);

          sparkCanvas.style.top = y;
          sparkCanvas.style.left = x;

          sparkContext.beginPath();
          sparkContext.moveTo(10, 10);
          sparkContext.lineTo(21, spark1);
          sparkContext.moveTo(10, 10);
          sparkContext.lineTo(spark2, 21);
          sparkContext.moveTo(10, 10);
          sparkContext.lineTo(0, spark3);
          sparkContext.moveTo(10, 10);
          sparkContext.lineTo(spark4, 0);
          sparkContext.closePath();
          sparkContext.strokeStyle = "yellow";
          sparkContext.stroke();
        }

        let canvas = makeCanvas("euclidCanvas", 450, 450);

        let levelDiv = document.getElementById("levelDiv");
        playArea.insertBefore(canvas, levelDiv);

        let sparkCanvas1 = makeEuclidSpark();
        let sparkContext1 = sparkCanvas1.getContext("2d");
        playArea.appendChild(sparkCanvas1);

        let sparkCanvas2 = makeEuclidSpark();
        let sparkContext2 = sparkCanvas2.getContext("2d");
        playArea.appendChild(sparkCanvas2);

        let sparkCanvas3 = makeEuclidSpark();
        let sparkContext3 = sparkCanvas3.getContext("2d");
        playArea.appendChild(sparkCanvas3);

        let sparkCanvas4 = makeEuclidSpark();
        let sparkContext4 = sparkCanvas4.getContext("2d");
        playArea.appendChild(sparkCanvas4);

        let context = canvas.getContext("2d");
        let lineWidth = 5;
        let baseColor = "rgba(255, 0, 0, 1)"
        let baseShadow = "rgba(255, 0, 0, 1)"

        let lineX1 = 225;
        let lineX2 = 226;
        let lineXinterval = 10;
        let lineY = 250;

        let lineDraw = setInterval(function() {
          requestAnimationFrame(function() {
            drawLine1();
          })
        }, 34);

        let circleStart1 = 0;
        let circleAngle1 = .05;
        let circleInterval1 = .05;

        let circleDraw1 = setInterval(function() {
          requestAnimationFrame(function() {
            drawCircle1();
          })
        }, 20);

        let circleStart2 = 1;
        let circleAngle2 = .95;
        let circleInterval2 = .05;
        let roundTwo = false;

        let circleDraw2 = setInterval(function() {
          requestAnimationFrame(function() {
            drawCircle2();
          })
        }, 20);
      }

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.euclid.number === 0) {
        hintDiv.innerHTML = "You don't have any Euclid Magic!";
        hintDiv.style.visibility = "visible"; //This displays the hint area
        setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
        return;
      }
      timer.stopTime();
      player.spells.euclid.ongoing = true;
      buttonsOff = true;

      let animationDone = false;
      let spellCast;
      fireballAnimation();
      let damage = 1;

      for (let i = 0; i < player.totalLevel; i++) {
        if (isTriangle(i)) damage++;
      }

      player.damageBoost = damage;

      hintDiv.innerHTML = "You cast Euclid's Fireball!";
      hintDiv.style.visibility = "visible";

      let flash = new ScreenFlash("playAreaRed", 9);

      let checkAnimation = setInterval(function() {
        if (animationDone) {
          clearInterval(checkAnimation);
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 75);
        }
      }, 10);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);
          let canvas = document.getElementById("euclidCanvas");
          playArea.removeChild(canvas);
          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
          buttonsOff = false;
          damageMonster();
        }
      }, 250);

      player.spells.euclid.cast++;
      player.spells.euclid.number--;
      document.getElementById("triangleCount").innerHTML = player.spells.euclid.number;
    }
    //
    //Healing spell
    const castHypatia = function() {

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.hypatia.number === 0) {
        hintDiv.innerHTML = "You don't have any Healing Magic!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      if (player.health === player.maxHealth) {
        hintDiv.innerHTML = "You already have full health!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      player.spells.hypatia.ongoing = true;
      buttonsOff = true;
      timer.stopTime();

      let heal = 2;
      if (player.subtraction.level > 6) {
        heal++;
      }
      if (player.multiplication.level > 6) {
        heal++;
      }
      if (player.division.level > 6) {
        heal++;
      }

      hintDiv.innerHTML = "You cast Hypatia's Health!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1500);

      let flash = new ScreenFlash("playAreaBlue", 10);

      const healAnimation = function() {
        let squareSpellAnimation = makeDiv("squareSpellAnimation");
        squareSpellAnimation.innerHTML = "+";
        squareSpellAnimation.style.left = (((flash.count / 2) * (10 + (flash.count / 2))) - 3) + "%";
        playerDiv.appendChild(squareSpellAnimation);
        setTimeout(function() {
          squareSpellAnimation.style.bottom = "100%";
          squareSpellAnimation.style.filter = "opacity(0%)";
        }, 100);

        setTimeout(function() {
          playerDiv.removeChild(squareSpellAnimation);
        }, 2100);
      }

      flash.flash = setInterval(function() {
        flash.screenFlash(healAnimation, 2);
      }, 75);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);

          let answerInput = document.getElementById("answerInput");
          answerInput.focus();

          player.health += heal;
          if (player.health > player.maxHealth) player.health = player.maxHealth;

          let healthBarFront = document.getElementById("healthBarFront");
          healthBarFront.style.height = ((player.health / player.maxHealth) * 110) + "px";

          player.spells.hypatia.ongoing = false;

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
          buttonsOff = false;
        }
      }, 250);

      player.stats.damage.healed += heal;
      player.spells.hypatia.cast++;
      player.spells.hypatia.number--;
      document.getElementById("squareCount").innerHTML = player.spells.hypatia.number;
    }
    //
    //Reduce terms spell
    const castLovelace = function() {

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.lovelace.number === 0) {
        hintDiv.innerHTML = "You don't have any Reduction Magic!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      player.spells.lovelace.ongoing = true;
      if (player.spells.fibonacci.ongoing) {
        let fibonacciImg = document.getElementById("fibonacciImg");
        fibonacciImg.style.filter = "opacity(100%)";
        fibonacciImg.onclick = castFibonacci;
        player.spells.fibonacci.ongoing = false;
      }
      buttonsOff = true;
      timer.stopTime();

      hintDiv.innerHTML = "You cast Lovelace's Reduction!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1500);

      let flash = new ScreenFlash("playAreaOrange", 10);

      const numberAnimation = function() {
        let possible = "1234567890÷×+- ";
        let text = "";
        for (let i = 0; i < 15; i++) {
          text += possible.charAt(getRandomNumber(0, (possible.length - 1)));
        }
        problemDiv.innerHTML = text;
      }

      flash.flash = setInterval(function() {
        flash.screenFlash(numberAnimation, 1);
      }, 75);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);

          let newTerms = getTerms(operation, Math.ceil(monster.level / 2));

          for (let i = 0; i < terms.length; i++) {
            terms[i] = newTerms[i];
          }

          clearElement(problemDiv);
          insertTextNode(problemDiv, terms[0] + " " + current[operation].sign + " ");
            let span = document.createElement("span");
            span.style.color = "#ffbaba";
              insertTextNode(span, terms[1]);
            problemDiv.appendChild(span);
            insertTextNode(problemDiv, " = ");
          insertAnswerInput(problemDiv, terms[2], checkKeyPress);

          var answerInput = document.getElementById("answerInput");
          answerInput.focus();

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
          buttonsOff = false;
          player.spells.lovelace.ongoing = true;
          let pentagonImg = document.getElementById("pentagonImg");
          pentagonImg.style.filter = "opacity(30%)";
          pentagonImg.onclick = "";
        }
      }, 250);

      player.spells.lovelace.cast++;
      player.spells.lovelace.number--;
      document.getElementById("pentagonCount").innerHTML = player.spells.lovelace.number;
    }
    //
    //Strength spell
    const castNoether = function() {
      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.noether.number === 0) {
        hintDiv.innerHTML = "You don't have any Strength Magic!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      timer.stopTime();
      player.spells.noether.ongoing = true;
      buttonsOff = true;

      hintDiv.innerHTML = "You cast Noether's Strength!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1500);

      let flash = new ScreenFlash("playAreaWhite", 10);

      let playerImgHeight = 100;

      const strengthAnimation = function() {
        playerImgHeight += 25;
        playerImg.style.height = playerImgHeight;
      }

      flash.flash = setInterval(function() {
        flash.screenFlash(strengthAnimation, 2);
      }, 100);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
          buttonsOff = false;

          setTimeout(function() {
            playerImg.style.height = 100;
            player.spells.noether.ongoing = false;
          }, 250);
        }
      }, 250);

      player.spells.noether.cast++;
      player.spells.noether.number--;
      player.damageBoost++;
      document.getElementById("hexagonCount").innerHTML = player.spells.noether.number;
    }
    //
    //Stop time spell
    const castHuygens = function() {

      function stopTimeAnimation() {

        function drawClock() {
          let minuteX1 = (225 + (20 * Math.cos(minuteAngle * Math.PI)));
          let minuteY1 = (225 + (20 * Math.sin(minuteAngle * Math.PI)));

          let minuteX2 = (225 + (180 * Math.cos(minuteAngle * Math.PI)));
          let minuteY2 = (225 + (180 * Math.sin(minuteAngle * Math.PI)));

          let hourX1 = (225 + (20 * Math.cos(hourAngle * Math.PI)));
          let hourY1 = (225 + (20 * Math.sin(hourAngle * Math.PI)));

          let hourX2 = (225 + (100 * Math.cos(hourAngle * Math.PI)));
          let hourY2 = (225 + (100 * Math.sin(hourAngle * Math.PI)));

          handContext.beginPath();
          handContext.moveTo(minuteX1, minuteY1);
          handContext.lineTo(minuteX2, minuteY2);
          handContext.strokeStyle = baseColor;
          handContext.lineWidth = 15;
          handContext.shadowOffsetX = 5;
          handContext.shadowOffsetY = 5;
          handContext.shadowBlur = 5;
          handContext.shadowColor = "black";
          handContext.stroke();
          handContext.closePath();

          handContext.beginPath();
          handContext.moveTo(hourX1, hourY1);
          handContext.lineTo(hourX2, hourY2);
          handContext.strokeStyle = baseColor;
          handContext.lineWidth = 20;
          handContext.shadowOffsetX = 5;
          handContext.shadowOffsetY = 5;
          handContext.shadowBlur = 5;
          handContext.shadowColor = "black";
          handContext.stroke();
          handContext.closePath();
        }

        function incrementClock() {
          minuteAngle += timeIncrement;
          hourAngle += (timeIncrement / 12);
        }

        let canvas = makeCanvas("timeCanvas", 450, 450);
        let levelDiv = document.getElementById("levelDiv");
        playArea.insertBefore(canvas, levelDiv);

        let context = canvas.getContext("2d");

        let handCanvas = makeCanvas("handCanvas", 450, 450);
        playArea.insertBefore(handCanvas, canvas);

        let handContext = handCanvas.getContext("2d");

        let lineWidth = 5;
        let baseColor = "rgba(0, 255, 0, 1)"
        let baseShadow = "rgba(255, 0, 0, 1)"

        context.beginPath();
        context.arc(225, 225, 200, 0, (2 * Math.PI));

        for (let i = 0; i < 2; i += .166666666) {
          let xPos = (225 + (150 * Math.cos(i * Math.PI)));
          let yPos = (225 + (150 * Math.sin(i * Math.PI)));

          let xPos2 = (225 + (190 * Math.cos(i * Math.PI)));
          let yPos2 = (225 + (190 * Math.sin(i * Math.PI)));

          context.moveTo(xPos, yPos);
          context.lineTo(xPos2, yPos2);
        }

        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 5;
        context.shadowColor = "black";
        context.lineWidth = lineWidth * 2;
        context.strokeStyle = baseColor;

        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(225, 225, 10, 0, (2 * Math.PI));
        context.fillStyle = baseColor;
        context.fill();
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 5;
        context.shadowColor = "black";
        context.closePath();

        let minuteAngle = 1.5;
        let hourAngle = 0.5;
        let timeIncrement = 0.125;

        let flashing = false;


        let pyramidTimer = setInterval(function() {
          handContext.clearRect(0, 0, 450, 450);
          if (hourAngle > 1.5) {
            clearInterval(pyramidTimer);
            minuteAngle = 1.5;
            hourAngle = 1.5;
            drawClock();
            animationDone = true;
          }
          if (((Math.floor(minuteAngle + .5) % 2) == 0) && (!flashing)) {
            flashing = true;
            requestAnimationFrame(function() {
              playArea.classList.add("playAreaGreenFlash");
            });
            setTimeout(function() {
              requestAnimationFrame(function() {
                playArea.classList.remove("playAreaGreenFlash");
              });
            }, 160);
          }
          if ((Math.floor(minuteAngle + .5) % 2) != 0) {
            flashing = false;
          }
          if (hourAngle > 1.37) {
            timeIncrement = 0.03333333;
          } else if (hourAngle > 1.25) {
            timeIncrement = 0.05555555;
          }
          drawClock();
          incrementClock();
        }, 10);




      }

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.huygens.number === 0) {
        hintDiv.innerHTML = "You don't have any Stop Time Magic!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      timer.stopTime();
      player.spells.huygens.ongoing = true;
      buttonsOff = true;

      let animationDone = false;
      stopTimeAnimation();

      hintDiv.innerHTML = "You cast Huygen's Stop Time!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1500);

      let flash = new ScreenFlash("playAreaGreen", 9);

      let checkAnimation = setInterval(function() {
        if (animationDone) {
          clearInterval(checkAnimation);
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 75);
        }
      }, 10);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);
          let canvas = document.getElementById("timeCanvas");
          playArea.removeChild(canvas);
          let handCanvas = document.getElementById("handCanvas");
          playArea.removeChild(handCanvas);
          playArea.classList.remove("playAreaGreen");
          let answerInput = document.getElementById("answerInput");
          answerInput.focus();
          buttonsOff = false;
          player.spells.huygens.ongoing = true;
        }
      }, 250);

      player.spells.huygens.cast++;
      player.spells.huygens.number--;
      document.getElementById("pyramidCount").innerHTML = player.spells.huygens.number;

      pyramidImg = document.getElementById("pyramidImg");
      pyramidImg.style.filter = "opacity(30%)";
      pyramidImg.onclick = "";
    }
    //
    //Polymorph monster spell
    const castFermat = function() {

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.fermat.number === 0) {
        hintDiv.innerHTML = "You don't have any Cube Magic!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      if ((monster.index > 29) && (current[operation].level < 9)) {
        hintDiv.innerHTML = "You can't polymorph the " + monster.name + "!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      timer.stopTime();
      player.spells.fermat.ongoing = true;
      buttonsOff = true;

      hintDiv.innerHTML = "You cast Fermet's Polymorph Monster!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1500);

      let flash = new ScreenFlash("playAreaPurple", 10);

      let monsterDiv = document.getElementById("monsterDiv");

      function polymorphAnimation() {
        if ((flash.count % 4) === 0) {
          monsterDiv.style.transform = "rotateY(-" + (flash.count * 360) + "deg)";
        }
      }

      flash.flash = setInterval(function() {
        flash.screenFlash(polymorphAnimation, 2);
      }, 75);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);
          let newMonsterLevel = getRandomNumber(1, (Math.ceil(catacombLevel / 2)));
          monsterDiv.style.transform = "rotateY(-180deg)";
          monster = new Monster(newMonsterLevel);
          monsterDiv.style.transform = "rotateY(-360deg)";

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
          buttonsOff = false;
          player.spells.fermat.ongoing = true;
          cubeImg = document.getElementById("cubeImg");
          cubeImg.style.filter = "opacity(30%)";
          cubeImg.onclick = "";
        }
      }, 250);

      player.spells.fermat.cast++;
      player.spells.fermat.number--;
      document.getElementById("cubeCount").innerHTML = player.spells.fermat.number;
    }
    //
    //This function handles my star/nova spell
    const castBrahe = function() {

      function novaAnimation() {

        function incrementStar() {
          point1 += interval;
          point2 += interval;
          point3 += interval;
          point4 += interval;
          point5 += interval;
          point6 += interval;
        }

        function growStar() {
          triangle1x1 = (225 + (starRadius * Math.cos(point1 * Math.PI)));
          triangle1y1 = (225 + (starRadius * Math.sin(point1 * Math.PI)));

          triangle1x2 = (225 + (starRadius * Math.cos(point2 * Math.PI)));
          triangle1y2 = (225 + (starRadius * Math.sin(point2 * Math.PI)));

          triangle1x3 = (225 + (starRadius * Math.cos(point3 * Math.PI)));
          triangle1y3 = (225 + (starRadius * Math.sin(point3 * Math.PI)));

          triangle2x1 = (225 + (starRadius * Math.cos(point4 * Math.PI)));
          triangle2y1 = (225 + (starRadius * Math.sin(point4 * Math.PI)));

          triangle2x2 = (225 + (starRadius * Math.cos(point5 * Math.PI)));
          triangle2y2 = (225 + (starRadius * Math.sin(point5 * Math.PI)));

          triangle2x3 = (225 + (starRadius * Math.cos(point6 * Math.PI)));
          triangle2y3 = (225 + (starRadius * Math.sin(point6 * Math.PI)));

          context.beginPath();

          context.moveTo(triangle1x1, triangle1y1);
          context.lineTo(triangle1x2, triangle1y2);
          context.lineTo(triangle1x3, triangle1y3);
          context.lineTo(triangle1x1, triangle1y1);
          context.lineTo(triangle1x2, triangle1y2);

          context.moveTo(triangle2x1, triangle2y1);
          context.lineTo(triangle2x2, triangle2y2);
          context.lineTo(triangle2x3, triangle2y3);
          context.lineTo(triangle2x1, triangle2y1);
          context.closePath();

          context.shadowOffsetX = 5;
          context.shadowOffsetY = 5;
          context.shadowBlur = 5;
          context.shadowColor = "black";
          context.lineWidth = lineWidth;
          context.strokeStyle = baseColor;
          context.stroke();
        }

        function drawStar() {
          triangle1x1 = getX(225, 150, point1);
          triangle1y1 = getY(225, 150, point1);

          triangle1x2 = getX(225, 150, point2);
          triangle1y2 = getY(225, 150, point2);

          triangle1x3 = getX(225, 150, point3);
          triangle1y3 = getY(225, 150, point3);

          triangle2x1 = getX(225, 150, point4);
          triangle2y1 = getY(225, 150, point4);

          triangle2x2 = getX(225, 150, point5);
          triangle2y2 = getY(225, 150, point5);

          triangle2x3 = getX(225, 150, point6);
          triangle2y3 = getY(225, 150, point6);

          context.beginPath();

          context.moveTo(triangle1x1, triangle1y1);
          context.lineTo(triangle1x2, triangle1y2);
          context.lineTo(triangle1x3, triangle1y3);
          context.lineTo(triangle1x1, triangle1y1);
          context.lineTo(triangle1x2, triangle1y2);

          context.moveTo(triangle2x1, triangle2y1);
          context.lineTo(triangle2x2, triangle2y2);
          context.lineTo(triangle2x3, triangle2y3);
          context.lineTo(triangle2x1, triangle2y1);
          context.closePath();

          context.shadowOffsetX = 5;
          context.shadowOffsetY = 5;
          context.shadowBlur = 5;
          context.shadowColor = "black";
          context.lineWidth = lineWidth;
          context.strokeStyle = baseColor;
          context.stroke();
        }

        function drawSpark(sparkCanvas, sparkContext, angle) {
          let x = getX(225, 157, angle);
          let y = getY(225, 157, angle);

          y -= sparkBoxCenter;
          x -= sparkBoxCenter;

          angle = ((angle * Math.PI) * (180 / Math.PI))

          setTimeout(function() {
            sparkContext.clearRect(0, 0, sparkBox, sparkBox);
            sparkContext.stroke();
          }, (animationRate * 3));

          let spark1 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));
          let spark2 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));
          let spark3 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));
          let spark4 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));

          sparkCanvas.style.top = y;
          sparkCanvas.style.left = x;
          sparkCanvas.style.transform = "rotate(" + angle + "deg)";

          sparkContext.beginPath();
          sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
          sparkContext.lineTo(spark1, 0);
          sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
          sparkContext.lineTo(spark2, 0);
          sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
          sparkContext.lineTo(spark3, 0);
          sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
          sparkContext.lineTo(spark4, 0);
          sparkContext.closePath();
          sparkContext.strokeStyle = "orange";
          sparkContext.stroke();
        }

        function drawSparks() {
          drawSpark(sparkCanvas1, sparkContext1, point1);
          drawSpark(sparkCanvas2, sparkContext2, point2);
          drawSpark(sparkCanvas3, sparkContext3, point3);
          drawSpark(sparkCanvas4, sparkContext4, point4);
          drawSpark(sparkCanvas5, sparkContext5, point5);
          drawSpark(sparkCanvas6, sparkContext6, point6);
        }

        function makeSparkCanvas() {
          let sparkCanvas = makeCanvas("", sparkBox, sparkBox);
          sparkCanvas.className = "sparkCanvas";
          return sparkCanvas;
        }

        function getX(center, radius, angle) {
          return (center + (radius * Math.cos(angle * Math.PI)));
        }

        function getY(center, radius, angle) {
          return (center + (radius * Math.sin(angle * Math.PI)));
        }

        let canvas = makeCanvas("novaCanvas", 450, 450);
        let levelDiv = document.getElementById("levelDiv");
        playArea.insertBefore(canvas, levelDiv);

        let context = canvas.getContext("2d");

        let sparkBox = 81;
        let sparkBoxCenter = 40;

        let sparkCanvas1 = makeSparkCanvas()
        let sparkContext1 = sparkCanvas1.getContext("2d");
        playArea.appendChild(sparkCanvas1);

        let sparkCanvas2 = makeSparkCanvas()
        let sparkContext2 = sparkCanvas2.getContext("2d");
        playArea.appendChild(sparkCanvas2);

        let sparkCanvas3 = makeSparkCanvas()
        let sparkContext3 = sparkCanvas3.getContext("2d");
        playArea.appendChild(sparkCanvas3);

        let sparkCanvas4 = makeSparkCanvas()
        let sparkContext4 = sparkCanvas4.getContext("2d");
        playArea.appendChild(sparkCanvas4);

        let sparkCanvas5 = makeSparkCanvas()
        let sparkContext5 = sparkCanvas5.getContext("2d");
        playArea.appendChild(sparkCanvas5);

        let sparkCanvas6 = makeSparkCanvas()
        let sparkContext6 = sparkCanvas6.getContext("2d");
        playArea.appendChild(sparkCanvas6);

        let lineWidth = 10;
        let baseColor = "rgba(233, 249, 0, 1)"
        let baseShadow = "rgba(255, 0, 0, 1)"

        let point1 = 1.5;
        let point2 = 2.16666666;
        let point3 = 2.83333333;
        let point4 = 0.5;
        let point5 = 1.16666666;
        let point6 = 1.83333333;
        let starRadius = 0;

        let interval = 0.05;
        let animationRate = 25;
        let animationCounter = 0;

        let starGrow = setInterval(function() {
          context.clearRect(0, 0, 450, 450);
          growStar();
          starRadius += 7;
          if (starRadius > 150) {
            clearInterval(starGrow);
            requestAnimationFrame(function() {
              playArea.classList.add("playAreaYellowFlash");
            });
            setTimeout(function() {
              requestAnimationFrame(function() {
                playArea.classList.remove("playAreaYellowFlash");
              });
            }, 750);
            let starTimer = setInterval(function() {
              context.clearRect(0, 0, 450, 450);
              drawStar();
              drawSparks();

              incrementStar();
              animationCounter += animationRate;
              if (animationCounter > 1000) {
                interval = 0.075;
              }
              if (animationCounter > 2000) {
                clearInterval(starTimer);
                point1 = 1.5;
                point2 = 2.16666666;
                point3 = 2.83333333;
                point4 = 0.5;
                point5 = 1.16666666;
                point6 = 1.83333333;
                context.clearRect(0, 0, 450, 450);
                playArea.removeChild(sparkCanvas1);
                playArea.removeChild(sparkCanvas2);
                playArea.removeChild(sparkCanvas3);
                playArea.removeChild(sparkCanvas4);
                playArea.removeChild(sparkCanvas5);
                playArea.removeChild(sparkCanvas6);
                drawStar();
                playArea.classList.add("playAreaYellowFlash");
                setTimeout(function() {
                  requestAnimationFrame(function() {
                    playArea.classList.remove("playAreaYellowFlash");
                  });
                }, 250);
                animationDone = true;
              }
            }, animationRate);
          }
        }, animationRate);


      }

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.brahe.number === 0) {
        hintDiv.innerHTML = "You don't have any Star Magic!";
        hintDiv.style.visibility = "visible";
        hideElement(hintDiv, 1500);
        return;
      }

      timer.stopTime();
      buttonsOff = true;
      novaAnimation();
      hintDiv.innerHTML = "You cast Brahe's Nova!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1500);
      player.spells.brahe.ongoing = true;

      let flash = new ScreenFlash("playAreaYellow", 9);

      let animationDone = false;

      let checkAnimation = setInterval(function() {
        if (animationDone) {
          clearInterval(checkAnimation);
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 75);
        }
      }, 10);

      let checkFlash = setInterval(function() {
        if (flash.count === 0) {
          clearInterval(checkFlash);
          playArea.classList.remove("playAreaYellow");
          let canvas = document.getElementById("novaCanvas");
          playArea.removeChild(canvas);
          player.damageBoost = 5;

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
          buttonsOff = false;
          damageMonster();
        }
      }, 250);

      player.spells.brahe.cast++;
      player.spells.brahe.number--;
      document.getElementById("starCount").innerHTML = player.spells.brahe.number;


    }

    let monster = new Monster(catacombLevel);
    let timer = new Timer(timerValue);
    let monsterInterval = 0;
    let terms = null;
    let buttonsOff = false;
    getProblem();
  }

  let playArea = document.getElementById("playArea");

  catacombIntro();
}
