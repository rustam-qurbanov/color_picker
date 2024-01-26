function updateColor() {
    // Получаем элемент input
    var colorPicker = document.getElementById('colorPicker');
    
    // Получаем значение выбранного цвета
    var selectedColor = colorPicker.value;

    // Получаем элементы, куда будем выводить HEX и RGB значения
    var hexValueElement = document.getElementById('hexValue');
    var rgbValueElement = document.getElementById('rgbValue');

    // Обновляем текст с HEX и RGB значениями
    hexValueElement.textContent = selectedColor;
    rgbValueElement.textContent = hexToRgb(selectedColor);

    // Обновляем цвет фона страницы
    document.body.style.backgroundColor = selectedColor;
}

// Функция для преобразования HEX в RGB
function hexToRgb(hex) {
    // Удаляем символ # (если он есть)
    hex = hex.replace(/^#/, '');

    // Разбиваем на красную, зеленую и синюю части
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    // Формируем строку RGB
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
