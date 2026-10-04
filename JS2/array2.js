const marvel_heros=["Thor", "Ironman", "Spiderman"]
const dc_heros=["Superman", "Flash", "Batman"]

marvel_heros.push(...dc_heros)
//console.log(marvel_heros)

const all_heros= marvel_heros.concat(dc_heros)
//console.log(all_heros)


let all_new_heros=[...dc_heros,...marvel_heros]
//console.log(all_new_heros)


let test_array=[2,3,4,[4,4,5,6,7,[3,6,7,8,9]]]
let Usable_array=test_array.flat(Infinity)
//console.log(Usable_array)

console.log(Array.isArray([3,4,"tsp"]))
console.log(Array.isArray("TSP_from Kanpur"))
console.log(Array.from("TSP_from Kanpur."))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score2, score3))
