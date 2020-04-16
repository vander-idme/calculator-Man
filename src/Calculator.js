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


  let exp = this.pantalla.value
  if(exp){
    this.pantalla.value = eval(exp)
  }
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