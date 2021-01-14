function CustomValidation() { }

CustomValidation.prototype = {
    // Установим пустой массив сообщений об ошибках
    invalidities: [],

    // Метод, проверяющий валидность
    checkValidity: function(input) {

        let validity = input.validity;

        if (validity.patternMismatch) {
            this.addInvalidity('This is the wrong pattern for this field');
        }

        if (validity.rangeOverflow) {
            let max = getAttributeValue(input, 'max');
            this.addInvalidity('The maximum value should be ' + max);
        }

        if (validity.rangeUnderflow) {
            let min = getAttributeValue(input, 'min');
            this.addInvalidity('The minimum value should be ' + min);
        }

        if (validity.stepMismatch) {
            let step = getAttributeValue(input, 'step');
            this.addInvalidity('This number needs to be a multiple of ' + step);
        }

        // И остальные проверки валидности...
    },

    // Добавляем сообщение об ошибке в массив ошибок
    addInvalidity: function(message) {
        this.invalidities.push(message);
    },

    // Получаем общий текст сообщений об ошибках
    getInvalidities: function() {
        return this.invalidities.join('. \n');
    }
};

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(e) {
    // Пройдёмся по всем полям
    for (let i = 0; i < inputs.length; i++) {

        var input = inputs[i];

        // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
        if (input.checkValidity() == false) {

            let inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
            inputCustomValidation.checkValidity(input); // Выявим ошибки
            let customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
            input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

        } // закончился if
    } // закончился цикл
});