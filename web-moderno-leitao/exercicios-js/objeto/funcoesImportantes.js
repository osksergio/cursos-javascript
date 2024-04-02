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