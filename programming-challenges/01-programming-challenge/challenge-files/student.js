// Write your code here
function myFirstFunction(bike) {
    forward(bike);
}
function twiceForward(bike) {
    forward(bike);
    forward(bike);
}
function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward5(bike) {
let i= 5
while (i>0) {
    forward(bike);
    i= i-1;
}}
function forward10(bike) {
let i= 10
while (i>0) {
    forward(bike);
    i= i-1;
}}
function right(bike) {
    turnRight(bike);
    forward(bike);
}
function ellShape(bike) {
    forward5(bike);
    right(bike);
    thriceForward(bike);
}
function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}
function crookedUTurn(bike) {
let i= 7
while (i>0) {
    forward(bike);
    i= i-1;
}
    right(bike);
let j= 8
while (j>0) {
    forward(bike);
    j= j-1;
}
    right(bike);
    twiceForward(bike);
}
function forwardUntilWall(bike) {
while (!sensor(bike)) {
    forward(bike);
}}
function smartEllShape(bike) {
     forwardUntilWall(bike);
     right(bike);
     forwardUntilWall(bike);
}
function spiral(car) {
let I=18
while (I>0) {
    forwardUntilWall(car);
    turnRight(car);
    I= I-1;
}}
function turnLeft(car) {
    turnRight(car);
    turnRight(car);
    turnRight(car);
}
function left(car) {
    turnLeft(car);
    forward(car);
}
function slalom(car) {
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);

    return result;
}
function firstRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }

    turnRight(car);
    forwardUntilWall(car);
}
function sensorLeft(car) {
    turnLeft(car);
    let result= sensor(car);
    turnRight(car); 
    return result;
}
function firstLeft(car) {
    while (sensorLeft(car)) {
         forward(car);
    }
    turnLeft(car);
    forwardUntilWall(car);
}
function zigZag(car) {
    firstRight(car);
    left(car);
    firstLeft(car);