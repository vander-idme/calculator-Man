import Calculator from './Calculator.js'

const pantalla = document.querySelector("#pantalla")

const buttonZero  = document.querySelector("#numberZero")
const buttonOne   = document.querySelector("#numberOne")
const buttonTwo   = document.querySelector("#numberTwo")
const buttonThree = document.querySelector("#numberThree")
const buttonFour  = document.querySelector("#numberFour")
const buttonFive  = document.querySelector("#numberFive")
const buttonSix   = document.querySelector("#numberSix")
const buttonSeven = document.querySelector("#numberSeven")
const buttonEight = document.querySelector("#numberEight")
const buttonNine  = document.querySelector("#numberNine")

const clear = document.querySelector("#clear")
const plus  = document.querySelector("#plus")
const equal  = document.querySelector("#equal")

const calc = new Calculator({
  pantalla: pantalla,
  buttons: [
    buttonZero,
    buttonOne,
    buttonTwo,
    buttonThree,
    buttonFour,
    buttonFive,
    buttonSix,
    buttonSeven,
    buttonEight,
    buttonNine,


    minus,
    plus,
    equal,
    clear
  ]

})
