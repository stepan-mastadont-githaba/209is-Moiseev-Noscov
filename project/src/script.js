// Скрипт переключения отображения
document.getElementById('showCategoryBtn').addEventListener('click', () => {
    document.getElementById('categorySection').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('backBtn').addEventListener('click', () => {
    document.getElementById('categorySection').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Скрипт слайдера с перетаскиванием
const sliderTrack = document.getElementById('sliderTrack');
let isDown = false;
let startX;
let scrollLeft;

sliderTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - sliderTrack.offsetLeft;
    scrollLeft = sliderTrack.scrollLeft;
    sliderTrack.style.cursor = 'grabbing';
    sliderTrack.style.scrollBehavior = 'auto';
});

sliderTrack.addEventListener('mouseup', () => {
    isDown = false;
    sliderTrack.style.cursor = 'grab';
    sliderTrack.style.scrollBehavior = 'smooth';
});

sliderTrack.addEventListener('mouseleave', () => {
    isDown = false;
    sliderTrack.style.cursor = 'grab';
});

sliderTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderTrack.offsetLeft;
    const walk = (x - startX) * 2;
    sliderTrack.scrollLeft = scrollLeft - walk;
});

// Обработчик для сенсорных устройств
let touchStartX;
let touchScrollLeft;

sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = sliderTrack.scrollLeft;
    sliderTrack.style.scrollBehavior = 'auto';
});

sliderTrack.addEventListener('touchend', () => {
    sliderTrack.style.scrollBehavior = 'smooth';
});

sliderTrack.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 2;
    sliderTrack.scrollLeft = touchScrollLeft - walk;
});