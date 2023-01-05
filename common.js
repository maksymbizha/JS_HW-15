const arr = [1, 2, 3, 4, 5, 6, 7];
const item = 5;

alert(`Массив = [${arr.join(', ')}]`)

Array.prototype.remove = function(value) {
    this.splice(this.indexOf(value), 1);
}


arr.remove(item);
alert(`Удалили item ${item} з массиву = [${arr.join(', ')}]`);