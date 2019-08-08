
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
//This clears the inner HTML of an element in a
//way that is easy to understand in the code
function clearElement(element) {
  element.innerHTML = "";
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
function removeLastChild(parent, children = 1) {
  for (let i = 0; i < children; i++) {
    parent.removeChild(parent.lastChild);
  }
}
//
//Inserts multiple elements into a fragment to be
//appended to another element
function insertElements() {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < arguments.length; i++) {
    fragment.appendChild(arguments[i]);
  }
  return fragment;
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
  let waitTime = 30;
  //
  //As long i is less than the length of the text string
  //there are more letters to type
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    //
    //If the character being typed is a comma or period
    //an additional delay is added, unless it's the end of
    //the string
    if (((text.charAt(i) == ".") || (text.charAt(i) == ",")) && ((i + 2) < text.length)) {
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
    callback();
  }
}
//
//makes a <div> element and assigns an ID and class
//first parameter assigns a string to an ID
//additional parameters are added as classes
function makeDiv() {
  let div = document.createElement("div");
  if (arguments.length > 0) {div.id = arguments[0]}
  //div.id = id;
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
//id is a string
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
  let menuSelectText = makeDiv(selector.textId);
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
  let menuDivMiddle = makeDiv(selector.menuDiv.idMiddle);
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
  const leftButton = makeButton(shiftRight, "<", selector.buttonId.left, selector.buttonClass);
  const rightButton = makeButton(shiftLeft, ">", selector.buttonId.right, selector.buttonClass);
  //
  //This block puts all of the elements that have been
  //made onto the webpage
  let fragment = insertElements(menuSelectText, leftButton, menuDivLeft, menuDivMiddle, menuDivRight, rightButton);
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
    //
    //Levels unlocked by the player
    this.level = {
      addition: 1,
      subtraction: 0,
      multiplication: 0,
      division: 0
    }
    //
    //Avatar sprites for the player
    this.sprites = {
      path: "",
      files: []
    },
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
      //
      //Keeps track of the average answer time for
      //each type of problem.
      //Index 0 stores the running average
      //Index 1 stores the number of questions answered
      averages: {
        addition: [0, 0],
        subtraction: [0, 0],
        multiplication: [0, 0],
        division: [0, 0]
      },
      //
      //Keeps track of the number of monsters the
      //player has killed and which monsters have
      //been killed
      monsters: {
        killed: 0,                  //Total number of monsters killed
        //
        //These arrays hold two values in each node.
        //monstersKilled[x][0] is the index of the monster
        //that has been killed.
        //monstersKilled[x][1] is the number of that
        //monster that have been killed.
        addition: [],
        subtraction: [],
        multiplication: [],
        division: []
      }

    }
    //
    //Spell related stats
    this.spells = {
      learned: [],                  //Which spells have been learned, forerly spellArray[]
      cast: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Number times each spell cast
      //
      //This group of variables tracks the number of
      //spells available to the player
      fibonacci: 0,                 //Hint spells
      triangle: 0,                  //Fireball spells
      square: 0,                    //Health spells
      pentagon: 0,                  //Reduce terms spells
      pyramid: 0,                   //Time spells
      cube: 0,                      //Polymorph monster spells
      hexagon: 0,                   //Strength spells
      star: 0                       //Nova spells
    }
  }

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

  average(operation) {
    let averages = {
      "addition": this.stats.averages.addition,
      "subtraction": this.stats.averages.subtraction,
      "multiplication": this.stats.averages.multiplication,
      "division": this.stats.averages.division
    }
    return averages[operation];
  }
}

function testBook() {
  player = new Player();
  player.name = "Shady";
  player.maxHealth = 20;
  player.damage = 1;
  player.level.addition = 11;
  player.stats.averages.addition = [100, 100];
  player.level.subtraction = 8;
  player.stats.averages.subtraction = [100, 100];
  player.level.multiplication = 5;
  player.stats.averages.multiplication = [100, 100];
  player.level.division = 2;
  player.stats.averages.division = [100, 100];
  player.stats.monstersKilled = 9;
  player.sprites.path = "./mages/";
  player.sprites.files = ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif", "Cat Mage"];
  player.spells.learned = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  player.stats.monsters.addition = [[0, 1], [1, 5], [2, 10], [3, 20], [30, 20]];
  player.stats.monsters.subtraction = [[0, 1], [1, 5], [2, 10], [3, 20]];
  player.stats.monsters.multiplication = [[0, 1], [1, 5], [2, 10], [3, 20]];
  player.stats.monsters.division = [[0, 1], [1, 5], [2, 10], [3, 20]];
  player.spells.cast = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  player.stats.monsters.killed = 150;
  player.stats.fortyTwo = 55;
  player.stats.flash = 20;
  player.stats.primes = 1;
  player.stats.damage.dealt = 2000;
  player.stats.damage.received = 200;
  player.stats.damage.healed = 200;

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let monsterData = JSON.parse(this.responseText);
      catacombs(player, "addition", 3, 4, monsterData);
    }
  };
  xmlhttp.open("GET", "./monsterData.json", true);
  xmlhttp.send();

  //catacombs(player, "addition", 0, 4, monsterData)
  //overworld(player);
}

