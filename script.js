
let menu = prompt("This program will check to numbers and see which one is greater", "Menu")
let num1 = 0
let num2 = 0

let answer1 = prompt("Please type in number1", "00")
num1 += parseInt(answer1)
let answer2 = prompt("Please type in number2", "00")
num2 += parseInt(answer2)

if(num2 > num1)
    {

        console.log(num2  + " is greater than " +  num1)
    }
    else
    {
            if(num2 = num1)
                {
                    console.log(num2  + " is equal than " +  num1)
                }
                else
                {
                    console.log(num2  + " is smaller than " + num1)
                }
    }