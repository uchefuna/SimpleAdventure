
//variable to check which colour is clicked
let favColor;

//variable to hold the number of life left in the game
let numOfLife = 0;

//variables for the Modal
let usrName, keyscycles = 0, usrAttempts = 5;

//getting the elements of the HTML
const playstart = document.getElementById('playstart');
const modalbox = document.querySelectorAll('.modalbox');
const displaylines = document.querySelectorAll('.displaylines');
const colorbtn = document.querySelectorAll('.colorbtn');

playstart.focus();

//click functionality of the HTML
window.onclick = function (event) {
  if (numOfLife == 0) {
    if (event.target == playstart) {
      initProcess();
    }

    if (event.target == modalbox[4]) {
      modalbox[1].style.overflowY = "auto";
    }
    else if (event.target == modalbox[6]) {
      console.log("You cancelled the Modal.");
      displaylines[0].innerHTML =
        "You cancelled the Modal.";
      modalRmoval(), playstart.focus();
    }
    else if (event.target == modalbox[5]) {
      if (modalbox[2].textContent === 'Passcode' || modalbox[2].textContent === 'PlayCycle') {
        passCycles(modalbox[3].value);
        modalbox[3].value = '';
      } else if (modalbox[2].textContent === 'Username') {
        usrNameInput(modalbox[3].value);
        modalbox[3].value = '';
      }
    }
  }

  if (numOfLife != 0) {
    if (event.target == colorbtn[0]) {
      console.log('Colour clicked is RED');
      gameAdventure("red");
    }
    else if (event.target == colorbtn[1]) {
      console.log('Colour clicked is GREEN');
      gameAdventure("green");
    }
    else if (event.target == colorbtn[2]) {
      console.log('Colour clicked is YELLOW');
      gameAdventure("yellow");
    }
    else if (event.target == colorbtn[3]) {
      console.log('Colour clicked is BLUE');
      gameAdventure("blue");
    }
  }
}

let remdivChild; //variabl to remove the div child

//function to initialize the game
function initProcess() {
  console.clear(), claerHTMLDisplay();
  modalBoxCall('Passcode', 'Enter the Passcode');

  let twowords1 = "Enter the passcode to continue.";
  console.log(twowords1);
  displaylines[0].innerHTML = twowords1;

  modalbox[0].animate(
    [
      { top: "-300px", opacity: "0" },
      { top: "0", opacity: "0.5" },
    ],
    {
      duration: 200,
    }
  );

  setTimeout(function () {
    let divChild = document.getElementById('modalcontent').appendChild(document.createElement('div'));
    remdivChild = divChild;
    divChild.style.cssText = 'text-align: center; height: 50px; background-color: #444343;';

    let paraChild = divChild.appendChild(document.createElement('p'));
    paraChild.innerHTML = 'Passcode: ';
    paraChild.style.cssText = 'color: #fffffffb; font-size: 1.4em; letter-spacing: 2px; margin: 0; padding: 3% 0 0;';

    let spanChild;
    spanChild = paraChild.appendChild(document.createElement('span'));
    spanChild.innerHTML = '2831';
    spanChild.style.cssText = 'color: #ffdb11f8;';
    spanChild = paraChild.appendChild(document.createElement('span'));
    spanChild.innerHTML = ' | ';
    spanChild.style.cssText = 'color: #ff2111f8;';
    spanChild = paraChild.appendChild(document.createElement('span'));
    spanChild.innerHTML = 'Username: ';
    spanChild = paraChild.appendChild(document.createElement('span'));
    spanChild.innerHTML = 'UCHE';
    spanChild.style.cssText = 'color: #ffdb11f8;';
  }, 700);
}

//function to clear display of the HTML
function claerHTMLDisplay() {
  for (i = 0; i < displaylines.length; i++) {
    displaylines[i].innerHTML = '';
  }
}

