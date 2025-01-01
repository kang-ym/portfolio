// < header에 페이지  아래로 스크롤시 다크 스타일링 적용>!!!
/**
 * <목표> 헤더 투명화/ 스크롤 움직임에 따라 색 보이기 
 * 1. 헤더요소 가져오기
 * 2. 헤더 높이 확인
 * 3. 스크롤링 Y좌표에 따라 스타일링 변경 
 * 4. 클래스 이름 변경 새롭게 
 */
/**
 * document :문서전체 정보를 자기고 있는 객체
 * window.document.querySelector 
 * querySelector 는 document에서 제공하는 함수
 * document는 window에 들어있음 
 * window 브라우저에서 제공하는 객체 ( 글러벌 객체라고 한다. 브라우저에서 제공되는 기본객체이기 때문)
 * 변수 저장 const
 * querySelector 원하는 요소 찾을 때
 */
const header = document.querySelector('.header'); 
/**
 * header Y 찾기
 */
// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height; 밑의 걸 풀어서 작성하면 이런식으로 된다 
// headerRect 는 getBoundingClientRect의 모양의 값을 호출해 준다.
const headerHeight = header.getBoundingClientRect().height; // 높이 측정 요청
/**
 * 문서와 스크롤링의 값 
 */
document.addEventListener('scroll', () => { // scroll이 발 생 했을 때 function 내가 하고 싶은 일 작성  / 이름없는 함수 function() 은 -> ()=>{} 로 가능 <화살표함수>
    //스크롤되는 Y좌표가 headerHeight보다 크다면 다른 스타일링!
    console.log(window,scrollY);//문서의 전체적인 Y좌표 확이 방법
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark'); // 클래스 추가 
    } else {
        header.classList.remove('header--dark'); // y가 작다면 header--dark를 지워줘
    }
});