// Coding Challenge #1
const getBMI = (mass, height) => mass / height ** 2
const mark = {}

const john = {}
// Test Data 1
// Data 1: Marks weights 78 kg and is 1.69 m height. John weights 92 kg and is 1.95 m tall.
mark.mass = 78
mark.height = 1.69
mark.BMI = getBMI(mark.mass, mark.height).toFixed(1)
john.mass = 92
john.height = 1.95
john.BMI = getBMI(john.mass, john.height).toFixed(1)
let markHigherBMI = mark.BMI > john.BMI

console.log(markHigherBMI ?
`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI}) ` :
`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI}) `)
// Test Data 2
// Data 2: Marks weights 95 kg and is 1.88 m height. John weights 85 kg and is 1.76 m tall.
mark.mass = 95
mark.height = 1.88
mark.BMI = getBMI(mark.mass, mark.height).toFixed(1)
john.mass = 85
john.height = 1.76
john.BMI = getBMI(john.mass, john.height).toFixed(1)
markHigherBMI = mark.BMI > john.BMI

// Coding Challenge #2
console.log(markHigherBMI ?
`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI}) ` :
`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI}) `)