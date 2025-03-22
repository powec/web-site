// Скрипт для сворачивания/разворачивания разделов
document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.classList.toggle('active');
        // Закрыть другие открытые секции
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== item.nextElementSibling) {
                content.classList.remove('active');
            }
        });
    });
});