//-------------------------------------------------------------------//
//Logic helper functions                                             //
//-------------------------------------------------------------------//

const getRandomNumber = function(floor, ceiling) {
  //----------------------------------------------------//
  //Gets random number for the math problems            //
  //where floor is the lowest number possible and       //
  //ceiling is the highest number possible              //
  //----------------------------------------------------//

  let range = (ceiling - floor) + 1;
  return Math.floor((Math.random() * range) + floor);
}

const getAverage = function(averageTime, newTime) {
  //----------------------------------------------------//
  //Calculates a new average time given the             //
  //previous average (averageTime) and the              //
  //new time (newTime)                                  //
  //averageTime[0] is the current average time          //
  //averageTime[1] is the total items being averaged    //
  //----------------------------------------------------//

  averageTime[0] = ((averageTime[0] * averageTime[1]) + newTime) / (averageTime[1] + 1);
  averageTime[1]++;
  return averageTime;
}

const isPrime = function(number) {
  //----------------------------------------------------//
  //Takes a number and checks it against a predefined   //
  //list of prime numbers                               //
  //----------------------------------------------------//
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

const isTriangle = function(number) {
  //----------------------------------------------------//
  //Takes a number and checks it against a predefined   //
  //list of triangle numbers                            //
  //----------------------------------------------------//

  let triangleNumbers = [3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136];

  return triangleNumbers.includes(number);
}

const isSquare = function(number) {
  //----------------------------------------------------//
  //Takes a number and checks it against a predefined   //
  //list of square numbers                              //
  //----------------------------------------------------//

  let squareNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196];

  return squareNumbers.includes(number);
}

const isMirror = function(number) {
  let numString = number.toString();

  if (numString.endsWith(numString[0]) && number > 10) {
    return true;
  } else {
    return false;
  }
}

const findMonster = function(array, index) {
  //----------------------------------------------------//
  //Similar to array.indexOf(), only customized         //
  //for the array of monsters fought.                   //
  //array is the array of monsters to be searched       //
  //index is the value being searched for               //
  //----------------------------------------------------//

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == index) {
      return i;
    }
  }
  return -1;
}

const monsterSearch = function(array, index) {
  //----------------------------------------------------//
  //Similar to array.includes(), only customized        //
  //for the array of monsters fought.                   //
  //array is the array of monsters to be searched       //
  //index is the value being searched for               //
  //----------------------------------------------------//

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

let imageBin = [];

const preloadImages = function(images, path = false) {
  //----------------------------------------------------//
  //Preloads images before they are needed              //
  //array-> images[]: an array containing strings that  //
  //are the paths to the images to be loaded            //
  //----------------------------------------------------//

  if (images[0] != "") {
    imageBin = [];
  } else {
    images.shift();
  }

  let imgLength = images.length;
  let img = null;

  for (let i = 0; i < imgLength; i++) {
    imageBin.push(new Image());// = new Image();
    if (path) {
      img = path + images[i];
    } else {
      img = images[i];
    }
    imageBin[imageBin.length - 1].src = img;
  }
  //console.clear();
  //console.log(imageBin);
}

const preloadMenu = function(menuData) {
  //----------------------------------------------------//
  //Preloads menu images before they are needed         //
  //object-> menuData: an object that holds the info    //
  //about the sprites used in a menu                    //
  //----------------------------------------------------//

  let imgs = [];
  for (let i = 0; i < menuData.sprites.length; i++) {
    imgs.push(menuData.path + menuData.sprites[i][0]);
  }
  preloadImages(imgs);
}

const monsterImgLoad = function(monster, callback) {
  let img = new Image();
  img.src = monster.src;
  img.onload = function() {
    let monsterImg = document.getElementById("monsterImg");
    monsterImg.src = monster.src;
    monsterImg.title = monster.name;
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
    monsterImg.style.filter = "brightness(100%)";

    callback();
  }
}

const parseMath = function(string) {
  //----------------------------------------------------//
  //Poorly named function that parses my custom         //
  //shortcode for more colorful display                 //
  //string-> string: text to be parsed                  //
  //----------------------------------------------------//

  let htmlString = string;
  if (htmlString.includes("_r")) {
    htmlString = htmlString.replace(/_r/g, "<span style=\"color:#ff7878;\">");
    htmlString = htmlString.replace(/r_/g, "</span>");
  }
  if (htmlString.includes("_g")) {
    htmlString = htmlString.replace(/_g/g, "<span style=\"color:#78ff78;\">");
    htmlString = htmlString.replace(/g_/g, "</span>");
  }
  if (htmlString.includes("_b")) {
    htmlString = htmlString.replace(/_b/g, "<span style=\"color:#babaff;\">");
    htmlString = htmlString.replace(/b_/g, "</span>");
  }
  if (htmlString.includes("_o")) {
    htmlString = htmlString.replace(/_o/g, "<span style=\"color:orange;\">");
    htmlString = htmlString.replace(/o_/g, "</span>");
  }
  if (htmlString.includes("_fl")) {
    htmlString = htmlString.replace(/_fl/g, "<span style=\"float:left;\">");
    htmlString = htmlString.replace(/fl_/g, "</span>");
  }
  if (htmlString.includes("_fr")) {
    htmlString = htmlString.replace(/_fr/g, "<span style=\"float:right;\">");
    htmlString = htmlString.replace(/fr_/g, "</span>");
  }
  if (htmlString.includes("_kb")) {
    htmlString = htmlString.replace(/_kb/g, "<span class=\"kbd\">");
    htmlString = htmlString.replace(/kb_/g, "</span>");
  }
  return "/HTML/" + htmlString;
}

function clearElement() {
  //----------------------------------------------------//
  //Clears the innerHTML of any number of elements      //
  //passed in as arguments                              //
  //element-> arguments[0+]                              //
  //----------------------------------------------------//

  for (let i = 0; i < arguments.length; i++) {
    arguments[i].innerHTML = "";
  }
}

function hideElement(element, time) {
  //----------------------------------------------------//
  //Hides an element and clears its innerHTML           //
  //after a set amount of time                          //
  //----------------------------------------------------//

  setTimeout(function() {
    element.innerHTML = "";
    element.style.visibility = "hidden";
  }, time)
}

function removeElement() {
  //----------------------------------------------------//
  //Removes any number of elements passed in as         //
  //arguments from their parent element                 //
  //string-> arguments[0+]: id of the elements          //
  //to be removed                                       //
  //----------------------------------------------------//

  for (let i = 0; i < arguments.length; i++) {
    let element = document.getElementById(arguments[i]);
    element.parentNode.removeChild(element);
  }
}

function removeLastChild(element, repeat = 1) {
  //----------------------------------------------------//
  //Removes the last child/children from an element     //
  //element is the parent from which to remove the child//
  //repeat(optional) is the number of lastChildren      //
  //to remove                                           //
  //----------------------------------------------------//

  for (let i = 0; i < repeat; i++) {
    element.removeChild(element.lastChild);
  }
}

function insertTextNode(element, text) {
  //----------------------------------------------------//
  //Inserts a text node into an element                 //
  //element-> element: the element into which the       //
  //node is inserted                                    //
  //string-> text: the string of the text node          //
  //----------------------------------------------------//

  let node = document.createTextNode(text);
  element.appendChild(node);
}

function insertLineBreak(element, repeat = 1) {
  //----------------------------------------------------//
  //Inserts a <br /> element into another element one   //
  //or multiple times                                   //
  //element-> element: the element into which the       //
  //<br /> isinserted                                   //
  //integer-> repeat(optional): is the number of        //
  //elements to insert                                  //
  //----------------------------------------------------//

  for (let i = 0; i < repeat; i++) {
    let lineBreak = document.createElement("br");
    element.appendChild(lineBreak);
  }
}

function insertButton(element, text, click, id = "nextButton", bClass = "none") {
  //----------------------------------------------------//
  //Inserts a button into an element                    //
  //element-> element: is the element into which        //
  //the button will be inserted                         //
  //string-> text: the text of the button               //
  //function-> click: the function called when          //
  //it's clicked                                        //
  //string-> id: the id to assign to the button         //
  //----------------------------------------------------//

  const button = makeButton(click, text, id, bClass);
  element.appendChild(button);
  setTimeout(function() {
    button.focus();
  }, 100);
}

function insertAnswerInput(target, answer, callback) {
  console.log("Delete Me!");
  //----------------------------------------------------//
  //Makes and inserts the number input box              //
  //element-> target: where to insert the number        //
  //input box                                           //
  //integer-> answer: solution to the problem           //
  //function-> callback: function to run when a         //
  //key is pressed                                      //
  //----------------------------------------------------//

  let input = document.createElement("input");
  input.type = "number";
  input.id = "answerInput";
  if (callback) {
    input.onkeyup = function() {
      setTimeout(function() {
        callback(event, answer);
      }, 200);
    }
  }
  target.appendChild(input);
}

function makeDiv() {
  //----------------------------------------------------//
  //returns a <div> element. Arguments are optional     //
  //string-> arguments[0]: assigned as the id           //
  //string-> arguments[1+]: assigned as classes         //
  //----------------------------------------------------//

  let div = document.createElement("div");
  if (arguments.length > 0) {div.id = arguments[0]}
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      div.classList.add(arguments[i]);
    }
  }
  return div;
}

function makeFragment() {
  //----------------------------------------------------//
  //Returns a fragment                                  //
  //element-> arguments[0+]: elements to append to      //
  //the makeFragment                                    //
  //----------------------------------------------------//

  let fragment = document.createDocumentFragment();
  for (let i = 0; i < arguments.length; i++) {
    fragment.appendChild(arguments[i]);
  }
  return fragment;
}

function makeButton(callback, text, id = "") {
  //----------------------------------------------------//
  //Returns a <button> element                          //
  //function-> callback: called when the button is      //
  //clicked                                             //
  //string-> text: the text on the button               //
  //string-> id: the id of the button element           //
  //string-> arguments[3+]: classes of the element      //
  //----------------------------------------------------//

  const button = document.createElement("button");
  button.innerHTML = text;
  button.type = "button";
  button.onclick = function() {
    callback();
  }
  button.id = id;
  if (arguments.length > 3) {
    for (let i = 3; i < arguments.length; i++) {
      button.classList.add(arguments[i]);
    }
  }
  return button;
}

