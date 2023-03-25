
let usrName, quest, favColor, getModalValue, playgame = 0, numOfPlayTime = 0, numOfLife = 0, usrAttempts = 5;

const playstart = document.getElementById('playstart');
const redbtn = document.getElementById('redbtn');
const greenbtn = document.getElementById('greenbtn');
const yellowbtn = document.getElementById('yellowbtn');
const bluebtn = document.getElementById('bluebtn');
const displaybox = document.getElementById('displaybox');
const modalbox = document.getElementById("modalbox");
const modalbody = document.getElementById("modalbody");
const modalfoot = document.getElementById("modalfoot");
const modalhide = document.getElementById("modalhide");
const inputbox = document.getElementById("inputbox");
const sendValue = document.getElementById("sendValue");
const modallabel = document.getElementById("modallabel");
const displaybox1 = document.getElementById("displaybox1");
const displaybox2 = document.getElementById("displaybox2");
const displaybox3 = document.getElementById("displaybox3");
const displaybox4 = document.getElementById("displaybox4");
playstart.focus();


window.onclick = function (event) {
  if (event.target == playstart) {
    if (numOfLife == 0) {
      initProcess();
    }
  }
  else if (event.target == redbtn) {
    if (numOfLife != 0) {
      console.log('Colour clicked is RED');
      gameAdventure("red");
    }
  }
  else if (event.target == greenbtn) {
    if (numOfLife != 0) {
      console.log('Colour clicked is GREEN');
      gameAdventure("green");
    }
  }
  else if (event.target == yellowbtn) {
    if (numOfLife != 0) {
      console.log('Colour clicked is YELLOW');
      gameAdventure("yellow");
    }
  }
  else if (event.target == bluebtn) {
    if (numOfLife != 0) {
      console.log('Colour clicked is BLUE');
      gameAdventure("blue");
    }
  }

  if (event.target == modalfoot) {
    modalbody.style.overflowY = "auto";
  }
  else if (event.target == modalhide) {
    console.log("You cancelled the Modal.");

    displaybox1.innerHTML =
      "You cancelled the Modal.";

    modalRmoval(), playstart.focus();
  }
  else if (event.target == sendValue) {
    if (modallabel.textContent === 'KeyPass') {
      startAdventure(modalValue());
    } else if (modallabel.textContent === 'Username') {
      usrNameInput(modalValue());
    }
  }
}

function initProcess() {
  console.clear(), claerHTML();
  modalBoxCall('Passcode', 'Enter the Passcode');

  let twowords1 = "Enter the passcode to continue.";
  console.log(twowords1);
  displaybox1.innerHTML = twowords1;

  modalbox.animate(
    [
      { top: "-300px", opacity: "0" },
      { top: "0", opacity: "0.5" },
    ],
    {
      duration: 300,
    }
  );
}

function claerHTML() {
  displaybox1.innerHTML = '';
  displaybox2.innerHTML = '';
  displaybox3.innerHTML = '';
  displaybox4.innerHTML = '';
}

function modalBoxCall(lebel, inputspace) {
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
  modalbox.style.display = "block";
  modallabel.textContent = lebel;
  inputbox.placeholder = inputspace;
  inputbox.focus();
}

function modalValue() {
  getModalValue = inputbox.value;
  inputbox.value = '';
  return getModalValue;
}

function modalRmoval() {
  modalbox.animate({
    opacity: [1, 0.5, 0],
    top: ['0px', '-100px', '-300px', '-500px', '-1000px'],
  }, 350);
  setTimeout(function () {
    modalbox.style.display = "none";
  }, 320)
}

playstart.addEventListener('keypress', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    if (numOfLife == 0) {
      initProcess();
    }
  }
});

inputbox.addEventListener('keypress', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    if (inputbox.value === '') {
      console.log("You cancelled the Modal.");
      displaybox1.innerHTML =
        "You cancelled the Modal.";
      modalRmoval(), playstart.focus();
    } else if (modallabel.textContent === 'Passcode') {
      startAdventure(modalValue());
    } else if (modallabel.textContent === 'Username') {
      usrNameInput(modalValue());
    }
  }
});

redbtn.addEventListener('keypress', function (event) {
  if (event.key === 'r') {
    event.preventDefault();
    if (numOfLife != 0) {
      console.log('Colour clicked is RED');
      gameAdventure("red");
    }
  }
});

greenbtn.addEventListener('keypress', function (event) {
  if (event.key === 'g') {
    event.preventDefault();
    if (numOfLife != 0) {
      console.log('Colour clicked is GREEN');
      gameAdventure("green");
    }
  }
});

yellowbtn.addEventListener('keypress', function (event) {
  if (event.key === 'y') {
    event.preventDefault();
    if (numOfLife != 0) {
      console.log('Colour clicked is YELLOW');
      gameAdventure("yellow");
    }
  }
});

