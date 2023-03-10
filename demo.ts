// Exercice 1.3

const Names: string[] = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne']

for (let i = 0; i < Names.length; i++) {
    if (Names[i].length <= 5)
        console.log(Names[i]);
}

// Exercice 2.3

const Countries: string[] = ['France', 'Japon', 'Maroc', 'Irlande', 'Italie']
const sentence: string = ''
for (let i = 0; i < Countries.length; i++)
    console.log(Countries + sentence)


// Exercice 3.3

const Numbers: number[] = [123, 999, 340, 12390]
const Numbersmultiplied = Numbers.map(num => num * 180);

console.log(Numbersmultiplied);

const numbers: number[] = [123, 999, 340, 12390];
let results: number[] = [];

for (let i = 0; i < numbers.length; i++) {
    results.push(numbers[i] * 180);
}

console.log(results);