const arr = [0, 25, -1, 99, -9, 2];
let a = null;
const leng = arr.length;
function sortArr(arr) {
    let choice = prompt(' Имеющийся массив ' + arr + '\n В каком порядке сортируем: \n 1 - Возрастание; \n 2 - Убывание. ', '');
    switch (choice) {
        case '1':
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
    a = arr[leng - 1];
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
numberSearchArr(arr);