function makeImg(src) {
  //----------------------------------------------------//
  //Returns an <img> element                            //
  //string-> src: is the path to the image file         //
  //string-> arguments[1]: id of the image element      //
  //string-> arguments[2+]: classes of the image element//
  //----------------------------------------------------//

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

function makeCanvas(id) {
  //----------------------------------------------------//
  //Returns a canvas                                    //
  //id is the id of the canvas                          //
  //Additional arguments define the height and          //
  //width of the canvas element                         //
  //----------------------------------------------------//

  var canvas = document.createElement("canvas");
  canvas.id = id;
  if (arguments.length > 1) {
    canvas.height = arguments[1];
    canvas.width = arguments[2];
  }
  return canvas;
}

function makeCameoDiv(src) {
  //----------------------------------------------------//
  //Returns a <div> element that will contain an image  //
  //string-> src: path to the image files               //
  //----------------------------------------------------//

  let div = makeDiv("cameo");
  let img = makeImg(src, "cameoImg")
  div.appendChild(img);
  return div;
}

const makeSkipButton = function(callback) {
  //----------------------------------------------------//
  //Makes a button to skip chunks of text               //
  //function-> callback: the function called when the   //
  //skip button is clicked                              //
  //----------------------------------------------------//

  const skipFunction = function() {
    //document.removeEventListener("keyup", skipCheck);
    callback(player);
  }

  const skipCheck = function(event) {
    if (event.code === "Space") {
      skipFunction();
    }
  }

  const skipButton = makeButton(skipFunction, textData.skip, "skipButton");
  //document.addEventListener("keyup", skipCheck);

  /*const skipButton = makeButton(function() {
    callback(player);
  }, textData.skip, "skipButton");*/
  const skipDiv = makeDiv("skipDiv");
  skipDiv.appendChild(skipButton);

  return skipDiv;
}

function showImage(src, target, duration = 1500) {
  //----------------------------------------------------//
  //Makes an image appear on screen for a set duration  //
  //of time                                             //
  //string-> src: path to the image                     //
  //element-> target: where to append the image         //
  //integer-> duration: how long the image is to appear //
  //on screen                                           //
  //----------------------------------------------------//

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

function showText(target, text, final, finalText = textData.next, index = 0) {
  //----------------------------------------------------//
  //Displays an array of text, one element at a time,   //
  //in another element, separated by "Next" buttons     //
  //element-> target: where the text will be shown      //
  //array-> text: strings of text to be shown           //
  //function-> final: function to call when all text    //
  //has been displayed                                  //
  //----------------------------------------------------//

  let nextBlock = function() {
    document.removeEventListener("keyup", checkKeys);
    showText(target, text, final, finalText, index + 1);
  }

  let checkKeys = function(event) {
    if (event.key === "Enter") {

      nextBlock();
    }
    let skip = document.getElementById("skipDiv");
    if (event.code === "Space" && skip) {
      event.preventDefault();
      document.removeEventListener("keyup", checkKeys);
      final();
    }
  }

  clearElement(target);

  if (text[index].includes("/HTML/")) {
    target.innerHTML = text[index].slice(6)
  } else {
    target.textContent = text[index];
  }
  insertLineBreak(target, 2);

  if (index < text.length - 1) {
    insertButton(target, textData.next, nextBlock);
    setTimeout(function() {
      document.addEventListener("keyup", checkKeys);
    }, 200);
  } else {
    document.removeEventListener("keyup", checkKeys);
    insertButton(target, finalText, final);
  }
}

//-------------------------------------------------------------------//
//Animation functions                                                //
//-------------------------------------------------------------------//

function fadeOutElement() {
  //----------------------------------------------------//
  //Reduces an element's opacity to 0% then removes     //
  //it from the screen                                  //
  //string-> arguments[0+]: id of the element to        //
  //be faded and removed                                //
  //----------------------------------------------------//

  for (let i = 0; i < arguments.length; i++) {
    let element = document.getElementById(arguments[i]);
    element.style.filter = "opacity(0%)";

    element.addEventListener("transitionend", function(e) {
      element.parentNode.removeChild(element);
      e.stopImmediatePropagation();
    });
  }
}

function fadeTransition(element, target, speed = 500, callback = null) {
  //----------------------------------------------------//
  //element-> element: DOM element to be added during   //
  //the transition                                      //
  //element-> target: where the new element will be     //
  //added during the transition                         //
  //integer-> speed: speed in ms at which the target    //
  //element displays its transitions                    //
  //function-> callback: function to be called during   //
  //the transitions                                     //
  //----------------------------------------------------//

  target.style.filter = "brightness(0%)";
  setTimeout(function() {
    clearElement(target);
    if (element != null) {target.appendChild(element);}
    if (callback != null) {callback();}
    target.style.filter = "brightness(100%)";
  }, speed);


}

//-------------------------------------------------------------------//
//Menu functions                                                     //
//-------------------------------------------------------------------//

function menuMaker(selector, imgData, callback, index = 0) {
  //----------------------------------------------------//
  //Makes the carousel menus for the game               //
  //MenuSelector-> selector: the class and id info      //
  //for the elements in the menu                        //
  //object-> imgData: contains the info for where       //
  //to find the image assets to load                    //
  //function-> callback: called whenever a menu item    //
  //is levelButtonClicked                               //
  //----------------------------------------------------//

  function clickFunction() {
    //----------------------------------------------------//
    //Called when the player selects a menu item.         //
    //It turns off the event listeners                    //
    //----------------------------------------------------//

    menuImgMiddle.onclick = null;
    document.onkeyup = null;
    imgData.index = imgIndex.now;
    callback(imgData);
  }

  function shiftLeft() {
    //----------------------------------------------------//
    //Shifts the menu items to the left; triggered        //
    //by the RIGHT arrow                                  //
    //----------------------------------------------------//

    removeElement(selector.menuDiv.idLeft);

    imgIndex.add(1);
    //
    //Changes the menu text
    menuSelectText.textContent = imgData.sprites[imgIndex.now][imgData.sprites[0].length - 1];
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
    let srcPath = imgData.path + imgData.sprites[imgIndex.next][0];
    menuImgRight = makeImg(srcPath, "", selector.imgClass, selector.hoverClass)
    menuDivRight.appendChild(menuImgRight);
    target.insertBefore(menuDivRight, rightButton);
  }

  function shiftRight() {
    //----------------------------------------------------//
    //Shifts the menu items to the right; triggered       //
    //by the LEFT arrow                                   //
    //----------------------------------------------------//

    removeElement(selector.menuDiv.idRight);

    imgIndex.sub(1);
    //
    //Changes the menu text
    menuSelectText.textContent = imgData.sprites[imgIndex.now][imgData.sprites[0].length - 1];
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
    let srcPath = imgData.path + imgData.sprites[imgIndex.last][0];
    menuImgLeft = makeImg(srcPath, "", selector.imgClass, selector.hoverClass)
    menuDivLeft.appendChild(menuImgLeft);
    target.insertBefore(menuDivLeft, menuDivMiddle);
  }

  function checkArrowKeys(key) {
    //----------------------------------------------------//
    //Calls a function if a certain key is pressed        //
    //enter: clickFunction()                              //
    //left arrow: shiftRight()                            //
    //right arrow: shiftLeft()                            //
    //event-> key: event that will trigger a function call//
    //----------------------------------------------------//

    switch (key) {
      case "Enter":      //Enter key
        clickFunction();
        break;
      case "ArrowLeft":      //left arrow
        shiftRight();
        break;
      case "ArrowRight":      //right arrow
        shiftLeft();
        break;
    }
  }
  document.onkeyup = null;
  //
  //This sets up a listener for a key to be pressed
  setTimeout(function() {
    document.onkeyup = function(event) {
      checkArrowKeys(event.key);
    }
  }, 200);

  //
  //Puts text above the central menu item
  let menuSelectText = makeDiv(selector.textId, selector.lowClass);
  menuSelectText.textContent = selector.text;

  let imgIndex = new ArrayIndex(index, imgData.sprites.length)
  //
  //Changes the initial text to text identifying
  //the menu item
  setTimeout(function() {
    menuSelectText.innerHTML = imgData.sprites[imgIndex.now][imgData.sprites[0].length - 1];
  }, 2000);

  //
  //This <div> is set up outside of the visible play area
  //ready to slide onscreen when an arrow is clicked
  let menuDivLeft = makeDiv(selector.menuDiv.idLeft);
  let menuImgLeft = makeImg(imgData.path + imgData.sprites[imgIndex.last][0], "", selector.imgClass, selector.hoverClass);
  menuDivLeft.appendChild(menuImgLeft);
  //
  //This <div> is the visible menu selection. If it
  //is clicked, it will trigger the callback function
  let menuDivMiddle = makeDiv(selector.menuDiv.idMiddle, selector.lowClass);
  let menuImgMiddle = makeImg(imgData.path + imgData.sprites[imgIndex.now][0], "", selector.imgClass, selector.hoverClass);
  menuImgMiddle.onclick = clickFunction;
  menuDivMiddle.appendChild(menuImgMiddle);
  //
  //This <div> is set up outside of the visible play area
  //ready to slide onscreen when an arrow is clicked
  let menuDivRight = makeDiv(selector.menuDiv.idRight);
  let menuImgRight = makeImg(imgData.path + imgData.sprites[imgIndex.next][0], "", selector.imgClass, selector.hoverClass);
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

function clearMenu(selector, options = [1, 1, 1, 1, 1, 1]) {
  //----------------------------------------------------//
  //Removes the elements created by menuMaker()         //
  //MenuSelector-> selector: the object made to hold    //
  //the ids and classes of the menu items               //
  //array-> options: a 6-element array of 1s and 0s     //
  //used to indicate which elements need removing:      //
  //0 = menu text, 1 = left button, 2 = left element,   //
  //3 = middle element, 4 = right element,              //
  //5 = right button                                    //
  //----------------------------------------------------//

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

const saveGame = function(player) {
  let playerString = JSON.stringify(player);
  window.localStorage.setItem("player", playerString);
  window.localStorage.setItem("save", "true");
}

const continueGame = function() {
  let continueString = window.localStorage.getItem("player");
  let playerSeed = JSON.parse(continueString);

  player.name = playerSeed.name;
  player.health = playerSeed.health;
  player.maxHealth = playerSeed.maxHealth;;
  player.damage = playerSeed.damage;
  player.damageBoost = playerSeed.damageBoost;
  player.langIndex = playerSeed.langIndex;

  player.notification = playerSeed.notification;

  player.triggers = playerSeed.triggers;

  player.sprites = playerSeed.sprites;

  player.stats = playerSeed.stats;

  player.spells = playerSeed.spells;

  player.addition = playerSeed.addition;
  player.subtraction = playerSeed.subtraction;
  player.multiplication = playerSeed.multiplication;
  player.division = playerSeed.division;

  overworld(player);
}

class ArrayIndex {
  //----------------------------------------------------//
  //An easier way of keeping track of array indices     //
  //that need to be circular                            //
  //----------------------------------------------------//

  constructor(index, length) {
    this.index = index;
    this._length = length;
  }

  get length() {
    return this._length;
  }

  add(num) {
    this.now = (this.now + num) % this.length ;
    return this.now;
  }

  get next() {
    return (this.now + 1) % this.length;
  }

  get now() {
    return this.index;
  }

  set now(index) {
    this.index = index;
  }

  get last() {
    if (this.now === 0) {
      return this.length - 1;
    } else {
      return this.now - 1;
    }
  }

  sub(num) {
    if (this.now - num < 0) {
      this.now = this.length + ((this.now - num) % this.length);
    } else {
      this.now -= num;
    }
    return this.now;
  }
}

class MenuSelector {
  constructor(type, text) {
    //----------------------------------------------------//
    //Holds data used by the elements in a carousel menu  //
    //integer-> type: indicates whether the menu is a     //
    //big menu or a small menu; 0 = large, 1 = small      //
    //string-> text: text to place above text when        //
    //the menu Loads                                      //
    //----------------------------------------------------//

    this.target = "playArea",
    this.textId = (type) ? "smallMenuText":"largeMenuText",
    this.text = text,
    this.lowClass = null,
    this.menuDiv = {
      idLeft: (type) ? "smallMenuLeft":"largeMenuLeft",
      idMiddle: (type) ? "smallMenuMiddle":"largeMenuMiddle",
      idRight: (type) ? "smallMenuRight":"largeMenuRight"
    },
    this.imgClass = (type) ? "smallMenuImg":"largeMenuImg",
    this.hoverClass = (type) ? null:"largeMenuHover",
    this.buttonClass = (type) ? "smallMenuButtons":"largeMenuButtons",
    this.buttonId = {
      left: (type) ? "smallMenuLeftButton":"largeMenuLeftButton",
      right: (type) ? "smallMenuRightButton":"largeMenuRightButton"
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

class Spell {
  constructor(name, index, number = 0) {
    this.name = name;
    this.available = false;
    this.learned = false;
    this.number = 0;
    this.cast = 0;
    this.ongoing = false;
    this.notificationIndex = index;
  }
}

class Operation {
  constructor(sign) {
    this.level = 0;
    this.monsters = [];
    this.totalAverage = [0, 0];
    this.runningAverage = [];
    this.sign = sign;
  }
}

class Player {
  //----------------------------------------------------//
  //Stores all of the data about the player in one place//
  //----------------------------------------------------//

  constructor() {
    this.name = "";                 //The player's name
    this.health = 10;               //The player's health
    this.maxHealth = 10;            //The player's maximum health (used for healing)
    this.damage = 1;                //The base damage done by the player
    this.damageBoost = 0;           //Additional damage caused by the Strength spell
    this.langIndex = 0;

    this.notification = {
      additionKey: "Addition Key Available",
      subtractionKey: false,
      multiplicationKey: false,
      divisionKey: false,
      fibonacciSpell: "Fibonacci Spell Available",
      euclidSpell: false,
      hypatiaSpell: false,
      lovelaceSpell: false,
      huygensSpell: false,
      fermatSpell: false,
      noetherSpell: false,
      braheSpell: false,
      eulerSpell: false,
      kovalevskayaSpell: false,
    };

    this.triggers = {
      newGame: true,
      firstSpell: null,
      finalBoss: false,
      gameBeat: false
    }
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
      lovelaceCounter: 0,
      noetherCounter: 0,
      huygensCounter: 0,
      spellActive: false
    }
    //
    //Spell related stats
    this.spells = {
      fibonacci: new Spell("Fibonacci's Decomposition Spell", 4, "ꚙ"),
      euclid: new Spell("Euclid's Fireball Spell", 5),
      hypatia: new Spell("Hypatia's Healing Spell", 6),
      lovelace: new Spell("Lovelace's Reduction Spell", 7),
      huygens: new Spell("Huygens' Stop-time Spell", 8),
      fermat: new Spell("Fermat's Polymorph Monster Spell", 9),
      noether: new Spell("Noether's Strength Spell", 10),
      brahe: new Spell("Brahe's Nova Spell", 11),
      euler: new Spell("Euler's Left Distribution Spell", 12),
      kovalevskaya: new Spell("Kovalevskaya's Right Distribution Spell", 13),
    }

    this.addition = new Operation("+");
    this.subtraction = new Operation("-");
    this.multiplication = new Operation("×");
    this.division = new Operation("÷");
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

  get language() {
    return this.langIndex;
  }

  set language(index) {
    this.langIndex = index;
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
    return (object.fibonacci.cast + object.euler.cast + object.kovalevskaya.cast);
  }

  get attackSpells() {
    let object = this.spells;
    return object.euclid.cast + object.brahe.cast;
  }

  get spellsCast() {
    let total = 0;
    for (let i in this.spells) {
      total += this.spells[i].cast;
    }
    return total;
  }

  get totalTime() {
    let total = this.addition.totalAverage[0] * this.addition.totalAverage[1];
    total += this.subtraction.totalAverage[0] * this.subtraction.totalAverage[1];
    total += this.multiplication.totalAverage[0] * this.multiplication.totalAverage[1];
    total += this.division.totalAverage[0] * this.division.totalAverage[1];
    return total;
  }
}

const test = function() {
  player = new Player();
  player.name = "Shady";
  player.health = 100
  player.maxHealth = 100;
  player.damage = 50;
  //player.triggers.finalBoss = true;
  //player.triggers.gameBeat = true;
  player.addition.level = 3;
  player.notification.fibonacciSpell = false;
  player.notification.additionKey = false;
  player.subtraction.level = 3;
  player.multiplication.level = 0;
  player.division.level = 0;
  player.sprites.path = "./mages/";
  player.sprites.files = ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif", "Cat Mage"];
  player.spells.fibonacci.learned = true;
  player.spells.fibonacci.available = true;
  player.spells.euler.available = true;
  player.spells.euler.learned = true;
  player.spells.kovalevskaya.available = true;
  player.spells.kovalevskaya.learned = true;
  player.notification.kovalevskayaSpell = false
  player.spells.euclid.available = false;
  player.spells.euclid.learned = true;
  player.spells.euclid.number = 50;
  player.spells.lovelace.available = false;
  player.spells.lovelace.learned = true;
  player.spells.lovelace.number = 50;
  player.spells.hypatia.available = false;
  player.spells.hypatia.learned = true;
  player.spells.hypatia.number = 50;
  player.spells.noether.available = false;
  player.spells.noether.learned = true;
  player.spells.noether.number = 50;
  player.spells.huygens.available = false;
  player.spells.huygens.learned = true;
  player.spells.huygens.number = 50;
  player.spells.fermat.available = false;
  player.spells.fermat.learned = true;
  player.spells.fermat.number = 50;
  player.spells.brahe.available = false;
  player.spells.brahe.learned = true;
  player.spells.brahe.number = 50;
  player.triggers.newGame = false;


  overworld(player);

  /*fetch("./monsterData.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      monsterData = myJson;
      catacombs(player, "addition", 1, 2, monsterData);
    });*/
}

/*function optionMenu(player) {
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
  //\u00A0 is a non-breaking space used
  //to make the label prettier
  let languageBox = new MenuOption("\u00A0 Language: ");
  languageBox.options = ["English", "Español"];
  languageBox.appendTo(optionBox);
  let languageFiles = ["./gameStartTextEnglish.json", "./gameStartTextSpanish.json"]

  insertLineBreak(optionBox);

  let closeBox = makeDiv("closeBox");
    let closeButton = makeDiv("closeButton", "optionButton");
      insertTextNode(closeButton, "Close");

      closeButton.onclick = function() {

        fetch(languageFiles[languageBox.index])
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            textData = myJson;
            playArea.removeChild(optionBox);
            clearElement(playArea);
            titleScreen();
          });

      }

  closeBox.appendChild(closeButton);
  optionBox.appendChild(closeBox);

  playArea.insertBefore(optionBox, titleDiv);
}*/

const gameStart = function() {
  //----------------------------------------------------//
  //Handles everything before the "game" like giving    //
  //yourself a name, an avatar, and introducing the     //
  //game world                                          //
  //----------------------------------------------------//

  const shadycrzy = function() {
    //----------------------------------------------------//
    //Makes and animates the intro screen for the game    //
    //then calls the titleScreen() functions              //
    //----------------------------------------------------//

    let shady = makeDiv("shady");
    shady.innerHTML = "Shadycrzy Games";

    //
    //Makes the blocks and puts them on the screen
    //
    let blocks = makeDiv("blockDiv");
    let red = makeDiv("red", "block");
    let green = makeDiv("green", "block");
    let blue = makeDiv("blue", "block");

    blocks.appendChild(red);
    blocks.appendChild(green);
    blocks.appendChild(blue);

    let fragment = makeFragment(shady, blocks);
    document.body.appendChild(fragment);

    //
    //Controls the timing of the logo transitions
    //
    setTimeout(function() {
      red.style.transform = "rotateY(360deg)";
      red.addEventListener("transitionend", function(event) {
        event.stopPropagation();
      });
    }, 10);
    setTimeout(function() {
      green.style.transform = "rotateY(360deg)";
      green.addEventListener("transitionend", function(event) {
        event.stopPropagation();
      });
    }, 260);
    setTimeout(function() {
      blue.style.transform = "rotateY(360deg)";
    }, 740);

    //
    //Removes the transitionend event listeners
    //
    blue.addEventListener("transitionend", function(event) {
      event.stopPropagation();
      shady.style.filter = "opacity(100%)";
    });

    shady.addEventListener("transitionend", function(event) {
      event.stopPropagation();
      document.body.style.filter = "opacity(0%)";
    });

    document.body.addEventListener("transitionend", function toGameIntro(event) {
      document.body.removeEventListener("transitionend", toGameIntro);
      clearElement(document.body);
      titleScreen();
    });
  }

  const optionMenu = function(player) {
    //----------------------------------------------------//
    //Makes the option menu and puts it on the screen     //
    //player-> player: the player data type where the     //
    //option selections are stored                        //
    //----------------------------------------------------//

    let optionBox = makeDiv("optionBox", "textBox");
    //
    //I made this class so I can add new menu options
    //easily if I need them later
    class MenuOption {
      constructor(name) {
        this.name = name;
        this.options = [];
        this.index = 0;
      }

      get language() {
        return this.index;
      }

      set language(index) {
        this.index = index;
      }

      appendTo(target) {

        function optionLeft(obj, option) {
          obj.index--;
          if (obj.index < 0) {
            obj.index = obj.options.length - 1;
          }
          option.textContent = obj.options[obj.index];
        }

        function optionRight(obj, option) {
          obj.index++;
          if (obj.index >= obj.options.length) {
            obj.index = 0;
          }
          option.textContent = obj.options[obj.index];
        }
        let obj = this;

        let menuBox = makeDiv("", "menuBox");
          menuBox.textContent = this.name;
          let left = makeDiv("", "optionButton");
            left.onclick = function() {
              optionLeft(obj, option);
            };
            left.textContent = "<";
          let option = makeDiv("", "optionWindow");
            option.textContent = this.options[this.index];
          let right = makeDiv("", "optionButton");
            right.onclick = function() {
              optionRight(obj, option);
            };
            right.textContent = ">";
          let fragment = makeFragment(left, option, right);
        menuBox.appendChild(fragment);
        target.appendChild(menuBox);

        setTimeout(function() {
          document.onkeyup = function(e) {
            if (e.keyCode === 13) {
              document.onkeyup = null;
              fetch(languageFiles[languageBox.index])
                .then(function(response) {
                  return response.json();
                })
                .then(function(myJson) {
                  textData = myJson;
                  player.language = languageBox.language;
                  playArea.removeChild(optionBox);
                  clearElement(playArea);
                  titleScreen();
                });
            }else if (e.keyCode === 37) {
              optionLeft(obj, option);
            } else if (e.keyCode === 39) {
              optionRight(obj, option);
            }
          }
        }, 200);
      }

    }

    //
    //Makes the menu item to select languages
    //
    let languageBox = new MenuOption(textData.language);
    languageBox.language = player.language;
    languageBox.options = ["English", "Español"];
    languageBox.appendTo(optionBox);
    let languageFiles = ["./gameStartTextEnglish.json", "./gameStartTextSpanish.json"]

    insertLineBreak(optionBox);

    //
    //Makes the close button and sets its actions
    //
    let closeBox = makeDiv("closeBox");
      let closeButton = makeDiv("closeButton", "optionButton");
        closeButton.textContent = textData.close;
        closeButton.onclick = function() {
          //
          //This fetch pulls up the language JSON file so
          //it can be switched when the option box closes
          fetch(languageFiles[languageBox.index])
            .then(function(response) {
              return response.json();
            })
            .then(function(myJson) {
              textData = myJson;
              player.language = languageBox.language;
              playArea.removeChild(optionBox);
              clearElement(playArea);
              titleScreen();
            });

        }

    closeBox.appendChild(closeButton);
    optionBox.appendChild(closeBox);

    playArea.insertBefore(optionBox, titleDiv);
  }

  const titleScreen = function() {
    //----------------------------------------------------//
    //Makes the title screen with the buttons:            //
    //New Game: calls the enterName() function            //
    //Continue: currently calls the test() function       //
    //Options: calls the optionMenu() function            //
    //----------------------------------------------------//

    function titleScreenButton(id, name, tab, callback) {
      //----------------------------------------------------//
      //Makes the buttons for the title screen              //
      //string-> id: id of the button                       //
      //string-> name: text for the button                  //
      //integer-> tab: tab index of the button              //
      //function-> callback: function called when the       //
      //button is clicked                                   //
      //----------------------------------------------------//

      let div = makeDiv(id, "startbuttons");
      div.tabIndex = tab;
      div.onclick = function() {
        div.onclick = null;
        callback();
      };
      insertTextNode(div, name);
      return div;
    }

    document.body.appendChild(playArea);

    let titleDiv = makeDiv("titleDiv");
      titleDiv.textContent = "Mathemagicus";
    let fragment = document.createDocumentFragment();
      fragment.appendChild(titleDiv);

    //
    //Puts the three menu options on the screen
    //
    let newGame = titleScreenButton("newGame", textData.newGame, "1", function() {
      document.onkeyup = null;
      clearInterval(options);
      enterName();
    });
      fragment.appendChild(newGame);
    if (window.localStorage.getItem("save") === "true") {
      let cont = titleScreenButton("continue", textData.continue, "2", function() {
        document.onkeyup = null;     1
        clearInterval(options);
        //test();
        continueGame();
      });
        fragment.appendChild(cont);
    }
    let options = titleScreenButton("options", "Options", "3", function() {
      let buttons = document.getElementsByClassName("startbuttons");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = null;
      }
      optionMenu(player);
    });
      fragment.appendChild(options);
    let controls = titleScreenButton("controls", "?", "4", function() {
      document.onkeyup = null;
      clearInterval(options);
      controlTutorial();
    })
      fragment.appendChild(controls);

    //
    //Changes the language of the menu item "option"
    //
    let optionArray = ["Options", "Opciones", "Options", "Optionen"];
    let optionIndex = 0;
    let optionChange = setInterval(function() {
      optionIndex++;
      options.textContent = optionArray[optionIndex % optionArray.length];
    }, 2000);

    playArea.appendChild(fragment);
    newGame.focus();

    let buttons = document.getElementsByClassName("startbuttons");

    let startIndex = new ArrayIndex(0, buttons.length);
    let startOptions = {};
    for (let i = 0; i < buttons.length; i++) {
      startOptions[i] = buttons[i];
    }

    setTimeout(function() {
      document.onkeyup = function(event) {
        if (event.key === "Enter") {
          document.onkeyup = null;
          clearInterval(options);
          startOptions[startIndex.now].onclick();
        } else if (event.key === "ArrowUp") {         //up
          startOptions[startIndex.sub(1)].focus();
        } else if (event.key === "ArrowDown") {  //down
          startOptions[startIndex.add(1)].focus();
        } else if (event.key === "Escape") {
          test();
        }
      }
    }, 200);

    document.body.style.filter = "opacity(100%)";
  }

  const controlTutorial = function() {

    let divs = playArea.childNodes;
    for (let i = divs.length - 1; i >= 0; i--) {
      removeElement(divs[i].id);
    }

    let tutorialTextDiv = makeDiv("tutorialTextDiv", "textBox");
    let tutorialText = [
      "Use the arrow keys to navigate menus.",
      parseMath("Press _kbEnterkb_ to make a selection or advance through text."),
      parseMath("Use the _kbSpace Barkb_ to _oSkipo_ text when available."),
      parseMath("_kbEsckb_ returns you to the previous screen."),
      "And other than number input, you can always use the mouse to make your selections "+
          "and navigate the menus."
    ];

    playArea.appendChild(tutorialTextDiv);
    showText(tutorialTextDiv, tutorialText, function() {
      removeElement("tutorialTextDiv")
      titleScreen();
    });
  }

  const enterName = function() {
    //----------------------------------------------------//
    //Makes the prompt for the player to enter their name //
    //----------------------------------------------------//

    let buttons = document.getElementsByClassName("startbuttons");
    for (let i = 0; i < buttons.length; i++) {
      fadeOutElement(buttons[i].id);
    }
    if (document.getElementById("titleDiv")) {fadeOutElement("titleDiv")}

    //
    //Displays the "Enter your name" prompt
    let enterNameDiv = makeDiv("enterNameDiv", "clearBox");
      enterNameDiv.style.filter = "opacity(0%)";
      enterNameDiv.textContent = textData.enterName;
      insertLineBreak(enterNameDiv);

    //
    //Displays the text input box and next button
    let nameTextBox = document.createElement("input");
      nameTextBox.type = "text";
      nameTextBox.id = "nameTextBox";
    enterNameDiv.appendChild(nameTextBox);
      insertLineBreak(enterNameDiv);

    let next = makeDiv("next", "startButtons");
      next.onclick = function() {
      next.onclick = null;
      window.localStorage.clear();
      chooseCharacter();
    }
      next.textContent = textData.next;

    let back = makeDiv("back");
      back.onclick = function() {
        document.onkeyup = null;
        clearElement(playArea);
        titleScreen();
      };
      back.textContent = textData.back;

    let fragment = makeFragment(enterNameDiv, next, back);

    preloadImages(["Tellah.gif", "./mages/mage0.gif"]);

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
      document.onkeyup = function(event) {
        if (event.key === "Enter") {
          document.onkeyup = null;
          chooseCharacter();
        } else if (event.key === "Escape") {
          document.onkeyup = null;
          back.click();
        };
      }
    }, 100);
  }

  const chooseCharacter = function() {
    //----------------------------------------------------//
    //Makes the character select screen for the player    //
    //----------------------------------------------------//

    function saveCharacterData(imgData) {
      //----------------------------------------------------//
      //The callback function sent to menuMaker()           //
      //It pulls the information about which sprite to      //
      //use to represent the player                         //
      //object-> imgData: holds all of the path information //
      //for the player sprites                              //
      //----------------------------------------------------//

      player.sprites.path = imgData.path;
      player.sprites.files = imgData.sprites[imgData.index];
      //
      //Removes elements used for character selection before
      //moving to the townIntro screen
      clearMenu(avatarMenuSelectors);
      document.onkeyup = null;

      storyIntro();
    }

    const checkKey = function(event) {
      if (event.key === "Escape") {
        document.onkeyup = null;
        document.removeEventListener("keyup", checkKey);
        clearElement(playArea);
        enterName();
      }
    }

    //
    //Saves the player's name
    //
    player.name = document.getElementById("nameTextBox").value

    clearElement(playArea);
    //removeElement("titleDiv", "enterNameDiv", "next");

    let tellahDiv = makeCameoDiv("Tellah.gif");

    let introTextDiv = makeDiv("introTextDiv", "textBox");

    //
    //Object with data for the menu maker
    //
    let avatarMenuSelectors = new MenuSelector(1, textData.mageText);

    //
    //This object holds the information for accessing the mage sprites
    //
    let mageData = {
      sprites: [
        ["mage0.gif", "mage0fight.gif", "mage0hurt.gif", "mage0dead.gif", textData.mageName[0]],
        ["mage1.gif", "mage1fight.gif", "mage1hurt.gif", "mage1dead.gif", textData.mageName[1]],
        ["mage2.gif", "mage2fight.gif", "mage2hurt.gif", "mage2dead.gif", textData.mageName[2]],
        ["mage3.gif", "mage3fight.gif", "mage3hurt.gif", "mage3dead.gif", textData.mageName[3]],
        ["mage4.gif", "mage4fight.gif", "mage4hurt.gif", "mage4dead.gif", textData.mageName[4]],
        ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif", textData.mageName[5]],
        ["mage6.gif", "mage6fight.gif", "mage6hurt.gif", "mage6dead.gif", textData.mageName[6]]
      ],
      path: "./mages/",
      index: 0
    };

    preloadMenu(mageData);

    let introText = textData.chooseCharacter1 + player.name + textData.chooseCharacter2;
    introTextDiv.textContent = introText;

    let back = makeDiv("back");
      back.textContent = textData.back;
      back.onclick = function() {
        document.onkeyup = null;
        clearElement(playArea);
        enterName();
      };

    document.addEventListener("keyup", checkKey);



    let fragment = makeFragment(tellahDiv, introTextDiv, back);
    playArea.appendChild(fragment);
    menuMaker(avatarMenuSelectors, mageData, saveCharacterData);
  }

  const storyIntro = function() {
    //----------------------------------------------------//
    //Establishes the basic "plot" of the game            //
    //----------------------------------------------------//

    const introTextDiv = document.getElementById("introTextDiv");

    removeElement("back");

    //
    //a button that lets the player skip the game intro
    let skipDiv = makeSkipButton(overworld, player);
    playArea.appendChild(skipDiv);

    let introText = [
      textData.introPart1,
      textData.introPart2,
      textData.introPart3,
      textData.introPart4,
      textData.introPart5
    ];
    showText(introTextDiv, introText, function() {
      preloadImages(["./doors/additionDoorClosed.gif"]);
      overworld(player);
    });
  }

  player = new Player();

  const playArea = makeDiv("playArea");

  //
  //This loads the English language file into
  //the game as the default language
  //
  fetch("./gameStartTextEnglish.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      textData = myJson;
      titleScreen();
      //shadycrzy()
    });
}

function overworld(player) {
  //----------------------------------------------------//
  //Handles the stuff that's not fighting monsters like //
  //choosing a catacomb, the mage guild, and the liber  //
  //Mathemagicus book                                   //
  //----------------------------------------------------//

  function launchOverworldMenu(selectors, imgData, callback, index = 0) {
    //----------------------------------------------------//
    //Makes sure the correct sprites display when the     //
    //  player uses the overworld menu                    //
    //MenuSelector-> selector: the class and id info      //
    //  for the elements in the menu                      //
    //object-> imgData: contains the info for where       //
    //  to find the image assets to load                  //
    //function-> callback: called whenever a menu item    //
    //  is clicked                                        //
    //----------------------------------------------------//

    const finalCatacomb = function() {
      const tellahDiv = makeCameoDiv("Tellah.gif");
      const finalTextDiv = makeDiv("finalTextDiv", "textBox");

      let finalText = [
        `${player.name}! I'm so glad you're here`,
        `The ground started rumbling a little while ago and we found a new catacomb.`,
        `We've sent five wizards to investigate the new catacomb but none of them have returned.`,
        `Please go down to investigate. If anyone can conquer this catacomb it's you.`
      ];

      let fragment = makeFragment(tellahDiv, finalTextDiv);
      playArea.appendChild(fragment);

      showText(finalTextDiv, finalText, function() {
        removeElement("cameo", "finalTextDiv");
        menuMaker(selectors, imgData, callback, index);
      });
    }

    const lastDialog = function() {
      const tellahDiv = makeCameoDiv("Tellah.gif");
      const lastTextDiv = makeDiv("finalTextDiv", "textBox");

      let lastText = [
        `Thank goodness you made it back, ${player.name}!`,
        `I knew if anyone could do it, it was you.`,
        `Thanks to your hard work, the people of Arithmeticia can live in peace.`,
      ];

      let fragment = makeFragment(tellahDiv, lastTextDiv);
      playArea.appendChild(fragment);

      showText(lastTextDiv, lastText, function() {
        removeElement("cameo", "finalTextDiv");
        menuMaker(selectors, imgData, callback, index);
      });
    }

    if (player.addition.level) menuData.sprites[0][0] = "additionDoorOpen.gif";
    if (player.subtraction.level) menuData.sprites[1][0] = "subtractionDoorOpen.gif";
    if (player.multiplication.level) menuData.sprites[2][0] = "multiplicationDoorOpen.gif";
    if (player.division.level) menuData.sprites[3][0] = "divisionDoorOpen.gif";
    if (player.hasNotifications) {
      postNotifications();
    }

    if (player.totalLevel === 44 && !player.triggers.finalBoss) {
      menuData.sprites.splice(6, 0, ["finalDoor.gif", "Hidden Catacombs"]);
      index = 6;
      finalCatacomb();
    } else if (player.triggers.finalBoss && !player.triggers.gameBeat) {
      player.triggers.gameBeat = true;
      lastDialog();
    } else {
      menuMaker(selectors, imgData, callback, index);
    }
  }

  function menuSelection(imgData) {
    //----------------------------------------------------//
    //Controls what happens when a menu item is clicked   //
    //object-> imgData: contains the information about    //
    //which image was clicked                             //
    //----------------------------------------------------//

    document.onkeyup = null;
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
        fetch("./monsterData.json")
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            monsterData = myJson;
            liberMathemagicus(monsterData);
          });
        break;
      case 6:     //Hidden Catacomb
        fetch("./monsterData.json")
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            monsterData = myJson;
            catacombs(player, "?", 0, 11, monsterData)
          });
        break;
    }
  }

  function postNotifications() {
    //----------------------------------------------------//
    //Checks to see if the player has any notifications,  //
    //and if so, displays them at the top of the screen   //
    //----------------------------------------------------//

    const checkKey = function(event) {
      if (event.code === "Enter" && alertVisible) {
        document.removeEventListener("keyup", checkKey);
        mageGuild();
      }
      if (event.key === "ArrowUp") {
        alertVisible = true;
        notificationContent.style.display = "block";
      } else {
        alertVisible = false
        notificationContent.style = "";
      }
    }

    let notification = makeDiv("notification");
      notification.textContent = "New Notifications";
      notification.onclick = function() {
        document.removeEventListener("keyup", checkKey);
        mageGuild();
      }

    let notificationContent = makeDiv("notificationContent");

    for (let i = 0; i < Object.keys(player.notification).length; i++) {
      if (Object.values(player.notification)[i]) {
        insertTextNode(notificationContent, Object.values(player.notification)[i]);
        insertLineBreak(notificationContent);
      }
    }

    notification.appendChild(notificationContent);
    playArea.appendChild(notification);
    document.addEventListener("keyup", checkKey);
    let alertVisible = false;
  }

  function dungeonLevelMenu(level, operation) {
    //----------------------------------------------------//
    //Makes the sub-menu the player sees before entering  //
    //the catacombs.                                      //
    //integer-> level: is the player's level in the       //
    //selected math operation                             //
    //string-> operation: a string of the operation       //
    //ie "addition" or "subtraction"                      //
    //----------------------------------------------------//

    const doors = {
      //----------------------------------------------------//
      //Object w/ paths to the door sprites                 //
      //----------------------------------------------------//

      "addition": menuData.path + menuData.sprites[0][0],
      "subtraction": menuData.path + menuData.sprites[1][0],
      "multiplication": menuData.path + menuData.sprites[2][0],
      "division": menuData.path + menuData.sprites[3][0]
    }

    function clickTimerButton(newSelection) {
      //----------------------------------------------------//
      //Handles the logic of what happens when the timer    //
      //buttons are clicked                                 //
      //string-> newSelection: id of the clicked button     //
      //----------------------------------------------------//

      let newButton = document.getElementById(selectedTimerButton);
      newButton.classList.remove("timerButtonClicked");
      newButton = document.getElementById(newSelection);
      newButton.classList.add("timerButtonClicked");
      selectedTimerButton = newSelection;
      clearElement(timerSelectBox);
      switch(newSelection) {
        case 0:
          timerSelectBox.textContent = "No Timer";
          break;
        case 1:
          timerSelectBox.textContent = "Slow Timer";
          break;
        case 2:
          timerSelectBox.textContent = "Normal Timer";
          break;
        case 3:
          timerSelectBox.textContent = "Fast Timer";
          break;
      }
    }

    function checkLevelButton(newSelection) {
      //----------------------------------------------------//
      //Changes the behavior of the level buttons so they   //
      //behave more like radio buttons                      //
      //string-> newSelection: part of the id of the        //
      //clicked button                                      //
      //----------------------------------------------------//

      let newButton = document.getElementById("level" + selectedLevelButton);
      newButton.classList.remove("levelButtonClicked");
      newButton = document.getElementById("level" + newSelection);
      newButton.classList.add("levelButtonClicked");
      selectedLevelButton = newSelection;
    }

    function enterCatacombs() {
      //----------------------------------------------------//
      //Loads the monsterData JSON file into a variable     //
      //then launches the catacomb() function               //
      //----------------------------------------------------//

      document.onkeyup = null;
      fetch("./monsterData.json")
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          monsterData = myJson;
          catacombs(player, operation, selectedTimerButton, selectedLevelButton, monsterData);
        });
    }

    let fragment = document.createDocumentFragment();
    document.onkeyup = null;

    //
    //Makes the button to return to the
    //previous menu
    //
    let returnToMenu = makeButton(returnToDungeonMenu, "Return to Menu", "menuReturnButton", "buttonHover");
    fragment.appendChild(returnToMenu);

    //
    //Makes the <div> into which the timer
    //select buttons are put
    //
    let timerSelectBox = makeDiv("timerSelectBox", "textBox");
    timerSelectBox.textContent = "No Timer";
    fragment.appendChild(timerSelectBox);

    //
    //Makes the buttons to select the timer level
    //
    let timerSelectDiv = makeDiv("timerSelectDiv");
    let selectedTimerButton = 0;
    for (let i = 0; i < 4; i++) {
      let button = makeButton(function() {
        clickTimerButton(i);
      }, "", i, "timerSelectButtons");
      timerSelectDiv.appendChild(button);
    }
    fragment.appendChild(timerSelectDiv);

    //
    //Makes and styles the buttons to select the
    //dungeon level
    //
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

    //
    //Makes the <img> for the dungeon entrance
    //
    let dungeonImg = makeImg(doors[operation], "dungeonSelectImg");
    if (level) {
      dungeonImg.onclick = enterCatacombs;
      dungeonImg.classList.add("largeMenuHover");
    }

    fragment.appendChild(dungeonImg);

    fadeTransition(fragment, playArea, 500, function() {
      let selectedButton = document.getElementById("0");
      selectedButton.classList.add("timerButtonClicked");
      if (level > 0) {
        let levelButton = document.getElementById("level1");
        levelButton.classList.add("levelButtonClicked");
      }
    });

    let timerIndex = new ArrayIndex(0, 4);
    let levelIndex = new ArrayIndex(0, level);

    setTimeout(function() {
      document.onkeyup = function(e) {
        if (e.keyCode === 13) {     //Enter key
          if (level) {
            document.onkeyup = null;
            enterCatacombs();
          }
        }
        if (e.keyCode === 27) {     //ESC Button
          document.onkeyup = null;
          returnToDungeonMenu()
        }
        if (e.keyCode === 37) {     //Left Arrow
          clickTimerButton(timerIndex.sub(1));
        }
        if (e.keyCode === 38) {     //Up Arrow
          if (level) {
            checkLevelButton(levelIndex.sub(1) + 1);
          }
        }
        if (e.keyCode === 39) {     //Right Arrow
          clickTimerButton(timerIndex.add(1));
        }
        if (e.keyCode === 40) {     //Down Arrow
          if (level) {
            checkLevelButton(levelIndex.add(1) + 1);
          }
        }
      }
    },1000)
  }

  function returnToDungeonMenu() {
    //----------------------------------------------------//
    //Returns the player to the overworld menu from       //
    //the sub-menu                                        //
    //----------------------------------------------------//

    fadeTransition(null, playArea, 500, function() {
      launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection, menuData.index);
    });
  }

  function mageGuild(menuIndex = 0) {
    //----------------------------------------------------//
    //Where the player can learn new spells and get keys  //
    //to new levels of the catacombs                      //
    //----------------------------------------------------//

    function removeNotification(index) {
      //----------------------------------------------------//
      //
      //----------------------------------------------------//

      let key = Object.keys(player.notification)[index]
      player.notification[key] = false;
    }

    function guildMenuSelection(imgData) {
      //----------------------------------------------------//
      //Calls the correct function when the player selects  //
      //a menu item                                         //
      //----------------------------------------------------//

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
      //----------------------------------------------------//
      //Makes the menu for the player to select the spell   //
      //they want to learn and holds the functions          //
      //associated with learning those spells               //
      //----------------------------------------------------//

      const yesNoBox = function(yesButton) {
        //----------------------------------------------------//
        //Makes the "yes/no" buttons when the player is asked //
        //if they want to learn the spell                     //
        //----------------------------------------------------//

        clearElement(guildTextDiv);
        spellMenu.style.filter = "opacity(0%)";
        let text = "To earn this spell, you must prove your worthiness. " +
                            "Are you ready? "
        guildTextDiv.textContent = text;
        insertButton(guildTextDiv, "No", function() {
          clearElement(guildTextDiv);
          mageGuild(2);
          guildTextDiv.textContent = introText;
        }, "no", "yesNoButtons");
        insertTextNode(guildTextDiv, " ");
        insertButton(guildTextDiv, "Yes!", yesButton, "yes", "yesNoButtons");

        setTimeout(function() {
          let no = document.getElementById("no");
          let yes = document.getElementById("yes");
          document.onkeyup = function(e) {
            if (e.keyCode === 37 || e.keyCode === 39) {
              let active = document.activeElement;
              if (active.id === "no") {
                yes.focus();
              } else {
                no.focus();
              }
            }
          }
        }, 200);
      }
      //
      //CLEAN UP/REFACTOR
      const checkKey = function(answer, spell, count, challenge) {
        //----------------------------------------------------//
        //a very complicated check key function...            //
        //----------------------------------------------------//

        setTimeout(function() {
          document.onkeyup = function(event) {
            if (event.key === "Enter") {
              checkAnswer(answer, spell, count, challenge);
            }
          }
        }, 200);
      }

      function victory(spellName) {
        //----------------------------------------------------//
        //What happens when the player completes the challenge//
        //for the spell                                       //
        //returns true to set the value of the spell variable //
        //to learned                                          //
        //----------------------------------------------------//

        function victorySpeech() {
          //----------------------------------------------------//
          //Executes after the screen flashes a few times, puts //
          //some words on the screen and a button to return to  //
          //the mage guild sub menu                             //
          //----------------------------------------------------//

          clearElement(challengeDiv);

          let victoryText = [`Well done, ${player.name}! I knew you could do it! You've definitely earned ${spellName}.`];
          showText(challengeDiv, victoryText, function() {
            mageGuild(2)
          }, "Return to Guild")
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

        let praise = [
          "Nice!",
          "Good job!",
          "Awesome!",
          "Well done!",
          "Good work!"
        ];

        let answerInput = document.getElementById("answerInput");
        if (parseInt(answerInput.value) === answer) {
          if (count < 10) {
            document.onkeyup = null;
            challengeDiv.textContent = praise[getRandomNumber(0, praise.length - 1)];
            setTimeout(function() {
              challenge(count);
            }, 700);
          } else {
            spell.available = false;
            spell.learned = victory(spell.name);
            if (player.triggers.firstSpell === null) {
              player.triggers.firstSpell = true;
            }
            removeNotification(spell.notificationIndex);
          }
        } else {
          let text = challengeDiv.innerHTML;
          if (text.charAt(text.length - 1) === "!") {removeLastChild(challengeDiv, 3);}
          insertLineBreak(challengeDiv, 2);

          insertTextNode(challengeDiv, `Oh no! ${answerInput.value} didn't work!`);
          answerInput.value = null;
        }
      }

      function learnDecomposition() {
        //----------------------------------------------------//
        //Fibonacci Spell                                     //
        //----------------------------------------------------//

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);
            let addend1 = getRandomNumber(6, 9);
            let addend2 = getRandomNumber(6, 9);
            let sum = addend1 + addend2;

            let ex1part2 = 10 - addend2;
            let ex1part1 = addend1 - ex1part2;

            let ex2part1 = 10 - addend1;
            let ex2part2 = addend2 - ex2part1;

            let ansInput = `<input type="number" id="answerInput"></input>`;

            let problem = `_o${addend1}o_ + _g${addend2}g_ = ?
                          <br /><br />
                          _o${ex1part1}o_ + (_o${ex1part2}o_ + _g${addend2}g_) = ?
                          <br /><br />
                          (_o${addend1}o_ + _g${ex2part1}g_) + _g${ex2part2}g_ = ${ansInput}`;

            checkKey(sum, player.spells.fibonacci, count, challenge);

            challengeDiv.innerHTML = parseMath(problem).slice(6);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "In an addition problem, it doesn't matter what order the numbers are in.",
            "We can use Decomposition to take apart and rearrange numbers to find easier sums.",
            parseMath("_r8r_ + 5 = 5 + _r8r_<br /> ↓ <br />" +
                      "(_r5r_ + _r3r_) + 5<br /> ↓ <br />" +
                      "_o(o_5 + _r5r__o)o_ + _r3r_<br /> ↓ <br />" +
                      "_o10o_ + 3<br /> ↓ <br />" +
                      "13"),
            "We can also take apart numbers to add together the place values:",
            parseMath("_r22r_ + 16<br /> ↓ <br />" +
                      "_o(o__r20r_ + 10_o)o_ + _g(g__r2r_ + 6_g)g_<br /> ↓ <br />" +
                      "_o30o_ + _g8g_<br /> ↓ <br />" +
                      "38"),
            "To earn this spell you must answer 10 problems using " +
                "the Associative Property."
          ];

          fadeTransition(challengeDiv, playArea);

          showText(challengeDiv, challengeText, challenge, "Begin");
        }

        yesNoBox(beginChallenge);
      }

      function learnLeftDistribution() {

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);
            let mult1 = getRandomNumber(3, 7);
            let mult2 = getRandomNumber(4, 7);
            let product = mult1 * mult2;
            let part1 = (mult2 % 0) ? (mult2 / 2):(mult2 - 2);
            let part2 = mult2 - part1;

            let problem = parseMath(`${mult1} × _r${mult2}r_ = ?
                          <br /><br />
                          ${mult1} × (_r${part1}r_ + _r${part2}r_) = ?
                          <br /><br />
                          (${mult1} × _r${part1}r_) + (${mult1} × _r${part2}r_) = ${ansInput}`).slice(6);

            checkKey(product, player.spells.euler, count, challenge);

            challengeDiv.innerHTML = problem;
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "This spell will upgrade your Fibonacci Spell to work in the Multiplication Catacombs.",
            "/HTML/The only way to survive the deeper levels of the catacombs is by mastering " +
                "the Distributive Property:<br /><br />a × (b + c)<br /> ↓ <br />(a × b) + (a × c)",
            parseMath("At the simplest level it looks like this: <br /><br />" +
                      "6 × _r2r_<br /> ↓ <br />" +
                      "6 × (_r1r_ + _r1r_)<br /> ↓ <br />" +
                      "_b(b_6 × _r1r__b)b_ + _g(g_6 × _r1r__g)g_<br /> ↓ <br />" +
                      "_b6b_ + _g6g_<br /> ↓ <br />" +
                      "12"),
            "By breaking up one of the terms in our problem, we can create smaller, " +
                "easier problems to solve.",
            parseMath("It works just as well with larger numbers: <br /><br />" +
                      "8 × _r7r_<br /> ↓ <br />" +
                      "8 × (_r5r_ + _r2r_)<br /> ↓ <br />" +
                      "_b(b_8 × _r5r__b)b_ + _o(o_8 × _r2r__o)o_<br /> ↓ <br />" +
                      "_b40b_ + _o16o_<br /> ↓ <br />" +
                      "56"),
            parseMath("This is especially useful for numbers larger than 10: <br /><br />" +
                      "_r13r_ × 6<br /> ↓ <br />" +
                      "(_r10r_ + _r3r_) × 6<br /> ↓ <br />" +
                      "_b(b__r10r_ × 6_b)b_ + _o(o__r3r_ × 6_o)o_<br /> ↓ <br />" +
                      "_b60b_ + _o18o_<br /> ↓ <br />" +
                      "78"),
            "To earn this spell you must answer 10 problems using " +
                "the Distributive Property."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnRightDistribution() {

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);
            let quotient = getRandomNumber(6, 9);
            let divisor = getRandomNumber(2, 4);
            let dividend = quotient * divisor;
            let part1 = 5 * divisor;
            let part2 = (quotient - 5) * divisor;

            let problem = parseMath(`_r${dividend}r_ ÷ ${divisor} = ?
                          <br /><br />
                          (_r${part1}r_ + _r${part2}r_) ÷ ${divisor} = ?
                          <br /><br />
                          (_r${part1}r_ ÷ ${divisor}) + (_r${part2}r_ ÷ ${divisor}) = ${ansInput}`).slice(6);

            checkKey(quotient, player.spells.kovalevskaya, count, challenge);

            challengeDiv.innerHTML = problem;
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "This spell will allow you to use the Fibonacci Spell in the Divison Catacombs.",
            "/HTML/To master the Division Catacombs, you must also master this arcane " +
                "spell that lets you break down division problems:<br /><br />" +
                "(a + b) ÷ c<br /> ↓ <br />(a ÷ c) + (b ÷ c)",
            parseMath("At its simplest level it looks like this:<br /><br />" +
                      "_b10b_ ÷ 5<br /> ↓ <br />" +
                      "(_b5b_ + _b5b_) ÷ 5<br /> ↓ <br />" +
                      "_o(o__b5b_ ÷ 5_o)o_ + _r(r__b5b_ ÷ 5_r)r_<br /> ↓ <br />" +
                      "_o1o_ + _r1r_<br /> ↓ <br />" +
                      "2"),
            parseMath("It works just as well for larger numbers:<br /><br />" +
                      "_r36r_ ÷ 4<br /> ↓ <br />" +
                      "(_r20r_ + _r16r_) ÷ 4<br /> ↓ <br />" +
                      "_g(g__r20r_ ÷ 4_g)g_ + _b(b__r16r_ ÷ 4_b)b_<br /> ↓ <br />" +
                      "_g5g_ + _b4b_<br /> ↓ <br />" +
                      "9"),
            "To earn this spell you must answer 10 problems using " +
                "Right Distribution."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnFireball() {

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);

            let answer = 1;
            let addend1 = 0;
            let addend2 = 0;

            problem = ``;

            for (let i = 1; i <= count; i++) {
              addend1 = answer;
              addend2 = i + 1
              answer = addend1 + addend2;
              problem += `_g${i}g_ + `;
            }

            problem += `${count + 1}
                       <br /><br />
                       _g${addend1}g_ + ${addend2} = ${ansInput}`;
            checkKey(answer, player.spells.euclid, count, challenge);

            challengeDiv.innerHTML = parseMath(problem).slice(6);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Euclid's Fireball is powered by Triangle Numbers, numbers that " +
                "can be arranged to form an equilateral triangle.",
            parseMath("<pre>" +
            "    Δ      ← _r1r_          <br />" +
            "   Δ Δ     ← 2 + _r1r_ = _g3g_  <br />" +
            "  Δ Δ Δ    ← 3 + _g3g_ = _b6b_  <br />" +
            " Δ Δ Δ Δ   ← 4 + _b6b_ = _o10o_ <br />" +
            "Δ Δ Δ Δ Δ  ← 5 + _o10o_ = 15<br />" +
            "</pre><br /><br />"),
            "To earn this spell you must answer 10 problems using summation."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnHeal() {

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);

            let addend = count + 1;
            let answer = addend * addend;

            let problem = `${addend}² = ${addend} × ${addend}
                          <br /><br />
                          ${addend}² = ${ansInput}`;

            checkKey(answer, player.spells.hypatia, count, challenge);

            challengeDiv.innerHTML = problem;
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Hypatia's Healing Spell is powered by Square Numbers, numbers that " +
                "are the product of a number times itself.",
            parseMath("<pre>" +
                "  ←_b2b_→          <br />" +
                "↑ ▫ ▫          <br />" +
                "_r2r_     _r2r_ x _b2b_ = 4<br />" +
                "↓ ▫ ▫          <br /></pre>"),
            parseMath("<pre>" +
                "  ←_b3b_→          <br />" +
                "↑ ▫▫▫          <br />" +
                "_r3r_ ▫▫▫ _r3r_ × _b3b_ = 9<br />" +
                "↓ ▫▫▫          <br /></pre>"),
            parseMath("<pre>" +
                "  ←_b4b_ →           <br />" +
                "↑ ▫▫▫▫           <br />" +
                "_r4r_ ▫▫▫▫ _r4r_ × _b4b_ = 16<br />" +
                "  ▫▫▫▫           <br />" +
                "↓ ▫▫▫▫           <br /></pre>"),
            "To earn this spell you must find 10 Square Numbers."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnReduce() {

        function beginChallenge() {

          function challenge(count = 0) {

            count++;

            clearElement(challengeDiv);

            let bigTermTen = getRandomNumber(2, 5) * 10;
            let bigTermOne = getRandomNumber(1, 5);
            let smallTerm = getRandomNumber(bigTermOne + 1, 9);
            let bigTerm = (bigTermTen) + bigTermOne;
            let part1 = smallTerm - bigTermOne;
            let answer = bigTerm - smallTerm;

            let problem = `${bigTerm} - _o${smallTerm}o_ = ?
                      <br /><br />
                      ${bigTerm} - _o${bigTermOne}o_ - _o${part1}o_ = ?
                      <br /><br />
                      (_b${bigTerm}b_ - _b${bigTermOne}b_) - ${part1} = ?
                      <br /><br />
                      _b${bigTermTen}b_ - ${part1} = ?
                      <br /><br />
                      ${bigTerm} - ${smallTerm} = ${ansInput}`;

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.lovelace, count, challenge);
                }
              }
            }, 200);

            challengeDiv.innerHTML = parseMath(problem).slice(6);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Lovelace's Reduction Spell is powered by how much time you spend answering questions.",
            "To earn the Reduction Spell, you must improve your mastery of reducing numbers using decomposition.",
            "Decomposition is when you break a number into smaller parts to make them easier to use.",
            "/HTML/For example: 51 - 6<br /><br />" +
                "We can decompose the 6 into two numbers (1 and 5) and use that to simplify our problem:",
            parseMath("51 - _o6o_<br /> ↓ <br />" +
            "51 - _o1o_ - _o5o_<br /> ↓ <br />" +
            "(_b51b_ - _b1b_) - 5<br /> ↓ <br />" +
            "_b50b_ - 5<br /> ↓ <br />" +
            "45"),
            "Use decomposition to solve this series of subtraction problems."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
          let questions = -10;
          let answers = [];
        }

        yesNoBox(beginChallenge);
      }

      function learnStrength() {

        function beginChallenge() {

          function challenge(count = 0) {

            count++;
            clearElement(challengeDiv);

            let term1 = getRandomNumber(2, 9);
            let term2 = getRandomNumber(7, 9);
            let part1 = 10 - term2;
            let answer = term1 * term2;

            let problem = `${term1} × _b${term2}b_ = ?
                          <br /><br />
                          ${term1} × (_b10b_ - _b${part1}b_) = ?
                          <br /><br />
                          (${term1} × _b10b_) - (${term1} × _b${part1}b_) = ?
                          <br /><br />
                          ${term1} × ${term2} = ${ansInput}`;

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.noether, count, challenge);
                }
              }
            }, 200);

            challengeDiv.innerHTML = parseMath(problem).slice(6);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Noether's Strength Spell is powered by how much damage you take.",
            "To earn it, you need to strengthen your knowledge of the Distributive Property.",
            "/HTML/Hopefully you remember this:<br /><br />" +
                "a × (b + c)<br /> ↓ <br />" +
                "(a × b) + (a × c)",
            "/HTML/The Distributive Property also works with subtraction:<br /><br />" +
                "a × (b - c)<br /> ↓ <br />" +
                "(a × b) - (a × c)",
            parseMath("To put it simply:<br /><br />" +
                      "2 × _b9b_<br /> ↓ <br />" +
                      "2 × (_b10b_ - _b1b_)<br /> ↓ <br />" +
                      "_g(g_2 × _b10b__g)g_ - _o(o_2 × _b1b__o)o_<br /> ↓ <br />" +
                      "_g20g_ - _o2o_<br /> ↓ <br />" +
                      "18"),
            "Answer 10 questions using the Distributive Property to earn this spell."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnStopTime() {

        function beginChallenge() {

          function challenge(count = 0) {

            count++;
            clearElement(challengeDiv);

            let bigTermTen = getRandomNumber(3, 6);
            let bigTermOne = getRandomNumber(6, 9);
            let smallTermTen = getRandomNumber(1, bigTermTen - 1);
            let smallTermOne = getRandomNumber(1, bigTermOne);
            let bigTerm = (bigTermTen * 10) + bigTermOne;
            let smallTerm = (smallTermTen * 10) + smallTermOne;
            let part = 10 - bigTermOne;
            let answer = bigTerm + smallTerm;

            let problem = `${bigTerm} + ${smallTerm} = ?
                          <br /><br />
                          (${bigTerm} + _b${part}b_) + ${smallTerm} - _b${part}b_ = ?
                          <br /><br />
                          ${bigTerm + part} + ${smallTerm} - _b${part}b_ = ?
                          <br /><br />
                          ${bigTerm} + ${smallTerm} = ${ansInput}`;

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.huygens, count, challenge);
                }
              }
            }, 200);

            challengeDiv.innerHTML = parseMath(problem).slice(6);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Huygens' Stop Time Spell is powered by answering questions quickly.",
            "To earn this spell you must improve your mastery of Compensation.",
            "Compensation works by adding a number into your equation to make it easier to solve, " +
                "then taking it out at the end.",
            parseMath("For example:<br /><br />" +
                      "36 + 14<br /> ↓ <br />" +
                      "(36 + _b4b_) + 14 - _b4b_<br /> ↓ <br />" +
                      "40 + 14 - 4<br /> ↓ <br />" +
                      "54 - 4<br /> ↓ <br />" +
                      "50"),
            "/HTML/This works because by adding 4 and subtracting 4 from our equation, we are adding " +
                "0 to our problem:<br /><br />" +
                "4 - 4 = 0.",
            "Solve 10 problems using Compensation to earn the Stop Time Spell."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnPolymorph() {

        function beginChallenge() {

          function challenge(count = 0) {

            count++;
            clearElement(challengeDiv);

            let bigTermTen = getRandomNumber(2, 5);
            let bigTermOne = getRandomNumber(1, 4);
            let smallTermTen = getRandomNumber(1, bigTermTen - 1);
            let smallTermOne = getRandomNumber(bigTermOne, 9);
            let bigTerm = (bigTermTen * 10) + bigTermOne;
            let smallTerm = (smallTermTen * 10) + smallTermOne;
            let answer = bigTerm + smallTerm;

            let problem = `${bigTerm} + ${smallTerm} = ?
                          ${dblBreak}
                          ${bigTerm} - _b${bigTermOne}b_ + ${smallTerm} + _b${bigTermOne}b_ = ?
                          ${dblBreak}
                          ${bigTermTen * 10} + ${smallTerm} + _b${bigTermOne}b_ = ${ansInput}`

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.fermat, count, challenge);
                }
              }
            }, 200);

            challengeDiv.innerHTML = parseMath(problem).slice(6);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Fermat's Polymorph Monster spell is powered by mirror numbers: numbers that are the same " +
                "forwards and backwards like 55 or 121.",
            "To earn Fermat's Polymorph Monster spell, you must improve your mastery of Compensation.",
            "Compensation is the idea that we can change a number by a little bit now, to make " +
                "our math easier, but we have to change it back when we're done.",
            "For example:<br /><br />" +
                "32 + 15<br /><br />" +
                "We can take away 2 from 32 (32 - 2) to make our problem easier," +
                "but we have to add it back in when we're done with the problem.",
            parseMath("32 + 15<br /> ↓ <br />" +
                      "32 - _o2o_ + 15 + _o2o_<br /> ↓ <br />" +
                      "_b(b_32 - _o2o__b)b_ + 15 + _o2o_<br /> ↓ <br />" +
                      "_b30b_ + 15 + _o2o_<br /> ↓ <br />" +
                      "45 + _o2o_<br /> ↓ <br />" +
                      "47"),
            "To earn this spell, you must answer 10 questions using Compensation."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        yesNoBox(beginChallenge);
      }

      function learnNova() {

        function beginChallenge() {

          function challenge(count = 0) {

            count++;
            console.log(count);
            clearElement(challengeDiv);
            answer = Math.pow(2, count + 1);
            problem = ``;

            for (let i = 0; i < count; i++) {
              problem += `2 × `;
            }
            problem += `2 = ?`

            problem += `<br /><br />
                       2<sup>${count + 1}</sup> = ${ansInput}`;

            setTimeout(function() {
              document.onkeyup = function(e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                  checkAnswer(answer, player.spells.brahe, count, challenge);
                }
              }
            }, 200);

            challengeDiv.innerHTML = problem;
            challengeDiv.appendChild(fragment);
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Brahe's Nova Spell is powered by powers of 2",
            "2² = 2 × 2 = 4",
            "2³ = 2 × 2 × 2 = 8",
            "2⁴ = 2 × 2 × 2 × 2 = 16",
            "Earn this spell by finding powers of 2."
          ]

          fadeTransition(challengeDiv, playArea);

          showText(challengeDiv, challengeText, challenge, "Begin");
        }

        yesNoBox(beginChallenge);
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
            learnDecomposition();
            break;
          case 1:     //Euclid's Fireball Spell
            learnFireball();
            break;
          case 2:     //Hypatia's Healing Spell
            learnHeal();
            break;
          case 3:     //Lovelace's Reduction Spell
            learnReduce();
            break;
          case 4:     //Huygen's Stop-time Spell
            learnStopTime();
            break;
          case 5:     //Fermat's Polymorph Monster Spell
            learnPolymorph();
            break;
          case 6:     //Noether's Strength Spell
            learnStrength();
            break;
          case 7:     //Brahe's Nova Spell
            learnNova();
            break;
          case 8:     //Euler's Left Distributive Spell
            learnLeftDistribution();
            break;
          case 9:     //Euler's Right Distributive Spell
            learnRightDistribution();
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
      menuItem.onclick = function() {
        mageGuild(2);
      }
      insertTextNode(menuItem, "Return to Guild");
      spellMenu.appendChild(menuItem);

      let spellText = `Which spell would you like to learn ${player.name}?`;

      if (spellMenu.childNodes.length === 1) {
        spellText = "It doesn't look like there are any spells you can learn " +
                    "right now.";
      }

      playArea.appendChild(spellMenu);
      spellMenu.focus();

      clearElement(guildTextDiv);
      insertTextNode(guildTextDiv, spellText);
      setTimeout(function() {
        spellMenu.style.filter = "opacity(100%)";
        spellMenu.firstChild.focus();
      }, 10);

      number = 0;

      document.onkeyup = function(e) {

        if (e.keyCode === 13) {     //Enter key
          selectSpell(spellMenu.children[number].id);
        }
        if (e.keyCode === 38) {     //Up Arrow
          event.preventDefault();
          menuUp();
        }
        if (e.keyCode === 40) {     //Down Arrow
          event.preventDefault();
          menuDown();
        }
      }
    }

    function catacombKeys() {
      //----------------------------------------------------//
      //Makes the menu for the player to select the key     //
      //they want to earn                                   //
      //----------------------------------------------------//

      let subtractionClick = function() {}
      let multiplicationClick = function() {}
      let divisionClick = function() {}

      const keyMenuYesNo = function(text, yesButton) {
        clearElement(guildTextDiv);
        menuSwitch(keySelectors, null);
        text = "To earn the key to the " + text + " Catacombs, you " +
                            "must prove your worthiness. Are you ready? "
        guildTextDiv.textContent = text;
        insertButton(guildTextDiv, "No", function() {
          clearElement(guildTextDiv);
          mageGuild(1);
          guildTextDiv.textContent = introText;
        });
        insertTextNode(guildTextDiv, " ");
        insertButton(guildTextDiv, "Yes!", yesButton);
      }

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
            guildTextDiv.textContent = introText;
            guildMenuSelectors.lowClass = "menuItemsLow";
            menuSwitch(keySelectors, function() {
              menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection, 1);
            });
            break;
        }
      }

      function checkAnswer(answer, count, challenge, complete) {

        let praise = [
          "Nice!",
          "Good job!",
          "Awesome!",
          "Well done!",
          "Good work!"
        ];

        let answerInput = document.getElementById("answerInput");
        if (parseInt(answerInput.value) === answer) {
          if (count < 10) {
            document.onkeyup = "";
            challengeDiv.textContent = praise[getRandomNumber(0, praise.length - 1)];
            setTimeout(function() {
              challenge(count);
            }, 700);
          } else {
            complete();
          }
        } else {
          if (challengeDiv.lastChild.nodeType > 1) {removeLastChild(challengeDiv, 3);}
          insertLineBreak(challengeDiv, 2);
          insertTextNode(challengeDiv, "Oh no! " + answerInput.value + " didn't work!");
          answerInput.value = "";
        }
      }

      function victory(catacomb) {

        function victorySpeech() {
          clearElement(challengeDiv);
          let victoryText = "Well done! I knew you could do it! You're definitely " +
                            "ready to take on the " + catacomb + " Catacombs.";
          challengeDiv.textContent = victoryText;
          insertLineBreak(challengeDiv, 2);
          insertButton(challengeDiv, "Return to Guild", mageGuild);
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

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);
            let term1 = getRandomNumber(1, 10);
            let term2 = getRandomNumber(1, term1);
            let answer = term1 - term2;

            let problem = `${term2} + ? = ${term1}
                          <br /><br />
                          ${term1} - ${term2} = ${ansInput}
                          <br />`;

            setTimeout(function() {
              document.onkeyup = function(event) {
                if (event.key === "Enter") {
                  checkAnswer(answer, count, challenge, function() {
                    player.subtraction.level = victory(operation);
                    player.notification.subtractionKey = false;
                  });
                }
              }
            }, 200);

            challengeDiv.innerHTML = problem;
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Subtraction is the process of taking away from a number, or making it smaller",
            "We can think of it like counting backwards:",
            parseMath("<pre>_r6r_ - 2 = ?<br /><br />" +
                      "_r6r_   5   4   3   2   1   0<br />" +
                      "|---|---|---|---|---|---|<br /><br /></pre>" +
                      "First we start at six<br /><br />"),
            parseMath("<pre>6 - _r2r_ = ?<br /><br />" +
                      "6   5   4   3   2   1   0<br />" +
                      "|---|---|---|---|---|---|<br />" +
                      "└---_r2r_---┘                <br /><br /></pre>" +
                      "Then we count backwards two places"),
            parseMath("<pre>6 - 2 = _r4r_<br /><br />" +
                      "6   5   _r4r_   3   2   1   0<br />" +
                      "|---|---|---|---|---|---|<br />" +
                      "        ⇑                <br /><br /></pre>" +
                      "Which brings us to four"),
            parseMath("<pre>_b6b_ - _o2o_ = _g4g_<br /><br />" +
                      "_b6b_   5   4   3   _o2o_   1   0<br />" +
                      "|---|---|---|---|---|---|<br />" +
                      "└-------_g4g_-------┘        <br /><br /></pre>" +
                      "We can also think about it as the space between the two terms of our problem."),
            "Subtraction is also like turning around an addition problem:",
            parseMath("1 + 2 = 3<br /><br />" +
                      "3 - 2 = 1 or 3 - 1 = 2<br /><br />" +
                      "or<br /><br />" +
                      "12 - 5 = 7<br /><br />" +
                      "5 + 7 = 12"),
            "To earn this key you must answer 10 subtraction problems."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        keyMenuYesNo("Subtraction", beginChallenge);
      }

      function multiplicationChallenge() {

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);
            let term1 = getRandomNumber(2, 5);
            let term2 = getRandomNumber(2, 5);
            let answer = term1 * term2;

            let problem = ``;
            for (let i = 0; i < term2; i++) {
              if (i) {
                problem += ` + ${term1}`;
              } else {
                problem += `${term1}`;
              }
            }
            problem += ` = ?
                       <br /><br />
                       ${term1} × ${term2} = ${ansInput}
                       <br /><br />`;

            setTimeout(function() {
              document.onkeyup = function(event) {
                if (event.key === "Enter") {
                  checkAnswer(answer, count, challenge, function() {
                    player.spells.euler.available = true;
                    player.notification.eulerSpell = "Spell Upgrade Available";
                    player.multiplication.level = victory(operation);
                    player.notification.multiplicationKey = false;
                  });
                }
              }
            }, 200);

            challengeDiv.innerHTML = problem;
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Multiplication magic is like addition but repeated:",
            "/HTML/4 × 3 is the same as<br />4 + 4 + 4",
            "/HTML/7 × 4 is the same as<br />7 + 7 + 7 + 7",
            "We can also think about it as groups of equal number:",
            "/HTML/3 × 4 is the same as saying 4 groups of 3 items each:<br /><pre>" +
            "         4           <br />" +
            "  ┌-┐ ┌-┐ ┌-┐ ┌-┐    <br />" +
            "  │■│ │■│ │■│ │■│    <br />" +
            "3 │■│ │■│ │■│ │■│    <br />" +
            "  │■│ │■│ │■│ │■│    <br />" +
            "  └-┘ └-┘ └-┘ └-┘    <br />" +
            "   ⇓   ⇓   ⇓   ⇓     <br />" +
            "   3 + 3 + 3 + 3 = 12</pre>",
            "To earn this key you must answer 10 multiplication problems."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        keyMenuYesNo("Multiplication", beginChallenge);
      }

      function divisionChallenge() {

        function beginChallenge() {

          function challenge(count = 0) {
            count++;
            clearElement(challengeDiv);
            let terms = getTerms("multiplication", 1);

            let problem = `${terms[0]} × ? = ${terms[2]}
                          <br /><br />
                          ${terms[2]} ÷ ${terms[0]} = ${ansInput}
                          <br />`;

            setTimeout(function() {
              document.onkeyup = function(event) {
                if (event.key === "Enter") {
                  checkAnswer(terms[1], count, challenge, function() {
                    player.spells.kovalevskaya.available = true;
                    player.notification.kovalevskaySpell = "Spell Upgrade Available";
                    player.division.level = victory(operation);
                    player.notification.divisionKey = false;
                  });
                }
              }
            }, 200);

            challengeDiv.innerHTML = problem;
            document.getElementById("answerInput").focus();
          }

          let challengeDiv = makeDiv("challengeDiv", "textBox");
          let challengeText = [
            "Division magic is taking a number and breaking it into groups of equal size.",
            "If we ask what the solution is to 6 ÷ 3, it's the same as asking " +
                "how many groups would we have if we split 6 into groups of 3 items each?",
            "/HTML/Start with 6 units:<br /><pre>" +
                "┌-----┐<br />" +
                "│■ ■ ■│<br />" +
                "│     │<br />" +
                "│■ ■ ■│<br />" +
                "└-----┘</pre>",
            "/HTML/Now split those 6 units into groups with 3 units each:<br /><pre>" +
                "┌-----┐<br />" +
                "│■ ■ ■│<br />" +
                "├-----┤<br />" +
                "│■ ■ ■│<br />" +
                "└-----┘</pre>",
            "/HTML/We now have 2 equal sized groups. 6 ÷ 3 = 2<br /><pre>" +
                "┌-----┐<br />" +
                "│■ ■ ■│<br />" +
                "├-----┤<br />" +
                "│■ ■ ■│<br />" +
                "└-----┘</pre>",
            "It's also helpful to think of division like multiplication but turned around:",
            "/HTML/3 × 5 = 15<br />15 ÷ 5 = 3 or 15 ÷ 3 = 5",
            "To earn this key you must answer 10 division problems."
          ];

          showText(challengeDiv, challengeText, challenge, "Begin");

          fadeTransition(challengeDiv, playArea);
        }

        keyMenuYesNo("Division", beginChallenge);
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
      } else if (player.addition.level < 5 || player.subtraction.level < 1) {
        keyData.sprites[1][0] = "multiplicationKeyLocked.gif";
      } else {
        keyText = "I think you're ready to take on the Multiplication Catacombs!";
        multiplicationClick = multiplicationChallenge;
      }

      if (player.division.level) {
        keyText = "You've unlocked all the catacombs! There are no more left to unlock!";
        keyData.sprites[2][0] = "divisionKeyCompleted.gif";
      } else if ((player.subtraction.level < 5) || (player.multiplication.level < 3)) {
        keyData.sprites[2][0] = "divisionKeyLocked.gif";
      } else {
        keyText = "I think you're ready to take on the Division Catacombs!";
        divisionClick = divisionChallenge;
      }

      clearElement(guildTextDiv);
      insertTextNode(guildTextDiv, keyText);

      let keySelectors = new MenuSelector(1, "Earn Catacomb Keys");
      keySelectors.lowClass = "menuItemsLow"
      menuSwitch(guildMenuSelectors, function() {
        menuMaker(keySelectors, keyData, keySelection);
      });
    }

    function firstVisit() {

      const launchGuild = function() {
        showImage("./mageGuild/keys/addition.gif", playArea);
        guildTextDiv.textContent = "Welcome to the Mages' Guild";
        let skip = document.getElementById("skipButton");
        removeElement("skipButton");

        player.addition.level = 1;
        player.spells.fibonacci.available = true;
        player.notification.additionKey = false;
        guildMenuSelectors.lowClass = "menuItemsLow";
        menuSwitch(null, function() {
          menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection, 2);
        });
      }

      let firstVisitText = [
        `Welcome to the Mage's Guild, ${player.name}. `,
        "The guild is where we train wizards to improve their skill. ",
        "As you get stronger, you can return here to add new spells to your book. ",
        "Before you leave, stop by the spell school for some magic " +
            "that will help you in the catacombs. ",
        parseMath("And don't forget this _okeyo_ so you can access the Addition Catacombs!")
      ];

      let skipButton = makeSkipButton(function() {
        launchGuild();
      });

      showText(guildTextDiv, firstVisitText, function() {
        launchGuild();
      });

      playArea.appendChild(skipButton);

      player.triggers.newGame = false;
    }

    const firstSpell = function() {

      const launchGuild = function() {
        removeElement("nextButton");
        player.triggers.firstSpell = false;
        guildMenuSelectors.lowClass = "menuItemsLow";
        menuSwitch(null, function() {
          menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection, 2);
        });
        guildTextDiv.textContent = "Welcome to the Mages' Guild";
      }

      let firstSpellText = [
        `Congratulations, ${player.name}! `,
        "Now that you've learned your first helper spell, you probably want to " +
            "know how to use it.",
        "When you're in battle with a monster, you can access a list of your spells " +
            "by pressing the space bar.",
        "Then just type the number to the left of the spell you want to cast.",
        `Good luck, ${player.name}! Hopefully we'll see you soon.`
      ];

      showText(guildTextDiv, firstSpellText, function() {
        removeElement("skipButton");
        launchGuild();
      });

      let skipButton = makeSkipButton(function() {
        removeElement("skipButton");
        launchGuild();
        guildTextDiv.textContent = "Welcome to the Mages' Guild";
      });

      playArea.appendChild(skipButton);
    }

    document.onkeyup = null;

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
    preloadMenu(guildMenuData);
    let guildMenuSelectors = new MenuSelector(1, "Welcome to the Mages' Guild")
    let introText = `It's good to see you again ${player.name}, what can I do for you?`;
    let ansInput = `<input type="number" id="answerInput"></input>`;
    let dblBreak = `<br /><br />`;

    fadeTransition(fragment, playArea, 500, function() {
      if (player.triggers.newGame) {
        firstVisit();
      } else if (player.triggers.firstSpell) {
        firstSpell();
      } else {
        guildTextDiv.textContent = introText;
        menuMaker(guildMenuSelectors, guildMenuData, guildMenuSelection, menuIndex);
      }
    });
  }

  function liberMathemagicus(monsterData) {
    //----------------------------------------------------//
    //Builds the book that keeps an account of everything //
    //the player has accomplished in the game.            //
    //object-> monsterData: all the information on the    //
    //monsters so the book can display thier sprites      //
    //----------------------------------------------------//

    //
    //These two functions are left empty so they
    //can save a few lines in the book page functions
    let pageLeft = function() {}
    let pageRight = function() {}

    function makePageTitle(text, target, size = 1.5) {
      //----------------------------------------------------//
      //Makes the title of pages in the book                //
      //string-> text: Title to be displayed                //
      //element-> target: Element onto which display        //
      //the title                                           //
      //integer-> size: font size of the text in em         //
      //----------------------------------------------------//

      let p = document.createElement("p");
      p.style.textAlign = "center";
      p.style.fontWeight = "bold";
      p.style.textDecoration = "underline";
      p.style.fontSize = size + "em";
      insertTextNode(p, text);
      target.appendChild(p);
    }

    function checkKeys(key, source, index) {
      //----------------------------------------------------//
      //Checks to see if a left or right arrow key          //
      //was pressed                                         //
      //integer-> key: keycode of the button pressed        //
      //37 = left key, 39 = right key                       //
      //----------------------------------------------------//

      index += 48;

      switch (key) {
        case 27:    //ESC
          document.onkeyup = null;
          returnToDungeonMenu();
          break;
        case 37:
          document.onkeyup = null;
          pageRight();
          break;
        case 39:
        if (index != 53) {
          document.onkeyup = null;
          pageLeft();
        }
          break;
        case 49:    //1 ToC
          if (index != 49) {
            document.onkeyup = null;
            turnPageRight(source, contentsPage);
          }
          break;
        case 50:    //2 Status
          if (index != 50) {
            document.onkeyup = null;
            if (index < 50) {
              turnPageLeft(source, statusPage);
            } else {
              turnPageRight(source, statusPage);
            }
          }
          break;
        case 51:    //3 Spells
          if (index != 51) {
            document.onkeyup = null;
            if (index < 51) {
              turnPageLeft(source, spellsPage);
            } else {
              turnPageRight(source, spellsPage);
            }
          }
          break;
        case 52:    //4 Monsters
          if (index != 52) {
            document.onkeyup = null;
            if (index < 52) {
              turnPageLeft(source, monstersPage);
            } else {
              turnPageRight(source, monstersPage);
            }
          }
          break;
        case 53:    //5 Achievements
          if (index != 53) {
            document.onkeyup = null;
            turnPageLeft(source, achievementsPage);
          }
          break;
      }
    }

    function turnPageLeft(currentPage, targetPage, index) {
      //----------------------------------------------------//
      //Turns the page left (forward)                       //
      //element-> currentPage: page element currently       //
      //displayed                                           //
      //function-> targetPage: function to make the         //
      //next page                                           //
      //any-> index: only used when the targetPage()        //
      //function needs an argument to run properly          //
      //----------------------------------------------------//

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

    function turnPageRight(currentPage, targetPage, index) {
      //----------------------------------------------------//
      //Turns the page right (backward)                     //
      //element-> currentPage: page element currently       //
      //displayed                                           //
      //function-> targetPage: function to make the         //
      //next page                                           //
      //any-> index: only used when the targetPage()        //
      //function needs an argument to run properly          //
      //----------------------------------------------------//

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

    function turnPageButtons(targetElement) {
      //----------------------------------------------------//
      //Creates the two buttons used to turn the book pages //
      //element-> targetElement: DOM element into which     //
      //the buttons will be placed                          //
      //----------------------------------------------------//

      let pageTurnButtons = makeDiv("pageTurnButtons");

      const leftButton = makeButton(null, "<", "leftPageButton", "turnPageButtons");
      pageTurnButtons.appendChild(leftButton);

      const rightButton = makeButton(null, ">", "rightPageButton", "turnPageButtons");
      pageTurnButtons.appendChild(rightButton);

      targetElement.appendChild(pageTurnButtons);

      return(pageTurnButtons);
    }

    function makeQuickButtons(targetElement) {
      //----------------------------------------------------//
      //Makes the buttons that appear at the tops of pages  //
      //element-> targetElement: element into which the     //
      //buttons will be put                                 //
      //----------------------------------------------------//

      let quickButtonDiv = makeDiv("quickButtonDiv");

      let button = makeButton(null, "ToC 1", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Status 2", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Spells 3", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Monsters 4", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      button = makeButton(null, "Achievements 5", "", "quickButtons");
      quickButtonDiv.appendChild(button);

      targetElement.appendChild(quickButtonDiv);
      return quickButtonDiv;
    }

    function makeTitlePage() {
      //----------------------------------------------------//
      //Makes the cover of the book                         //
      //returns a DOM element                               //
      //----------------------------------------------------//

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
      document.onkeyup = function(event) {
        if (event.keyCode === 39) {
          document.onkeyup = null;
          turnPageLeft(titlePage, contentsPage);
        } else if (event.keyCode === 27) {
          document.onkeyup = null;
          returnToDungeonMenu();
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

    function contentsPage() {
      //----------------------------------------------------//
      //Makes the table of contents page                    //
      //returns a DOM element                               //
      //----------------------------------------------------//

      let tableOfContents = makeDiv("tableOfContents", "bookPage");
      //
      //Makes the Quick Buttons and makes sure they link
      //to the right page
      let quickButtons = makeQuickButtons(tableOfContents);
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
      document.onkeyup = function(event) {
        checkKeys(event.keyCode, tableOfContents, 1);
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

      let p = chapterEntry(statusPage, "Status", `A list of ${player.possessive} progress.`);
      tableOfContents.appendChild(p);

      p = chapterEntry(spellsPage, "Spells", `A list of the spells ${player.name} has learned`);
      tableOfContents.appendChild(p);

      p = chapterEntry(monstersPage, "Monsters", `A list of the monsters ${player.name} has encountered.`);
      tableOfContents.appendChild(p);

      p = chapterEntry(achievementsPage, "Achievements", `A list of the achievements ${player.name} has earned.`);
      tableOfContents.appendChild(p);

      return tableOfContents;
    }

    function statusPage() {
      //----------------------------------------------------//
      //Makes the player's status page                      //
      //returns a DOM element                               //
      //----------------------------------------------------//

      function makeStats(target, text, level, average) {
        //----------------------------------------------------//
        //Displays the stats for the different operations     //
        //element-> target: DOM element to be added to        //
        //string-> text: label for the group of stats         //
        //integer-> level: player level for listed operation  //
        //array-> average: array w/ the average answer time   //
        //----------------------------------------------------//

        insertTextNode(target, text + level);
        insertLineBreak(target);
        let averageInfo = appendAverageInfo(average);
        target.appendChild(averageInfo);
        insertLineBreak(target);
      }

      function appendAverageInfo(array) {
        //----------------------------------------------------//
        //Adds more info to the stats                         //
        //array-> array: array that holds the average         //
        //answer times                                        //
        //----------------------------------------------------//

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
      document.onkeyup = function(event) {
        checkKeys(event.keyCode, status, 2);
      }
      //
      //This block makes and places the <div> and <image>
      //elements for the status page of the book
      let playerCameoDiv = makeDiv("playerCameoDiv");
      playerCameoDiv.onclick = function() {
        playerCameoImg.src = player.sprites.path + player.sprites.files[getRandomNumber(1, 3)];
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
      p.id = "statusPageName";
      insertTextNode(p, player.name);
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

      const savePlayerGame = makeButton(function() {
        saveGame(player);
      }, "Save Game", "saveGame");
      status.appendChild(savePlayerGame);

      return status;
    }

    function findNextSpell(index, object) {
      //----------------------------------------------------//
      //Checks the player's spell object to see if they     //
      //have more spells after the currently displayed one  //
      //integer-> index: the currently displayed spell      //
      //object-> object: the object containing the spell    //
      //information                                         //
      //returns the index of the next spell or false if     //
      //there isn't one                                     //
      //----------------------------------------------------//

      for (let i = index + 1; i < Object.keys(object).length; i++) {
        if (Object.values(object)[i].learned) {
          return i;
        }
      }
      return false;
    }

    function findPreviousSpell(index, object) {
      //----------------------------------------------------//
      //Checks the player's spell object to find the        //
      //previous spell if there is one                      //
      //integer-> index: the currently displayed spell      //
      //object-> object: the object containing the spell    //
      //information                                         //
      //returns the index of the previous spell or false if //
      //there isn't one                                     //
      //----------------------------------------------------//

      for (let i = index - 1; i >= 0; i--) {
        if (Object.values(object)[i].learned === true) {
          return i;
        }
      }
      return false;
    }

    function spellsPage() {
      //----------------------------------------------------//
      //Makes the Spell page of the book, displaying the    //
      //spells available to the player                      //
      //----------------------------------------------------//

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
        checkKeys(e.keyCode, spells, 3);
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

    function spellDetailPage(index) {
      //----------------------------------------------------//
      //Makes the individual spell pages of the book,       //
      //showing info specific to each spell                 //
      //----------------------------------------------------//

      let spell = makeDiv("spellsDetailPage", "bookPage");
      //
      //Determines the function of the page turning butttons
      if (findPreviousSpell(index, player.spells) === false) {
        pageRight = function() {
          turnPageRight(spell, spellsPage);
        }
      } else {
        pageRight = function() {
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
      document.onkeyup = function(event) {
        checkKeys(event.keyCode, spell, 3.5);
      }

      let spellDiv = makeDiv("spellDetailDiv");
      let spellImg = makeImg("./scrolls/" + spellBookContent[index][1]);
      spellImg.style.height = "330px";
      spellDiv.appendChild(spellImg);
      spell.appendChild(spellDiv);

      return spell;
    }

    function monstersPage() {
      //----------------------------------------------------//
      //Makes the Monster page of the book, showing general //
      //information about the monsters defeated             //
      //----------------------------------------------------//

      function showTypeInfo(destination, target, text, typeArray) {
        //----------------------------------------------------//
        //Places the info for each type of monster onto       //
        //the page                                            //
        //string-> destination: passed as an argument to      //
        //another function to make sure each section links    //
        //to the right page                                   //
        //element-> target: where the info will be shown      //
        //string-> text: title heading for each section       //
        //array-> typeArray: array with info on which monsters//
        //have been defeated                                  //
        //----------------------------------------------------//

        let span = document.createElement("span");
        span.textContent = text;
        if (typeof(typeArray[0]) === "object") {
          span.onclick = function() {turnPageLeft(monsters, monsterBasePage, destination);}
        } else {
          span.onclick = "";
        }
        target.appendChild(span);
        insertTextNode(target, `: ${typeArray.length}`);
        insertLineBreak(target);
      }

      let monsters = makeDiv("monsterPage", "bookPage");
      //
      //Determines the function of the page turning butttons
      pageRight = function() {
        if (!findPreviousSpell(10, player.spells)) {
          turnPageRight(monsters, spellsPage);
        } else {
          turnPageRight(monsters, spellDetailPage, findPreviousSpell(10, player.spells));
        }
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
        checkKeys(e.keyCode, monsters, 4);
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

    function monsterBasePage(monsterClass) {
      //----------------------------------------------------//
      //Makes the page for all the monsters found in a      //
      //particular catacomb, listing the ones the player    //
      //has defeated                                        //
      //string-> monsterClass: tells the function which     //
      //group of monsters to display                        //
      //----------------------------------------------------//

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
          makePageTitle("Addition Monsters", monsterList);

          preloadImages([mData["+"].path + mData["+"].files[player.addition.monsters[0][0]]]);

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

          preloadImages([mData["+"].path + mData["+"].files[player.addition.monsters[last][0]]]);
          preloadImages(["", mData["-"].path + mData["-"].files[player.subtraction.monsters[0][0]]]);

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

          preloadImages([mData["-"].path + mData["-"].files[player.subtraction.monsters[last][0]]]);
          preloadImages(["", mData["*"].path + mData["*"].files[player.multiplication.monsters[0][0]]]);

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

          preloadImages([mData["*"].path + mData["*"].files[player.multiplication.monsters[last][0]]]);
          preloadImages(["", mData["/"].path + mData["/"].files[player.division.monsters[0][0]]]);

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

      document.onkeyup = function(event) {
        checkKeys(event.keyCode, monsterList, 4.5);
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

    function monsterDetailPage(currentMonster) {
      //----------------------------------------------------//
      //Makes the page for the individual monsters.         //
      //array-> currentMonster:                             //
      //string-> [0]: indicates which catacomb the monster  //
      //is found in.                                        //
      //integer-> [1]: index of the monster in the          //
      //monsterNames array                                  //
      //----------------------------------------------------//

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
            if (player.triggers.gameBeat) {
              pageLeft = function() {turnPageLeft(monsterDetail, bossDetailPage);}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
      }
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(event) {
        checkKeys(event.keyCode, monsterDetail, 4.5);
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

    function bossDetailPage() {

      let bossPage = makeDiv("bossPage", "bookPage");

      let quickButtons = makeQuickButtons(bossPage);
      let quickButton = quickButtons.getElementsByClassName("quickButtons");
      quickButton[0].onclick = function() {turnPageRight(spell, contentsPage);}
      quickButton[1].onclick = function() {turnPageRight(spell, statusPage);}
      quickButton[2].onclick = function() {turnPageRight(spell, spellsPage);}
      quickButton[3].onclick = function() {turnPageLeft(spell, monstersPage);}
      quickButton[4].onclick = function() {turnPageLeft(spell, achievementsPage);}
      //
      //Makes the buttons to turn the pages
      let pageTurnButtons = turnPageButtons(bossPage);
      let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
      let index = player.division.monsters.length - 1;
      turnButton[0].onclick = function() {
        turnPageRight(bossPage, monsterDetailPage, ["/", player.division.monsters[index][0]]);
      }
      turnButton[1].onclick = function() {
        turnPageLeft(bossPage, achievementsPage);
      }

      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(event) {
        checkKeys(event.keyCode, monsterDetail, 4.5);
      }

      makePageTitle("Dread Lord", bossPage);
      //
      //Number of monsters killed
      p = document.createElement("p");
      insertTextNode(p, "Number Killed: 1");
      bossPage.appendChild(p);
      //
      //Level of monster
      p = document.createElement("p");
      insertTextNode(p, "Catacomb Boss");
      bossPage.appendChild(p);

      p = document.createElement("p");
      insertTextNode(p, "Hit Points: 100");
      bossPage.appendChild(p);

      p = document.createElement("p");
      insertTextNode(p, "Damage: 5");
      bossPage.appendChild(p);

      let bossDetailDiv = makeDiv("bossDetailDiv");
      bossDetailDiv.style.border = "3px solid #d4af37";
      let bossDetailImg = makeImg("./monsters/dreadLord.gif", "monsterImg");
      bossDetailDiv.appendChild(bossDetailImg);
      bossPage.appendChild(bossDetailDiv);

      return bossPage;

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
        if (player.triggers.gameBeat) {
          pageRight = function() {
            turnPageRight(achievementPage, bossDetailPage);
          }
        } else {
          pageRight = function() {
            turnPageRight(achievementPage, monsterDetailPage, ["/", player.division.monsters[index][0]]);
          }
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
        checkKeys(e.keyCode, achievementPage, 5);
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

    let mData = {
      "+": monsterData.addition,
      "-": monsterData.subtraction,
      "*": monsterData.multiplication,
      "/": monsterData.division,
    }

    //
    //The background images for the pages of the book
    let pageBackgrounds = [
      "page1.gif",
      "page2.gif",
      "page3.gif",
      "page4.gif"
    ];
    preloadImages(pageBackgrounds, "./book/");

    let achvmnt = [
      "",
      "./icons/graveyard.png",
      "./icons/sprint.png",
      "./icons/stopwatch.png",
      "./icons/dolphin.png",
      "./icons/prime.png",
      "./icons/bleeding-wound.png",
      "./icons/heart-minus.png",
      "./icons/medical-pack.png",
      "./icons/fire-ray.png",
      "./icons/help.png",
      "./icons/spell-book.png",
      "./icons/laurels-plus.png",
      "./icons/laurels-minus.png",
      "./icons/laurels-times.png",
      "./icons/laurels-divide.png"
    ];
    preloadImages(achvmnt);

    const spellBookContent = [
      //----------------------------------------------------//
      //The data needed to properly display the spell info  //
      //----------------------------------------------------//

      ["Fibonacci's Decomposition Spell", "fibonacci.png"],
      ["Euclid's Fireball Spell", "euclid.png"],
      ["Hypatia's Healiing Spell", "hypatia.png"],
      ["Huygens' Stop Time Spell", "huygens.png"],
      ["Lovelace's Reduction Spell", "lovelace.png"],
      ["Noether's Strength Spell", "noether.png"],
      ["Fermet's Polymorph Monster Spell", "fermat.png"],
      ["Brahe's Nova Spell", "brahe.png"],
      ["Euler's Left Distribution Spell", "euler.png"],
      ["Kovalevskaya's Right Distribution Spell", "kovalevskaya.png"],
    ];

    let scrolls = spellBookContent.map(function(element) {
      return element[1];
    });
    scrolls.unshift("");
    preloadImages(scrolls, "./scrolls/");
  }

  let playArea = document.getElementById("playArea");

  let menuData = {
    //----------------------------------------------------//
    //Object w/ the data for the overworld menu           //
    //----------------------------------------------------//

    sprites: [
      ["additionDoorClosed.gif", "Addition Catacombs"],
      ["subtractionDoorClosed.gif", "Subtraction Catacombs"],
      ["multiplicationDoorClosed.gif", "Multiplication Catacombs"],
      ["divisionDoorClosed.gif", "Division Catacombs"],
      ["guildDoor.gif", "Mages' Guild"],
      ["book.gif", "Liber Mathemagicus"]
    ],
    path: "./doors/",
    index: 0
  }

  preloadMenu(menuData);
  preloadImages(["", "./mageGuild/library.gif", "./book/bookCover.gif"])

  //
  //The selector data to make sure the overworld menu
  //is styled properly
  let overworldMenuSelectors = new MenuSelector(0, "Choose your catacomb");
  //
  //Makes the overworld menu and puts it on the screen
  fadeTransition(null, playArea, 500, function() {
    launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection);
  });
}

function getTerms(type, level, operation) {
  //----------------------------------------------------//
  //Gets the terms to a problem based on the player's   //
  //level and the type of problem                       //
  //----------------------------------------------------//



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
      /*-----Damage dealt by level------|
      |Level 1 - 3      1 dmg           |
      |Level 4 - 6      2 dmg           |
      |Level 7 - 9      3 dmg           |
      |Level 10         4 dmg           |
      |--------------------------------*/
      //this.hp = 2;
      //this.maxHp = this.hp;
      this.damage = Math.ceil((this.index + 1) / 9);
      this.hp = (this.damage === 4) ? 4 : this.damage + 1;
      this.maxHp = this.hp;
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
    }
  }

  class DreadLord {
    constructor() {
      this.level = 11;
      this.index = 36;
      this.hp = 100;
      this.maxHp = this.hp;
      this.damage = 5;

      let monsterDiv = document.getElementById("monsterDiv");
      monsterDiv.style.height = "200px";
      monsterDiv.style.marginTop = "-50px";

      this.src = "./monsters/dreadLord.gif";
      this.name = "Dread Lord";

      let monsterImg = document.getElementById("monsterImg");
      monsterImg.src = this.src;
      monsterImg.title = this.name;
    }
  }

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
    }
  }

  const current = {
    //----------------------------------------------------//
    //Object w/ links to the object associated with the   //
    //current operation                                   //
    //----------------------------------------------------//

    "addition": player.addition,
    "subtraction": player.subtraction,
    "multiplication": player.multiplication,
    "division": player.division
  }

  let ansTest = null;

  const makeDungeonScreen = function() {
    //----------------------------------------------------//
    //Puts all of the elements that make up the catacomb  //
    //onto the screen                                     //
    //----------------------------------------------------//

    function makeCombatDiv(divId, file, imgId, damageImg, damageId) {
      //----------------------------------------------------//
      //Makes the boxes that display the player and enemy   //
      //string-> divId: id of the box                       //
      //string-> file: path to the image file               //
      //string-> imgId: id of the <img>                     //
      //string-> damageImg: path to the damage image file   //
      //string-> damageId: id of the damage <img>           //
      //----------------------------------------------------//

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
    //Creates the box to display the problem
    //
    let problemDiv = makeDiv("problemDiv", "textBox");
    fragment.appendChild(problemDiv);

    //
    //Creates the block to display the hint
    //
    let hintDiv = makeDiv("hintDiv", "textBox");
    fragment.appendChild(hintDiv);
    hintDiv.style.visibility = "hidden";

    //
    //Creates the elements needed for the
    //countdown bar
    //
    let countdownBarBack = makeDiv("countdownBarBack");
      let countdownBarFront = makeDiv("countdownBarFront");
      let countdownTimer = makeDiv("countdownTimer");
      countdownBarBack.appendChild(countdownBarFront);
      countdownBarBack.appendChild(countdownTimer);
      if (timerValue === 0) {countdownBarBack.style.visibility = "hidden";}
    fragment.appendChild(countdownBarBack);

    //
    //The combatDiv holds the player and monster
    //health bars as well as the images for the
    //player and monster
    //
    let combatDiv = makeDiv("combatDiv");

    //
    //The player health bar
    //
    let healthBarBack = makeDiv("healthBarBack");
    let healthBarFront = makeDiv("healthBarFront");
    healthBarFront.style.height = ((player.health / player.maxHealth) * 110) + "px";
    healthBarBack.appendChild(healthBarFront);
    combatDiv.appendChild(healthBarBack);

    //
    //The player's image
    //
    let playerDiv = makeCombatDiv("playerDiv", player.sprites.path + player.sprites.files[0], "playerImg", "slash.gif", "slash");
    combatDiv.appendChild(playerDiv);

    //
    //The monster's image
    //
    let monsterDiv = makeCombatDiv("monsterDiv", "", "monsterImg", "blast.gif", "blast");
    combatDiv.appendChild(monsterDiv);

    //
    //The monster health bar
    //
    let monsterHealthBarBack = makeDiv("monsterHealthBarBack");
    let monsterHealthBarFront = makeDiv("monsterHealthBarFront");
    monsterHealthBarBack.appendChild(monsterHealthBarFront);
    combatDiv.appendChild(monsterHealthBarBack);
    fragment.appendChild(combatDiv);

    fadeTransition(fragment, playArea, 500, combat);
  }

  const catacombIntro = function() {
    //----------------------------------------------------//
    //Introduction to the catacombs, gives the player     //
    //a beat before they jump into the math problems      //
    //----------------------------------------------------//

    let div = makeDiv("", "textBox");
    if (operation === "?") {
      insertTextNode(div, "Be careful, this catacomb looks more dangerous than the others!");
    } else {
      insertTextNode(div, "Prepare yourself to fight monsters!");
    }
    insertLineBreak(div, 2);
    insertButton(div, "Go!", makeDungeonScreen);

    fadeTransition(div, playArea, 500, function() {
      document.querySelector("button").focus();
    });

  }

  const combat = function() {
    //----------------------------------------------------//
    //Handles everything that happens when the player is  //
    //solving problems                                    //
    //----------------------------------------------------//

    class DamageFlash {
      //----------------------------------------------------//
      //Flashes the <div>s containing the player and monster//
      //when damage is dealt to them                        //
      //----------------------------------------------------//

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
          let playerDiv = document.getElementById("playerDiv");
          setTimeout(function() {playerDiv.removeChild(damageDiv);}, 1400);
          playerImg.style.filter = "brightness(100%)";
          clearInterval(this.flash);
        }
      }
    }

    class Timer {
      //----------------------------------------------------//
      //Handles all the work that goes into keeping track   //
      //of time in the game                                 //
      //----------------------------------------------------//

      constructor(timerValue) {
        this.width = 340;
        this.decrement = (timerValue > 2) ? .068 : (.017 * timerValue);
        this.pauseMod = (timerValue > 2) ? 5000 : (10000 * timerValue);
        this.time = null;
        this.timeLeft = 0;
        this.timeIndex = timerValue;
        this.timeStart = null;
        this.timeStop = null;
        this.timer = 0;
      }

      timeDown() {
        //----------------------------------------------------//
        //Decreases the timer, damaging the player if it      //
        //reaches 0                                           //
        //----------------------------------------------------//

        if (this.width <= 0) {
          this.stopTimer();
          this.startTimer();
          this.width = 340;
          damagePlayer();
        } else {
          this.width = 340 - (this.checkTimer * this.decrement);
          countdownBarFront.style.width = this.width + "px";
          this.timeLeft = (this.width / (this.decrement * 1000)).toFixed(2);
          countdownTimer.innerHTML = this.timeLeft;
        }
      }

      get now() {
        //----------------------------------------------------//
        //Returns a new Date object                           //
        //----------------------------------------------------//

        return new Date();
      }

      get checkTimer() {
        //----------------------------------------------------//
        //Returns the time elapsed since the current          //
        //timer started                                       //
        //----------------------------------------------------//

        return (this.now - this.timeStart) + (this.timer % this.pauseMod);
      }

      get answerTime() {
        //----------------------------------------------------//
        //Returns the time on the timer in seconds            //
        //----------------------------------------------------//

        return this.timer / 1000;
      }

      startTimer() {
        //----------------------------------------------------//
        //Begins a new timer                                  //
        //----------------------------------------------------//

        this.timeStart = this.now;
      }

      stopTimer() {
        //----------------------------------------------------//
        //Stops the internal timer from counting down and     //
        //adds the elapsed time to the overall counter        //
        //----------------------------------------------------//

        this.timeStop = this.now;
        this.timer += (this.timeStop - this.timeStart);
      }

      stopTime() {
        //----------------------------------------------------//
        //Stops both the visual and internal timer            //
        //from counting down                                  //
        //----------------------------------------------------//

        if (this.timeIndex) {
          clearInterval(this.time);
        }
        this.stopTimer();
      }
    }

    const focusAnswer = function() {
      //----------------------------------------------------//
      //Puts focus on the answerInput element               //
      //----------------------------------------------------//

      let answerInput = document.getElementById("answerInput");
      answerInput.focus();
    }

    const getProblem = function() {
      //----------------------------------------------------//
      //Determines which type of problem to make, displays  //
      //it on the screen, starts the timer, and activates   //
      //the onkeyup event listener                          //
      //----------------------------------------------------//

      const findProblemType = function(type) {
        //----------------------------------------------------//
        //Determines problem type based on a RNG              //
        //5% -> Algebra                                       //
        //5% -> Sequence                                      //
        //90% -> Normal                                       //
        //----------------------------------------------------//

        let randomNumber = getRandomNumber(0, 99);

        if (randomNumber <= 4) {
          return "algebra";
        } else if (randomNumber <= 9) {
          return "sequence";
        } else {
          return "normal";
        }
      }

      const showProblem = function(problem, answer) {
        //----------------------------------------------------//
        //Puts the problem on the screen, starts the timer,   //
        //and activates the onkeyup event listener            //
        //----------------------------------------------------//

        clearElement(problemDiv);
        problemDiv.innerHTML = parseMath(problem).slice(6);
        problemDiv.appendChild(fragment);
        timer = new Timer(timerValue);
        if (timerValue > 0) {
          timer.time = setInterval(function() {
            timer.timeDown();
          }, 10);
        }
        timer.startTimer();

        setTimeout(function() {
          document.onkeyup = function(event) {
            checkKeyPress(event, answer);
          }
        }, 200);

        playerImg.parentNode.onclick = function(event) {
          showSpellMenu(answer);
        }

        answerInput.focus();
      }

      if (player.totalLevel === 44 && !player.triggers.gameBeat) {
        let op = getRandomNumber(1, 4);
        switch (op) {
          case 1:
            operation = "addition";
            break;
          case 2:
            operation = "subtraction";
            break;
          case 3:
            operation = "multiplication";
            break;
          case 4:
            operation = "division";
            break;
        }
      }

      player.spells.huygens.ongoing = false;
      player.stats.spellActive = false;
      let problemDiv = document.getElementById("problemDiv");
      clearElement(problemDiv);
      let fragment = document.createDocumentFragment();
      let flash = new ScreenFlash("playAreaWhite");
      let checkFlash = null;
      let problem = ``;

      switch (findProblemType()) {
        case "normal":
          terms = getTerms(operation, monster.level);
          problem = `${terms[0]} ${current[operation].sign} _r${terms[1]}r_ = ${ansInput}`;
          showProblem(problem, terms[2]);
          break;
        case "algebra":
          problemDiv.textContent = `The ${monster.name} used Algebra!`;
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 100);

          terms = getTerms(operation, monster.level);
          problem = `${terms[0]} ${current[operation].sign} ${ansInput} = ${terms[2]}`

          checkFlash = setInterval(function() {
            if (flash.count === 0) {
              clearInterval(checkFlash);
              showProblem(problem, terms[1]);
            }
          }, 250);
          break;
        case "sequence":
          problemDiv.textContent = `The ${monster.name} used Sequence!`;
          flash.flash = setInterval(function() {
            flash.screenFlash();
          }, 100);

          terms = getTerms("sequence", monster.level, operation);
          problem = `${terms[0]}, ${terms[1]}, ${terms[2]}, ${terms[3]}, ${ansInput},...`

          checkFlash = setInterval(function() {
            if (flash.count === 0) {
              clearInterval(checkFlash);
              showProblem(problem, terms[4]);
            }
          }, 250);

          break;
      }
    }

    const showSpellMenu = function(answer) {
      //----------------------------------------------------//
      //Makes the spell menu and fills it with the player's //
      //available spells                                    //
      //----------------------------------------------------//

      const closeSpellMenu = function() {
        //----------------------------------------------------//
        //Reactivates the normal onkeyup event, resets the    //
        //answerInput, and removes the useSpellMenu element   //
        //----------------------------------------------------//

        setTimeout(function() {
          document.onkeyup = function() {
            checkKeyPress(event, answer);
          }
        }, 200);
        answerInput.value = null;
        answerInput.focus();
        removeElement("useSpellMenu");
        spellMenuActive = false;
        playerImg.parentNode.onclick = showSpellMenu
      }

      const launch = function(spell) {
        //----------------------------------------------------//
        //Closes the spell menu, and calls the spell function //
        //----------------------------------------------------//

        player.stats.spellActive = true;
        closeSpellMenu();
        spell();
      }

      const spellObj = {
        //----------------------------------------------------//
        //Holds the functions that check if a selected spell  //
        //can be cast                                         //
        //----------------------------------------------------//

        1: function() {
          if (!player.spells.fibonacci.ongoing && player.spells.fibonacci.learned) {
            launch(castFibonacci);
          }
        },
        2: function() {
          if (!player.spells.euclid.ongoing && player.spells.euclid.learned) {
            launch(castEuclid);
          }
        },
        3: function() {
          if (!player.spells.hypatia.ongoing && player.spells.hypatia.learned) {
            launch(castHypatia);
          }
        },
        4: function() {
          if (!player.spells.lovelace.ongoing && player.spells.lovelace.learned) {
            launch(castLovelace);
          }
        },
        5: function() {
          if (!player.spells.huygens.ongoing && player.spells.huygens.learned) {
            launch(castHuygens);
          }
        },
        6: function() {
          if (!player.spells.fermat.ongoing && player.spells.fermat.learned) {
            launch(castFermat);
          }
        },
        7: function() {
          if (!player.spells.noether.ongoing && player.spells.noether.learned) {
            launch(castNoether);
          }
        },
        8: function() {
          if (!player.spells.brahe.ongoing && player.spells.brahe.learned) {
            launch(castBrahe);
          }
        },
        32: function() {

          closeSpellMenu();
        }
      }

      spellMenuActive = true;
      playerImg.parentNode.onclick = closeSpellMenu;
      let spellMenu = makeDiv("useSpellMenu");
      let answerInput = document.getElementById("answerInput");

      let number = 0;
      if (Object.keys(player.spells).length === 0) {

      } else {
        for (let i = 0; i < 8; i++) {
          if (Object.values(player.spells)[i].learned === true) {
            let menuItem = makeDiv(i, "menuItem");
            let spell = Object.values(player.spells)[i];
            menuItem.onclick = function() {
              spellObj[(i + 1) % 10]();
            }
            let line = `_fl${(i + 1) % 10}fl_ ${spell.name} _fr${spell.number}fr_`;
            menuItem.innerHTML = parseMath(line).slice(6);
            spellMenu.appendChild(menuItem);
          }
        }
      }

      let menuItem = makeDiv("10", "menuItem");
      menuItem.onclick = function() {
        closeSpellMenu();
      }
      insertTextNode(menuItem, "Close Menu");
      spellMenu.appendChild(menuItem);

      playArea.appendChild(spellMenu);
      answerInput.blur();

      setTimeout(function() {
        document.onkeyup = function(event) {
          spellObj[event.keyCode % 48]();
        }
      }, 200);
    }

    const showHintDiv = function() {
      //----------------------------------------------------//
      //Sets the visibility of the hindDiv to "visible"     //
      //----------------------------------------------------//

      let hintDiv = document.getElementById("hintDiv");
      hintDiv.style.visibility = "visible";
    }

    const hideHintDiv = function() {
      //----------------------------------------------------//
      //Sets the visibility of the hindDiv to "hidden"      //
      //----------------------------------------------------//

      let hintDiv = document.getElementById("hintDiv");
      hintDiv.style.visibility = "hidden";
    }

    const levelUp = function() {
      //----------------------------------------------------//
      //Increpents the player's level, resets their running //
      //average, and lets them either return to the surface //
      //or continue in the dungeon                          //
      //----------------------------------------------------//

      const checkForNotifications = function() {
        //----------------------------------------------------//
        //Checks the player's stats and determines which      //
        //notifications to activate                           //
        //----------------------------------------------------//

        switch (operation) {
          case "addition":
            if (current[operation].level === 2) {
              player.notification.subtractionKey = "Subtraction Key Available";
            }
            if (current[operation].level === 4 && player.subtraction.level && !player.multiplication.level) {
              player.notification.multiplicationKey = "Multiplication Key Available";
            }
            break;
          case "subtraction":
            if (current[operation].level && player.addition.level === 5 && !player.multiplication.level) {
              player.notification.multiplicationKey = "Multiplication Key Available";
            }
            if (current[operation].level === 4 && player.multiplication.level === 3) {
              player.notification.divisionKey = "Division Key Available";
            }
            break;
          case "multiplication":
            if (current[operation].level === 2 && player.subtraction.level === 5) {
              player.notification.divisionKey = "Division Key Available";
            }
            break;
          case "division":
            if (current[operation].level === 1 && player.spells.fermat.learned === false) {
              player.notification.fermatSpell = "Polymorph Monster Spell Available";
              player.spells.fermat.available = true;
            }
            if (current[operation].level === 4 && player.spells.brahe.learned === false) {
              player.notification.braheSpell = "Nova Spell Available";
              player.spells.brahe.available = true;
            }
            break;
        }
      }

      checkForNotifications();

      let text = "";
      if (current[operation].level < 11) {
        current[operation].level++;
      }

      current[operation].runningAverage = [];
      let problemDiv = document.getElementById("problemDiv");
      if (current[operation].level > 10) {
        if (player.totalLevel === 44 && !player.triggers.finalBoss) {
          player.triggers.finalBoss = true;
          problemDiv.textContent = `You did it ${player.name}! You've saved us all!`;
        } else {
          problemDiv.textContent = `You did it ${player.name}! You've definitely mastered ${operation}!`;
        }
      } else {
        if (player.totalLevel % 20 === 0) {
          text = "<br />Your magic seems stronger... You should try using it on more monsters.";
          player.damage++;
        } else if (player.totalLevel % 10 === 0) {
          text = "<br />You seem stronger than before... You can probably withstand more attacks."
          player.maxHealth += 5;
          player.health = player.maxHealth;
        }
        problemDiv.innerHTML = `I think you're strong enough for Level ${current[operation].level}!${text}`;
        insertLineBreak(problemDiv, 2);
        insertButton(problemDiv, "Continue", nextMonster, "continue", "yesNoButtons");
      }

      insertTextNode(problemDiv, " ");
      insertButton(problemDiv, "Return to Surface", function() {
        overworld(player);
      }, "return", "yesNoButtons");

      setTimeout(function() {
        let rtrn = document.getElementById("return");
        let cntn = document.getElementById("continue");
        document.onkeyup = function(event) {
          if (event.keyCode === 38 || event.keyCode === 40) {
            let active = document.activeElement;
            if (active.id === "return") {
              cntn.focus();
            } else {
              rtrn.focus();
            }
          }
        }
      }, 200);
    }

    const nextMonster = function() {
      //----------------------------------------------------//
      //Turns off the onkeyup listener, makes a new monster,//
      //resets the monster health bar, restores brightness  //
      //to the monsterImg and gets a new problem            //
      //----------------------------------------------------//

      document.onkeyup = null;
      monster = new Monster(catacombLevel);
      monsterImgLoad(monster, getProblem);
    }

    const bossFight = function() {
      //----------------------------------------------------//
      //Makes a new Boss monster, resets its health bar and //
      //brightness, displays the boss text, flashes the     //
      //screen, and gets a new problem                      //
      //----------------------------------------------------//

      monster = new Boss();
      monsterImgLoad(monster, function() {
        let problemDiv = document.getElementById("problemDiv");
        clearElement(problemDiv);
        problemDiv.textContent = "This monster doesn't seem like the others...";

        let flash = new ScreenFlash("playAreaWhite");
        flash.flash = setInterval(function() {
          flash.screenFlash();
        }, 100);
        setTimeout(getProblem, 2000);
      })
    }

    const checkKeyPress = function(event, answer) {
      //----------------------------------------------------//
      //Checks if a specific key was pressed                //
      //----------------------------------------------------//

      switch(event.code) {
        case "NumpadEnter":
        case "Enter": //Enter key, check answer
          checkAnswer(answer);
          break;
        case "Escape":  //ESC key, leave dungeon
          clearInterval(timer.time);
          document.onkeypress = null;
          overworld(player);
          break;
        case "Space":  //Space key, spell menu
          event.preventDefault();
          if (!spellMenuActive && !player.stats.spellActive) {
            //spellMenuActive = true;
            showSpellMenu(answer);
          }
          break;
        case "a":  //saving for testing for now
          event.preventDefault();
          //save for testing

      }
    }

    const getNumberData = function(answer) {
      //----------------------------------------------------//
      //Saves the average answer time then check numbers to //
      //see if any stats or spells need to be incremented   //
      //----------------------------------------------------//

      const saveAverage = function() {
        //----------------------------------------------------//
        //Saves the running average answer time               //
        //----------------------------------------------------//

        current[operation].totalAverage = getAverage(current[operation].totalAverage, timer.answerTime);
        if (current[operation].level === catacombLevel) {
          current[operation].runningAverage = player.addTime(timer.answerTime, current[operation].runningAverage);
        }
      }

      saveAverage();
      /*console.clear();
      console.log(`Average total time: ${player.totalTime}`);
      console.log(`Time to answer the question: ${timer.answerTime}`);
      console.log(`Current average: ${current[operation].totalAverage[0]}`);
      console.log(`Number of questions answered ${current[operation].totalAverage[1]}`);*/

      if (timer.answerTime <= 1) player.stats.flash++;
      if (timer.timeLeft <= 1 && timer.decrement) player.stats.lastSecond++;
      if (answer === 42) player.stats.fortyTwo++;
      if (isPrime(answer)) player.stats.primes++;
      if (isTriangle(answer) && player.spells.euclid.learned) player.spells.euclid.number++;
      if (isSquare(answer) && player.spells.hypatia.learned) player.spells.hypatia.number++;
      if (player.spells.lovelace.learned) {
        if (player.totalTime - player.stats.lovelaceCounter > 20) {
          player.spells.lovelace.number++;
          player.stats.lovelaceCounter = 0;
        }
      }
      if (player.spells.huygens.learned) {
        if (timer.answerTime <= 2) {player.stats.huygensCounter++}
        if (player.stats.huygensCounter > 9) {
          player.spells.huygens.number++;
          player.stats.huygensCounter = 0;
        }
      }
      if (player.spells.fermat.learned && isMirror(answer)) {
        player.spells.fermat.number++;
      }
      if (player.addition.totalAverage[1] >= 66 && player.spells.euclid.learned === false) {
        player.notification.euclidSpell = "Fireball Spell Available";
        player.spells.euclid.available = true;
      }
      if (player.multiplication.totalAverage[1] >= 36 && player.spells.hypatia.learned === false) {
        player.notification.hypatiaSpell = "Health Spell Available";
        player.spells.hypatia.available = true;
      }
      if (player.subtraction.totalAverage[1] >= 50 && player.spells.lovelace.learned === false) {
        player.notification.lovelaceSpell = "Reduction Spell Available";
        player.spells.lovelace.available = true;
      }
      if (player.totalTime >= 600 && player.spells.huygens.learned === false) {
        player.notification.huygensSpell = "Stop Time Spell Available";
        player.spells.huygens.available = true;
      }
      if (player.stats.damage.dealt >= 200 && player.spells.noether.learned === false) {
        player.notification.noetherSpell = "Strength Spell Available";
        player.spells.noether.available = true;
      }
    }

    const checkAnswer = function(answer) {
      //----------------------------------------------------//
      //Checks to see if the given answer is correct. If so,//
      //the number is processed and the moster is damaged.  //
      //If not, the player is damaged and a small string is //
      //displayed.                                          //
      //string(number) -> answer: correct solution to       //
      //the problem                                         //
      //----------------------------------------------------//

      let answerInput = document.getElementById("answerInput");
      if (parseInt(answerInput.value) === answer) {
        timer.stopTime();
        getNumberData(answer);
        damageMonster();
      } else {
        damagePlayer();
        if (problemDiv.childNodes.length > 5) {removeLastChild(problemDiv, 3);}
        insertLineBreak(problemDiv, 2);
        insertTextNode(problemDiv, `Oh no! ${answerInput.value} didn't work!`);
        answerInput.value = null;
      }
    }

    const insertDamageNumbers = function(target, damage) {
      //----------------------------------------------------//
      //Displays the damage to the player or monster in a   //
      //red number that floats up and fades away            //
      //----------------------------------------------------//

      let damageDiv = makeDiv("damageDiv");
        insertTextNode(damageDiv, damage);
        target.appendChild(damageDiv);

      setTimeout(function() {
        damageDiv.style.bottom = "100%";
        damageDiv.style.filter = "opacity(0%)";
      }, 50);
    }

    const damageMonster = function() {
      //----------------------------------------------------//
      //Disables the spell menu, calculates total damage to //
      //inflict, removes monster hp, adjusts monster health //
      //bar, hides the hintDiv, displays the damage, flashes//
      //the monsterDiv and either gets a new problem, or    //
      //kills the monster based on remaining hp             //
      //----------------------------------------------------//

      const killMonster = function() {
        //----------------------------------------------------//
        //Increments monstersKilled, resets player's damage   //
        //boost, processes the monster info, displays a       //
        //message, and based on the player's stats, either    //
        //levels them up, loads a new monster, or loads a boss//
        //----------------------------------------------------//

        const processMonster = function() {
          //----------------------------------------------------//
          //Checks to see if the player has beaten this monster //
          //before. If not, it adds it to an array. If so, it   //
          //adds it to the number defeated                      //
          //----------------------------------------------------//

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
        if (player.totalLevel < 44 || player.triggers.gameBeat) {
          processMonster();
        }
        problemDiv.innerHTML = `Great job ${player.name}, you defeated the ${monster.name}!<br /><br />`;

        if (monster.maxHp >= 10) {
          setTimeout(levelUp, 1000);
        } else if (player.passingAverage(current[operation].runningAverage) && current[operation].level < 11) {
          if (current[operation].level % 2 === 0) {
            setTimeout(bossFight, 1000);
          } else {
            setTimeout(levelUp, 1000);
          }
        } else {
          setTimeout(nextMonster, 1000);
        }
      }

      player.stats.spellActive = true;
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
          let deadMonster = monster;
          killMonster();
        }
      }, 600);

    }

    const damagePlayer = function() {
      //----------------------------------------------------//
      //Stops the timer, tracks damage received for         //
      //incrementing the Noether spell, reduces player hp,  //
      //displays damage, and either kills the player or gets//
      //a new problem based on player hp                    //
      //----------------------------------------------------//

      const killPlayer = function() {
        //----------------------------------------------------//
        //Puts a spotlight on the player then calls the       //
        //rescueScreen function to return the player to       //
        //the surface                                         //
        //----------------------------------------------------//

        const rescueScreen = function() {
          //----------------------------------------------------//
          //Explains that the player lost all of their hp and   //
          //were rescued and returned to the surface            //
          //----------------------------------------------------//

          clearElement(playArea);

          let tellahDiv = makeCameoDiv("Tellah.gif");
          let introTextDiv = makeDiv("introTextDiv", "textBox");

          //
          //a button that lets the player skip the game intro
          //
          let skipDiv = makeSkipButton(overworld, player);

          let fragment = makeFragment(tellahDiv, introTextDiv, skipDiv);
          playArea.appendChild(fragment);

          playArea.style.filter = "brightness(100%)";

          player.health = player.maxHealth;

          const rescueText = [
            "Oh! You're alive!. ",
            "Someone found you at the edge of the catacombs and brought you back here. ",
            "I've restored your health, but next time be more careful down there. "
          ]
          showText(introTextDiv, rescueText, function() {
            overworld(player);
          })
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

      timer.stopTime();
      if (player.spells.noether.learned) {
        if (player.stats.noetherCounter >= 5) {
          player.spells.noether.number++;
          player.stats.noetherCounter = 0;
        }
        player.stats.noetherCounter += monster.damage;
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
            if (timerValue && !player.spells.huygens.ongoing) {
              timer.time = setInterval(function() {
                timer.timeDown();
              }, 10);
            }
            timer.startTimer();
          } else {
            timer.stopTime();
            killPlayer();
            playerImg.src = player.sprites.path + player.sprites.files[3];
          }
        }
      }, 300);
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
          hintString += `(${addend1} + ${redSpan}${addend2}</span>)`;
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
            hintString += `(${newAddend1} + ${redSpan}${newAddend4}</span>) + ${redSpan}${newAddend3}</span> = ?`;
          } else { //No regrouping needed here
            hintString += `(${newAddend1} + ${redSpan}${newAddend2}</span>) = ?`;
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

        //
        //if the ones place of the sub is greater
        //than the ones place of the min...
        if (subtrahend2 > minuend2) {
          subtrahend1 += subtrahend2;
          subtrahend2 = 0;
        }

        //
        //if the sub is 1 digit...
        if (!subtrahend1) {
          hintString += `${minuend1} + `;
        //
        //if the ones place of the sub and the min
        //are both zero...
        } else if (!minuend2 && !subtrahend2) {
          hintString += `${minuend1} - `;
        } else {
          hintString += `(${minuend1} - ${redSpan}${subtrahend1}</span>) + `;
        }

        if (!subtrahend2 && !minuend2) {
          hintString += redSpan + subtrahend1 + "</span> = ?";
        } else if (!subtrahend2) {
          hintString += minuend2 + " = ?";
        } else {
          hintString += `(${minuend2} - ${redSpan}${subtrahend2}</span>) = ?`;
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
            let hintDiv = document.getElementById("hintDiv");
            hintDiv.style.visibility = "visible";
            hintDiv.innerHTML = hintString;
            focusAnswer();
            clearInterval(spellCast);
            if (timerValue && !player.spells.huygens.ongoing) {
              timer.time = setInterval(function() {
                timer.timeDown();
              }, 10);
            }
            timer.startTimer();
            player.stats.spellActive = false;
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
            let hintDiv = document.getElementById("hintDiv");
            hintDiv.style.visibility = "visible";
            hintDiv.innerHTML = randomString;
          }
        }
      }

      if (operation === "multiplication" && !player.spells.euler.learned) {
        hintDiv.innerHTML = "Your magic isn't working!";
        hintDiv.style.visibility = "visible";
        player.stats.spellActive = false;
        hideElement(hintDiv, 1500);
        return;
      } else if (operation === "division" && !player.spells.kovalevskaya.learned) {
        hintDiv.innerHTML = "Your magic isn't working!";
        hintDiv.style.visibility = "visible";
        player.stats.spellActive = false;
        hideElement(hintDiv, 1500);
        return;
      }

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
          player.spells.euler.cast++;
          break;
        case "division":
          divisionHint(terms[0], terms[1]);
          player.spells.kovalevskaya.cast++;
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
        hintDiv.style.visibility = "visible";
        player.stats.spellActive = false;
        hideElement(hintDiv, 1500);
        return;
      }

      timer.stopTime();

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
          /*if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();*/
          damageMonster();
        }
      }, 250);

      player.spells.euclid.cast++;
      player.spells.euclid.number--;
    }
    //
    //Healing spell
    const castHypatia = function() {

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.hypatia.number === 0) {
        hintDiv.innerHTML = "You don't have any Healing Magic!";
        hintDiv.style.visibility = "visible";
        focusAnswer();
        player.stats.spellActive = false;
        hideElement(hintDiv, 1500);
        return;
      }

      if (player.health === player.maxHealth) {
        hintDiv.innerHTML = "You already have full health!";
        hintDiv.style.visibility = "visible";
        focusAnswer();
        player.stats.spellActive = false;
        hideElement(hintDiv, 1500);
        return;
      }

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

          player.health += heal;
          if (player.health > player.maxHealth) player.health = player.maxHealth;

          let healthBarFront = document.getElementById("healthBarFront");
          healthBarFront.style.height = ((player.health / player.maxHealth) * 110) + "px";

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();

          focusAnswer();
          player.stats.spellActive = false;
        }
      }, 250);

      player.stats.damage.healed += heal;
      player.spells.hypatia.cast++;
      player.spells.hypatia.number--;
    }
    //
    //Reduce terms spell
    const castLovelace = function() {

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.lovelace.number === 0) {
        hintDiv.innerHTML = "You don't have any Reduction Magic!";
        hintDiv.style.visibility = "visible";
        player.stats.spellActive = false;
        hideElement(hintDiv, 1500);
        return;
      }

      timer.stopTime();

      hintDiv.innerHTML = "You cast Lovelace's Reduction!";
      hintDiv.style.visibility = "visible";
      hideElement(hintDiv, 1000);

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
          let problem = `${terms[0]} ${current[operation].sign} _r${terms[1]}r_ = ${ansInput}`
          problemDiv.innerHTML = parseMath(problem).slice(6);

          setTimeout(function() {
            document.onkeyup = function() {
              checkKeyPress(event, terms[2]);
            }
          }, 200);

          focusAnswer();
          player.stats.spellActive = false;

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();
        }
      }, 300);

      player.spells.lovelace.cast++;
      player.spells.lovelace.number--;
    }
    //
    //Strength spell
    const castNoether = function() {
      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.noether.number === 0) {
        hintDiv.innerHTML = "You don't have any Strength Magic!";
        hintDiv.style.visibility = "visible";
        player.stats.spellActive = false;
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

          setTimeout(function() {
            playerImg.style.height = 100;
            player.spells.noether.ongoing = false;
          }, 250);
        }
      }, 250);

      player.spells.noether.cast++;
      player.spells.noether.number--;
      player.damageBoost++;
      focusAnswer();
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
        player.stats.spellActive = false;
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
          focusAnswer();
          player.stats.spellActive = false;
          player.spells.huygens.ongoing = true;
          timer.startTimer();
        }
      }, 250);

      player.spells.huygens.cast++;
      player.spells.huygens.number--;
    }
    //
    //Polymorph monster spell
    const castFermat = function() {

      let hintDiv = document.getElementById("hintDiv");

      if (player.spells.fermat.number === 0) {
        hintDiv.innerHTML = "You don't have any Cube Magic!";
        hintDiv.style.visibility = "visible";
        player.stats.spellActive = false;
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
          let monsterImg = document.getElementById("monsterImg");
          monsterImg.src = monster.src;
          monsterImg.title = monster.name;
          player.spells.fermat.ongoing = false;

          if (timerValue && !player.spells.huygens.ongoing) {
            timer.time = setInterval(function() {
              timer.timeDown();
            }, 10);
          }
          timer.startTimer();

          focusAnswer();
          player.stats.spellActive = false;
        }
      }, 250);

      player.spells.fermat.cast++;
      player.spells.fermat.number--;
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
        player.stats.spellActive = false;
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
          damageMonster();
        }
      }, 250);

      player.spells.brahe.cast++;
      player.spells.brahe.number--;
    }

    //
    //Creates the level display
    //
    let levelDiv = makeDiv("levelDiv");
      insertTextNode(levelDiv, "Level " + catacombLevel);
      let exitDiv = makeDiv("exitDiv");
        insertTextNode(exitDiv, "Exit")
        exitDiv.onclick = function() {
          clearInterval(timer.time);
          overworld(player);
        }
      levelDiv.appendChild(exitDiv);
    let problemDiv = document.getElementById("problemDiv");
    playArea.insertBefore(levelDiv, problemDiv);

    let terms = null;
    let playerImg = document.getElementById("playerImg");
    playerImg.title = player.name;
    let spellMenuActive = false;
    let ansInput = `<input type="number" id="answerInput"></input>`;
    let dblBreak = `<br /><br />`;
    let timer = new Timer(timerValue);

    let monster = null;
    if (operation === "?") {
      monster = new DreadLord();
      getProblem();
    } else {
      monster = new Monster(catacombLevel, current[operation]);
      monsterImgLoad(monster, getProblem);
    }
  }

  let playArea = document.getElementById("playArea");

  catacombIntro();
}
