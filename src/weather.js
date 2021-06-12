const weather = document.querySelector(".js-weather");
const weatherWind = document.querySelector(".js-weather-wind");
const weatherPlace = document.querySelector(".js-weather-place");
const weatherHumidity = document.querySelector(".js-weather-humidity");
// 3-5-1. 클래스로 태그 지정해주고 weather 정보 담을 상수 생성.

const API_KEY = "ecb1af201f965928ff4a0177cac6e2f7";
// 3. 다른 서버에서 데이터를 가져오기 위한 API키 상수 생성.
const COORDS = "coords";
// 1. coords를 담은 COORDS상수 생성.

function getWeather(lat, lon) {
  // 3-2. 새로고침없이 데이터 가져오게 함.
  // network 패널에서 request에 따른 response를 확인할 수 있음.
  fetch(
    // fetch안에 가져올 데이터를 입력. 주의할 점은 `백틱으로 감싸주기.
    // Celsius단위로 환산해두는 &units=metric 추가.
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      // 3-4. then -> 데이터가 우리한테 완전히 넘어왔을 때, 함수를 호출.
      // 이 부분 잘 이해가 안 간다..ㅠㅠ 니꼬쌤이 JS코스 들으라고..
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const humidity = json.main.humidity;
      const place = json.name;
      const wind = json.wind.speed;
      // console.log(json);
      weather.innerText = `🌡️  ${temperature}℃ `;
      weatherWind.innerText = `🌬️ ${wind}m/s`;
      weatherPlace.innerText = `📍 ${place}`;
      weatherHumidity.innerText = `💦 ${humidity}%`;
      //3-5-2. 브라우저에 날씨와 장소 띄우기.
    });

  // 3-5. HTML로 가서 js-weather클래스 가진 태그 추가해주기.
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
} // 2-2-6. value값으로, 위치정보가 담겨있는 문자열 coordsObj객체 정보기 저장됨.

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // 2-2-2. 사용자가 위치확인 권한요청 허용했을 때, 위치(위도와 경도)를 얻음.
  const coordsObj = {
    latitude, // latitude: latitude, 와 같음.
    longitude, // longitude: longitude, 와 같음.
  }; // 2-2-4. coordsObj 객체 생성.
  saveCoords(coordsObj);
  // 2-2-5. local storage에 key, value값을 저장시키는 함수 실행.
  getWeather(latitude, longitude);
  // 3-1. getWeather 함수 실행해서 데이터 가져오기.
}

function handleGeoError() {
  console.log("Can't access geo location");
  // 2-2-3. 사용자가 위치확인 권한요청 차단했을 때
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  // 2-2-1. navigator내장객체를 이용해서, 방문자의 브라우저 정보 얻음.
  // API이용. navigator.vibrate도 있음 ->핸드폰 진동
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  // 2-1. coords 키값을 갖는 value를 loadedCords상수로 지정.
  if (loadedCoords === null) {
    askForCoords();
    // 2-2. coords 키값을 갖는 value가 없다면, askForCoords 실행.
  } else {
    // 3-3. value값이 있다면 (=이미 좌표값을 가지고 있다면)
    const parseCoords = JSON.parse(loadedCoords);
    // 3-3-1. string을 -> obect로 바꾸는 parse 처리.
    getWeather(parseCoords.latitude, parseCoords.longitude);
    // 3-3-2. getWeather 함수 실행.
  }
}

function init() {
  loadCoords(); // 2.loadCoords 함수 실행
}

init();
