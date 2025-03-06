// Инициализация карточек при первом запуске
function initializeCards() {
    const defaultCards = [
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя", button1: "Позвонить", button2: "Забронировать"},
        { image: "./image 2.png", title: "Премиум с панорамным видом", price: "от 15 147 ₽", data: "1 ночь / 2 гостя",button1: "Позвонить", button2: "Забронировать"},

        
    ];  

    if (!localStorage.getItem('cards')) {
        localStorage.setItem('cards', JSON.stringify(defaultCards));
    }
}

// Функция для отрисовки карточек в конкретном слайдере
function renderCards(sliderId, cards) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        slider.innerHTML = '';
        cards.forEach((card) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.image}"></img>
                <h1>${card.title}</h1>
                <div class="card-row">
                    <p>${card.price}</p>
                    <p>${card.data}</p>
                </div>
                <div class="button-container">
                <a  href="podpiska-start.html" style="visibility: hidden;"><button href="podpiska-start.html">${card.button1}</button></a>
                <a  href="podpiska-start.html"><button href="podpiska-start.html">${card.button2}</button></a>
                </div>
            `;
            slider.appendChild(cardElement);
        });
    }
}

// Функции для слайдера
let currentIndex1 = 0; // Текущий индекс для первого слайдера
let currentIndex2 = 4; // Текущий индекс для второго слайдера

function updateSliderPosition(sliderId, currentIndex) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        const cardWidth = document.querySelector('.card').offsetWidth + 20; // 20px margin
        slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
}
const mediaQuery1440 = window.matchMedia('(max-width: 1440px)');
const mediaQuery1024 = window.matchMedia('(max-width: 1024px)');
const mediaQuery768 = window.matchMedia('(max-width: 768px)');
function nextSlide(sliderId) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    if (cards.length === 0) return; // Если карточек нет, ничего не делаем
    const a768 = mediaQuery768;
    const a1024 = mediaQuery1024;
    const a1440 = mediaQuery1440;
    countslideIndex = 4;
    if (a768.matches) {
        countslideIndex = 1;
    } else if (a1024.matches) {
        countslideIndex = 2;
    } else if (a1440.matches) {
        countslideIndex = 3
    }
    let currentIndex;
    if (sliderId === 'slider1') {
        currentIndex = currentIndex1;
    } else if (sliderId === 'slider2') {
        currentIndex = currentIndex2;
    }

    if (currentIndex < cards.length - countslideIndex) {
        currentIndex++;
    } else {
        // Если достигнут конец, переходим на первую карточку
        currentIndex = 0;
    }

    if (sliderId === 'slider1') {
        currentIndex1 = currentIndex;
    } else if (sliderId === 'slider2') {
        currentIndex2 = currentIndex;
    }

    updateSliderPosition(sliderId, currentIndex);
}

function prevSlide(sliderId) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    if (cards.length === 0) return; // Если карточек нет, ничего не делаем
    const a768 = mediaQuery768;
    const a1024 = mediaQuery1024;
    const a1440 = mediaQuery1440;
    countslideIndex = 4;
    if (a768.matches) {
        countslideIndex = 1;
    } else if (a1024.matches) {
        countslideIndex = 2;
    } else if (a1440.matches) {
        countslideIndex = 3
    }
    let currentIndex;
    if (sliderId === 'slider1') {
        currentIndex = currentIndex1;
    } else if (sliderId === 'slider2') {
        currentIndex = currentIndex2;
    }

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Если достигнуто начало, переходим на последнюю карточку
        currentIndex = cards.length - countslideIndex;
    }

    if (sliderId === 'slider1') {
        currentIndex1 = currentIndex;
    } else if (sliderId === 'slider2') {
        currentIndex2 = currentIndex;
    }

    updateSliderPosition(sliderId, currentIndex);
}

// Функция для добавления карточки
function addCard() {
    const title = document.getElementById('cardTitle').value.trim();
    const description = document.getElementById('cardDescription').value.trim();
    const image = document.getElementById('cardImage').value.trim();

    if (title && description && image) {
        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push({ image, title, description });
        localStorage.setItem('cards', JSON.stringify(cards));
        document.getElementById('cardTitle').value = '';
        document.getElementById('cardDescription').value = '';
        document.getElementById('cardImage').value = '';
        document.getElementById('cardData').value = '';
        // Обновляем оба слайдера
        renderCards('slider1', cards);
        renderCards('slider2', cards);
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}

// Функция для сброса всех карточек
function resetCards() {
    localStorage.removeItem('cards');

    // Обновляем оба слайдера
    renderCards('slider1', []);
    renderCards('slider2', []);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initializeCards(); // Добавляем 10 карточек, если их нет
    const cards = JSON.parse(localStorage.getItem('cards')) || [];

    // Отрисовываем карточки в обоих слайдерах
    renderCards('slider1', cards);
    renderCards('slider2', cards);
});


resetCards();