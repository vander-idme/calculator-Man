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

const minus           = document.querySelector("#minus")
const plus            = document.querySelector("#plus")
const division        = document.querySelector("#division")
const multiplication  = document.querySelector("#multiplication")
const equal           = document.querySelector("#equal")
const backSpace       = document.querySelector("#backSpace")
const clear           = document.querySelector("#clear")

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
    division,
    multiplication,
    equal,
    backSpace,
    clear
  ]
})