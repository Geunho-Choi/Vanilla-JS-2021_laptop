const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginInputBox = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const deleteBtn = document.querySelector("#delete");
const nameBox = document.querySelector("#name");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막음. submit event를 제어.
  loginForm.classList.add(HIDDEN_CLASSNAME); // submit 되면, 숨김.
  const username = loginInput.value; // 입력받은 user name을 상수로 지정.
  //   console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
  loginInput.classList.add(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);
//click이 아니라 submit임.

function paintGreeting(username) {
  greeting.innerText = "Hello, " + username + "!";
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//로컬스토리지에서 username의 value값 가져오기

function showingWell() {
  if (savedUsername === null) {
    //로컬 스토리지가 비어있으면 form부터 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    //로컬 스토리지에 유저정보가 있다면 form보여주지 않고, greeting보여주기
    paintGreeting(savedUsername);
    loginInput.classList.add(HIDDEN_CLASSNAME);

    // loginInputBox.classList.add(HIDDEN_CLASSNAME);
  }
}

showingWell();

function removeDeleteByn() {
  deleteBtn.classList.add(HIDDEN_CLASSNAME);
}
function paintDeleteBtn() {
  deleteBtn.classList.remove(HIDDEN_CLASSNAME);
}

removeDeleteByn();
nameBox.addEventListener("mouseover", paintDeleteBtn);
nameBox.addEventListener("mouseout", removeDeleteByn);

function removeValue(event) {
  event.preventDefault();
  localStorage.removeItem("username");
  showingWell();
  greeting.classList.add(HIDDEN_CLASSNAME);
  deleteBtn.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
}

deleteBtn.addEventListener("click", removeValue);

const nameEventHandler = {
  mouseover: function handleMouseover() {
    // loginInput.placehoder = "gold";
    // console.dir(loginInput);
    loginInput.placeholder = "Write name here :-)";
  },
  mouseout: function handleMouseout() {
    loginInput.placeholder = "What is your Name?";
  },
};

loginInput.addEventListener("mouseover", nameEventHandler.mouseover);
loginInput.addEventListener("mouseout", nameEventHandler.mouseout);
