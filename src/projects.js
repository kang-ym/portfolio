'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories'); // button
const projects = document.querySelectorAll('.project'); //querySelectorAll 는 ( ) 안의 함수 전부 찾아달라는 것
const projectsContainer = document.querySelector('.projects'); // 점점 나타나는 효과를 위해
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if (filter == null) {
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
});

// 코드가 너무 많다면 함수로 정리해주면 좋다 / 그러면 주석으로 이름 정리를 안해도 되고 알아보기 편하다
function handleActiveSelection(target){
        // Active 메뉴를 재설정
        const active = document.querySelector('.category--selected');
        active.classList.remove('category--selected');
        target.classList.add('category--selected');
    
};
function filterProjects(filter){
        //프로젝트 필터링 
        projectsContainer.classList.add('anim-out');
        projects.forEach((project) => { // 순회하면서 프로젝트당 한가지씩 일 처리
            if (filter === 'all' || filter === project.dataset.type) {
                project.style.display = 'block'; // 보여주고
            } else {
                project.style.display = 'none'; // 보여주지 않고
            }
        });
        setTimeout(()=>{
            projectsContainer.classList.remove('anim-out');
    
        }, 250);
    
};