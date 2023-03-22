// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать
// это число. Если догадка пользователя больше случайного числа, то программа должна вывести
// сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то
// программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь
// угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали,
// поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл;
// Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

class guessTheNumber {

    doBinarySearch(rnd_) {
        try {
            let startNumber = 0;
            let finishNumber = 100;
            let countOfIntaration = 0;

            for (let i = startNumber; i < finishNumber; i++) {
                const middleNumber = prompt(`Введите число от ${startNumber} до ${finishNumber}`
                );

                if (middleNumber === null) {
                    alert('Вы не угадали');
                    break;
                }

                if (middleNumber == rnd_) {
                    alert(`Вы угадали значение за ${countOfIntaration} раз!`);
                    break;

                } else if (middleNumber > rnd_) {
                    countOfIntaration++;
                    finishNumber = middleNumber;
                    alert(`Вы ввели число ${middleNumber} и оно больше заданного. Введите число от ${startNumber} до ${finishNumber}`
                    );
                    continue;

                } else if (middleNumber < rnd) {
                    countOfIntaration++
                    startNumber = middleNumber;
                    alert(`Вы ввели число ${middleNumber} и оно меньше заданного. Введите число от ${startNumber} до ${finishNumber}`
                    );
                    continue;
                }
            }
        } catch (error) {
            return error.message;
        }
    }
}

const rnd = Math.round(Math.random() * 100);
const guessthenumber = new guessTheNumber()
guessthenumber.doBinarySearch(rnd);