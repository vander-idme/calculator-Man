function Calculator(config){
  this.pantalla = config.pantalla
  this.btns = config.buttons
  // console.log(this.btns)
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
  let exp = this.pantalla.value
  if(exp){
    this.pantalla.value = eval(exp)
  }
}

Calculator.prototype.backSpace = function(){
  let exp = this.pantalla.value
  let erase = ""
  // let caracter = erase.charAt(erase.length - 1)
  for(let i=0; i<exp.length-1; i++){
    erase = erase + exp[i]
  }
  this.pantalla.value = erase
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
  if(button.value === '*'){
    button.onclick = () => {this.print(button.value)}
  }
  if(button.value === '/'){
    button.onclick = () => {this.print(button.value)}
  }
  if(button.value === '='){
    button.onclick = () => {this.equal()}
  }
  if(button.value === '<'){
    button.onclick = () => {this.backSpace()}
  }
}

export default Calculator