const scene = new THREE.Scene();

var fac = new factory(0, 5, 50, 100); //factory arguments (position_X, position_Y, position_Y, Length)

var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

initialize();

animate();


//Code your logic here..
function initialize() {
  //CURRENT PATHS
  var path = new THREE.Path();
  var a = new THREE.Vector2(5,5);
  var b = new THREE.Vector2(20,20);

  Fractal.generateRandomFractal(a, b, 0.3 , path);
  
  // path.moveTo(this.CP.x, this.CP.y);
  var points = path.getPoints();
  var geometry = new THREE.BufferGeometry().setFromPoints(points);
  var material = new THREE.LineBasicMaterial({ color: 'red'});
  var line = new THREE.Line(geometry, material);
  scene.add(line);
}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}

