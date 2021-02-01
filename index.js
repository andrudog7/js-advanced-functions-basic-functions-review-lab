// Your code here
function saturdayFun(event="roller-skate") {
    return `This Saturday, I want to ${event}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.` 
}

function wrapAdjective(flair="*") {
    return function(word="special") {
        return `You are ${flair}${word}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
    add: function(num, number) {
    return num + number
},
subtract: function(num, number) {
    return num - number
},
multiply: function(num, number) {
    return num * number
},
divide: function(num, number) {
    return num / number
}
}

function actionApplyer(integer, functions) {
    let a = integer 
    for(let i = 0; i < functions.length; i++) {
    a = functions[i](a)
    }
    return a
}


