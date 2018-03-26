const root = document.documentElement;
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
 
document.addEventListener('mousemove', evt => {
	let x = (evt.clientX / innerWidth) - 0.5;
	let y = (evt.clientY / innerHeight) - 0.5;

	root.style.setProperty('--mouse-x', x);
	root.style.setProperty('--mouse-y', y);

	var par = document.getElementById('layer1').parentNode;
	var l1transform = par.createSVGTransform();
	l1transform.setTranslate(-x * 100, -y * 100);
	document.getElementById('layer1').transform.baseVal.initialize(l1transform);
	var l2transform = par.createSVGTransform();
	l2transform.setTranslate(-x * 200, -y * 200);
	document.getElementById('layer2').transform.baseVal.initialize(l2transform);
	var l3transform = par.createSVGTransform();
	l3transform.setTranslate(-x * 400, -y * 400);
	document.getElementById('layer3').transform.baseVal.initialize(l3transform);
});
