const people = {
  nome: 'Leonardo',
  idade: 7,
  peso: 22
}

console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))


Object.entries(people).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(people, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/04/2024'
})

people.dataNascimento = '01/03/2024'
console.log(people.dataNascimento)
console.log(Object.keys(people))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)