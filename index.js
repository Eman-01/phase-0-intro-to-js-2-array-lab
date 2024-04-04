// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(){
    cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}
function appendCat(name){
    const cats2 = cats.slice()
    cats2.push(name)
    return cats2;
}
function prependCat(name){
    const cats3 = cats.slice()
    cats3.unshift(name)
    return cats3;
}
function removeLastCat(name){
    const cats4 = cats.slice()
    cats4.pop(name)
    return cats4;
}
function removeFirstCat(name){
    const cats5 = cats.slice()
    cats5.shift(name)
    return cats5;
}
