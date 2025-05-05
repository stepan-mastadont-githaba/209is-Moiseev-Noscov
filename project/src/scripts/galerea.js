document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filter-btn');
    const underline = document.querySelector('.underline');
    const galleryRows = document.querySelectorAll('.top-row, .bottom-row');
    
    // Позиции и ширины кнопок
    const buttonPositions = {};
    buttons.forEach(btn => {
        buttonPositions[btn.dataset.filter] = {
            left: btn.offsetLeft,
            width: btn.offsetWidth
        };
    });
    
    // Обновление подчеркивания
    function updateUnderline(filter) {
        const btnData = buttonPositions[filter];
        underline.style.left = `${btnData.left}px`;
        underline.style.width = `${btnData.width}px`;
    }
    
    // Обработчик клика
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            buttons.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Обновляем подчеркивание
            const filter = this.dataset.filter;
            updateUnderline(filter);
            
            // Показываем соответствующие изображения
            galleryRows.forEach(row => {
                if (row.classList.contains(filter)) {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
        });
    });
    
    // Инициализация подчеркивания для активной кнопки
    const activeBtn = document.querySelector('.filter-btn.active');
    updateUnderline(activeBtn.dataset.filter);
});