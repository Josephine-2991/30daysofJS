//Exercise-Level 1
//1.
let firstName="Joy"
let lastName="James"
let country="Nigeria"
let city="Lagos"
let age=12
let isMarried="single"
let year=2023

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
//2.

//3.
console.log(parseInt('9.8')=== 10)
//4.
console.log(2=="2")
console.log(null == undefined)
console.log(0 == false)

console.log(null== false)
console.log(null== 0)
console.log(null == "")
console.log(undefined == false)

//4.
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4) 
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4' )
console.log(4 === '4') 
console.log(4 > 3 && 10 < 12 )
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12) 
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!("dragon".includes('on') && "python".includes('on')))      
//5.
let take=new Date()
console.log(take.getFullYear()) 
console.log(take.getMonth() + 1)    
console.log(take.getDate())    
console.log(take.getDay()+1)    
console.log(take.getHours())    
console.log(take.getMinutes())    
console.log(take.getTime())    
//Exercise-Level 2
//1.
/*let b=(+prompt('Enter the value of base'))    
let h = (+prompt('Enter the value of height'))
let areaTriangle = 0.5 * b *  h
console.log(areaTriangle) */
//2.
/*let a = (+prompt('Enter the value of side a'))

let c = (+prompt('Enter the value of side c'))
let d = (+prompt('Enter the value of side d'))

let perimeterTriangle = a + c + d
console.log(perimeterTriangle) 
//3. 
let w = (+prompt('Enter the value of width'))
let l = (+prompt('Enter the value of length'))
let areaRectangle =  w * l
let perimeterRectangle= 2 * (w + l)
console.log(areaTriangle)
console.log(perimeterRectangle)

//4.
 const PI=3.14
 let r=+prompt("Enter the value of radius")
let areaCircle = PI * r * r
let perimeterCircle = 2 * PI * r
console.log(areaCircle)
console.log(perimeterCircle)*/

//5.
//let e=prompt("Enter the expression:y=2x-2")
let e = 'y= 2x -2'
let m=+e.match(/\d+/g)[0]
let c = +e.match(/\d+/g)[1]
let x_intercept=-c//y=mx+c
let y_intercept = -c/m
console.log(m)
console.log(`The slope is: ${m} x-intercept is: ${x_intercept} and y-intercept is: ${y_intercept} of y = 2x -2`)

//6.
let y2=10
let y1=2
let x2=6
let x1=2
let m2 = (y2 - y1)/(x2 - x1)
console.log(m2)
//7.
console.log(m===m2)
//8.
let x=-3
let y =x * x + 6 * x + 9
console.log(y)
y == 0 ? console.log(`The value of x is ${x} when y was zero'`) :console.log("no")
//9.
/*let hours=+prompt("Enter the no of Hours worked")
let rate=+prompt("Enter the rate per hours")
let weeklyEarn=hours * rate
console.log(weeklyEarn)*/
//10.
let name1="Joy"
name1.length > 7 ?console.log("your name is long."):console.log('your name is short.') 
//11.
let firstName1="Stanley"
let lastName1="joy"
firstName1.length>lastName1.length 
    ? console.log(`Your first name, ${firstName1} is longer than your family name, ${lastName1}`) 
    : console.log('nil')

//12.
let myAge=34
let yourAge=12
let diff=myAge - yourAge
console.log(`I am ${diff} older than you`)
//13.
/*let age2=prompt("Enter your birth year")
let userAge=2023-age2
let yearRem=18-userAge
userAge>18 
    ? console.log('You are old enough to drive') 
    : console.log(`You are ${userAge}.You are left with ${yearRem} years to drive.`)*/

//14.
/*let years=+prompt('Enter number of years')
let take1= new Date()
let yearlySec1=take1.getTime()/53
let secsLived = Math.floor(years * yearlySec1) 
console.log(`You lived ${secsLived}    seconds`)*/

//15.
let t = new Date
let yea = t.getFullYear()
let month = String((t.getMonth() + 1)).padStart(2, "0")
let date = String(t.getDate()).padStart(2, "0")
let hours = String(t.getHours()).padStart(2, "0")
let minutes = String(t.getMinutes()).padStart(2, "0")
let seconds = String(t.getSeconds()).padStart(2, "0")
console.log(`${yea}-${month}-${date}-${hours}-${minutes}`)
//Exercises: Level 3
//1.
let yea1 = String(t.getFullYear()).slice(0,3)
console.log(`${yea1}-${month}-${date}-${hours}-${minutes}`)
