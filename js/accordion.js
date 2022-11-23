// Объявим две переменные, первая переменная будет получать элемент по названию класса accordion. Вторая переменная с названием i
let acc = document.getElementsByClassName("accordion");
let i;
// В цикле for перебираем весь массив элементов с классом accordion, то есть будут выводиться все заголовки.
for (i = 0; i < acc.length; i++) {
    // На каждый из элементов добавляем действие по клику, будет выполняться функция, когда ко всем элементам в массиве применяется метод toggle.
    acc[i].addEventListener("click", function() {
        // Метод toggle добавляет и удаляет класс active для замены цвета кнопки и поворота крестика управляющей панелью.
        this.classList.toggle("active");

        // Назначаем переменной panel – свойство nextElementSibling, это переключатель между скрытием и показом активной панели.
        var panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
        }
    });
}