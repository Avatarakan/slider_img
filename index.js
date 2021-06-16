const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
        setBodyBackground();
    });
});

const clearActiveClasses = () => {
    slides.forEach(slide => {
       slide.classList.remove('active');
    });
};

const setBodyBackground = () => {
    const backgroundImage = document.querySelector('.active').style.backgroundImage;
    document.querySelector('body').style.backgroundImage = backgroundImage;
}

setBodyBackground();