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

//-------------------------------------------------------------------//
//Object functions                                                   //
//-------------------------------------------------------------------//

//
//This function creates a new player object
//with all of the variables associated with it
function newPlayer() {
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
  //This sets up the character selection portion of the screen
  function characterSelector() {
    //
    //This visually shifts the array of mage avatars to the
    //left. It's triggered by the RIGHT arrow
    function shiftLeft() {
      removeElement("characterDivLeft");
      mageData.spriteIndex++;

      if (mageData.spriteIndex >= mageData.mageSprites.length) {
        mageData.spriteIndex = 0;
      }
      //
      //This shifts the middle <div> to the left <div>
      characterDivMiddle.id = "characterDivLeft";
      characterDivLeft = characterDivMiddle;
      //
      //This shifts the right <div> to the middle <div>
      //and then gives it an onclick value
      characterDivRight.id = "characterDivMiddle";
      characterDivMiddle = characterDivRight;
      characterImgMiddle = characterImgRight;
      characterImgMiddle.onclick = saveCharacterData;
      //
      //This makes a new right <div> to replace the one that
      //was shifted to the middle
      characterDivRight = document.createElement("div");
      characterDivRight.id = "characterDivRight";
      characterImgRight = document.createElement("img");
      characterImgRight.className = "characterImg";
      characterImgRight.src = mageData.spritePath +
        mageData.mageSprites[(mageData.spriteIndex + 1) % mageData.mageSprites.length][0];
      characterDivRight.appendChild(characterImgRight);
      playArea.insertBefore(characterDivRight, rightButton);
    }
    //
    //This visually shifts the array of mage avatars to the
    //right. It's triggered by the LEFT arrow
    function shiftRight() {
      removeElement("characterDivRight");
      mageData.spriteIndex--;

      if (mageData.spriteIndex < 0) {
        mageData.spriteIndex = mageData.mageSprites.length - 1;
      }
      //
      //This shifts the middle <div> to the right
      characterDivMiddle.id = "characterDivRight";
      characterDivRight = characterDivMiddle;
      //
      //This shifts the left <div> to the middle <div>
      //and then gives it an onclick value
      characterDivLeft.id = "characterDivMiddle";
      characterDivMiddle = characterDivLeft;
      characterImgMiddle = characterImgLeft;
      characterImgMiddle.onclick = saveCharacterData;
      //
      //This makes a new left <div> to replace the one that
      //was shifted to the middle
      characterDivLeft = document.createElement("div");
      characterDivLeft.id = "characterDivLeft";
      characterImgLeft = document.createElement("img");
      characterImgLeft.className = "characterImg";
      characterImgLeft.src = mageData.spritePath +
        mageData.mageSprites[(mageData.spriteIndex + (mageData.mageSprites.length - 1)) % mageData.mageSprites.length][0];
      characterDivLeft.appendChild(characterImgLeft);
      playArea.insertBefore(characterDivLeft, characterDivMiddle);
    }
    //
    //This  will call a specific function based on which
    //key is pressed
    function checkArrowKeys(key) {
      key = key || window.event;
      switch (key) {
        case 13:
          saveCharacterData();
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
    //Saves the sprite info from the avatar they player chose
    //then calls the townIntro() function
    function saveCharacterData() {
      player.sprites.path = mageData.spritePath;
      player.sprites.files = mageData.mageSprites[mageData.spriteIndex];
      //
      //Removes elements used for character selection before
      //moving to the townIntro screen
      removeElement("characterSelectText");
      removeElement("leftButton");
      removeElement("characterDivLeft");
      removeElement("characterDivMiddle");
      removeElement("characterDivRight");
      removeElement("rightButton");
      document.onkeyup = "";

      townIntro(player);
    }
    //
    //This object holds the information for accessing the mage sprites
    let mageData = {
      mageSprites: [
        ["mage0.gif", "mage0fight.gif", "mage0hurt.gif", "mage0dead.gif"],
        ["mage1.gif", "mage1fight.gif", "mage1hurt.gif", "mage1dead.gif"],
        ["mage2.gif", "mage2fight.gif", "mage2hurt.gif", "mage2dead.gif"],
        ["mage3.gif", "mage3fight.gif", "mage3hurt.gif", "mage3dead.gif"],
        ["mage4.gif", "mage4fight.gif", "mage4hurt.gif", "mage4dead.gif"],
        ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif"],
        ["mage6.gif", "mage6fight.gif", "mage6hurt.gif", "mage6dead.gif"]
      ],
      spritePath: "./mages/",
      spriteIndex: 0
    };
    //
    //This sets up a listener for a key to be pressed
    setTimeout(function() {
      document.onkeyup = function(e) {
        e = e || window.event;
        checkArrowKeys(e.keyCode);
      }
    }, 100);
    //
    //Puts "Choose your mage" onto the webpage
    let characterSelectText = document.createElement("div");
    characterSelectText.id = "characterSelectText";
    characterSelectText.innerHTML = "Choose your mage:";
    //
    //This <div> is set up outside of the visible play area
    //ready to slide onscreen when an arrow is clicked
    let characterDivLeft = document.createElement("div");
    characterDivLeft.id = "characterDivLeft";
    let characterImgLeft = document.createElement("img");
    characterImgLeft.className = "characterImg";
    characterImgLeft.src = mageData.spritePath + mageData.mageSprites[6][0];
    characterDivLeft.appendChild(characterImgLeft);
    //
    //This <div> is the visible character selection. If it
    //is clicked, this will be the player's avatar
    let characterDivMiddle = document.createElement("div");
    characterDivMiddle.id = "characterDivMiddle";
    let characterImgMiddle = document.createElement("img");
    characterImgMiddle.className = "characterImg";
    characterImgMiddle.src = mageData.spritePath + mageData.mageSprites[0][0];
    characterImgMiddle.onclick = function() {
      document.onkeypress = "";
      saveCharacterData();
    }
    characterDivMiddle.appendChild(characterImgMiddle);
    //
    //This <div> is set up outside of the visible play area
    //ready to slide onscreen when an arrow is clicked
    let characterDivRight = document.createElement("div");
    characterDivRight.id = "characterDivRight";
    let characterImgRight = document.createElement("img");
    characterImgRight.className = "characterImg";
    characterImgRight.src = mageData.spritePath + mageData.mageSprites[1][0];
    characterDivRight.appendChild(characterImgRight);
    //
    //These two blocks put the buttons onscreen that let the
    //player choose their mage avatar
    let leftButton = document.createElement("input");
    leftButton.id = "leftButton";
    leftButton.className = "selectButtons";
    leftButton.type = "button";
    leftButton.value = "<";
    leftButton.onclick = shiftRight;

    let rightButton = document.createElement("input");
    rightButton.id = "rightButton";
    rightButton.className = "selectButtons";
    rightButton.type = "button";
    rightButton.value = ">";
    rightButton.onclick = shiftLeft;
    //
    //This block puts all of the elements that have been
    //made onto the webpage
    let fragment = document.createDocumentFragment();
    fragment.appendChild(characterSelectText);
    fragment.appendChild(leftButton);
    fragment.appendChild(characterDivLeft);
    fragment.appendChild(characterDivMiddle);
    fragment.appendChild(characterDivRight);
    fragment.appendChild(rightButton);
    playArea.appendChild(fragment);

  }
  //
  //Creates a new object for the player and their data
  const player = new newPlayer();
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
    typer(introText, introTextDiv, characterSelector);
  }, 100);


}
//
//The Story Intro screen that gives the game a bit of story
function townIntro(player) {
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
    let textString = "The old dungeons beneath the city are overrun with monsters and they've been attacking the townsfolk. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart3);
    });
  }
  function introPart3() {
    clearElement(introTextDiv);
    let textString = "We need you to clear out the old dungeons to make our town safe again. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart4);
    });
  }
  function introPart4() {
    clearElement(introTextDiv);
    let textString = "Only one dungeon is open right now. The other three are sealed with some kind of magic. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, introPart5);
    });
  }
  function introPart5() {
    clearElement(introTextDiv);
    let textString = "Here are the dungeons. Thank you so much for your help getting rid of those monsters. ";
    typer(textString, introTextDiv, function() {
      makeNextButton(introTextDiv, dungeonEntrance);
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
  //skipButton.onclick = dungeonEntrance;
  playArea.appendChild(skipButton);

  introPart1();

}
