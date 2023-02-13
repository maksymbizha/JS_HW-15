/* Перший варіант запису */

const array = [1,2,3,4,5,6,7,8,9,10];

alert(`Массив = [${array.join(', ')}]`)

const item = +prompt("Вкажить число якє треба видалети з массиву.");

const index = array.indexOf(item)

if(index !== -1){

    function removeElement (arr , item){
        array.splice(index,1)
        return array
    }
    const resArray = removeElement(array, item)
    alert(`Массив = [${resArray.join(', ')}]`)

}  else {
    alert('Ви ввели не валідне число.')
}


/* Другий варіант запису */

// const array = [1,2,3,4,5,6,7,8,9,10];
//
// alert(`Массив = [${array.join(', ')}]`)
//
// const item = +prompt("Вкажить число якє треба видалети з массиву.");
//
// function removeElement (arr , item){
//     const index = array.indexOf(item)
//     if(index !== -1){
//         array.splice(index,1)
//
//     } else {
//         alert('Ви ввели не валідне число.')
//     }
//     return array
// }
//
// const resArray = removeElement(array, item)
// alert(`Массив = [${resArray.join(', ')}]`)
