if(window.addEventListener) {
window.addEventListener('load', function () {

    var plans, inputRotate, inputScale, inputTranslateX, inputTranslateY, inputReset

    function initControl() {
      plans = document.getElementById("plans")
      inputRotate = document.getElementById("rotate")
      inputScale = document.getElementById("scale")
      inputTranslateX = document.getElementById("translateX")
      inputTranslateY = document.getElementById("translateY")
      inputReset = document.getElementById("reset")

      inputRotate.addEventListener("input", updatePlans)
      inputScale.addEventListener("input", updatePlans)
      inputTranslateX.addEventListener("input", updatePlans)
      inputTranslateY.addEventListener("input", updatePlans)
      inputReset.addEventListener("click", reset)
    }

    function updatePlans() {
      plans.style.transform =
        "rotate(" + inputRotate.value + "deg)" +
        "scale(" + inputScale.value + ")" +
        "translate(" + inputTranslateX.value + "%, "+ inputTranslateY.value + "%)";
    }

    function reset() {
      inputRotate.value = 0
      inputScale.value = 1
      inputTranslateX.value = 0
      inputTranslateY.value = 0
      updatePlans()
    }
  
  initControl()
}, false); }
