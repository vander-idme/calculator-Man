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

  let result
  let operator = "+"
  let arrayNum = this.pantalla.value.split(operator)
  console.log(arrayNum)
  console.log(operator)

  result = this.operation(arrayNum, operator)
  this.pantalla.value = result
}


Calculator.prototype.operation = function(numeros){

  let ans = 0
  let sum
  for(let i=0; i<numeros.length; i++){
    sum = parseInt(numeros[i])
    ans = ans + sum
  }
  return ans
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
  if(button.value === '-'){
    button.onclick = () => {this.print(button.value)}
  }
  if(button.value === '='){
    button.onclick = () => {this.equal()}
  }
}

export default Calculator