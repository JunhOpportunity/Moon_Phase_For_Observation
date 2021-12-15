

// JS 를 통해 어두운 모드 , 밝은 모드 만드는 TOGGLE 코드 만들기
// 언어 변경은 아마 주소 옮기는 방식으로 해야할 듯.
// 사진을 달 사진, 풍경사진 나눠서 버튼 ALL MOON NATURE 세 개로 나눠서 
// 클릭 할 때 마다 바뀌도록 하는 코드 만들기
// 오늘, 내일, 모레 이후에도 달력이나 스크롤을 통해 그 이후의 달 위상 체크하는 것 만들기
// 스크래핑(날씨, 월몰, 월출 정보, 음력 양력 날짜 확인 등)으로 정보 가져오기 공부

const bgc = document.querySelector('body');

function wheel_scroll() {
  bgc.querySelector(".info__intro h1") = "a";
};

bgc.addEventListener("wheel", wheel_scroll);