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
//This removes one HTML element from another one
//child is the element to be removed
//parent is the element to remove child from
function removeElement(elementID) {
  let element = document.getElementById(elementID);
  element.parentNode.removeChild(element);
}
//
//Inserts a <br /> element into the DOM
//element is the parent element into which the
//<br /> will be inserted
function insertLineBreak(element) {
  let lineBreak = document.createElement("br");
  element.appendChild(lineBreak);
}
//
//Inserts a text node into a DOM element
//element is the element into which the node
//is inserted
//text is the text that comprises the node
function insertTextNode(element, text) {
  let node = document.createTextNode(text);
  element.appendChild(node);
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
//Puts a button that says "next" onto the screen
//target is the element the button will be appended to
//nextFunction is the the function called when it's clicked
function makeNextButton(target, nextFunction) {
  const nextButton = document.createElement("input");
  nextButton.type = "button";
  nextButton.value = "Next";
  nextButton.id = "nextButton";
  nextButton.onclick = nextFunction;
  target.appendChild(nextButton);
  setTimeout(function() {
    nextButton.focus();
  }, 100);
}
//
//This makes my menus
//selector is an object w/ ID and class information
//imgData is an object with image information
//callback is the function that is run when the menu
//item is selected
function menuMaker(selector, imgData, callback) {
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
    menuImgMiddle.onclick = function() {
      callback(imgData);
    };
    //
    //This makes a new right <div> to replace the one that
    //was shifted to the middle
    menuDivRight = document.createElement("div");
    menuDivRight.id = selector.menuDiv.idRight;
    menuImgRight = document.createElement("img");
    menuImgRight.className = selector.imgClass;
    menuImgRight.src = imgData.path + imgData.sprites[(imgData.index + 1) % imgData.sprites.length][0];
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
    menuImgMiddle.onclick = function() {
      callback(imgData);
    };
    //
    //This makes a new left <div> to replace the one that
    //was shifted to the middle
    menuDivLeft = document.createElement("div");
    menuDivLeft.id = selector.menuDiv.idLeft;
    menuImgLeft = document.createElement("img");
    menuImgLeft.className = selector.imgClass;
    menuImgLeft.src = imgData.path +
      imgData.sprites[(imgData.index + (imgData.sprites.length - 1)) % imgData.sprites.length][0];
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
        callback(imgData);
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
  let menuSelectText = document.createElement("div");
  menuSelectText.id = selector.textId;
  menuSelectText.innerHTML = selector.text;
  setTimeout(function() {
    menuSelectText.innerHTML = imgData.sprites[imgData.index][imgData.sprites[0].length - 1];
  }, 2000);
  //
  //This <div> is set up outside of the visible play area
  //ready to slide onscreen when an arrow is clicked
  let menuDivLeft = document.createElement("div");
  menuDivLeft.id = selector.menuDiv.idLeft;
  let menuImgLeft = document.createElement("img");
  menuImgLeft.className = selector.imgClass;
  menuImgLeft.src = imgData.path + imgData.sprites[imgData.sprites.length - 1][0];
  menuDivLeft.appendChild(menuImgLeft);
  //
  //This <div> is the visible menu selection. If it
  //is clicked, it will trigger the callback function
  let menuDivMiddle = document.createElement("div");
  menuDivMiddle.id = selector.menuDiv.idMiddle;
  let menuImgMiddle = document.createElement("img");
  menuImgMiddle.className = selector.imgClass;
  menuImgMiddle.src = imgData.path + imgData.sprites[0][0];
  menuImgMiddle.onclick = function() {
    document.onkeypress = "";
    callback(imgData);
  }
  menuDivMiddle.appendChild(menuImgMiddle);
  //
  //This <div> is set up outside of the visible play area
  //ready to slide onscreen when an arrow is clicked
  let menuDivRight = document.createElement("div");
  menuDivRight.id = selector.menuDiv.idRight;
  let menuImgRight = document.createElement("img");
  menuImgRight.className = selector.imgClass;
  menuImgRight.src = imgData.path + imgData.sprites[1][0];
  menuDivRight.appendChild(menuImgRight);
  //
  //These two blocks put the buttons onscreen that let the
  //player manipulate the menu
  let leftButton = document.createElement("input");
  leftButton.id = selector.buttonId.left;
  leftButton.className = selector.buttonClass;
  leftButton.type = "button";
  leftButton.value = "<";
  leftButton.onclick = shiftRight;

  let rightButton = document.createElement("input");
  rightButton.id = selector.buttonId.right;
  rightButton.className = selector.buttonClass;
  rightButton.type = "button";
  rightButton.value = ">";
  rightButton.onclick = shiftLeft;
  //
  //This block puts all of the elements that have been
  //made onto the webpage
  let fragment = document.createDocumentFragment();
  fragment.appendChild(menuSelectText);
  fragment.appendChild(leftButton);
  fragment.appendChild(menuDivLeft);
  fragment.appendChild(menuDivMiddle);
  fragment.appendChild(menuDivRight);
  fragment.appendChild(rightButton);
  let target = document.getElementById(selector.target);
  target.appendChild(fragment);
}
//
//Clears the DOM elements made by the menuMaker()
//selector is the same as in the menuMaker()
function clearMenu(selector) {
  removeElement(selector.textId);
  removeElement(selector.buttonId.left);
  removeElement(selector.menuDiv.idLeft);
  removeElement(selector.menuDiv.idMiddle);
  removeElement(selector.menuDiv.idRight);
  removeElement(selector.buttonId.right);
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
    /*this.possessive = function() {  //The possessive form of the player's name
      if (this.name.charAt(this.name.length - 1) === "s") {
        return this.name + "'";
      } else {
        return this.name + "'s";
      }
    }*/
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
      monstersKilled: 0,
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

  get possessive() {
    if (this.name.charAt(this.name.length - 1) === "s") {
    return this.name + "'";
    } else {
    return this.name + "'s";
    }
  }
}

function testBook() {
  player = new Player();
  player.name = "Shady";
  player.maxHealth = 100;
  player.damage = 10;
  player.level.addition = 1;
  player.stats.averages.addition = [100, 100];
  player.level.subtraction = 1;
  player.stats.averages.subtraction = [100, 100];
  player.level.multiplication = 1;
  player.stats.averages.multiplication = [100, 100];
  player.level.division = 1;
  player.stats.averages.division = [100, 100];
  player.stats.monstersKilled = 9;
  player.sprites.path = "./mages/";
  player.sprites.files = ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif", "Cat Mage"];
  player.spells.learned = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


  overworld(player);
}

//-------------------------------------------------------------------//
//Game Intro functions                                               //
//-------------------------------------------------------------------//

//
//This function sets up the title screen of Mathemagicus
function titleScreen() {

  const playArea = document.getElementById("playArea");
  clearElement(playArea);
  //
  //These five lines put the title on the screen
  let titleDiv = document.createElement("div");
  titleDiv.id = "titleDiv";
  let title = document.createTextNode("Mathemagicus");
  titleDiv.appendChild(title);
  playArea.appendChild(titleDiv);
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
  let newGameButton = document.createElement("input");
  newGameButton.type = "button";
  newGameButton.value = "New Game";
  newGameButton.className = "startButtons";
  newGameButton.onclick = function() {
    //deleteValues();
    newGame();
  }
  newGameTD.appendChild(newGameButton);
  tableRow.appendChild(newGameTD);
  //
  //These lines put the Continue button in the table
  //and define its attributes
  let continueButton = document.createElement("input");
  continueButton.type = "button";
  continueButton.value = "Continue";
  continueButton.className = "startButtons";
  //continueButton.onclick = retrieveValues;
  continueButton.onclick = testBook;
  continueTD.appendChild(continueButton);
  tableRow.appendChild(continueTD);
  //
  //Finally, we put the buttons we put in our <tr>
  //into the <table> we made, then put that <table>
  //into our playArea
  titleScreenButtons.appendChild(tableRow);
  playArea.appendChild(titleScreenButtons);
}
//
//The New Game screen with player name input
function newGame() {
  const playArea = document.getElementById("playArea");
  removeElement("titleScreenButtons");
  //
  //This block displays the "Enter your name" prompt
  let enterNameDiv = document.createElement("div");
  enterNameDiv.id = "enterNameDiv";
  enterNameDiv.className = "textBox";
  let enterName = document.createTextNode("Please enter your name:");
  enterNameDiv.appendChild(enterName);
  insertLineBreak(enterNameDiv);
  //
  //This block displays the text input box
  let nameTextBox = document.createElement("input");
  nameTextBox.type = "text";
  nameTextBox.id = "nameTextBox";
  nameTextBox.setAttribute("onKeyUp", "if(event.keyCode===13) chooseCharacter()")
  enterNameDiv.appendChild(nameTextBox);
  insertLineBreak(enterNameDiv);
  //
  //This puts it all into the playArea and puts the focus on the nameTextBox
  playArea.appendChild(enterNameDiv);
  document.getElementById("nameTextBox").focus();
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

    storyIntro(player);
  }
  //
  //Creates a new object for the player and their data
  player = new Player();
  player.name = document.getElementById("nameTextBox").value

  removeElement("titleDiv");
  removeElement("enterNameDiv")
  //
  //This block puts the NPC cameo on the screen
  let tellahDiv = document.createElement("div");
  let tellahImg = document.createElement("img");
  tellahImg.src = "Tellah.gif";
  tellahImg.id = "tellahImg";
  tellahDiv.id = "tellah";
  tellahDiv.appendChild(tellahImg);
  playArea.appendChild(tellahDiv);
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
    let introTextDiv = document.createElement("div");
    introTextDiv.className = "textBox";
    introTextDiv.id = "introTextDiv";
    playArea.appendChild(introTextDiv);

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
function storyIntro(player) {
  //
  //These functions display the text for the story
  //introduction of the game
  function introPart1() {
    clearElement(introTextDiv);
    let textString = "Ah, that's better. We asked you to come because we have a monster problem. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart2);
    });
  }
  function introPart2() {
    clearElement(introTextDiv);
    let textString = "The old catacombs beneath the city are overrun with monsters and they've been attacking the townsfolk. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart3);
    });
  }
  function introPart3() {
    clearElement(introTextDiv);
    let textString = "We need you to clear out the old catacombs to make our town safe again. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart4);
    });
  }
  function introPart4() {
    clearElement(introTextDiv);
    let textString = "Only one catacomb is open right now. The other three are sealed with some kind of magic. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart5);
    });
  }
  function introPart5() {
    clearElement(introTextDiv);
    let textString = "Here are the catacombs. Thank you so much for your help getting rid of those monsters. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, function() {
        overworld(player);
      });
    });
  }

  const playArea = document.getElementById("playArea");
  const introTextDiv = document.getElementById("introTextDiv");
  //
  //a button that lets the player skip the game intro
  let skipButton = document.createElement("input");
  skipButton.id = "skipButton";
  skipButton.type = "button";
  skipButton.value = "Skip Intro";
  skipButton.onclick = function() {
    overworld(player);
  }
  playArea.appendChild(skipButton);
  introPart1();
}

