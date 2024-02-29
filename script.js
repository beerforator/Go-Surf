"use strict";

function verticalSwiper(ScrollLine, nextBtn, prevBtn) {
    nextBtn.addEventListener('click', () => {
        ScrollLine.scrollLeft += 351; 
    });

    prevBtn.addEventListener('click', () => {
        ScrollLine.scrollLeft -= 349; 
    });
}

function ascentSwiper(ScrollLine, nextBtn, prevBtn) {
    
}

function surfItems(items) {    
    let act_index = 0;
    items[act_index].classList.add('world-surf_slider-item--active');
    let act_panpan = items[act_index].querySelector('.panda-obj--surf');
    act_panpan.classList.add('panda-obj--surf--active');
    
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            let title_text = item.querySelector('.text_on > h5').textContent;
            document.getElementById('map_title').innerHTML=title_text;
            
            items[act_index].classList.remove('world-surf_slider-item--active');
            items[index].classList.add('world-surf_slider-item--active'); 
            
            let act_panpan = items[act_index].querySelector('.panda-obj--surf');
            let panpan = items[index].querySelector('.panda-obj--surf');
            act_panpan.classList.remove('panda-obj--surf--active');
            panpan.classList.add('panda-obj--surf--active'); 
            
            act_index = index;
        }); 
    });
}

function surfSwiper() {    
    surfItems(document.querySelectorAll('.world-surf_slider-item'));
    
}

//=====================

verticalSwiper(document.querySelector('.world-surf_slider_stuff'), document.getElementById('world-surf-btn--next'), document.getElementById('world-surf-btn--prev'));

surfSwiper(document.querySelectorAll('.world-surf__inner'));