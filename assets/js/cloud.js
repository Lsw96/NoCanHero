var layers = [];
var objects = [];
var textures = [];

var world = document.getElementById('world');
var viewport = document.getElementById('viewport');

var d = 0;
var p = 400;
var worldXAngle = 0;
var worldYAngle = 0;
var computedWeights = [];

viewport.style.perspective = p;

textures = [
  { name: 'white cloud', file: 'https://www.clicktorelease.com/code/css3dclouds/cloud.png', opacity: 1, weight: 1 },
  { name: 'smoke cloud', file: 'https://www.clicktorelease.com/code/css3dclouds/smoke.png', opacity: 1, weight: 0 },
  { name: 'explosion', file: 'https://www.clicktorelease.com/code/css3dclouds/explosion.png', opacity: 1, weight: 0 },
  { name: 'explosion 2', file: 'https://www.clicktorelease.com/code/css3dclouds/explosion2.png', opacity: 1, weight: 0 }
];

function createCloud() {

  var div = document.createElement('div');
  div.className = 'cloudBase';
  var x = 256 - (Math.random() * 512);
  var y = 128 - (Math.random() * 512);
  var z = 128 - (Math.random() * 512);
  var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)';
  div.style.transform = t;
  world.appendChild(div);

  for (var i = 0; i < 5 + Math.round(Math.random() * 10); i++) {
    var cloud = document.createElement('img');
    cloud.style.opacity = 0;
    var r = Math.random();
    var src = '';
    for (var j = 0; j < computedWeights.length; j++) {
      if (r >= computedWeights[j].min && r <= computedWeights[j].max) {

        (function (img) {
          img.addEventListener('load', function () {
            img.style.opacity = 1;
          })
        })(cloud);
        src = computedWeights[j].src;
      }
    }

    cloud.setAttribute('src', src);
    cloud.className = 'cloudLayer';

    var y = 256 - (Math.random() * 512);
    var x = 512 - (Math.random() * 512);
    var z = 256 - (Math.random() * 512);
    var a = Math.random() * 360;
    var s = 1 + Math.random();
    x *= .1; y *= .1;
    cloud.data = {
      x: x,
      y: y,
      z: z,
      a: a,
      s: s,
      speed: .1 * Math.random()
    };
    var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';
    cloud.style.transform = t;
    div.appendChild(cloud);
    layers.push(cloud);
  }
  return div;
}

function generate() {
  objects = [];
  computedWeights = [];
  var total = 0;
  var accum = 0;

  if (world.hasChildNodes()) {
    while (world.childNodes.length >= 1) {
      world.removeChild(world.firstChild);
    }
  }

  for (var j = 0; j < textures.length; j++) {
    if (textures[j].weight > 0) {
      total += textures[j].weight;
    }
  }

  for (var j = 0; j < textures.length; j++) {
    if (textures[j].weight > 0) {
      var w = textures[j].weight / total;
      computedWeights.push({
        src: textures[j].file,
        min: accum,
        max: accum + w
      });
      accum += w;
    }
  }
  for (var j = 0; j < 5; j++) {
    objects.push(createCloud());
  }
}

function updateView() {
  var t = 'translateZ(' + d + 'px) rotateX(' + worldXAngle + 'deg) rotateY(' + worldYAngle + 'deg)';
  world.style.transform = t;
}

function onContainerMouseWheel(event) {
  // console.log(event)
  event = event ? event : window.event;
  d = d - (event.wheelDelta / 8);
  updateView();
}

function orientationhandler(e) {
  if (!e.gamma && !e.beta) {
    e.gamma = -(e.x * (180 / Math.PI));
    e.beta = -(e.y * (180 / Math.PI));
  }

  var x = e.gamma;
  var y = e.beta;

  worldXAngle = y;
  worldYAngle = x;
  updateView();
}

window.addEventListener('mousewheel', onContainerMouseWheel);

window.addEventListener('mousemove', function(e) {
  worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
  worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
  updateView();
});

window.addEventListener('touchmove', function(e) {
  var ptr = e.changedTouches.length;
  while( ptr-- ) {
    var touch = e.changedTouches[ ptr ];
    worldYAngle = -( .5 - ( touch.pageX / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( touch.pageY / window.innerHeight ) ) * 180;
    updateView();
  }
  e.preventDefault();
});

function update() {
  for (var i = 0; i < layers.length; i++) {
    var layer = layers[i];
    layer.data.a += layer.data.speed;
    var t = 'translateX(' + layer.data.x + 'px) \
        translateY(' + layer.data.y + 'px) \
        translateZ(' + layer.data.z + 'px) \
        rotateY(' + (- worldYAngle) + 'deg) \
        rotateX(' + (- worldXAngle) + 'deg) \
        rotateZ(' + layer.data.a + 'deg) \
        scale(' + layer.data.s + ')';
    layer.style.transform = t;
  }
  requestAnimationFrame(update);
}

//generate();
update();

window.addEventListener('click', function() {
  generate();
});