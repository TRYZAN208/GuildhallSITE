// We put everything inside this function to ensure the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 0;

    function updateSlide() {
        // We re-calculate the images and size EVERY time you click
        const images = document.querySelectorAll('.carousel-slide img');
        const size = images[0].clientWidth;
        
        console.log("Current Index:", counter); // This helps us debug
        console.log("Image Width:", size);

        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        const images = document.querySelectorAll('.carousel-slide img');
        if (counter >= images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        const images = document.querySelectorAll('.carousel-slide img');
        if (counter <= 0) {
            counter = images.length - 1;
        } else {
            counter--;
        }
        updateSlide();
    });

    // Make sure it looks right on start
    updateSlide();
});
