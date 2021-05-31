// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.

const users = [
    { name: "Rudhesh", URL: "http//:www.RD.com", number: 89 },
    { name: "Ashish", URL: "www.AH.com", number: 79 },
    { name: "John", URL: "http//:www.RD.com", number: 49 },
    { name: "Adam", URL: "www.AM.com", number: 97},
    { name: "Carry", URL: "http//:www.RD.com", number: 98 },
    { name: "lena", URL: "http//:www.RD.com", number: 97},
    { name: "sarah", URL: "www.SH.com", number: 99 },
    { name: "adil", URL: "www.AL.com", number: 34 },
    { name: "kevin", URL: "http//:www.RD.com", number: 94 },
    { name: "ronn", URL: "www.RN.com", number:23 },
]

// 2. Then based on the array, create a new array that contains just the names.

const ArrayOfNames = users.map(n => n.name);
console.log(ArrayOfNames);

// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.

const ArrayOfNames1 = users.filter(u =>{ if (u.URL == "http//:www.RD.com" ) {
    return true
}
console.log("Invalid URL for " + u.URL ) });
console.log(ArrayOfNames1);

// 4. Sort the array based on the "number" property to a random order.

const randomNumber = users.sort(function(x,y){return Math.random() - 0.5})
console.log(randomNumber);

// 5. Sort the array based on the "number" property, with the lowest number first.

const numbersINOrder = users.sort((a,b) => a.number - b.number)
console.log(numbersINOrder)

// 6. Sort the array based on the "number" property, with the highest number first.

const numbersINOrder1 = users.sort((a,b) => b.number - a.number)
console.log(numbersINOrder1)

// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`.

 const ArrayOfNames2 = users.map(n => n.name);
 

let lastWord = ArrayOfNames2.pop()

console.log(ArrayOfNames2.join(",") + " and " + lastWord)