//-------------------------------------------------------------------//
//Game Intro functions                                               //
//-------------------------------------------------------------------//

function gameStart() {
  //
  //This function sets up the title screen of Mathemagicus
  function titleScreen() {
    const playArea = document.getElementById("playArea");
    clearElement(playArea);
    //
    //These five lines put the title on the screen
    let titleDiv = makeDiv("titleDiv");
    insertTextNode(titleDiv, "Mathemagicus");
    //
    //This block sets up the <table> that the New Game
    //and Continue buttons will be placed in
    let titleScreenButtons = document.createElement("table");
    titleScreenButtons.id = "titleScreenButtons";
    let tableRow = document.createElement("tr");
    let newGameTD = document.createElement("td");
    let continueTD = document.createElement("td");
    //
    //These lines put the New Game button in the table
    //and define its attributes
    const newGameButton = makeButton(newGame, "New Game", "", "startButtons");
    newGameTD.appendChild(newGameButton);
    tableRow.appendChild(newGameTD);
    //
    //These lines put the Continue button in the table
    //and define its attributes
    const continueButton = makeButton(testBook, "Continue", "", "startButtons");
    continueTD.appendChild(continueButton);
    tableRow.appendChild(continueTD);
    //
    //Puts the buttons from the <tr> into the <table>
    //then puts that <table> into the playArea
    titleScreenButtons.appendChild(tableRow);
    let fragment = insertElements(titleDiv, titleScreenButtons);
    playArea.appendChild(fragment);
  }
  //
  //The New Game screen with player name input
  function newGame() {
    const playArea = document.getElementById("playArea");
    removeElement("titleScreenButtons");
    //
    //This block displays the "Enter your name" prompt
    let enterNameDiv = makeDiv("enterNameDiv", "textBox");
    insertTextNode(enterNameDiv, "Please enter your name:");
    insertLineBreak(enterNameDiv);
    //
    //This block displays the text input box
    let nameTextBox = document.createElement("input");
    nameTextBox.type = "text";
    nameTextBox.id = "nameTextBox";
    enterNameDiv.appendChild(nameTextBox);
    insertLineBreak(enterNameDiv);
    //
    //This puts it all into the playArea and puts the focus on the nameTextBox
    playArea.appendChild(enterNameDiv);
    nameTextBox.focus();
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

    removeElement("titleDiv");
    removeElement("enterNameDiv")
    //
    //This block puts the NPC cameo on the screen
    let tellahDiv = makeDiv("tellah");
    let tellahImg = makeImg("Tellah.gif", "tellahImg");
    tellahDiv.appendChild(tellahImg);
    //
    //Object with data for the menu maker
    let avatarMenuSelectors = {
      target: "playArea",
      textId: "characterSelectText",
      text: "Choose your mage:",
      menuDiv: {
        idLeft: "characterDivLeft",
        idMiddle: "characterDivMiddle",
        idRight: "characterDivRight"
      },
      imgClass: "characterImg",
      buttonClass: "selectButtons",
      buttonId: {
        left: "leftButton",
        right: "rightButton"
      }
    };
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
      //
      //This block puts the text box onto the screen that will
      //display the intro text
      let introTextDiv = makeDiv("introTextDiv", "textBox");
      let fragment = insertElements(tellahDiv, introTextDiv);
      playArea.appendChild(fragment);

      //
      //This is the intro text for character selection
      let introText = "Welcome to Arithmeticia. You must be " + player.name +
                      ", the mage that we sent for. Let me get a better look at you.";
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
      let textString = "Ah, that's better. We asked you to come because we have a monster problem. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart2);
      });
    }
    function introPart2() {
      clearElement(introTextDiv);
      let textString = "The old catacombs beneath the city are overrun with monsters and they've been attacking the townsfolk. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart3);
      });
    }
    function introPart3() {
      clearElement(introTextDiv);
      let textString = "We need you to clear out the old catacombs to make our town safe again. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart4);
      });
    }
    function introPart4() {
      clearElement(introTextDiv);
      let textString = "Only one catacomb is open right now. The other three are sealed with some kind of magic. ";
      typer(textString, introTextDiv, function() {
        insertButton(introTextDiv, "Next", introPart5);
      });
    }
    function introPart5() {
      clearElement(introTextDiv);
      let textString = "Here are the catacombs. Thank you so much for your help getting rid of those monsters. ";
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

  player = new Player();

  titleScreen();
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
    if (player.level.subtraction) menuData.sprites[1][0] = "subtractionDoorOpen.gif";
    if (player.level.multiplication) menuData.sprites[2][0] = "multiplicationDoorOpen.gif";
    if (player.level.division) menuData.sprites[3][0] = "divisionDoorOpen.gif";
    menuMaker(selectors, imgData, callback, index);
  }
  //
  //Determines what to do next based on the player's
  //menu selection
  function menuSelection(imgData) {
    document.onkeyup = "";
    menuData.index = imgData.index;
    switch(imgData.index) {
      case 0:     //Addition Catacomb
        dungeonLevelMenu(player.level.addition, "addition");
        break;
      case 1:     //Subtraction Catacomb
        dungeonLevelMenu(player.level.subtraction, "subtraction");
        break;
      case 2:     //Multiplication Catacomb
        dungeonLevelMenu(player.level.multiplication, "multiplication");
        break;
      case 3:     //Division Catacomb
        dungeonLevelMenu(player.level.division, "division");
        break;
      case 4:     //Liber mathemagicus
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
    //This function returns to the overworld menu
    //from the Liber Mathemagicus
    function returnToDungeonMenu() {
      fadeTransition(null, playArea, 500, function() {
        launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection, menuData.index);
      });
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
  //Controls the Liber Mathemagicus, the book that is
  //the status information for the player
  function liberMathemagicus(monsterData) {
    let spellBookContent = [
      ["Fibonacci's Associative Spell", "fibonacciSpellBook1.gif"],
      ["Fibonacci's Distributive Spell", "fibonacciSpellBook2.gif"],
      ["Fibonacci's Distributive Spell 2", "fibonacciSpellBook3.gif"],
      ["Euclid's Fireball Spell", "triangleSpellBook.gif"],
      ["Nightengale's Healiing Spell", "squareSpellBook.gif"],
      ["Huygen's Stop Time Spell", "pyramidSpellBook.gif"],
      ["Lovelace's Reduction Spell", "pentagonSpellBook.gif"],
      ["Hercules' Strength Spell", "hexagonSpellBook.gif"],
      ["Fermet's Polymorph Monster Spell", "cubeSpellBook.gif"],
      ["Brahe's Nova Spell", "starSpellBook.gif"]
    ];
    //
    //These two functions are left empty so they
    //can save a few lines in the book page functions
    let pageLeft = function() {}
    let pageRight = function() {}
    //
    //This function returns to the overworld menu
    //from the Liber Mathemagicus
    function returnToMenu() {
      playArea.style.filter = "brightness(0%)";
      setTimeout(function() {
        removeElement("bookReturnButton", "monsterBook");
        playArea.style.filter = "brightness(100%)";
        launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection, 4);
      }, 500);
    }
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
        console.clear();
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
      insertTextNode(p, "Monsters Killed: " + player.stats.monsters.killed);
      status.appendChild(p);
      //
      //This displays the different levels of the player
      p = document.createElement("p");
      makeStats(p, "Addition Level: ", player.level.addition, player.stats.averages.addition);
      makeStats(p, "Subtraction Level: ", player.level.subtraction, player.stats.averages.subtraction);
      makeStats(p, "Multiplication Level: ", player.level.multiplication, player.stats.averages.multiplication);
      makeStats(p, "Division Level: ", player.level.division, player.stats.averages.division);
      status.appendChild(p);

      const saveGame = makeButton(null, "Save Game", "saveGame");
      status.appendChild(saveGame);

      return status;
    }
    //
    //This function makes the layout of the spells
    //page of the player's book.
    function spellsPage() {
      let spells = makeDiv("spellsPage", "bookPage");
      //
      //Determines the function of the page turning butttons
      if (player.spells.learned[0] >= 0) {
        pageLeft = function() {
          turnPageLeft(spells, spellDetailPage, player.spells.learned[0]);
        }
      } else {
        pageLeft = function() {
          turnPageLeft(spells, monstersPage);
        }
      }
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
      for (let index in player.spells.learned) {
        let span = document.createElement("span");
        span.onclick = function() {
          turnPageLeft(spells, spellDetailPage, (index - 1));
        }
        insertTextNode(span, spellBookContent[player.spells.learned[index]][0])
        insertLineBreak(span);
        spells.appendChild(span);
        index++;
      }

      return spells;
    }
    //
    //This function handles the individual spell pages
    //index is the index of player.spells.learned
    function spellDetailPage(index) {
      let spell = makeDiv("spellsDetailPage", "bookPage");
      //
      //Determines the function of the page turning butttons
      if (player.spells.learned.indexOf(index) === 0) {
        pageRight = function() {
          turnPageRight(spell, spellsPage);
        }
      } else {
        pageRight = function() {
          turnPageRight(spell, spellDetailPage, (index - 1));
        }
      }
      if (index < (player.spells.learned.length - 1)) {
        pageLeft = function() {
          turnPageLeft(spell, spellDetailPage, (index + 1));
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
      let spellImg = makeImg("./scrolls/" + spellBookContent[player.spells.learned[index]][1]);
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
      if (player.spells.learned[0] >= 0) {
        pageRight = function() {
          turnPageRight(monsters, spellDetailPage, (player.spells.learned.length - 1));
        }
      } else {
        pageRight = function() {
          turnPageRight(monsters,spellsPage);
        }
      }
      if (typeof(player.stats.monsters.addition[0]) === "object") {
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
      showTypeInfo("+", monsters, "Addition Monsters", player.stats.monsters.addition);
      showTypeInfo("-", monsters, "Subtraction Monsters", player.stats.monsters.subtraction);
      showTypeInfo("*", monsters, "Multiplication Monsters", player.stats.monsters.multiplication);
      showTypeInfo("/", monsters, "Division Monsters", player.stats.monsters.division);

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
          setArrayValues(player.stats.monsters.addition, monsterData.addition);
          makePageTitle("Addition Monsters", monsterList)
          pageRight = function() {turnPageRight(monsterList, monstersPage);}
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["+", player.stats.monsters.addition[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
        case "-":
          setArrayValues(player.stats.monsters.subtraction, monsterData.subtraction);
          makePageTitle("Subtraction Monsters", monsterList)
          last = (player.stats.monsters.addition.length - 1);
          pageRight = function() {
            turnPageRight(monsterList, monsterDetailPage, ["+", player.stats.monsters.addition[last][0]]);
          }
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["-", player.stats.monsters.subtraction[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;

          break;
        case "*":
          setArrayValues(player.stats.monsters.multiplication, monsterData.multiplication);
          makePageTitle("Multiplication Monsters", monsterList)
          last = (player.stats.monsters.subtraction.length - 1);
          pageRight = function() {
            turnPageRight(monsterList, monsterDetailPage, ["-", player.stats.monsters.subtraction[last][0]]);
          }
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["*", player.stats.monsters.multiplication[0][0]]);
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;

          break;
        case "/":
          setArrayValues(player.stats.monsters.division, monsterData.division);
          makePageTitle("Division Monsters", monsterList)
          last = (player.stats.monsters.multiplication.length - 1);
          pageRight = function() {
            turnPageRight(monsterList, monsterDetailPage, ["*", player.stats.monsters.multiplication[last][0]]);
          }
          pageLeft = function() {
            turnPageLeft(monsterList, monsterDetailPage, ["/", player.stats.monsters.division[0][0]]);
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
          setArrayValues(player.stats.monsters.addition, monsterData.addition);
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
            if ((player.stats.monsters.subtraction[0] + 1)) {
              pageLeft = function() {turnPageLeft(monsterDetail, monsterBasePage, "-");}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
        case "-":
          setArrayValues(player.stats.monsters.subtraction, monsterData.subtraction);
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
            if ((player.stats.monsters.multiplication[0] + 1)) {
              pageLeft = function() {turnPageLeft(monsterDetail, monsterBasePage, "*");}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick = pageLeft;
          break;
        case "*":
          setArrayValues(player.stats.monsters.multiplication, monsterData.multiplication);
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
            if ((player.stats.monsters.division[0] + 1)) {
              pageLeft = function() {turnPageLeft(monsterDetail, monsterBasePage, "/");}
            } else {
              pageLeft = function() {turnPageLeft(monsterDetail, achievementsPage);}
            }
          }
          turnButton[0].onclick = pageRight;
          turnButton[1].onclick= pageLeft;
          break;
        case "/":
          setArrayValues(player.stats.monsters.division, monsterData.division);
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
      if (Array.isArray(player.stats.monsters.division[0])) {
        let index = player.stats.monsters.division.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["/", player.stats.monsters.division[index][0]]);
        }
      } else if (Array.isArray(player.stats.monsters.multiplication[0])) {
        let index = player.stats.monsters.multiplication.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["*", player.stats.monsters.multiplication[index][0]]);
        }
      } else if (Array.isArray(player.stats.monsters.subtraction[0])) {
        let index = player.stats.monsters.subtraction.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["-", player.stats.monsters.subtraction[index][0]]);
        }
      } else if (Array.isArray(player.stats.monsters.addition[0])) {
        let index = player.stats.monsters.addition.length - 1;
        pageRight = function() {
          turnPageRight(achievementPage, monsterDetailPage, ["+", player.stats.monsters.addition[index][0]]);
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
      setAchievement(td, player.stats.monsters.killed, [100, 200, 500], "monsters killed.");
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
      let attackSpells = (player.spells.cast[3] + player.spells.cast[9]);
      setAchievement(td, attackSpells, [5, 10, 25], "attack spells cast.");
      tr.appendChild(td);
      //
      //This controls the achievement for how many times the
      //player has used the fibonacci magic
      td = makeAchievementElement("help.png");
      let hintSpells = (player.spells.cast[0] + player.spells.cast[1] + player.spells.cast[2] + player.spells.cast[10] + player.spells.cast[11]);
      setAchievement(td, hintSpells, [5, 10, 25], "Fibonacci spells cast.");
      tr.appendChild(td);
      table.appendChild(tr);

      tr = document.createElement("tr");
      //
      //This controls the achievement for how many spells
      //the player has cast
      td = makeAchievementElement("spell-book.png");
      let totalSpellsCast = player.spells.cast.reduce(getSum);
      setAchievement(td, totalSpellsCast, [10, 50, 100], "spells cast.");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the addition dungeon
      td = makeAchievementElement("laurels-plus.png");
      setDungeonAchievement(td, player.stats.monsters.addition, player.level.addition, "Addition");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the subtraction dungeon
      td = makeAchievementElement("laurels-minus.png");
      setDungeonAchievement(td, player.stats.monsters.subtraction, player.level.subtraction, "Subtraction");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the multiplication dungeon
      td = makeAchievementElement("laurels-times.png");
      setDungeonAchievement(td, player.stats.monsters.multiplication, player.level.multiplication, "Multiplication");
      tr.appendChild(td);
      //
      //This controls the achievement for the players progress
      //through the division dungeon
      td = makeAchievementElement("laurels-divide.png");
      setDungeonAchievement(td, player.stats.monsters.division, player.level.division, "Division");
      tr.appendChild(td);

      table.appendChild(tr);

      achievementPage.appendChild(table);

      return achievementPage;


    }

    let fragment = document.createDocumentFragment();
    //
    //Makes the button that will return the player to the
    //main overworld menu
    const bookReturnButton = makeButton(returnToMenu, "Return to Menu", "bookReturnButton");
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

  let playArea = document.getElementById("playArea");
  //
  //The image data for the overworld menu
  let menuData = {
    sprites: [
      ["additionDoorOpen.gif", "Addition Catacombs"],
      ["subtractionDoorClosed.gif", "Subtraction Catacombs"],
      ["multiplicationDoorClosed.gif", "Multiplication Catacombs"],
      ["divisionDoorClosed.gif", "Division Catacombs"],
      ["book.gif", "Liber Mathemagicus"]
    ],
    path: "./doors/",
    index: 0
  }
  //
  //The selector data to make sure the overworld menu
  //is styled properly
  let overworldMenuSelectors = {
    target: "playArea",
    textId: "overworldMenuText",
    text: "Choose your catacomb:",
    menuDiv: {
      idLeft: "overworldDivLeft",
      idMiddle: "overworldDivMiddle",
      idRight: "overworldDivRight"
    },
    imgClass: "overworldMenuImg",
    hoverClass: "overworldMenuHover",
    buttonClass: "overworldButtons",
    buttonId: {
      left: "overworldButtonLeft",
      right: "overworldButtonRight"
    }
  };

  //
  //Makes the overworld menu and puts it on the screen
  fadeTransition(null, playArea, 500, function() {
    launchOverworldMenu(overworldMenuSelectors, menuData, menuSelection);
  })

}

//-------------------------------------------------------------------//
//Catacomb functions                                                 //
//-------------------------------------------------------------------//

function catacombs(player, operation, timerValue, catacombLevel, monsterData) {
  //
  //Holds the value of the players level in the
  //current catacomb
  const currentLevel = {
    "addition": player.level.addition,
    "subtraction": player.level.subtraction,
    "multiplication": player.level.multiplication,
    "division": player.level.division
  }
  //
  //Makes the monster object
  class Monster {
    constructor(catacombLevel) {
      if (currentLevel[operation] > catacombLevel) {
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
      this.hp = 2
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
    //Makes the spell icons that display available
    //spells and allow the player to cast them
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
    fragment.appendChild(countdownBarBack);
    //
    //creates the spell icons for the combat div
    let spellBar = makeDiv("spellBar");
    let imgSrc = "./spellIcons/";
    makeSpellIcon("fibonacci", player.spells.fibonacci);
    makeSpellIcon("triangle", player.spells.triangle);
    makeSpellIcon("square", player.spells.square);
    makeSpellIcon("pentagon", player.spells.pentagon);
    makeSpellIcon("hexagon", player.spells.hexagon);
    makeSpellIcon("pyramid", player.spells.pyramid);
    makeSpellIcon("cube", player.spells.cube);
    makeSpellIcon("star", player.spells.star);
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
        if (this.timeIndex) {
          return this.totalTime - this.timeLeft;
        } else {
          return (this.totalTime - this.timeLeft) / 1000;
        }
      }

      timeDown() {
        if (this.width < 1) {
          this.width = 340;
          this.totalTime += this.increment;
          damagePlayer();
        } else {
          this.width -= this.decrement;
          countdownBarFront.style.width = this.width + "px";
          this.timeLeft = (this.width / (this.decrement * 100));
          countdownTimer.innerHTML = this.timeLeft.toFixed(2);
        }
      }

      startTimer() {
        this.timeLeft = new Date();
      }

      stopTimer() {
        this.totalTime = new Date();
        this.time += this.totalTime - this.timeLeft;

      }

      stopTime() {
        if (this.timeIndex) {
          clearInterval(this.time);
        } else {
          this.stopTimer();
        }
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
    //
    //Gets the next monster and sends the player
    //back to the getProblem() function
    const nextMonster = function() {
      monster = new Monster(catacombLevel);
      monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
      monsterImg.style.filter = "brightness(100%)";
      getProblem();
    }

    const intermission = function() {
      let problemDiv = document.getElementById("problemDiv");
      problemDiv.innerHTML = "You're doing great! You've defeated " + monsterInterval + " monsters!";
      insertLineBreak(problemDiv);
      insertButton(problemDiv, "Continue", nextMonster);
      insertTextNode(problemDiv, " ");
      insertButton(problemDiv, "Return to Surface", function() {
        overworld(player);
      });
    }
    //
    //This function checks for specific key presses in the answer input box
    //event is the key press
    //answer is the answer to the question that will be passed to the
    //checkAnswer() function if enter is pressed
    const checkKeyPress = function(event, answer) {
      var key = event.which;
      switch(key) {
        case 13: //Enter key, check answer
          checkAnswer(answer);
          break;
        case 97: //"a" key, Fibonacci Spell
          event.preventDefault(); //prevents the writing of the "a" key
          if (fibonacciCast) {
            break;
          }
          if (additionLevel > 2) {
            castFibonacci();
          }
          break;
        case 115: //"s" key, Triangle Spell
          event.preventDefault(); //prevents the writing of the "s" key
          if (subtractionLevel > 2) {
            castTriangle();
          }
          break;
        case 100: //"d" key, Square Spell
          event.preventDefault(); //prevents the writing of the "d" key
          if (additionLevel > 6) {
            castSquare();
          }
          break;
        case 101: //"e" key, Pentagon Spell
          event.preventDefault(); //prevents the writing of the "e" key
          if (pentagonCast) {
            break;
          }
          if (subtractionLevel > 8) {
            castPentagon();
          }
          break;
        case 102: //"f" key, Pyramid Spell
          event.preventDefault(); //prevents the writing of the key
          if (pyramidCast) {
            break;
          }
          if (additionLevel > 8) {
            castPyramid();
          }
          break;
        case 113: //"q" key, Cube Spell
          event.preventDefault(); //prevents the writing of the key
          if (cubeCast) {
            break;
          }
          if (divisionLevel > 2) {
            castCube();
          }
          break;
        case 114: //"r" key, Hexagon Spell
          event.preventDefault(); //prevents the writing of the key
          if (multiplicationLevel > 8) {
            castHexagon();
          }
          break;
        case 119: //"w" key, Nova Spell
          event.preventDefault(); //prevents the writing of the key
          if (divisionLevel > 8) {
            castStar();
          }
          break;
      }
    }
    //
    //Finds the type of problem to display
    const findProblemType = function() {
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
    //Makes and displays the math problems
    const getProblem = function(code = 1) {
      const sign = {
        "addition": "+",
        "subtraction": "-",
        "multiplication": "×",
        "division": "÷"
      }
      //
      //Gets the terms for the problems
      const getTerms = function() {
        let constant1 = null;
        let constant2 = null;
        let answer = null;
        switch (operation) {
          case "addition": //Addition
            constant1 = getRandomNumber(0, (monster.level * 10));
            constant2 = getRandomNumber(0, (monster.level * 10));
            answer = constant1 + constant2;
            break;
          case "subtraction": //Subtraction
            constant1 = getRandomNumber(1, (monster.level * 10));
            constant2 = getRandomNumber(0, (monster.level * 10));
            while (constant2 > constant1) {
              constant2 = getRandomNumber(0, (monster.level * 10));
            }
            answer = constant1 - constant2;
            break;
          case "multiplication": //Multiplication
            constant1 = getRandomNumber(1, (monster.level + 5));
            constant2 = getRandomNumber(0, ((monster.level + 5) - ((((monster.level % 2) + monster.level) / 2) - 1)));
            answer = constant1 * constant2;
            break;
          case "division": //Division
            constant2 = getRandomNumber(1, (monster.level + 5));
            answer = getRandomNumber(1, ((monster.level + 5) - ((((monster.level % 2) + monster.level) / 2) - 1)));
            constant1 = constant2 * answer;
            break;
        }
        return [constant1, constant2, answer];
      }
      //
      //Makes and inserts the <span> for my red numbers
      function insertProblemSpan(target, text) {
        let span = document.createElement("span");
        insertTextNode(span, " " + text + " ");
        span.style.color = "#ffbaba";
        target.appendChild(span);
      }
      //
      //Makes and inserts the number input box
      function insertAnswerInput(target) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "answerInput";
        input.onkeypress = function() {
          checkKeyPress(event, terms[2]);
        }
        insertTextNode(target, "= ");
        target.appendChild(input);
      }

      let terms = null;
      if (code) {terms = getTerms();}
      let problemDiv = document.getElementById("problemDiv");
      let fragment = document.createDocumentFragment();

      clearElement(problemDiv);
      insertTextNode(fragment, terms[0] + " " + sign[operation]);
      insertProblemSpan(fragment, terms[1]);
      insertAnswerInput(fragment)

      problemDiv.appendChild(fragment);

      timer = new Timer(timerValue);
      if (timerValue > 0) {
        setTimeout(function() {
          timer.time = setInterval(function() {
            timer.timeDown();
          }, 10);
        }, 250);
      } else {
        timer.startTimer();
      }

      let answerInput = document.getElementById("answerInput");
      answerInput.focus();

    }

    const getNumberData = function(answer) {

      const getAverage = function(averageTime, newNumber) {
        averageTime[0] = ((averageTime[0] * averageTime[1]) + newNumber) / (averageTime[1] + 1);
        averageTime[1]++;
        return averageTime;
      }

      const saveAverage = function() {
        switch (operation) {
          case "addition":
            player.stats.averages.addition = getAverage(player.stats.averages.addition, timer.answerTime);
            break;
          case "subtraction":
            player.stats.averages.subtraction = getAverage(player.stats.averages.subtraction, timer.answerTime);
            break;
          case "multiplication":
            player.stats.averages.multiplication = getAverage(player.stats.averages.multiplication, timer.answerTime);
            break;
          case "division":
            player.stats.averages.division = getAverage(player.stats.averages.division, timer.answerTime);
            break;
        }
      }

      saveAverage();
      if (timer.answerTime <= 1) {
        player.stats.flash++;
      }
      if (timer.timeLeft <= 1) {
        player.stats.lastSecond++;
      }
      if (answer === 42) {
        player.stats.fortyTwo++;
      }
      if (isPrime(answer)) {
        player.stats.primes++;
      }
    }
    //
    //Checks the answer to my problems
    const checkAnswer = function(answer) {

      let answerInput = document.getElementById("answerInput");
      if (parseInt(answerInput.value) === answer) {
        timer.stopTime();
        getNumberData(answer);
        damageMonster();
      } else {
        damagePlayer();
        if (problemDiv.lastChild.nodeType > 1) {removeLastChild(problemDiv, 3);}
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
          switch(operation) {
            case "addition":
              if (monsterSearch(player.stats.monsters.addition, monster.index)) {
                let monsterIndex = findMonster(player.stats.monsters.addition, monster.index);
                player.stats.monsters.addition[monsterIndex][1]++;
                break;
              } else {
                player.stats.monsters.addition.push([monster.index, 1]);
                player.stats.monsters.addition.sort(function(a, b){return a[0] - b[0]});
              }
              break;
            case "subtraction":
              if (monsterSearch(player.stats.monsters.subtraction, monster.index)) {
                let monsterIndex = findMonster(player.stats.monsters.subtraction, monster.index);
                player.stats.monsters.subtraction[monsterIndex][1]++;
                break;
              } else {
                player.stats.monsters.subtraction.push([monster.index, 1]);
                player.stats.monsters.subtraction.sort(function(a, b){return a[0] - b[0]});
              }
              break;
            case "multiplication":
              if (monsterSearch(player.stats.monsters.multiplication, monster.index)) {
                let monsterIndex = findMonster(player.stats.monsters.multiplication, monster.index);
                player.stats.monsters.multiplication[monsterIndex][1]++;
                break;
              } else {
                player.stats.monsters.multiplication.push([monster.index, 1]);
                player.stats.monsters.multiplication.sort(function(a, b){return a[0] - b[0]});
              }
              break;
            case "division":
              if (monsterSearch(player.stats.monsters.division, monster.index)) {
                let monsterIndex = findMonster(player.stats.monsters.division, monster.index);
                player.stats.monsters.division[monsterIndex][1]++;
                break;
              } else {
                player.stats.monsters.division.push([monster.index, 1]);
                player.stats.monsters.division.sort(function(a, b){return a[0] - b[0]});
              }
              break;
          }
        }

        player.stats.monsters.killed++;
        monsterInterval++
        processMonster();
        problemDiv.innerHTML = "Great job, you defeated the " + monster.name + "!<br /><br />";
        if ((monsterInterval % 5) === 0) {
          setTimeout(intermission, 1000);
        } else {
          setTimeout(nextMonster, 1000);
        }
      }

      player.stats.damage.dealt += player.totalDamage;
      monster.hp = (player.totalDamage > monster.hp) ? 0:(monster.hp - player.totalDamage);

      let monsterHealthBarFront = document.getElementById("monsterHealthBarFront");
      monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";

      insertDamageNumbers(monsterDiv, player.totalDamage);

      let flash = new DamageFlash();
      flash.flash = setInterval(function() {
        flash.monster();
      }, 100);

      if (monster.hp) {
        getProblem();
      } else {
        killMonster();
      }
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

          let tellahDiv = makeDiv("tellah");
          let tellahImg = makeImg("Tellah.gif", "tellahImg");
          tellahDiv.appendChild(tellahImg);

          let introTextDiv = makeDiv("introTextDiv", "textBox");
          //
          //a button that lets the player skip the game intro
          const skipButton = makeButton(function() {
            overworld(player);
          }, "Skip", "skipButton");

          let fragment = insertElements(tellahDiv, introTextDiv, skipButton);
          playArea.appendChild(fragment);

          playArea.style.filter = "brightness(100%)";

          player.health = player.maxHealth;
          rescuePart1();
        }

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
            console.log("You dead");
          }
        }
      }, 250);
    }

    let monster = new Monster(catacombLevel);
    let timer = new Timer(timerValue);
    let monsterInterval = 0;
    getProblem();
  }

  let playArea = document.getElementById("playArea");

  catacombIntro();
}
