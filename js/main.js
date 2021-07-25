const arr = [0, 25, -1, 99, -9, 2];
let a = null;
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

function outputOfNumbers() {
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