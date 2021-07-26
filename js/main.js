const arr = [0, 25, -1, 99, -9, 2];
let a = null;

//№1
function sortArr(arr) {
    let choice = prompt(' Имеющийся массив ' + arr + '\n В каком порядке сортируем: \n 1 - Возрастание; \n 2 - Убывание. ', '');
    switch (choice) {
        case '1':
            //arr.sort(function(a, b) {return a - b});   <--- более упрощённая версия с применением .sort
            for (let i = 1; i < arr.length; i++) {
                for (let j = arr.length; j >= 0; j--) {
                    if (arr[j + 1] <= arr[j]) {
                        a = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = a;
                        console.log(arr);
                    }
                }
            }
            alert(arr);
            break;
        case '2':
            //arr.sort(function(b, a) {return a - b});   <--- более упрощённая версия с применением .sort
            for (let i = 1; i < arr.length; i++) {
                for (let j = arr.length; j >= 0; j--) {
                    if (arr[j + 1] >= arr[j]) {
                        a = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = a;
                        console.log(arr);
                    }
                }
            }
            alert(arr);
            break;
        default: alert('Перечитай задание!');
            Sort(arr);
    }
}
//sortArr(arr);

//№2
function numberSearchArr(arr) {
    let choice = prompt(' Имеющийся массив ' + arr + '\n Какое число ищем: \n 1 - Наибольшее; \n 2 - Наименьшее. ', '');
    a = arr[arr.length - 1];
    switch (choice) {
        case '1':
            for (let i = arr.length; i >= 0; i--) {
                if (arr[i] > a) {
                    a = arr[i];
                }
            }
            alert(a);
            break;
        case '2':
            for (let i = arr.length; i >= 0; i--) {
                if (arr[i] < a) {
                    a = arr[i];
                }
            }
            alert(a);
            break;
        default: alert('Перечитай задание!');
            numberSearchArr(arr);
    }
}
//numberSearchArr(arr);

//№3
function palindrome(str) {
    let strRever = str.split('').reverse().join('').toLowerCase();
    str = str.toLowerCase();
    /* if (str == strRever) {
        alert('Является');
    }
    else alert('Не является'); */
    let res = str == strRever ? 'Является' : 'Не является';
    alert(res);

}
//let test = prompt('Введите строку для проверки её на палиндром: ', '');
//palindrome(test);

//№4
function outputOfNumbers(num) {
    let arrNum = [];
    for (let i = 0; i <= num; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            arrNum[i] = ' fizzbuzz ';
        } else {
            if (i % 5 == 0) {
                arrNum[i] = ' buzz ';
            } else {
                if (i % 3 == 0) {
                    arrNum[i] = ' fizz ';
                } else arrNum[i] = i;
            }
        }
        console.log(arrNum);
    }
    alert(arrNum);
}
//let num = prompt('Введите целое число n: ', '');
//outputOfNumbers(num);

//№5
function anagrams(test1, test2) {
    let punct = ";:.,?!-_—\"'(){} ";
    punct = punct.split('');
    for (let i = 0; i <= test1.length; i++) {
        for (let j = punct.length; j > 0; j--) {
            test1 = test1.replace(punct[j], "");
        }
    }
    for (let i = 0; i <= test2.length; i++) {
        for (let j = punct.length; j > 0; j--) {
            test2 = test2.replace(punct[j], "");
        }
    }
    test1 = test1.toLowerCase().split('').sort().join('');
    test2 = test2.toLowerCase().split('').sort().join('');
    let res = test1 == test2 ? 'Являются' : 'Не являются';
    alert(res);
}
//let test1 = prompt('Введите 1-ую фразу для проверки её на анаграмность: ', '');
//let test2 = prompt('Введите 2-ую фразу для проверки её на анаграмность: ', '');
//anagrams(test1, test2);

//№6
function vowels(test) {
    let vowel = "aeiou";
    vowel = vowel.split('');
    let sum = null;
    for (let i = 0; i <= test.length; i++) {
        for (let j = vowel.length; j > 0; j--) {
            if (vowel[j] == test[i]) sum++;
        }
    }
    alert(sum);
}
//let test = prompt('Введите строку для подсчёта глассных: ', '');
//vowels(test);

//№7
function notRevers(arr) {
    alert(arr);
    let a = arr.length - 1;
    let save = null;
    for (let i = 0; i < arr.length / 2; i++) {
        save = arr[a]
        arr[a] = arr[i];
        arr[i] = save;
        a--;
        console.log(arr);

    }
    alert(arr);
}
//notRevers(arr);

//№8
function arithmeticMean(arr) {
    alert(arr);
    let res = null;
    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i];
        console.log(res);
    }
    alert('Среднее арифметическое массива = ' + res / arr.length);
}
//arithmeticMean(arr);

//№9
function inArray(test, arr) {
    alert(arr);
    let res = null;
    for (let i = 0; i < arr.length; i++) {
        res = arr[i] == test ? true : false;
        console.log(res);
        /* if(arr[i] == test) alert(true); */ // если нужен вывод в окно.
    }
}
//let test = prompt('Введите элемент, который хотите найти: ', '');
//inArray(test, arr);

//№10
function convers(arrTest) {
    arrTest = arrTest.split('');
    for (let i = 0; i < arrTest.length; i += 2) {
        [arrTest[i], arrTest[i + 1]] = [arrTest[i + 1], arrTest[i]];
    }
    alert(arrTest.join(''));
}
//let arrTest = prompt('Введите элемент, который необходимо преобразовать: ', '');
//convers(arrTest);

//№11,12
function dayMonth(day, month) {
    day = day > 0 && day <= 10 ? alert('1 Декада') :
        day > 10 && day <= 20 ? alert('2 Декада') :
            day > 20 && day <= 31 ? alert('3 Декада') :
                alert('Неверная дата!');
    month = month > 0 && month <= 3 ? alert('Зима') :
        month > 3 && month <= 6 ? alert('Весна') :
            month > 6 && month <= 9 ? alert('Лето') :
                month > 9 && month <= 12 ? alert('Осень') :
                    alert('Нет такого месяца!');
}
//let day = prompt('Введите день: ', '');
//let month = prompt('Введите месяц: ', '');
//dayMonth(day, month);