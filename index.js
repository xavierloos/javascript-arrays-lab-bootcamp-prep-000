const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
<<<<<<< HEAD
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
  return kittens
}
function appendKitten(name){
  var kitten = [...kittens, name]
  return kitten
}
function prependKitten(name){
  var kitten = [name, ...kittens]
  return kitten
}
function removeLastKitten(){
  var kitten = kittens.slice(0, kittens.length - 1)
  return kitten
}
function removeFirstKitten(){
  var kitten = kittens.slice(1, kittens.length - 0)
  return kitten
=======
>>>>>>> 9a742022600763c9caadbc7ad2d39eae7d19b26e
}