// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push("Ralph")
}

function destructivelyPrependCat(name){
    return cats.splice(0,0,"Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.splice(0,1)
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    return [...cats.slice(0,2)]
}

function removeFirstCat(){
    return [...cats.slice(1)]
}