bluebtn.addEventListener('keypress', function (event) {
  if (event.key === 'b') {
    event.preventDefault();
    if (numOfLife != 0) {
      console.log('Colour clicked is BLUE');
      gameAdventure("blue");
    }
  }
});

function startAdventure(numOfPlayTime) {
  numOfPlayTime = parseInt(numOfPlayTime);

  if (isNaN(numOfPlayTime)) {
    let twowords1 = getModalValue.toString().length == 1 ? 'value' : 'values';
    let twowords2 = " entered is not a number. Please start again and enter a number.";
    let twowords3 = "Input " + twowords1 + twowords2;
    console.log(twowords3);
    displaybox1.innerHTML = twowords3;
    playstart.focus(), modalRmoval();
    return;
  } else {
    if (numOfPlayTime.toString() != '2831') {
      let twowords1 = "Passcode entered is incorrect. Please start again and enter the correct passcode.";
      console.log(twowords1);
      displaybox1.innerHTML = twowords1;
      playstart.focus(), modalRmoval();
      return;
    } else {
      let twowords1 = "The passcode is correct! Please enter rhe username to continue.";
      console.log(twowords1);
      displaybox1.innerHTML = twowords1;
      modalBoxCall('Username', 'Enter the username');
    }
  }
}


function usrNameInput(usrName) {
  if (usrName.toLowerCase() == 'uche') {
    let twowords1 = "The username is: " + usrName + ". That's correct! You can start to play the game";
    console.log(twowords1);
    displaybox1.innerHTML = twowords1;

    usrName = '';
    usrAttempts = 5;
    numOfLife = 5;

    twowords1 = "Number of life you start with is " + '<strong style="color:yellow">' + numOfLife + '</strong>' + ".";
    console.log(twowords1);
    displaybox2.innerHTML = twowords1;

    modalRmoval(), console.clear();
  } else {
    let twowords1 = "Wrong username entered. Please try again and enter the correct usename.";
    console.log(twowords1);
    displaybox1.innerHTML = twowords1;
    inputbox.focus();

    usrAttempts--;
    if (usrAttempts == 0) {
      twowords1 = "You used all the atempts required.";
      console.log(twowords1);
      displaybox2.innerHTML = twowords1;
      twowords1 = "Wrong entry 5 times. Please start all over again.";
      console.log(twowords1);
      displaybox3.innerHTML = twowords1;
      usrName = '';
      usrAttempts = 5;
      modalRmoval(), playstart.focus();
      return;
    } else {
      twowords1 = usrAttempts == 1 ? ' attempt ' : ' attempts ';
      let twowords2 = usrAttempts + twowords1 + 'remaining.';
      console.log(twowords2);
      displaybox2.innerHTML = twowords2;
    }
  }
}

function gameAdventure(favColor) {
  console.clear(), claerHTML();

  numOfPlayTime++;
  let twowords1 = numOfPlayTime == 1 ? ' time' : ' times';
  let twowords2 = "You've played this game " + numOfPlayTime + twowords1;
  console.log(twowords2);
  displaybox1.innerHTML = twowords2;

  twowords1 = "Your favourite Colour is: " + favColor.toUpperCase();
  console.log(twowords1);
  displaybox2.innerHTML = twowords1;

  if (favColor.toLowerCase() != "yellow") {
    numOfLife--;
    twowords1 = "Wait wrong colour! I mean YELLLLLLOOOOOWWWWWWW.";
    console.log(twowords1);
    displaybox3.innerHTML = twowords1;
    twowords1 = "your life is further reduced by 1. Therfore, total life remaining is " + '<strong>' + numOfLife + '</strong >' + ".";
    console.log(twowords1)
    displaybox4.innerHTML = twowords1;
  } else {
    numOfLife++;
    twowords1 = "Off you go then.";
    console.log(twowords1);
    displaybox3.innerHTML = twowords1;
    twowords1 = "your life is further increased by 1. Therfore, total life remaining is " + '<strong>' + numOfLife + '</strong >' + ".";
    console.log(twowords1);
    displaybox4.innerHTML = twowords1;
  }

  if (numOfLife == 0) {
    playgame = 0, numOfPlayTime = 0, numOfLife = 0, usrAttempts = 0;
    playstart.focus();

    twowords1 = "The total life left is " + numOfLife + ".";
    console.log(twowords1);
    displaybox2.innerHTML = twowords1;
    console.log("GAME OVER!")
    displaybox3.innerHTML = "'<strong>'GAME OVER!'</strong >'";
    twowords1 = "You've reached the end of this game. Thank you for playing.";
    console.log(twowords1);
    displaybox4.innerHTML = twowords1;
  }
}