//function to call the Modal box
function modalBoxCall(lebel, inputspace) {
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
  modalbox[0].style.display = "block";
  modalbox[2].textContent = lebel;
  modalbox[3].placeholder = inputspace;
  modalbox[3].focus();
}

//function to remove the Modal box
function modalRmoval() {
  modalbox[0].animate({
    opacity: [1, 0.5, 0],
    top: ['0px', '-100px', '-300px', '-500px', '-1000px'],
  }, 350);
  setTimeout(function () {
    modalbox[0].style.display = "none";
    remdivChild.remove();
  }, 320)
}

//listening event to use the ENTER buttton to start the game
playstart.addEventListener('keypress', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    if (numOfLife == 0) {
      initProcess();
    }
  }
});

//listening events to use the ENTER buttton after inputting values
modalbox[3].addEventListener('keypress', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    if (modalbox[3].value === '') {
      console.log("You cancelled the Modal.");
      displaylines[0].innerHTML =
        "You cancelled the Modal.";
      modalRmoval(), playstart.focus();
    } else if (modalbox[2].textContent === 'Passcode' || modalbox[2].textContent === 'PlayCycle') {
      passCycles(modalbox[3].value);
      modalbox[3].value = '';
    } else if (modalbox[2].textContent === 'Username') {
      usrNameInput(modalbox[3].value);
      modalbox[3].value = '';
    }
  }
});

//listening events to use keypress for the colour buttons
function gameEvents(a, colorkey, color) {
  colorbtn[a].addEventListener('keypress', function (event) {
    if (event.key === colorkey) {
      event.preventDefault();
      if (numOfLife != 0) {
        gameAdventure(color);
      }
    }
  });
}

//listening events functions for the 4 colours
gameEvents(0, 'r', "red");
gameEvents(1, 'g', "green");
gameEvents(2, 'y', "yellow");
gameEvents(3, 'b', "blue");

//function to get input values of the passcode and number of cycles
function passCycles(modalInputVal) {
  keyscycles = parseInt(modalInputVal);

  let twowords1, twowords2, twowords3;
  if (isNaN(keyscycles)) {
    if (modalbox[2].textContent === 'Passcode') {
      twowords1 = modalInputVal.toString().length == 1 ? 'value' : 'values';
      twowords2 = " entered is not a number. Please start again and enter a number.";

      twowords3 = "Input " + twowords1 + twowords2;
      console.log(twowords3);
      displaylines[0].innerHTML = twowords3;
      playstart.focus(), modalRmoval();
      return;
    } else {
      displaylines[1].innerHTML = '';
      twowords1 = modalInputVal.toString().length == 1 ? 'cycle' : 'cycles';
      twowords2 = " entered is not a number. Please enter number between 10 - 500 to start the game.";

      twowords3 = "Input " + twowords1 + twowords2;
      console.log(twowords3);
      displaylines[0].innerHTML = twowords3;
    }
  } else {
    if (modalbox[2].textContent === 'Passcode') {
      if (modalInputVal != '2831') {
        twowords1 = "Passcode entered is incorrect. Please start again and enter the correct passcode.";
        console.log(twowords1);
        displaylines[0].innerHTML = twowords1;
        playstart.focus(), modalRmoval();
        return;
      } else {
        twowords1 = "The passcode is correct! Please enter rhe username to continue.";
        console.log(twowords1);
        displaylines[0].innerHTML = twowords1;
        modalBoxCall('Username', 'Enter the username');
      }
    } else {
      displaylines[1].innerHTML = '';
      if (keyscycles < 10) {
        twowords1 = "Number of cycles entered is below 10. Please enter more than 10 cycles to start the game.";
        console.log(twowords1);
        displaylines[0].innerHTML = twowords1;
      } else {
        raincycles = parseInt(modalInputVal);
        twowords1 = "You've " + raincycles + " cyles to play.";
        console.log(twowords1);
        displaylines[0].innerHTML = twowords1;
        twowords1 = "The game will start in three seconds.";
        console.log(twowords1);
        displaylines[1].innerHTML = twowords1;
        modalRmoval();

        setTimeout(function () {
          numOfLife = 5;

          twowords1 = "Number of life you start with is " + '<strong style="color:yellow">' + numOfLife + '</strong>' + " and you've " + keyscycles + " cycles.";
          console.log(twowords1);
          displaylines[1].innerHTML = twowords1;

          twowords1 = "You can now click on the buttons to gain or reduce life.";
          console.log(twowords1);
          displaylines[2].innerHTML = twowords1;
          modalRmoval();
        }, 3000)
      }
    }
  }
}

