document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filter-btn');
    const underline = document.querySelector('.underline');
    const galleryRows = document.querySelectorAll('.top-row, .bottom-row');
    
    const buttonPositions = {};
    buttons.forEach(btn => {
        buttonPositions[btn.dataset.filter] = {
            left: btn.offsetLeft,
            width: btn.offsetWidth
        };
    });
    
    function updateUnderline(filter) {
        const btnData = buttonPositions[filter];
        underline.style.left = `${btnData.left}px`;
        underline.style.width = `${btnData.width}px`;
    }
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            updateUnderline(filter);
            
            galleryRows.forEach(row => {
                if (row.classList.contains(filter)) {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
        });
    });
    
    const activeBtn = document.querySelector('.filter-btn.active');
    updateUnderline(activeBtn.dataset.filter);
});