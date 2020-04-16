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

function Calculator(config){
  this.pantalla = config.pantalla
  this.btns = config.buttons
  this._listerner()
}

Calculator.prototype._listerner = function(){
  this.btns.forEach(button => {
    this.clickButtons(button)
  });
}


Calculator.prototype.print = function(num){
  this.pantalla.value = this.pantalla.value + num
}

Calculator.prototype.clear = function(){
  this.pantalla.value = null
}

Calculator.prototype.equal = function(){
  let sumaTotal
  let operador = "+"
  let arrayNum = this.pantalla.value.split(operador)

  sumaTotal = this.sum(arrayNum)
  console.log(sumaTotal)
}

Calculator.prototype.sum = function(numeros){
  let res = 0
  var sumando
  for(let i=0; i<numeros.length; i++){
    sumando = parseInt(numeros[i])
    res = res + sumando
  }
  return res
}

Calculator.prototype.clickButtons = function(button){
  // console.log(button.value)
  if(button.value >= 0 && button.value <= 9){
    button.onclick = () => {this.print(button.value)}
  }
  if(button.value === 'C'){
    button.onclick = () => {this.clear()}
  }
  if(button.value === '+'){
    button.onclick = () => {this.print(button.value)}
  }
  if(button.value === '='){
    button.onclick = () => {this.equal()}
  }
}



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

    plus,
    equal,
    clear
  ]

})
