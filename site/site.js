var AppClass = function() {
  var appstate = {
    target: 'confetti-holder',
    max: 100,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line', {type:'svg', src:'site/quanto.svg', weight: 0.2, size: 25}],
    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
    clock: 50,
    rotate: false,
    width: window.innerWidth,
    height: window.innerHeight,
    start_from_edge: false,
    respawn: true
  };

  var confetti = null;


  var render = function() {
    if(confetti)
      confetti.clear();
    confetti = new ConfettiGenerator(appstate);
    confetti.render();
  };

  var start = function() {
    render();
  };

  var clear = function() {
    confetti.clear();
  }

  return {
    start: start,
    clear: clear,
    render: render
  };
}

///

var app = null;

window.onload = function(){
  app = new AppClass();
  app.start();
}
