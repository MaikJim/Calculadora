const input = document.getElementById('inputNum');
const sum = document.getElementById('sum');
const btnBorrar = document.getElementById('borrar');
const btnSum = document.getElementById('sum');
const btnIgual = document.getElementById('igual');
const btnMenos = document.getElementById('menos');
const btnMult = document.getElementById('mult');
const btnDiv = document.getElementById('div');
const btnPorc = document.getElementById('porc');
function valor(x) {
  return (input.value += x);
}

btnBorrar.addEventListener('click', function () {
  return (input.value = '');
});

btnSum.addEventListener('click',function(){
  return input.value += '+'
})
btnMenos.addEventListener('click', function(){
  return input.value += '-'
})
btnMult.addEventListener('click', function(){
  return  input.value += '*'
})
btnDiv.addEventListener('click', function(){
  return input.value += '/'
})
btnPorc.addEventListener('click',function(){
  return input.value += '%'
})


btnIgual.addEventListener('click', function(){
  let result = eval(input.value)
  return input.value = result
})