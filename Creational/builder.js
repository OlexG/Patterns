/* eslint-disable no-param-reassign */

function withWeight(obj) {
	obj.weight = 0;
}

function withShape(obj) {
	obj.width = 0;
	obj.length = 0;
	obj.area = function () {
		return obj.width * obj.weight;
	};
}

function withConsole(obj) {
	obj.message = '';
	obj.sendMessage = function () {
		console.log(obj.message);
	};
}

function builder(obj, ...args) {
	args.forEach((fn) => fn(obj));
}

const shapeWithWeight = {};
builder(shapeWithWeight, withShape, withWeight);
shapeWithWeight.width = 10;
shapeWithWeight.length = 20;
shapeWithWeight.weight = 10;

console.log(shapeWithWeight.weight, shapeWithWeight.area());

const loggerWithShape = {};
builder(loggerWithShape, withConsole, withShape);

loggerWithShape.message = 'hello';
loggerWithShape.sendMessage();
