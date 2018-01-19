//insert witty comment here. IDK I'm tired af. Just...convert the damn temperature. Celcius or whatever is lame.
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}