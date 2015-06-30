var triangle = function(sideOne, sideTwo, sideThree) {
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    return 'These sides do not make a triangle.';
  }
};

var isTriangle = function(sideOne, sideTwo, sideThree) {
  return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)
};

var triangleType = function(sideOne, sideTwo, sideThree) {
  if (sideOne === sideTwo && sideTwo === sideThree) {
    return 'equilateral';
  } else if (sideOne === sideTwo || sideOne === sideThree || sideThree === sideTwo) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

$(document).ready(function() {                        /*.ready prevents JS from executing until the page DOM is ready.*/
  $('form#triangle').submit(function(event) {         /*Goes to triangle form. Attaches a function to run when the submit event occurs. Passes in the parameter event.*/

    var sideOne = parseInt($('input#sideOne').val()); /*Creates variable sideOne. Calls value method to pull out the value of input id field sideOne. parseInt converts it to an integer.*/
    var sideTwo = parseInt($('input#sideTwo').val()); /*Creates variable sideTwo. Calls value method to pull out the value of input id field sideTwo. parseInt converts it to an integer.*/
    var sideThree = parseInt($('input#sideThree').val()); /*Creates variable sideThree. Calls value method to pull out the value of input id field sideThree. parseInt converts it to an integer.*/
    var result = triangle(sideOne, sideTwo, sideThree); /*Creates variable result and sets it equal to the triangle function when we pass in sideOne, sideTwo, sideThree.*/

    sideOne = parseInt($('input#sideOne').val(""));     /**/
    sideTwo = parseInt($('input#sideTwo').val(""));
    sideThree = parseInt($('input#sideThree').val(""));

    $('#result').append(result);
    event.preventDefault();                           /*Prevents the form from being submitted to server*/
  });
});
