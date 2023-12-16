const ScrollLine = document.querySelectorAll('.world-surf_slider_stuff')[0];
const nextBtn = document.getElementById('world-surf-btn--next');
const prevBtn = document.getElementById('world-surf-btn--prev');

console.log(ScrollLine);

ScrollLine.forEach((item, i) => { 
    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += 390; 
    });
    
    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 390; 
    });
});