//-------------------------------------------------------------------//
//Overworld functions                                                //
//-------------------------------------------------------------------//

//
//Everything that happens in the overworld happens in this function
function overworld(player) {
  //
  //This checks the players level to see which dungeons
  //are accessible
  function checkLevels() {
    if (player.level.subtraction) {
      menuData.sprites[1][0] = "subtractionDoorOpen.gif";
    }
    if (player.level.multiplication) {
      menuData.sprites[2][0] = "multiplicationDoorOpen.gif";
    }
    if (player.level.division) {
      menuData.sprites[3][0] = "divisionDoorOpen.gif";
    }
  }
  //
  //Determines what to do next based on the player's
  //menu selection
  function menuSelection(imgData) {
    document.onkeyup = "";
    switch(imgData.index) {
      case 0:     //Addition Catacomb
        spud();
        break;
      case 1:     //Subtraction Catacomb
        spud();
        break;
      case 2:     //Multiplication Catacomb
        spud();
        break;
      case 3:     //Division Catacomb
        spud();
        break;
      case 4:     //Liber mathemagicus
        liberMathemagicus();
        break;
    }
  }
  //
  //Controls the Liber Mathemagicus, the book that is
  //the status information for the player
  function liberMathemagicus() {
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

    let possesive = null;
    if (player.name.charAt(player.name.length - 1) === "s") {
      possessive = "'";
    } else {
      possessive = "'s";
    }
    //
    //This function returns to the overworld menu
    //from the Liber Mathemagicus
    function returnToMenu() {
      playArea.style.filter = "brightness(0%)";
      setTimeout(function() {
        removeElement("returnButton");
        removeElement("monsterBook");
        playArea.style.filter = "brightness(100%)";
        overworld(player);
      }, 500);
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
      let pageTurnButtons = document.createElement("div");
      pageTurnButtons.id = "pageTurnButtons";

      let leftButton = document.createElement("input");
      leftButton.className = "turnPageButtons";
      leftButton.id = "leftPageButton";
      leftButton.type = "button";
      leftButton.value = "<";
      pageTurnButtons.appendChild(leftButton);

      let rightButton = document.createElement("input");
      rightButton.className = "turnPageButtons";
      rightButton.id = "rightPageButton";
      rightButton.type = "button";
      rightButton.value = ">";
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
      //
      //Puts together a quick button for the Quick
      //Button link bar
      function quickButton(name) {
        let button = document.createElement("input");
        button.className = "quickButtons";
        button.type = "button";
        button.value = name;
        return button;
      }

      let quickButtonDiv = document.createElement("div");
      quickButtonDiv.id = "quickButtonDiv";

      let contentsButton = quickButton("TOC");
      quickButtonDiv.appendChild(contentsButton);

      let statusButton = quickButton("Status");
      quickButtonDiv.appendChild(statusButton);

      let spellsButton = quickButton("Spells");
      quickButtonDiv.appendChild(spellsButton);

      let monstersButton = quickButton("Monsters");
      quickButtonDiv.appendChild(monstersButton);

      let achievementsButton = quickButton("Achievements");
      quickButtonDiv.appendChild(achievementsButton);

      targetElement.appendChild(quickButtonDiv);

      return quickButtonDiv;
    }
    //
    //This function makes the cover of my book even
    //though it is called title page
    function makeTitlePage() {
      let titlePage = document.createElement("div");
      titlePage.className = "bookPage";
      titlePage.id = "titlePage";
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
        console.log("hey");
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
      let tableOfContents = document.createElement("div");
      tableOfContents.className = "bookPage";
      tableOfContents.id = "tableOfContents";
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
      turnButton[0].onclick = function() {turnPageRight(tableOfContents, makeTitlePage);}
      turnButton[1].onclick = function() {turnPageLeft(tableOfContents, statusPage);}
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        switch (e.keyCode) {
          case 37:
            document.onkeyup = "";
            turnPageRight(tableOfContents, makeTitlePage);
            break;
          case 39:
            document.onkeyup = "";
            turnPageLeft(tableOfContents, statusPage);
            break;
        }
      }

      let p = document.createElement("p");
      p.style.textAlign = "center";
      p.style.fontSize = "1.5em";
      p.style.fontWeight = "bold";
      p.style.textDecoration = "underline";
      let br = document.createElement("br");
      let node = document.createTextNode("Table of Contents");
      p.appendChild(node);
      p.appendChild(br);
      tableOfContents.appendChild(p);
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

      p = chapterEntry(statusPage, "Status", "A list of " + player.possessive + " progress.");
      tableOfContents.appendChild(p);

      p = chapterEntry(spellsPage, "Spells", "A list of the spells " + player.name + " has learned.");
      tableOfContents.appendChild(p);

      p = chapterEntry(spud, "Monsters", "A list of the monsters " + player.name + " has encountered.");
      tableOfContents.appendChild(p);

      p = chapterEntry(spud, "Achievements", "A list of the achievements " + player.name + " has earned.");
      tableOfContents.appendChild(p);

      return tableOfContents;
    }
    //
    //This function makes the layout of the status
    //page of the player's book
    function statusPage() {
      let status = document.createElement("div");
      status.className = "bookPage";
      status.id = "statusPage";
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
      turnButton[0].onclick = function() {turnPageRight(status, contentsPage);}
      turnButton[1].onclick = function() {turnPageLeft(status, spellsPage);}
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        if (e.keyCode === 37) {
          document.onkeyup = "";
          turnPageRight(status, contentsPage);
        } else if (e.keyCode === 39) {
          document.onkeyup = "";
          turnPageLeft(status, spellsPage);
        }
      }
      //
      //This block makes and places the <div> and <image>
      //elements for the status page of the book
      let playerCameoDiv = document.createElement("div");
      playerCameoDiv.id = "playerCameoDiv";
      playerCameoDiv.onclick = function() {
        playerCameoImg.src = player.sprites.path + player.sprites.files[1];
        setTimeout(function() {
          playerCameoImg.src = player.sprites.path + player.sprites.files[0];
        }, 1000);
      }
      let playerCameoImg = document.createElement("img");
      playerCameoImg.id = "playerCameoImg";
      playerCameoImg.src = player.sprites.path + player.sprites.files[0];
      playerCameoDiv.appendChild(playerCameoImg);
      status.appendChild(playerCameoDiv);
      //
      //This makes the players name
      let p = document.createElement("p");
      let node1 = document.createTextNode(player.name);
      let strong = document.createElement("strong");
      let underline = document.createElement("u");
      strong.appendChild(node1);
      underline.appendChild(strong);
      p.appendChild(underline);
      p.style.textAlign = "right";
      p.style.marginRight = "10px";
      p.style.fontSize = "1.5em";
      p.style.marginBottom = "10px";
      status.appendChild(p);
      //
      //This displays the max health and damage of the player
      p = document.createElement("p");
      p.style.marginTop = "-27px";
      node1 = document.createTextNode("Max Health: " + player.maxHealth);
      let node2 = document.createTextNode("Max Damage: " + player.damage);
      p.appendChild(node1);
      let br = document.createElement("br");
      p.appendChild(br);
      p.appendChild(node2);
      status.appendChild(p);
      //
      //This displays the total monsters killed
      p = document.createElement("p");
      node1 = document.createTextNode("Monsters Killed: " + player.stats.monstersKilled);
      p.appendChild(node1);
      status.appendChild(p);
      //
      //This long chunk displays the different levels of the player
      p = document.createElement("p");
      let node = document.createTextNode("Addition Level: " + player.level.addition);
      p.appendChild(node);
      br = document.createElement("br");
      p.appendChild(br);
      let averageInfo = appendAverageInfo(player.stats.averages.addition);
      p.appendChild(averageInfo);
      br = document.createElement("br");
      p.appendChild(br)

      node = document.createTextNode("Subtraction Level: " + player.level.subtraction);
      p.appendChild(node);
      br = document.createElement("br");
      p.appendChild(br)
      averageInfo = appendAverageInfo(player.stats.averages.subtraction);
      p.appendChild(averageInfo);
      br = document.createElement("br");
      p.appendChild(br);


      node = document.createTextNode("Multiplication Level: " + player.level.multiplication);
      p.appendChild(node);
      br = document.createElement("br");
      p.appendChild(br)
      averageInfo = appendAverageInfo(player.stats.averages.multiplication);
      p.appendChild(averageInfo);
      br = document.createElement("br");
      p.appendChild(br);

      node = document.createTextNode("Division Level: " + player.level.division);
      p.appendChild(node);
      br = document.createElement("br");
      p.appendChild(br)
      averageInfo = appendAverageInfo(player.stats.averages.division);
      p.appendChild(averageInfo);

      status.appendChild(p);

      let saveGame = document.createElement("input");
      saveGame.id = "saveGame";
      saveGame.type = "button";
      saveGame.value = "Save Game";
      //saveGame.onclick = saveValues;
      status.appendChild(saveGame);

      return status;

      function appendAverageInfo(array) {
        let span = document.createElement("span");
        let node = document.createTextNode("Average Answer Time: " + array[0].toFixed(2));
        span.appendChild(node);
        let br = document.createElement("br");
        span.appendChild(br);
        node = document.createTextNode("Questions Answered: " + array[1]);
        span.appendChild(node);
        return span;
      }
    }
    //
    //This function makes the layout of the spells
    //page of the player's book.
    function spellsPage() {
      let spells = document.createElement("div");
      spells.className = "bookPage";
      spells.id = "spellsPage";
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
      turnButton[0].onclick = function() {turnPageRight(spells, statusPage);}
      if (player.spells.learned[0] >= 0) {
        turnButton[1].onclick = function() {turnPageLeft(spells, spellDetailPage, player.spells.learned[0]);}
      } else {
        turnButton[1].onclick = function() {turnPageLeft(spells, monstersPage);}
      }
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        if (e.keyCode === 37) {
          document.onkeyup = "";
          turnPageRight(spells, statusPage);
        } else if (e.keyCode === 39) {
          document.onkeyup = "";
          if (player.spells.learned[0] >= 0) {
            turnPageLeft(spells, spellDetailPage, player.spells.learned[0]);
          } else {
            turnPageLeft(spells, monstersPage);
          }
        }
      }

      if (player.name.charAt(player.name.length - 1) == "s") {
        var text = document.createTextNode(player.name + "' Spells");
      } else {
        var text = document.createTextNode(player.name + "'s Spells");
      }
      var p = document.createElement("p");
      var br = document.createElement("br");
      var underline = document.createElement("u");
      var strong = document.createElement("strong");
      strong.appendChild(text);
      underline.appendChild(strong);
      p.appendChild(underline);
      p.appendChild(br);
      spells.appendChild(p);
      //
      //Iterates through the spells the player has acquired
      //and places them in the spells object
      for (let index in player.spells.learned) {
        span = document.createElement("span");
        br = document.createElement("br");
        text = document.createTextNode(spellBookContent[player.spells.learned[index]][0]);
        span.onclick = function() {
          turnPageLeft(spells, spellDetailPage, (index - 1));
        }
        span.appendChild(text);
        span.appendChild(br);
        spells.appendChild(span);
        index++;
      }

      return spells;
    }
    //
    //This function handles the individual spell pages
    //index is the index of player.spells.learned
    function spellDetailPage(index) {
      let spell = document.createElement("div");
      spell.className = "bookPage";
      spell.id = "spellsDetailPage";
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
      if (player.spells.learned.indexOf(index) === 0) {
        turnButton[0].onclick = function() {turnPageRight(spell, spellsPage);}
      } else {
        turnButton[0].onclick = function() {turnPageRight(spell, spellDetailPage, (index - 1));}
      }
      if (index < (player.spells.learned.length - 1)) {
        turnButton[1].onclick = function() {turnPageLeft(spell, spellDetailPage, (index + 1));}
      } else {
        turnButton[1].onclick = function() {turnPageLeft(spell, monstersPage);}
      }
      //
      //Starts the event listener so the reader can navigate
      //with the arrow keys
      document.onkeyup = function(e) {
        e = e || window.event;
        if (e.keyCode === 37 && turnPageEnabled) {
          document.onkeyup = "";
          if (player.spells.learned.indexOf(index) === 0) {
            turnPageRight(spell, spellsPage);
          } else {
            turnPageRight(spell, spellDetailPage, (index - 1));
          }
        } else if (e.keyCode === 39 && turnPageEnabled) {
          document.onkeyup = "";
          if (index < (player.spells.learned.length - 1)) {
            turnPageLeft(spell, spellDetailPage, (index + 1));
          } else {
            turnPageLeft(spell, monstersPage);
          }
        }
      }

      var spellDiv = document.createElement("div");
      spellDiv.id = "spellDetailDiv";
      var spellImg = document.createElement("img");
      spellImg.src = "./scrolls/" + spellBookContent[player.spells.learned[index]][1];
      spellImg.style.height = "330px";
      spellDiv.appendChild(spellImg);
      spell.appendChild(spellDiv);

      return spell;
    }




    playArea.style.filter = "brightness(0%)";
    //
    //Makes the button that will return the player to the
    //main overworld menu
    let returnButton = document.createElement("input");
    returnButton.id = "returnButton";
    returnButton.type = "button";
    returnButton.value = "Return to Menu";
    returnButton.onclick = returnToMenu;
    let fragment = document.createDocumentFragment();
    fragment.appendChild(returnButton);
    //
    //This block creates the <div> that holds all the
    //pages of the book and the title page
    let monsterBook = document.createElement("div");
    monsterBook.id = "monsterBook";
    let titlePage = makeTitlePage();
    monsterBook.appendChild(titlePage);
    fragment.appendChild(monsterBook);
    //
    //Clears the old screen after it has faded to black
    //then puts the new graphics onscreen before fading back
    setTimeout(function() {
      clearMenu(overworldMenuSelectors);
      playArea.appendChild(fragment);
      playArea.style.filter = "brightness(100%)";
    }, 500);
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
  clearElement(playArea);

  function spud() {
    console.log("spud");
  }
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
    buttonClass: "overworldButtons",
    buttonId: {
      left: "overworldButtonLeft",
      right: "overworldButtonRight"
    }
  };
  //
  //Makes the overworld menu and puts it on the screen
  menuMaker(overworldMenuSelectors, menuData, menuSelection);
}
