const arr = [0, 25, -1, 99, -9, 2];
let a = null;
function Sort (arr) {
    let choice = prompt(' Имеющийся массив ' + arr + '\n В каком порядке сортируем: \n 1 - Возрастание; \n 2 - Убывание. ', '');
    switch(choice){
        case '1':
            for(let i = 1; i < arr.length; i++){
                for(let j = arr.length; j >= 0; j --){
                    if(arr[j+1]<=arr[j]){
                        a = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = a;
                        console.log(arr);
                    }
                }        
            }
            alert(arr);
        break;
        case '2':
            for(let i = 1; i < arr.length; i++){
                for(let j = arr.length; j >= 0; j --){
                    if(arr[j+1]>=arr[j]){
                        a = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = a;
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
Sort(arr);