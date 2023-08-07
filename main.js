// HW
// q1
console.log("#####q1#####");
let height = 50;
let width = 50;
let cals = height * width;
console.log("The area of the rectangle is: " + cals);

// q2
console.log("#####q2#####");
let celsius = 40;
let fahrenheit = 65;
let clsTofh = (celsius * 1.8) + 32
let fhTocls = (fahrenheit - 32) * .5556

console.log(`${celsius}°C is ${clsTofh}°F`)
console.log(`${fahrenheit}°F is ${fhTocls}°C`)

// q3
console.log("#####q3#####");
let hourse = 2;
let hTos = (hourse * 60) * 60;
console.log(`${hourse} hourse = ${hTos} sec`)

// q4
console.log("#####q3#####");
let leap_year = 2017;
if (leap_year % 4 == 0 && (leap_year % 100 !== 0 || leap_year % 400 !== 0)) {
    console.log(`th year ${leap_year} is a leap year`);
// } else if (leap_year % 100 == 0 || leap_year % 400 == 0) {
    // console.log(`th year ${leap_year} is not a leap year`);

}else {
    console.log(`the year ${leap_year} is not a leap year`);
}

// q5
console.log("#####q5#####");
start = 11
end = 30
number = 15

for (let i = 11; i<=30; i++){
    // console.log(i)
    if (i == number) {
        
        console.log(`the number ${number} is in range`);
        break
    }
}

// q6
console.log("#####q6#####");

inputNumber = 7;
cals= 1;
for (let i=1; i<=inputNumber; i++){
    
    cals *= i
    // console.log(cals);
    }
console.log(`the Factorial of the number ${inputNumber} is ${cals}`);
