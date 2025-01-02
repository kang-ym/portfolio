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
    // Active 메뉴를 재설정
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    event.target.classList.add('category--selected');
    
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
});