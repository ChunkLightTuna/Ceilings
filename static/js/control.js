if(window.addEventListener) {
  window.addEventListener('load', function () {

    var rotate, scale, plans, translateX, translateY

    function initControl() {
      rotate = document.getElementById('rotate')
      scale = document.getElementById('scale')
      plans = document.getElementById('plans')
      translateX = document.getElementById('translateX')
      translateY = document.getElementById('translateY')
    }

    function updatePlans() {
      plans.style.transform =
        'rotate(' + rotate.value + 'deg)' +
        'scale(' + scale.value + ')' +
        'translate(' + translateX.value + '%, '+ translateY.value + '%)'
    }

    function reset() {
      rotate.value = 0
      scale.value = 1
      translateX.value = 0
      translateY.value = 0
    }

  }
  initControl();

}, false); }
