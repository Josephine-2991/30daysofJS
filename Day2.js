//Exercise: Level 1
let challenge = "'30 Days Of JavaScript'"
//2.
console.log(challenge)
//3.
console.log(challenge.length)
//4.
console.log(challenge.toUpperCase())
//5.
console.log(challenge.toLowerCase())
//6.
console.log(challenge.substring(1,3))
//7.
console.log(challenge.substr(4))
//8.
console.log(challenge.includes('Script'))
//9.
console.log(challenge.split())
//10.
console.log(challenge.split(' '))
//11.
const companies ="'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'"
console.log(companies.split(','))
//12.
console.log(challenge.replace('JavaScript', "Python"))
//13.
console.log(challenge.charAt(15))
//14.
console.log(challenge.charCodeAt('J'))
//15.
console.log(challenge.indexOf('a'))
//16.
console.log(challenge.lastIndexOf('a'))
//17.
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
//18.
console.log(sentence.lastIndexOf('because'))
//19.
console.log(sentence.search('because'))
//20.
let sen =' 30 Days Of JavaScript '
console.log(sen.trim())
//21.
console.log(challenge.startsWith(''))
//22.
console.log(challenge.endsWith(''))
//23.
console.log(challenge.match(/a/g))
//24.
console.log('30 days of '.concat('JavaScript'))
//25.
console.log(challenge.repeat(2))
//Exercise:Level 2
//1.
let quote ="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another"
console.log(quote)
//2.
let quote2='"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same with charity you give love, so don\'t just give money but reach out your hand instead." by Mother Theresa'
console.log(quote2)
//3.
console.log(typeof 10==="10")
console.log(typeof String(10) === typeof "10")
//4.
console.log(parseFloat('9.8') === 10)
console.log(Math.round(parseFloat('9.8')) === 10)
//5.
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))  
//6.
console.log('I hope this course is not full of jargon'.includes('jargon'))
//7.
console.log(Math.random()*100)
//8.
console.log((Math.random() * 50)+50)
//9.
console.log(Math.random() * 255)
//10.
let word="JavaScript"
console.log(word[Math.floor(Math.random() * word.length - 1)])
//11.
let sen2 = "1\t 1\t 1\t 1\t 1 \n2\t 1\t 2\t 4\t 8 \n3\t 1\t 3\t 9\t 27\n4\t 1\t 4\t 16\t 64\n5\t 1\t 5\t 25\t 125"
console.log(sen2)
//12.
console.log(sentence.substr(31,24))
//Level 3
//1.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi).length) 
//2.
console.log(sentence.match(/because/gi).length)
//3.
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding a seduca@ting & and & @emp%o@weri@ng peo@ple. ;I found tea @ching m % o@re interesting tha @n any ot#her % jo@bs. % Do@es thi%s mo@tiv#ate yo@u to be a tea @cher!? % Th#is 30#Days & OfJavaScript & is al @so $the $resu @lt of & love & of tea & ching'
console.log(sentence1.replaceAll(/[^\w\s ]/g,''))

//4.
let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let digits = salary.match(/\d+/g)
let annualSalary = (digits[0] * 12)
let annualBonus = Number(digits[1])
let onlineCourses = (digits[2] * 12)
console.log(annualSalary + annualBonus + onlineCourses)
//OR
console.log((+salary.match(/\d+/g)[0] * 12) + (Number(salary.match(/\d+/g)[1])) + (+salary.match(/\d+/g)[2])*12)

