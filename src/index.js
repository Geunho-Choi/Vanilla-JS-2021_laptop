// Clock - 시계 기능
// Random Background Image - 배경 랜덤변경 기능

const body = document.querySelector("body"); // 2-1. 배경사진 넣을 태그 변수에 지정

const IMG_NUMBER = 7; // 2- . 배경사진 숫자 3개 변수에 지정

function paintImage(imgNumber) {
  const image = new Image(); // 2-3. new Image 객체생성
  image.src = `images/${imgNumber}.JPG`;
  image.classList.add("backgroundImage"); // 2-4. 사진 크기 맞추기 위해서 image태그에 class추가
  body.appendChild(image); // 2-5. 배경사진 추가
}

function genRandom() {
  // 2. 배경사진 선택을 위한 랜덤 숫자 생성 값 리턴
  const number = Math.ceil(Math.random() * 7);
  return number;
}

function getTime() {
  // 1. 시계 생성 함수
  const nowDay = new Date();
  // 1-1. new Date 객체 생성
  const hours = nowDay.getHours();
  const minutes = nowDay.getMinutes();
  const seconds = nowDay.getSeconds();
  // 1-1-1. 시,분,초 상수에 지정.
  const year = nowDay.getFullYear();
  const month = nowDay.getMonth();
  const date = nowDay.getDate();
  // console.log(nowDay.getDay()); -->4 목요일을 나타냄
  // 1-1-2. 년, 월, 일 상수에 지정.

  const h2 = document.querySelector("h2");
  h2.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 1-1-3. 시,분,초 브라우저에 표시.
  const h1 = document.querySelector("h1");
  h1.innerHTML = `${year}.${month < 10 ? `0${month}` : month}.${
    date < 10 ? `0${date}` : date
  } `;
}

function init() {
  getTime(); // 1-2. 시계 실행
  setInterval(getTime, 1000); // 1-3. 시계 실시간 업로드

  const randomNumber = genRandom(); // 2-1. 랜덤 배경사진 숫자 리턴값를 변수에 지정
  paintImage(randomNumber); // 2-2. 배경사진 paintImage function 실행
}
init();
