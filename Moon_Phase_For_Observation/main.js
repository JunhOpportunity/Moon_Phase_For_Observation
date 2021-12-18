

// JS 를 통해 어두운 모드 , 밝은 모드 만드는 TOGGLE 코드 만들기
// 언어 변경은 아마 주소 옮기는 방식으로 해야할 듯.
// 사진을 달 사진, 풍경사진 나눠서 버튼 ALL MOON NATURE 세 개로 나눠서 
// 클릭 할 때 마다 바뀌도록 하는 코드 만들기
// 오늘, 내일, 모레 이후에도 달력이나 스크롤을 통해 그 이후의 달 위상 체크하는 것 만들기
// 스크래핑(날씨, 월몰, 월출 정보, 음력 양력 날짜 확인 등)으로 정보 가져오기 공부
const body = document.querySelector("body");
const todayMoonQ = document.querySelector(".todayMoon");


function mouseEnter() {
  todayMoonQ.style.background = "gray";
};

function mouseLeave() {
  todayMoonQ.style.background = "white";
};

todayMoonQ.addEventListener("mouseenter", mouseEnter);
todayMoonQ.addEventListener("mouseleave", mouseLeave);

function copyTry(event) {
  event.preventDefault();
  alert("복사 하실 수 없습니다!");
}

body.addEventListener("copy", copyTry);


// Today Observation Moon Quiz
function moonQuiz() {
  let todayWeather = True; // 임시 저장
  if (btnclick === yesBtn) { // 만약 Yes 를 누를 경우
    if(todayWeather === True) { // 관측이 가능 할 경우
      // 색깔 바뀜 -> alert로 '맞습니다! 오늘은 관측이 가능합니다!' 출력
      alert('맞습니다! 오늘은 관측이 가능합니다!');
    }
    else { // 관측이 불가능 할 경우
      // 색깔 바뀜 -> alert로 '틀렸습니다! 아쉽지만 오늘은 관측이 불가능 한 날입니다..' 출력
      alert('틀렸습니다! 아쉽지만 오늘은 관측이 불가능 한 날입니다..');
    }
  }
  else if (btnclick === noBtn) { // 만약 No 를 누를 경우
    if(todayWeather === True) { // 관측이 가능 할 경우
      // 색깔 바뀜 -> alert로 '틀렸습니다! 오늘은 관측이 가능합니다!' 출력
      alert('틀렸습니다! 오늘은 관측이 가능합니다!');
    }
    else { // 관측이 불가능 할 경우
      // 색깔 바뀜 -> alert로 '맞습니다! 아쉽지만 오늘은 관측이 불가능 한 날입니다..' 출력
      alert('맞습니다! 아쉽지만 오늘은 관측이 불가능 한 날입니다..');
    };
};


