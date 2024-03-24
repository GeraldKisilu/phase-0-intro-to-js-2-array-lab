// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  const catsCopy = cats.slice(0, cats.length - 1);
  return catsCopy;
}

function removeFirstCat(){
  const catsCopy = cats.slice(1)
  return catsCopy;
}
