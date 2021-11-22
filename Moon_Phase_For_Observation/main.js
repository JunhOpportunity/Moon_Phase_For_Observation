// const btn = document.querySelector('.blackVer');
// btn.addEventListener('click', () => {
//     body.style.Color = 'black';
// // })
// function bgchange () {
//     document.body.style.backgroundColor = "tomato";
// }
// btn.addEventListener("click", bgchange);

const do_not_right_click = document.querySelector('img');
function right_click() {
  alert("무단 배포와 도용을 금지합니다.");
}
do_not_right_click.eventlistener('click', right_click);