//function to get input value of the username
function usrNameInput(usrName) {
  let twowords1, twowords2;
  if (usrName.toLowerCase() == 'uche') {
    twowords1 = "The username is: " + usrName + ". That's correct! You can now enter the cycles amount to play the game (10 - 500).";
    console.log(twowords1);
    displaylines[0].innerHTML = twowords1;

    usrName = '';
    usrAttempts = 5;
    modalBoxCall('PlayCycle', 'Enter game cycles');
  } else {
    twowords1 = "Wrong username entered. Please try again and enter the correct usename.";
    console.log(twowords1);
    displaylines[0].innerHTML = twowords1;
    modalbox[3].focus();

    usrAttempts--;
    if (usrAttempts == 0) {
      twowords1 = "You used all the atempts required.";
      console.log(twowords1);
      displaylines[1].innerHTML = twowords1;
      twowords1 = "Wrong entry 5 times. Please start all over again.";
      console.log(twowords1);
      displaylines[2].innerHTML = twowords1;
      usrName = '';
      usrAttempts = 5;
      modalRmoval(), playstart.focus();
      return;
    } else {
      twowords1 = usrAttempts == 1 ? ' attempt ' : ' attempts ';
      twowords2 = usrAttempts + twowords1 + 'remaining.';
      console.log(twowords2);
      displaylines[1].innerHTML = twowords2;
    }
  }
}

//main function of the game
function gameAdventure(favColor) {
  console.clear(), claerHTMLDisplay();

  let twowords1, twowords2;
  keyscycles--;
  twowords1 = keyscycles == 1 ? ' cycle ' : ' cycles ';
  twowords2 = "You've " + keyscycles + twowords1 + "remaining.";
  console.log(twowords2);
  displaylines[0].innerHTML = twowords2;

  twowords1 = "Your favourite Colour is: " + favColor.toUpperCase();
  console.log(twowords1);
  displaylines[1].innerHTML = twowords1;

  if (favColor.toLowerCase() != "yellow") {
    numOfLife--;
    twowords1 = "Wait wrong colour! I mean YELLLLLLOOOOOWWWWWWW.";
    console.log(twowords1);
    displaylines[2].innerHTML = twowords1;
    twowords1 = "your life is further reduced by 1. Therfore, total life remaining is " + '<strong>' + numOfLife + '</strong >' + ".";
    console.log(twowords1)
    displaylines[3].innerHTML = twowords1;
  } else {
    numOfLife++;
    twowords1 = "Off you go then.";
    console.log(twowords1);
    displaylines[2].innerHTML = twowords1;
    twowords1 = "your life is further increased by 1. Therfore, total life remaining is " + '<strong>' + numOfLife + '</strong >' + ".";
    console.log(twowords1);
    displaylines[3].innerHTML = twowords1;
  }

  if (numOfLife == 0 || keyscycles == 0) {
    twowords1 = "The total life left is " + numOfLife + ".";
    console.log(twowords1);
    displaylines[1].innerHTML = twowords1;
    console.log("GAME OVER!")
    displaylines[2].innerHTML = "'<strong>'GAME OVER!'</strong >'";
    twowords1 = "You've reached the end of this game. Thank you for playing.";
    console.log(twowords1);
    displaylines[3].innerHTML = twowords1;

    keyscycles = 0, numOfLife = 0, usrAttempts = 0;
    playstart.focus();
  }
}