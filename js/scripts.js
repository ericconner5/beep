$(document).ready(function(){
  $("#submit-button").click(function() {
    var userNumber = parseInt($("#user-number").val());
    var boopArray = convertToBoop(userNumber);
    showList(boopArray);
  });
});

function convertToBoop(userNumber) {
  var output = [];
  for (var i=0; i<=userNumber; i++) {
    var numberString = i.toString();

    if (i % 3 === 0 && i !== 0) {
      output.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (numberString.includes("1")) {
      output.push("Boop!");
    } else if (numberString.includes("0")) {
      output.push("Beep!");
    } else {
      output.push(numberString);
    }

  }
  return output;
}

//front end

function showList(array) {
  $('#list').html("");
  array.forEach(function(number,i){
    $('#list').append(number+" ");
  })
}
